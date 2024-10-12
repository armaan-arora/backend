class ApiError extends Error {

    constructor(
        statusCode,
        message="Some error occurred",
        errors =[],
        statck = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null// search by urself
        this.message = message
        this.success = false
        this.errors= errors
         
        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }

}

export {ApiError}