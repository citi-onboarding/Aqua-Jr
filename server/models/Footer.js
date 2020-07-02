const keystone = require('keystone');

const { Types } = keystone.Field;

const Footer = new keystone.List('Footers');

Footer.add({
    Address: { type: Types.Text, required: true, initial: true, index : true},
    Phone: { type: Types.Number, required: true, initial: true},
    SocialMedia1: { type: Types.Url, required: true, initial: true},
    SocialMedia2: { type: Types.Url, required: true, initial: true},
    SocialMedia3: { type: Types.Url, required: true, initial: true},
})

Footer.register();