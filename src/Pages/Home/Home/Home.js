import React from 'react';
import Products from '../../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;