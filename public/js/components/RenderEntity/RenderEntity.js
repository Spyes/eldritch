import React from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { action } from 'redux-saga/effects';

/* COMPONENTS */
import Stats from './components/Stats';

const RenderEntity = (props) => {
  const { stats, entity } = props;
  const onClick = (e) => {
    props.dispatch({type: 'CLICKED_ENTITY', entity});
    props.onClick(entity, e);
  };

  return (
    <div onClick={onClick}>
      <Stats {...props} />
    </div>
  );
}

RenderEntity.propTypes = {
  entity: React.PropTypes.string
};

function mapStateToProps(state, props) {
  return {
    stats: state.stats.get(props.entity, Map())
  };
}

export default connect(mapStateToProps)(RenderEntity);
