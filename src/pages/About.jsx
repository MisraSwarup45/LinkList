import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, Image } from 'react-bootstrap';
import '../components/WidthLimit.scss';

const About = () => {
  const profile = (
    <Image
      alt="logo"
      width="100"
      height="100"
      src={process.env.PUBLIC_URL + 'PHOTO.png'}
      className="mb-4"
      rounded
    />
  );

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
        {profile}
        <h4 className="text-white mb-4">
          <strong>About Me</strong>
        </h4>
        <h5 className="text-white mb-5 max-button">
          I Am A Backend Developer
          Good At Problem Solving And Passionate To Learn New Things
        </h5>
        <Button
          variant="outline-light"
          href={'https://drive.google.com/drive/u/0/folders/1zmfG3Qfkki-K31HZ19L9qcffvyyx4YsK'}
          size="lg"
          download
        >
          My Resume
        </Button>
      </div>
    </ListGroup>
  );
};

export default About;