import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

/* ACTIONS */
import { addEntity, removeEntity } from '../../actions/renderActions';

class Render extends Component {
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
    const { location } = this.props;

    return (null);
  }
}

function mapStateToProps(state, props) {
  return {
    render: state.render.get(props.entity, Map()),
    location: state.location.get(props.entity, Map())
  };
}

export default connect(mapStateToProps)(Render);
