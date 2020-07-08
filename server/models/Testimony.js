const keystone = require("keystone");

const {Types} = keystone.Field;

const Testimony = new keystone.List("Testimonies",{
    map: { name: 'name'}
});

Testimony.add({
    image: {type: Types.CloudinaryImage, initial: true, required: true },
    text: {type: Types.Text, initial: true, required: true},
    name: {type: Types.Text, initial: true, required: true, index: true},
    occupation: {type: Types.Text, initial: true, required: true}
});

Testimony.register();