import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Landing from './Landing/Landing';
import Property from './Property/Property';

const App = () => (
    <Layout>
        <Router>
            <Route path='/' exact component={Landing} />
            <Route path='/property' exact component={Property} />
        </Router>
    </Layout>
);

export default App;
