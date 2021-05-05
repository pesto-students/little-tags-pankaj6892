import React from 'react';
import Address from '../../components/Address/Address';
import withAuthorization from '../../components/Session/withAuthorization';

const AddressPage = (props) => {
  return (
    <div>
      <Address />
    </div>
  );
};

export default withAuthorization(AddressPage);
