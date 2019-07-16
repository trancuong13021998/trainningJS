import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import NotFound from './NotFound.js';

const routes =[
    {
    	path :'/',
    	exact : true,
    	main : () =><Home />
    },
  
     {
        path :'/Contact',
        exact : false,
        main : () =><Contact />
    },
       {
        path :'/About',
        exact : false,
        main : () =><About />
    },
     {
        path :'',
        exact : false,
        main : () =><NotFound />
    },

];

export default routes;
