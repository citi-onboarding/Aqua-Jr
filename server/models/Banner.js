const keystone = require('keystone');
const { Types } = keystone.Field;
const Banner = new keystone.List('Banners');

Banner.add({
    image:{ type: Types.CloudinaryImages ,initial: true, required: true },
    title:{ type: Types.Text, initial: true, required: true },
    text: { type: Types.Text, initial: true, required: true }
});

Banner.register();

