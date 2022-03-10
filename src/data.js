import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

/**this are icons for dashboard */
import { 
  FiHome,
  FiTrash2,
  FiEdit3,
  FiFileText
 } from "react-icons/fi";


/**Portfolio version 1- data js - Features: 
 *          --> Building social data 
 *          --> importing icons and installing
 *              'react-icons/fa' library
 *          -->Building 'links' data for dashboard
 *             page
 *              
 * Note: -pending professional profile links- 
 *       -fix url with right links-        
 */

export const links = [
  {
    id: 1,
    url: '/dashboard',
    text: 'Home',
    icon: <FiHome />,
  },
  {
    id: 2,
    url: '/create-profile',
    text: 'Create Profile',
    icon: <FiFileText />,
  },
  {
    id: 3,
    url: '/edit-profile',
    text: 'Edit Profile',
    icon: <FiEdit3 />,
  },
  {
    id: 4,
    url: '/delete-profile',
    text: 'Delete Profile',
    icon: <FiTrash2 />,
  },
]

export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />,
      },
      {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />,
      },
      {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaInstagram />,
      },
]