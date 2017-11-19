/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import MenuLink from './MenuLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <MenuLink to="/">
          <FormattedMessage {...messages.home} />
        </MenuLink>
        <MenuLink to="/immutable-js">
          <FormattedMessage {...messages.immutablejs} />
        </MenuLink>
      </NavBar>
    );
  }
}

Header.propTypes = {

};

export default Header;
