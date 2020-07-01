const keystone = require('keystone');

const { Types } = keystone.Field;

const Area = new keystone.List('Areas');

Area.add({
    Title: { type: Types.Text, required: true, initial: true, index : true},
    text: { type: Types.Text, required: true, initial: true},
})

Area.register();