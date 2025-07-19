const errorMiddleWare=(err,req,res,next)=>{
try{
    let error={...err}

    error.message=err.message

    console.error(err)

    if(err.name=='CasrError')
    {
        const message="Resource not found"
        error=new error(message)
        error.statusCode=404
    }
    if(err.code==11000){
        const message="duplicate value entered"
        error=new error(message)
        error.statusCode=400
    }

   

    res.status(error.status||500).json()

}catch(error){
    console.log(error.message)
    next(error)
}
}

export default errorMiddleWare