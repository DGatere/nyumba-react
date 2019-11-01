import React from 'react';

import './ImageGrid.css';
import Image from './Image/Image';

let images = [
    { id: 1, classes: 'img' },
    { id: 2, classes: 'img__row' },
    { id: 3, classes: 'img__row' },
    { id: 4, classes: 'img__row' },
    { id: 5, classes: 'img__row' },
    { id: 6, classes: 'img__row' }
];

const ImageGrid = () => (
    <div className='img-container'>
        {images.map(({ id, src, classes }) => (
            <Image key={id} src={src} classes={classes} />
        ))}
    </div>
);

export default ImageGrid;
