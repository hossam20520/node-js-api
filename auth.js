const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.authenticate = (email , password) => {
    return new Promise( async (resolve , reject)=>{
try {
    // get use by wmail 
    const user = await User.findOne({email});

    // match the passwrod
    bcrypt.compare(password , user.password , (err , isMatch)=>{
        if(err) throw err;
        if(isMatch){
            resolve(user);

        }else{
            reject('Authentication faild')
        }
    })

} catch (err) {
    reject('authentiction Faild');
}
    });
}