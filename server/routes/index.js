const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Area = keystone.list('Areas')
const Footer = keystone.list('Footers')

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/areas', (req, res) => {
    Area.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });
  app.get('/api/footers', (req, res) => {
    Footer.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });
};