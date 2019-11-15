import React from 'react';
import uuid from 'uuid/v4';

import FeatureList from './FeatureList/FeatureListItems';

const keyFeatures = {
    items1: ['Air Conditioning', 'Balcony', 'Pool', 'Room Service', 'Gym'],
    items2: ['Telephone', 'Jacuzzi', 'Alarm', 'Garage', 'Security'],
    items3: ['Wi-Fi', 'Parking', 'Double Bed', 'Home Theater', 'Electric']
};

const Features = () =>
    Object.keys(keyFeatures).map(items => <FeatureList key={uuid()} items={keyFeatures[items]} />);

export default Features;
