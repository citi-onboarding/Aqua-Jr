const path = require('path');
const keystone = require('keystone');
const cors = require('cors');
const Banner = keystone.list('Banners');
const PostToBlog = keystone.list('PostToBlogs');
const Area = keystone.list('Areas');
const Footer = keystone.list('Footers');
const About = keystone.list("AboutUs");
const Testimony = keystone.list("Testimonies");
const Value = keystone.list("Values");
const nodemailer = require('nodemailer');



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

  app.get('/api/values', (req, res) => {
    Value.model.find((err, itens) => {
      if(err){
        return res.apiError('database error', err);
      }else{
        res.send(itens);
      }
    });
  });

  app.post('/api/sendmail', (req, res) => {
    const{
      name,
      email,
      about,
      menssage,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: process.env.TRANSPORTER_EMAIL,
        pass: process.env.TRANSPORTER_PASSWORD,
      },
      tls: { rejectUnauthorized: false},
    });
    
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'aquajr.onepage@gmail.com',
      about,
      text: `${name} <${email}> \n\n${menssage}`,
    };
    
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send('Email enviado :)');
      }
    });
  });
};

