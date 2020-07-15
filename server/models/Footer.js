const keystone = require('keystone');

const { Types } = keystone.Field;

// Alocando uma nova tabela no banco de dados.
const Footer = new keystone.List('Footers',
    {
        map: { name: 'Title'}, // Mapeando para remover o 'id', tornando algo mais fluído para a admin UI.
        nocreate: true, // Impedindo que se crie mais tabelas(já tem uma pronta, ou seja, somente ela irá existir e poderá ser editada).
        nodelete: true, // Impedindo que se delete a já existente.
    });

    // Adicionando os campos da tabela
Footer.add({
    Title: { type: Types.Text, required: true, initial: true},
    Address: { type: Types.Text, required: true, initial: true},
    Phone: { type: Types.Number, required: true, initial: true},
    Email: {type: Types.Email, required: true, initial: true},
    Facebook: { type: Types.Url, required: true, initial: true},
    Instagram: { type: Types.Url, required: true, initial: true},
    LinkedIn: { type: Types.Url, required: true, initial: true},
})

Footer.register();