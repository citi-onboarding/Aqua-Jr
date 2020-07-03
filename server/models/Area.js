const keystone = require('keystone');

const { Types } = keystone.Field;
// Alocando uma nova tabela no banco de dados.
const Area = new keystone.List('Areas', 
    {
        map : {name : 'Title'}, // mapeando para remover o 'id', tornando algo mais fluído para a admin UI
    }
    );

// Adicionando campos a esta tabela.
Area.add({
    Title: { type: Types.Text, required: true, initial: true, index : true},
    text: { type: Types.Text, required: true, initial: true},
})

Area.register();