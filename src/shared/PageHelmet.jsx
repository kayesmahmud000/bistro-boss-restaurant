import React from 'react';
import { Helmet } from 'react-helmet';

const PageHelmet = ({title}) => {
    return (
        <div>
            <Helmet>
                
                <title>{title} | Bistro Boss</title>
               
            </Helmet> 
        </div>
    );
};

export default PageHelmet;