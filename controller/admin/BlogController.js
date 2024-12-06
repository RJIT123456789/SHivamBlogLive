const BlogModel = require("../../model/Blog");
const { findById } = require("../../model/contact");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dywtkd0yd",
  api_key: "167237687329664",
  api_secret: "fL8UMO5HJjCKJfazC9RmT5u4FX4",
  secure: false,
});

class BlogController {
  static display = async (req, res) => {
    try {
      const data = await BlogModel.find();
      res.render("admin/Blog/display", { d: data });
    } catch (error) {
      console.log(error);
    }
  };

  static bloginsert = async (req, res) => {
    try {
      const imagefile = req.files.image;
      const myimage = await cloudinary.uploader.upload(imagefile.tempFilePath, {
        folder: "blogimage",
      });
      const result = new BlogModel({
        title: req.body.title, // insert by object
        description: req.body.description,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url,
        },
      });
      await result.save();
      res.redirect("/admin/blogdisplay");
    } catch (error) {
      console.log(error);
    }
  };

  // static blogview = async (req, res) => {
  //   // console.log(req.params.id)
  //   try {
  //     const result = await BlogModel.findById(req.params.id);
  //     // console.log(result)
  //     res.render("admin/Blog/blogview", { b: result });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  static blogview = async (req, res) => {
    try {
      const result = await BlogModel.findById(req.params.id);
      res.render("admin/Blog/blogview", { b: result });
    }
    catch (error) {
      console.log(error);
    }
  };

  static blogedit = async (req, res) => {
    try {
      const result = await BlogModel.findById(req.params.id);
      res.render("admin/Blog/edit", { blogedit: result });
    } catch (error) {
      console.log(error);
    }
  };

  static blogupdate = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      const image_id = data.image.public_id;
      await cloudinary.uploader.destroy(image_id);
      const imagefile = req.files.image;
      const myimage = await cloudinary.uploader.upload(imagefile.tempFilePath, {
        folder: "blogimage",
      });
      const result = await BlogModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url,
        },
      });
      await result.save();
      res.redirect("/admin/blogdisplay");
    } catch (error) {
      console.log(error);
    }
  };

  static blogdelete = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      const image_id = data.image.public_id;
      await cloudinary.uploader.destroy(image_id);
      const result = await BlogModel.findByIdAndDelete(req.params.id);
      res.redirect("/admin/blogdisplay");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = BlogController;
