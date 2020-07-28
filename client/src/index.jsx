import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  Navbar,
  CallToBlog,
  ExpertiseArea, 
  Footer,
  PostToBlog,
  Newsletter,
  Testimony,
  AboutUs,
  Contact,
  Banner,
} from './components';

function App() {
  return (
    <section className="app">
      <meta name="Description" content="One page Aqua Jr."/>
      <Navbar />
      <Banner />
      <div className="PostToBlog">
      <PostToBlog />
      </div>
      <ExpertiseArea />
      <Newsletter />
      <AboutUs />
      <Testimony />
      <CallToBlog />
      <Contact />
      <Footer/>
    </section>
  );
}
 
ReactDOM.render(<App />, document.getElementById('root'))
