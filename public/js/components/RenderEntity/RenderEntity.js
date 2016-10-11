import React from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { action } from 'redux-saga/effects';

/* COMPONENTS */
import Stats from './components/Stats';

import { getLocationStyle } from '../../common/style';

const RenderEntity = (props) => {
  const { stats, entity, location } = props;

  const onClick = (e) => {
    props.onClick(entity, e);
  };

  const locationStyle = getLocationStyle(location);
  
  return (
    <div onClick={ onClick }
         style={ locationStyle }>
      <Stats {...props} />
    </div>
  );
}

RenderEntity.propTypes = {
  entity: React.PropTypes.string
};

function mapStateToProps(state, props) {
  return {
    stats: state.stats.get(props.entity, Map()),
    location: state.location.get(props.entity, Map())
  };
}

export default connect(mapStateToProps)(RenderEntity);
