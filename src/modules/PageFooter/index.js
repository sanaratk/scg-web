import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

class PageFooter extends React.Component {
  render() {
    return (
      <footer className="page-footer">       
        <div className="text-center py-3 white">
          <a href="https://www.facebook.com/sanarat"><FaFacebook /></a>
          {'   '}
          <a href="https://www.instagram.com/nuuwoon/"><FaInstagram /></a>         
        </div>
      </footer>
    )
  }
}

export default PageFooter;