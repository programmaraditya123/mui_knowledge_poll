const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    console.log("passwrd to be hashed",password)
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        return hashedPassword
        
    } catch (error) {
        console.log("while hashing passowrd",error)
        
    }

}

const comparePassword = async (password,hashedPassword) =>{
    return bcrypt.compare(password,hashedPassword)
}

module.exports = {hashPassword,comparePassword}