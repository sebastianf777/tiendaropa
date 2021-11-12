import React from 'react';
// import {NavLink} from 'react-router-dom';
import "../scss/Home.scss";

import FadeIn from 'react-fade-in';

import Footer from './Footer';
import CategoriesHome from './CategoriesHome';


const Home = () => {


    return (
        <FadeIn>
        <section className='home_container' id='home'>

        <>
            <CategoriesHome />
        </>
            

        </section>
        

        <>
            <Footer />
        </>
        </FadeIn>
    )
}
export default Home