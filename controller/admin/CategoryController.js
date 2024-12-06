const CategoryModel = require("../../model/Category");

class CategoryController {
  static display = async (req, res) => {
    try {
      const data = await CategoryModel.find();
      res.render("admin/category/display", { cd: data });
    } catch (error) {
      console.log(error);
    }
  };

  static Categoryinsert = async (req, res) => {
    try {
      const data = await CategoryModel.create(req.body);
      res.redirect("/admin/categorydisplay");
    } catch (error) {
      console.log(error);
    }
  };

  static categoryview = async (req, res) => {
    try {
      const result = await CategoryModel.findById(req.params.id);
      res.render('admin/category/viewcategory', { view: result });
    } catch (error) {
      console.log(error);
    }
  };
  
  static Categoryview = async (req, res) => {
    try {
      res.render('/admin/category/viewcategory')
    } catch (error) {
      console.log(error);
    }
  };

  static deletecategory = async (req, res) => {
    try {
      const data = await CategoryModel.findById(req.params.id);
      const result = await CategoryModel.findByIdAndDelete(req.params.id);
      res.redirect("/admin/categorydisplay");
    } catch (error) {
      console.log(error);
    }
  };

  static editcategory = async (req, res) => {
    try {
      const result = await CategoryModel.findByIdAndUpdate(req.params.id)
      res.render("admin/category/editcategory", { edit: result });
    } catch (error) {
      console.log(error);
    }
  };

  static categoryupdate = async (req, res) => {
    try {
      const update = await CategoryModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title
      })
      await update.save()
      res.redirect('/admin/categorydisplay')
    } catch (error) {
      console.log(error);
    }
  };



}
module.exports = CategoryController;
