import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = props => {
  return (
    <div className="AppHeader">
      <h1>{props.title}</h1>
    </div>
  )
}
AppHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default AppHeader;