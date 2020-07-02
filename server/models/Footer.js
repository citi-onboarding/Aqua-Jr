const keystone = require('keystone');

const { Types } = keystone.Field;

const Footer = new keystone.List('Footers',
    {
        map: { name: 'Title'},
        nocreate: true,
        nodelete: true,
    });

Footer.add({
    Title: { type: Types.Text, required: true, initial: true},
    Address: { type: Types.Text, required: true, initial: true},
    Phone: { type: Types.Number, required: true, initial: true},
    SocialMedia1: { type: Types.Url, required: true, initial: true},
    SocialMedia2: { type: Types.Url, required: true, initial: true},
    SocialMedia3: { type: Types.Url, required: true, initial: true},
})

Footer.register();