// const ContactModel = require("../../model/contact");

const ContactModel = require("../../model/contact");

class ContactController {
    static contactinsert = async (req, res) => {
        try {

            const contact = new ContactModel({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message,
            })
            await contact.save()
            res.redirect('/contact')
        } catch (error) {
            console.log(error);
        }
    };


    static contactdisplay = async(req,res) => {
        try{
            const data = await ContactModel.find();
        res.render('aboutadmin',{d:data})
        // console.log("Hello")
        }
        catch(error)
        {
            console.log(error);
        }
    }




}

module.exports = ContactController;
