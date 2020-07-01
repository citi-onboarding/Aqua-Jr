const keystone = require("keystone");

const {Types} = keystone.Field;

const About = new keystone.List("AboutUs");

About.add({
    image: {type: Types.CloudinaryImages, initial: true, required: true },
    text: {type: Types.Text, initial: true, required: true}
});

About.register();