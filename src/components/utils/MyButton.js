import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = ({ text, bck, color, link }) => {
  return (
    <Button
      href={link}
      variant='contained'
      size='small'
      style={{
        background: bck,
        color: color
      }}
    >
      <img alt='icon_button' className='iconImage' src={TicketIcon} />
      {text}
    </Button>
  );
};

export default MyButton;
