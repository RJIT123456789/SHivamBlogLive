const jwt = require('jsonwebtoken')
const AdminModel = require('../model/admin')

const checkUserAuth = async(req,res,next) => {
    // console.log('Hello auth');
    // get token
    const{token} = req.cookies
    // console.log(token)
    try{

    
    if(!token){
        req.flash('error', 'Unautharised user please login')
        res.redirect('/')
    }else{
        const verifylogin = jwt.verify(token,'pninfosys123456');
        const useData = await AdminModel.findOne({_id:verifylogin.ID});
        req.data= useData;
        // console.log(data);
        // console.log(verifylogin)

        next(); // next method route pr paucha dega
    }
}catch(error){
    req.flash(error)
}
}

module.exports = checkUserAuth