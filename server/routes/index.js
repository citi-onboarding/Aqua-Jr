const path = require('path');
const keystone = require('keystone');
const cors = require('cors');


const Area = keystone.list('Areas')
const Footer = keystone.list('Footers')
const Example = keystone.list('Examples');
const About = keystone.list("AboutUs");
const Testimony = keystone.list("Testimonies");


module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Criando a rota para a tabela 'Areas'.
  app.get('/api/areas', (req, res) => {
    Area.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });
  // Criando a rota para a tabela 'Footers'.
  app.get('/api/footers', (req, res) => {
    Footer.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.get('/api/aboutus', (req, res) => {
    About.model.find((err, itens) => {
      if(err){
        return res.apiError('database error', err);
      }else{
        res.send(itens);
      }
    });
  });

  app.get('/api/testimony', (req, res) => {
    Testimony.model.find((err, itens) => {
      if(err){
        return res.apiError('database error', err);
      }else{
        res.send(itens);
      }
    });
  });

};