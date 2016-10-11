import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

/* ACTIONS */
import { addEntity as addStats } from '../../actions/statsActions';
import { addEntity as addLocation } from '../../actions/locationActions';
import { addEntity as addRender } from '../../actions/renderActions';

/* COMPONENTS */
import Board from '../Board';

class Game extends Component {
  constructor(props) {
    super(props);
  }

  registerComponent = (component, entity) => {
    const { dispatch } = this.props;

    switch (component.get('name', '')) {
      case "Stats":
        dispatch(addStats(entity, component.get('data')));
        break;
      case "Location":
        dispatch(addLocation(entity, component.get('data')));
        break;
      case "Render":
        dispatch(addRender(entity, component.get('data')));
        break;
      default:
        break;
    }
  };

  initializeEntity = (entity, idx) => {
    entity
      .get('components', List())
      .map((component, idx) =>
        this.registerComponent(component, entity.get('id')));
  };

  componentDidMount() {
    this.props
        .game
        .get('entities', List())
        .map(this.initializeEntity);
  }

  render() {
    return (
      <div>
        <Board entities={this.props.render} />
      </div>
    );
  }
}

Game.propTypes = {
  game: React.PropTypes.object
};

Game.defaultProps = {
  game: Map()
};

function mapStateToProps(state) {
  return {
    game: state.game,
    render: state.render
  };
}

export default connect(mapStateToProps)(Game);
