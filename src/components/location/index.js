import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.397634102244!2d-117.21449678497117!3d32.75518208097865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deaaf083eb7b93%3A0xf88b31bd8f6fc6f9!2s3500+Sports+Arena+Blvd%2C+San+Diego%2C+CA+92110!5e0!3m2!1sen!2sus!4v1566584662778!5m2!1sen!2sus'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
        title='location'
      />
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
