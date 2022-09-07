import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  // {
  //   id: 5,
  //   url: '/profile',
  //   text: 'profile',
  // },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  // {
  //   id: 4,
  //   url: 'https://www.behance.net',
  //   icon: <FaBehance />,
  // },
];

export const projectLinks = [
  {
    id: 1,
    title: 'jobify-MERN',
    sourceUrl: 'https://github.com/nryder7/jobify-mern',
    deployedUrl: 'https://jobify-mern111.herokuapp.com',
    description:
      'Full stack application. Built with MongoDB,Express, React, and Node',
  },
  {
    id: 2,
    title: 'ecommerce-react',
    sourceUrl: 'https://github.com/nryder7/ecommerce-react',
    deployedUrl: 'https://ecommerce-react-111.netlify.app',
    description: 'React',
  },
  {
    id: 3,
    title: 'ecommerce-API',
    sourceUrl: 'https://github.com/nryder7/ecommerce-api',
    deployedUrl: 'https://ecommerce111-1.herokuapp.com',
    description: 'Express',
  },
  {
    id: 4,
    title: 'trivia-react',
    sourceUrl: 'https://github.com/nryder7/trivia-react',
    deployedUrl: 'https://trivia-react-111.netlify.app',
    description: 'Express',
  },
  // {
  //   id: 4,
  //   title: 'jobs-api',
  //   sourceUrl: 'https://github.com/nryder7/ecommerce-react',
  //   deployedUrl: 'https://jobs-api-111.herokuapp.com/api-docs',
  // },
];
