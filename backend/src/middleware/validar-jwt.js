import jwt from "jsonwebtoken";
const secret="jgfuyehvj&hhhgf@456etGre";
export const validarJwt=(req,res,next)=>{
    let token=req.headers["x-access-token"] || req.headers["authorization"];
    if(!token){
    }
    if(token.starstsWith("Bearer ")){
        token=token.slice(7,token.length);
    }try{
        const{uid,email}=jwt.verify(token,secret);
        req.user={auth:true};
        return next();

    }catch(error){
        req.user={auth:false};
        return next();
    }
}