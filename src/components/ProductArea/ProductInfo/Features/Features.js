import React from 'react';

import FeatureList from './FeatureList/FeatureListItems';

const keyFeatures = {
    items1: ['Air Conditioning', 'Balcony', 'Pool', 'Room Service', 'Gym'],
    items2: ['Telephone', 'Jacuzzi', 'Alarm', 'Garage', 'Security'],
    items3: ['Wi-Fi', 'Parking', 'Double Bed', 'Home Theater', 'Electric']
};

const Features = () =>
    Object.keys(keyFeatures).map(items => (
        <FeatureList key={Math.random()} items={keyFeatures[items]} />
    ));

export default Features;
