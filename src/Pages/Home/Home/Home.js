import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import ProjectForm from '../ProjectForm/ProjectForm';
import ScreenProfissional from '../ScreenProfissional/ScreenProfissional';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <ScreenProfissional></ScreenProfissional>
            <Testimonials></Testimonials>
            <ProjectForm></ProjectForm>
        </div>
    );
};

export default Home;