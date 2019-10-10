import React from 'react';
import MainSlider from './MainSlider';
import About from './About';
import ProductSlider from './ProductSlider';
import listItems from './listItems';

const Home = () => {
    return(
        <React.Fragment>
            <MainSlider slide={listItems[0]}/>
            <ProductSlider />
            <About />
        </React.Fragment>
        
    );
}

export default Home;