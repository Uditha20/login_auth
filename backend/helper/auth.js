import bcrypt from 'bcryptjs'

const hashPassword=(password)=>{
    
}


const comparePassword=(password,hashed)=>{
    return bcrypt.compare(password,hashed)
}

export {comparePassword}