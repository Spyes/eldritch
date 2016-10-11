import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

/* ACTIONS */
import { addEntity, removeEntity } from '../../actions/locationActions';

class Location extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, entity, data } = this.props;
    dispatch(addEntity(entity, data));
  }

  componentWillUnmount() {
    const { dispatch, entity } = this.props;
    dispatch(removeEntity(entity));
  }
  
  render() {
    return (null);
  }
}

Location.propsTypes = {
  location: React.PropTypes.object
};

function mapStateToProps(state, props) {
  return {
    location: state.location.get(props.entity, Map())
  };
}

export default connect(mapStateToProps)(Location);
