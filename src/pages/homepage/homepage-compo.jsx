import React from 'react';
import Directory from '../../Components/directory/directory-compo';
import './homepage.styles.scss';
import {HomePageContainer} from './homepage-style'
const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;