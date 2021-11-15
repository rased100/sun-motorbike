import React from 'react';
import Footer from '../../Footer/Footer';
import ReviewUi from '../../Review/ReviewUi/ReviewUi';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import OurShowroom from '../OurShowroom/OurShowroom';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <OurShowroom></OurShowroom>
            <ReviewUi></ReviewUi>
            <Footer></Footer>
        </div>
    );
};

export default Home;