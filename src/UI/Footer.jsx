import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='contentFooter'>
      <div className='wrapingDiv'>
        <div className='header'>status offen</div>
        <div className='desc'>
          Ihr Einkauf wurde erfasst und muss noch durch den Partner bestätigt
          werden.
        </div>
      </div>
      <div className='wrapingDiv'>
        <div className='header'>status bestätigt</div>
        <div className='desc'>
          Ihr Einkauf wurde wurde vom Partner bestätigt. Nach der Zahlung des
          Partners an uns wird Ihnen das Cashback schnellstmöglich ausgezahlt.
        </div>
      </div>
      <div className='wrapingDiv'>
        <div className='header'>status ausgezahlt</div>
        <div className='desc'>
          Das Cashback wurde auf Ihre hinterlegte Bankverbindung ausgezahlt.
        </div>
      </div>
      <div className='wrapingDiv'>
        <div className='header'>status storniert</div>
        <div className='desc'>
          Das Cashback wurde leider vom Partner abgelehnt und Sie erhalten keine
          Zahlung.
        </div>
      </div>
    </div>
  );
};

export default Footer;
