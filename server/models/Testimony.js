const keystone = require("keystone");

const {Types} = keystone.Field;

const Testimony = new keystone.List("Testimonies");

Testimony.add({
    image: {type: Types.CloudinaryImages, initial: true, required: true },
    text: {type: Types.Text, initial: true, required: true},
    description: {type: Types.Text, initial: true, required: true}
});

Testimony.register();