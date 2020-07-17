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
const request = require("request");

require('dotenv').config();


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

  app.post("/api/newsletter", (req,res)=>{
    const email = req.body.email;

    console.log(email);

    const mcData ={
      members: [
        {
          email_address: email,
          status: "subscribed"
        }
      ]
    }

    const mcDataPost = JSON.stringify(mcData);

    const options = {
      url: "https://us10.api.mailchimp.com/3.0/lists/ee6a0df7de",
      method: "POST",
      headers:{
        Authorization: process.env.AUTHORIZATION
      },
      body: mcDataPost
    }

    request(options, (err, response, body)=>{
      if(!err){
        res.sendStatus(200);
      }else{
        res.sendStatus(500);
      }
    });

  })

};

