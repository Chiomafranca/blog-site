import React from 'react';
import BodyContainer from './BodyContainer';
import CenterdBody from './CenterdBody';

const NavbarBody = ({adventure}) => {
  return (
    <>
     <BodyContainer adventure={adventure}/>
    <CenterdBody/>
    </>
  );
};

export default NavbarBody;
