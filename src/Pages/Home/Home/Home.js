import React from 'react';
import Products from '../../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Products></Products>
        </div>
    );
};

export default Home;