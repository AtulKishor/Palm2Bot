import React from 'react';

const LocationMap = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <iframe
        title="Shankar Optical Works Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.7400686351875!2d84.88139187593929!3d25.646751077424202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ab224289ba09%3A0xbad357926445db80!2sShankar%20Optical%20Works!5e0!3m2!1sen!2sin!4v1701168514788!5m2!1sen!2sin"
        referrerpolicy="no-referrer-when-downgrade"
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
        style={{ border: '0px' }}
      ></iframe>
      <footer>
        <p>Copyright ⓒ {year} | Made with 💖 by Atul Kishor</p>
      </footer>
    </div>
  );
};

export default LocationMap;
