const keystone = require("keystone");

const {Types} = keystone.Field;

const About = new keystone.List("AboutUs",{
    map: { name: 'text'},
    singular: "About",
    plural: "About Us"
});

About.add({
    image: {type: Types.CloudinaryImage, initial: true, required: true},
    text: {type: Types.Text, initial: true, required: true, index: true}
});

About.register();