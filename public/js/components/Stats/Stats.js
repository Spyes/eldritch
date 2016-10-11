import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

/* ACTIONS */
import { addEntity } from '../../actions/statsActions';

class Stats extends Component {
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
  
  static propTypes = {
    data: React.PropTypes.object,
    entity: React.PropTypes.string
  }

  static defaultProps = {
    data: Map()
  }
  
  render() {
    const { stats } = this.props;

    return (
      <div>

        <div>
          Health: { stats.get('health') }
        </div>
        <div>
          Mana: { stats.get('mana') }
        </div>

      </div>
    );
  }
};

function mapStateToProps(state, props) {
  return {
    stats: state.stats.get(props.entity, Map())
  };
}

export default connect(mapStateToProps)(Stats);
