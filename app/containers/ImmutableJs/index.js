/**
 *
 * ImmutableJs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Immutable from 'immutable';

import messages from './messages';
import Menu from './../../components/Menu/Loadable';
import H1 from './H1';
import H2 from './H2';

export class ImmutableJs extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      msg: 'Nothing'
    }
  }

  map() {
    // Map
    let map1    = Immutable.Map({a: 1, b: 2, c: 3}),
        map2    = Immutable.Map({d: 4, e: 5, f: 6});
    // let output  = map1.set('d', 4); // Set
    // let output  = map1.get('c'); // Get
    // let output  = map1.merge(map2); // Merge
    // let output  = map1.delete('a'); // Delete
    this.setState({msg : JSON.stringify(output)});
  }

  list() {
    let list1 = Immutable.List([1, 2, 3]),
        list2 = Immutable.List([4, 5, 6, 7, 8]);

    let output  = list1.concat(list2); // Concat.
    // let output  = list2.merge(list2); // Merge.
    // let output  = list1.push(4); // Push.
    // let output  = list1.unshift(0); // Unshift.
    // let output  = list1.update(0, item => item + 3 ); // Update.
    // let output  = list1.setSize(5); // Set size.
    this.setState({msg : JSON.stringify(output)});
  }

  componentDidMount() {
    // this.map();
    this.list();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>ImmutableJs</title>
          <meta name="description" content="ImmutableJs playground" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Menu />
        <H2>Output: {this.state.msg}</H2>
      </div>
    );
  }
}

ImmutableJs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(ImmutableJs);
