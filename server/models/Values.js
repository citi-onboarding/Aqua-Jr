const keystone = require("keystone");

const {Types} = keystone.Field;

const Value = new keystone.List("Values",{
    map: { name: 'title'}
});

Value.add({
    image: {type: Types.CloudinaryImage, initial: true, required: true },
    title: {type: Types.Text, initial: true, required: true, index: true}
});

Value.register();