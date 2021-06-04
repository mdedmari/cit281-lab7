// Initialize customError obj
class CustomError extends Error {
    constructor (args){
        super(args);
        this.message = 'Custom error';
    }

    throwGenericError(){
        throw new Error ("Generic error");
    }

    throwCustomError(){
        throw new CustomError().message;
    }
}
const myError = newCustomError();

console.log("Force generic error")
try{
    console.log("Generic error try block")
    myError.throwGenericError();
} catch {
    console.log("Geneic error catch block");
    console.log(myError.throwGenericError());
} finally {
    console.log("Generic error finally blocked")
}

console.log("Force custom error");
try{
    console.log("Custom error try block");
} catch {
    console.log("Custom error catch block");
    console.log(myError.throwCustomError());
} finally {
    console.log("Custom error finally block");
}