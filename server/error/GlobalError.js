class GlobalError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        this.optional=true;
    }
}
module.exports=GlobalError;