const keystone = require("keystone");

const {Types} = keystone.Field;

const Testimony = new keystone.List("Testimonies",{
    map: { name: 'description'}
});

Testimony.add({
    image: {type: Types.CloudinaryImage, initial: true, required: true },
    text: {type: Types.Text, initial: true, required: true},
    description: {type: Types.Text, initial: true, required: true, index: true}
});

Testimony.register();