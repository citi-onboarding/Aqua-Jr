const path = require('path');
const keystone = require('keystone');
const cors = require('cors');
const Banner = keystone.list('Banners');
const Example = keystone.list('Examples');
const PostToBlog = keystone.list('PostToBlogs');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/examples', (req, res) => {
    Example.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });
  
  app.get('/api/banners', (req, res) => {
    Banner.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });  
  });

  app.get('/api/posttoblog', (req, res) => {
    PostToBlog.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });
};

