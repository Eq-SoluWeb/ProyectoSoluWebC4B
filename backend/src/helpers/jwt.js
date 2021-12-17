import  jwt from  "jsonwebtoken";
const secret="jgfuyehvj&hhhgf@456etGre"
export const generarJwt=(uid,email)=>{
    
    return new Promise((resolve,reject) =>{
        const payload={uid,email}
        jwt.sign(payload,secret,{expiresIn:"2h"},
            (err,token)=>{
                if(err){
                    console.log(err)
                    reject("No se pudo Generar el Token")
                }
                resolve(token)
            }
            )
    })

}