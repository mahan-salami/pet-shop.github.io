import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Load from './componnents/Load'
import Offer from './componnents/Offer'
import Categories2 from './componnents/Categories2'
import Main from './componnents/Main'
import Categories from './componnents/Categories'
import Product from './componnents/Product'
import Comment from "./componnents/Comment";
import Banner from "./componnents/pages/Banner";
import Footer from './componnents/Footer'
import Layout from './componnents/Layout'
import Bird from "./componnents/pages/Bird";
import Cat from "./componnents/pages/Cat";
import Fish from "./componnents/pages/Fish";
import Dog from "./componnents/pages/Dog";
import Rabbit from './componnents/pages/Rabbit'

// 📌 اینو اضافه کن
import Dampezeshki from "./componnents/pages/Dampezeshki";
import Blogs from './componnents/pages/Blogs';
import About from "./componnents/pages/About";
import Cage from "./componnents/pages/Cage";
import Home from "./componnents/pages/Home";


// صفحات تستی
const Cat1 = () => <Cat/>
const Fish1 = () => <Fish/>
const Bird1 = () => <Bird/>
const Rabbit1 = () => <Rabbit/>
const Dog1 = () => <Dog/>

function App() {
  return (
    <Router>
      <Routes>
        {/* صفحه اصلی */}
        <Route 
          path="/" 
          element={
            <Load>
              <Offer />
              <Main />
              <Categories />
              <Categories2 />
              <Product/>
              <Comment/>
              <Banner/>
              <Footer/>
            </Load>
          } 
        />

        {/* صفحات تست با Layout */}
        <Route path="/cat" element={<Layout><Cat/></Layout>} />
        <Route path="/fish" element={<Layout><Fish/></Layout>} />
        <Route path="/bird" element={<Layout><Bird/></Layout>} />
        <Route path="/rabbit" element={<Layout><Rabbit/></Layout>} />
        <Route path="/dog" element={<Layout><Dog/></Layout>} />

        {/* 📌 صفحه دامپزشکی */}
        <Route path="/dampezeshki" element={<Layout><Dampezeshki/></Layout>} />
        <Route path="/Blogs" element={<Layout><Blogs/></Layout>} />
         <Route path="/About" element={<Layout><About/></Layout>} />
        <Route path="/Cage" element={<Layout><Cage/></Layout>} />
        <Route path="/" element={<Layout><Home/></Layout>} />

      </Routes>
    </Router>
  )
}

export default App;
