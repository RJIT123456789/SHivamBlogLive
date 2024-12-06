const express = require("express");
const FrontController = require("../controller/FrontController");
const AdminController = require("../controller/admin/AdminController");
const BlogController = require("../controller/admin/BlogController");
const CategoryController = require("../controller/admin/CategoryController");
const ContactController = require("../controller/admin/ContactController");
const router = express.Router();
const checkUserAuth = require('../middleware/auth')



router.get("/", FrontController.login);
router.get("/about", checkUserAuth, FrontController.about);
// router.get("/admin_blog_list", FrontController.admin_blog_list);
// router.get("/blog_form", FrontController.blog_form);
router.get("/bliglist",checkUserAuth, FrontController.bliglist);
router.get("/dashboard", checkUserAuth, FrontController.dashboard);
router.get("/detail/:id", checkUserAuth, FrontController.detail);
router.get("/index", checkUserAuth, FrontController.index);
router.get("/contact", checkUserAuth, FrontController.contact);
router.get("/blogs", FrontController.blogs);
router.get("/blog", FrontController.blog);


// ------------------(AdminController)----------------------

router.get("/admin/dashboard", checkUserAuth, AdminController.dashboard);
router.post("/dashboardinsert", checkUserAuth, AdminController.dashboardinsert);
router.get('/register', AdminController.register)
router.post('/register1', AdminController.register1)
router.post('/verifylogin', AdminController.verifylogin)
router.get('/logout', AdminController.logout)

// ------------------(BLogController)----------------------
router.get("/admin/blogdisplay", checkUserAuth, BlogController.display);
router.post("/bloginsert", checkUserAuth, BlogController.bloginsert);
// router.get('/admin/blogview/:id',BlogController.blogview)

// ------------------(admin/categorycontroller)----------------------
// router.get('/admin/categorydisplay',CategoryController.display)
router.get("/admin/categorydisplay", checkUserAuth, CategoryController.display);
router.get('/viewcategory/:id', checkUserAuth, CategoryController.categoryview);
router.get('/deletecategory/:id', checkUserAuth, CategoryController.deletecategory);
router.get('/editcategory/:id', checkUserAuth, CategoryController.editcategory);
router.post('/categoryupdate/:id', checkUserAuth, CategoryController.categoryupdate);






// router.get("/admin/contact",ContactController.contactinsert)

// admin/contactcontroller
router.post("/contactinsert",checkUserAuth, ContactController.contactinsert);
router.get("/contactdisplay",checkUserAuth, ContactController.contactdisplay);

//-----------------------view-------------------
router.get("/admin/blogview/:id", checkUserAuth, BlogController.blogview);
router.get("/admin/blogedit/:id", checkUserAuth, BlogController.blogedit);
router.post("/blogupdate/:id", checkUserAuth, BlogController.blogupdate);
router.get("/admin/blogdelete/:id", checkUserAuth, BlogController.blogdelete);
router.post("/Categoryinsert", checkUserAuth, CategoryController.Categoryinsert);
router.post("/viewcategory/:id", checkUserAuth, CategoryController.Categoryview);




// route.get("/verify",FrontController.verifyMail)

module.exports = router;



//  item.createdAt.toLocaleDateString()