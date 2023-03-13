#include "NativeNodeUtils.h"

#ifndef __FF_CATCHCVEXCEPTIONWORKER_H__
#define __FF_CATCHCVEXCEPTIONWORKER_H__

namespace FF {

	/**
	 * @brief Base class implementing default ISyncWorker and IAsyncWorker
	 * 
	 */
	class SimpleWorkerBase : public ISyncWorker, public IAsyncWorker {
	public:
		virtual bool unwrapRequiredArgs(Nan::NAN_METHOD_ARGS_TYPE info) = 0;
		virtual bool unwrapOptionalArgs(Nan::NAN_METHOD_ARGS_TYPE info) = 0;
		virtual bool unwrapOptionalArgsFromOpts(Nan::NAN_METHOD_ARGS_TYPE info) = 0;
		virtual bool hasOptArgsObject(Nan::NAN_METHOD_ARGS_TYPE info) = 0;

		/**
		 * @brief Return empty string by default at execution time fullfill the IWorker interface
		 * 
		 * @return std::string 
		 */
		std::string execute() {
			return "";
		}

		/**
		 * @brief Return undefined by default for SyncWorker
		 * 
		 * @return v8::Local<v8::Value> 
		 */
		v8::Local<v8::Value> getReturnValue() {
			return Nan::Undefined();
		}

		/**
		 * @brief Return same result as SyncWorker by default for AsyncWorker
		 * 
		 * @param info 
		 * @return v8::Local<v8::Value> 
		 */
		v8::Local<v8::Value> getReturnValue(Nan::NAN_METHOD_ARGS_TYPE info) {
			return getReturnValue();
		}

		/**
		 * @brief unwrap all required and optional arguments
		 * 
		 * @param info 
		 * @return true 
		 * @return false 
		 */
		bool applyUnwrappers(Nan::NAN_METHOD_ARGS_TYPE info) {
			return unwrapRequiredArgs(info)
				|| (!hasOptArgsObject(info) && unwrapOptionalArgs(info))
				|| (hasOptArgsObject(info) && unwrapOptionalArgsFromOpts(info));
		}
	};

	/**
	 * @brief basic non abstract class implementing default ISyncWorker and IAsyncWorker
	 * 
	 */
	class SimpleWorker : public SimpleWorkerBase {
		bool unwrapOptionalArgs(Nan::NAN_METHOD_ARGS_TYPE info) {
			return false;
		}

		bool hasOptArgsObject(Nan::NAN_METHOD_ARGS_TYPE info) {
			return false;
		}

		bool unwrapOptionalArgsFromOpts(Nan::NAN_METHOD_ARGS_TYPE info) {
			return false;
		}

		bool unwrapRequiredArgs(Nan::NAN_METHOD_ARGS_TYPE info) {
			return false;
		}
	};

}

/**
 * @brief Same as SimpleWorker but catch cv::Exception and return error message
 * add virtual executeCatchCvExceptionWorker() method to implement
 */
struct CatchCvExceptionWorker : public FF::SimpleWorker {
public:
    /**
     * @brief avoid re-declaration of the execute() method, the executeCatchCvExceptionWorker() method must be implemented instead
     * 
     * @return std::string 
     */
	std::string execute() final {
		try {
			return executeCatchCvExceptionWorker();
		} catch (std::exception &e) {
			return std::string(e.what());
		}
	}
	/**
	 * @brief implement this method instead of execute() to catch cv::Exception
	 * 
	 * @return std::string
	 */
	virtual std::string executeCatchCvExceptionWorker() = 0;
};

#endif