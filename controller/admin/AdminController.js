const dashboardModel = require("../../model/Dashboard");
const AdminModel = require("../../model/admin")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AdminController {


  static dashboard = async (req, res) => {
    try {
      const data = await dashboardModel.find();
      res.render("admin/dashboard", { ad: data });
    } catch (error) {
      console.log(error);
    }
  };

  static dashboardinsert = async (req, res) => {
    try {
      const result = await dashboardModel.create(req.body);
      res.redirect("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };


  static register = (req, res) => {
    try {
      res.render('admin/register', { msg: req.flash('error') })
    } catch (error) {
      console.log(error)
    }
  };



  static register1 = async (req, res) => {
    try {
      const { name, email, password, cpassword } = req.body;
      const user = await AdminModel.findOne({ email: email })
      if (user) {
        req.flash('error', 'email already exist');
        res.redirect('/register');
      } else {
        if (name && email && password && cpassword) {
          if (password == cpassword) {
            const hashpassword = await bcrypt.hash(password, 10)
            const result = new AdminModel({
              name: name,
              email: email,
              password: hashpassword,
            })
            await result.save()
            req.flash('success', 'Register successfully you make a account an email ')
            res.redirect('/')
          } else {
            req.flash('error', 'password and confirm password does not match');
            res.redirect('/register')
          }
        } else {
          req.flash('error', 'all field are required');
          res.redirect('/register')
        }
      }
    } catch (error) {
      console.log(error)
    }
  };



  static verifylogin = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await AdminModel.findOne({ email: email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch){
          // multiple login
          if(user.role == 'user'){
             // generate token
          const token = jwt.sign({ ID : user._id }, 'pninfosys123456')
          // console.log(token);
          res.cookie('token',token)
          res.redirect('/index')
        }
        if(user.role == 'admin'){
           // generate token
           const token = jwt.sign({ ID : user._id }, 'pninfosys123456')
           // console.log(token);
           res.cookie('token',token)
           res.redirect('/admin/dashboard')
        }
          }
        else{
          req.flash('error', 'Email or password does not match');
          res.redirect('/')
        }
      } else {
        req.flash('error', "you are not a Register user firstly you do legal register this is free")
        res.redirect('/')
      }
    } catch (error) {
      console.log(error)
    }
  };

  static logout = async(req,res) => {
    try{
     res.clearCookie("token")
      res.redirect('/');
    }catch(error){
      console.log(error)
    }
  }

}

module.exports = AdminController;
