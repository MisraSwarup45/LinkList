import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton';

const LinkList = () => {
  const links = [
    'https://misraswarup45.netlify.app/',
    'https://drive.google.com/drive/folders/1zmfG3Qfkki-K31HZ19L9qcffvyyx4YsK?usp=share_link',
    'https://github.com/MisraSwarup45',
    'https://www.linkedin.com/in/misraswarup45/',
    'https://leetcode.com/MisraSwarup45/',
    'https://www.instagram.com/misraswarup45/',
    'https://twitter.com/MisraSwarup45',
    'https://www.facebook.com/misraswarup45/',
  ];

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image
          alt="logo"
          width="100"
          height="100"
          borderRadius= '50%!important'
          src={process.env.PUBLIC_URL + 'PHOTO.JPG'}
          className="imageStyle"
          rounded
        />
        <h5 className="mb-4 text-white">@MisraSwarup45</h5>
        {links.map((link) => (
          <LinkButton key={link} link={link} />
        ))}
      </div>
    </ListGroup>
  );
};

export default LinkList;