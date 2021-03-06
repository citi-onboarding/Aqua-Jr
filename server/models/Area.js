const keystone = require('keystone');

const { Types } = keystone.Field;
// Alocando uma nova tabela no banco de dados.
const Area = new keystone.List('Areas', 
    {
        autokey: { path: 'slug', from: 'Title', unique: true },
        map : {name : 'Title'}, // mapeando para remover o 'id', tornando algo mais fluído para a admin UI
    }
    );

// Adicionando campos a esta tabela.
Area.add({
    Title: { type: Types.Text, required: true, initial: true, index : true},
    Text: { type: Types.Text, required: true, initial: true},
    Category: {type: Types.Text, required: true, initial: true},
    image:{ type: Types.CloudinaryImage ,initial: true, required: true }
})

Area.register();