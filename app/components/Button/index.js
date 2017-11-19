/**
*
* Button
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Button() {
  return (
    <button>
      <FormattedMessage {...messages.header} />
    </button>
  );
}

Button.propTypes = {
  text:
};

export default Button;
