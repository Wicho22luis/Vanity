import React from 'react';

import Slider from './MainSlider';
import InfoCard from './InfoCard';
import Row from 'react-bootstrap/Row';
import TabLayout from './Tabs';
import ProductCards from './ProductCard'
import InfoBanner from './InfoBanner'
import Header from './Header';

function HomeLayout() {
    return (
        <>
        <Header></Header>
            <Slider></Slider>
            <Row className='notificationBar'>
                <p className='notificationText'>DISTRIBUCIÓN LOCAL DE JOYERÍA DE PLATA Y ORO POR ENCARGO</p>
            </Row>
            <InfoCard></InfoCard>
            <h2 className='text-center textPetrona'>Productos Recientes</h2>
            <TabLayout></TabLayout>
            <ProductCards></ProductCards>
            <InfoBanner></InfoBanner>
            <h2 className='text-center textPetrona'>Lo más comprado</h2>
            <ProductCards></ProductCards>
        </>

    );
}

export default HomeLayout;