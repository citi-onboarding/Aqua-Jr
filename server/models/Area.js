const keystone = require('keystone');

const { Types } = keystone.Field;
// Primeiro iremos criar a lista no banco de dados.
const Area = new keystone.List('Areas', 
    {
        map : {name : 'Title'},
    }
    );

Area.add({
    Title: { type: Types.Text, required: true, initial: true, index : true},
    text: { type: Types.Text, required: true, initial: true},
})

Area.register();