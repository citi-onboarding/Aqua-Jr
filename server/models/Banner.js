const keystone = require('keystone');
const { Types } = keystone.Field;

const Banner = new keystone.List('Banners',{
    map: { name: 'title' },
    nocreate: true,
    nodelete: true
});   

Banner.add({
    title:{ type: Types.Text, initial: true, required: true },
    text: { type: Types.Text, initial: true, required: true },
    image:{ type: Types.CloudinaryImage ,initial: true, required: true }
});

Banner.register();



