import React from 'react';


const backdrop = props =>
  props.showModal ? (
    <div className="Backdrop" onClick={props.toggleModal} />
  ) : null;

export default backdrop;