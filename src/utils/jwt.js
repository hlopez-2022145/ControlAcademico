'use strict'

import jwt  from 'jsonwebtoken'

const secretkey = '@LlaveSuperSecretaDeControl@'

export const generateJwt = async(payload)=>{
    try{
        return jwt.sign (payload, secretkey,{
            expiresIn: '3h',
            algorithm: 'HS256'
        })
       
    }catch(err){
        console.error(err)
        return err
    }
}
