import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';

import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import githubIcon from '@iconify/icons-simple-icons/github';
import facebookIcon from '@iconify/icons-simple-icons/facebook';
import twitterIcon from '@iconify/icons-simple-icons/twitter';
import leetcodeIcon from '@iconify/icons-simple-icons/leetcode';
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';
import resumeIcon from '@iconify/icons-simple-icons/google';
import portfolioIcon from '@iconify/react';
// import resumeIcon from '@iconify/icons-simple-icons/artist-light-skin-tone';
import './WidthLimit.scss';

const LinkButton = (props) => {
  const [icon, setIcon] = useState('');
  useEffect(() => {
    if (props.link.includes('instagram')) {
      setIcon(<Icon icon={instagramIcon} />);
    } else if (props.link.includes('twitter')) {
      setIcon(<Icon icon={twitterIcon} />);
    } else if (props.link.includes('github')) {
      setIcon(<Icon icon={githubIcon} />);
    } else if (props.link.includes('leetcode')) {
      setIcon(<Icon icon={leetcodeIcon} />);
    } else if (props.link.includes('facebook')) {
      setIcon(<Icon icon={facebookIcon} />);
    }else if (props.link.includes('linkedin')) {
      setIcon(<Icon icon={linkedinIcon} />);
    }else if (props.link.includes('netlify')) {
      setIcon(<Icon icon="mingcute:quill-pen-line" />);
    }else if (props.link.includes('drive')) {
      setIcon(<Icon icon="iconoir:google-docs" />);
    }else if (props.link.includes('anchor')) {
      setIcon('Uncaught Exceptions Pod');
    } else if (props.link.includes('bitclout')) {
      setIcon('BitClout');
    }
  }, [props]);

  return (
    <Button
      variant="outline-light"
      href={props.link}
      className="mb-3 max-button"
      size="lg"
      target="_blank"
      block
    >
      {icon}
    </Button>
  );
};

export default LinkButton;