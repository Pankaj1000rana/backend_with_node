//  first method

const asyncHandler = (requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
}
}
export {asyncHandler};
// second method

// const asyncHandler = (fn)=> async(error,req,res,next)=>{
//     try {
//         await fn(error,req,res,next);
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }