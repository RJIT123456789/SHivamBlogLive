const BlogModel = require('../model/Blog')
const CategoryModel = require('../model/Category')
const nodemainle = require('nodemailer')
const randomstring = require('randomstring')

class FrontController {

  static blog = async (req, res) => {
    try {
      res.render("blog");
    } catch (error) {
      console.log(error);
    }
  };

  static about = async (req, res) => {
    try {
      res.render("about");
    } catch (error) {
      console.log(error);
    }
  };

  static admin_blog_list = async (req, res) => {
    try {
      res.render("admin_blog_list");
    } catch (error) {
      console.log(error);
    }
  };



  static blog_form = async (req, res) => {
    try {
      res.render("blog_form");
    } catch (error) {
      console.log(error);
    }
  };////

  static bliglist = async (req, res) => {
    try {
      res.render("bloglist");
    } catch (error) {
      console.log(error);
    }
  };

  static contact = async (req, res) => {
    try {
      // console.log(req.body);
      res.render("contact");
    } catch (error) {
      console.log(error);
    }
  };

  static dashboard = async (req, res) => {
    try {
      res.render("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  static detail = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      const category = await CategoryModel.find();
      const recentblog = await BlogModel.find()
      res.render('details', { d: data, c: category, r: recentblog })
    } catch (error) {
      console.log(error);
    }
  };

  static index = async (req, res) => {
    try {
      const data = await BlogModel.find()
      res.render("index", { d: data });
    } catch (error) {
      console.log(error);
    }
  };

  static login = async (req, res) => {
    try {
      res.render("login", { message: req.flash('success'), msg: req.flash('error') });
    } catch (error) {
      console.log(error);
    }
  };

  static blogs = async (req, res) => {
    try {
      res.render("blogs");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = FrontController;
