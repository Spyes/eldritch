import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Map, List } from 'immutable';

/* COMPONENTS */
import Entity from '../Entity';

const drawEntity = (entity, key) => {
  return (
    <Entity key={key} entity={entity} />
  );
};

const Board = (props) => {
  return (
    <div>
    {
      props.board
           .get('players', List())
           .map(drawEntity)
    }
    </div>
  );
};

Board.propTypes = {
  board: React.PropTypes.object
};

Board.defaultProps = {
  board: Map()
};

function mapStateToProps(state) {
  return {
    board: state.board
  };
}

export default connect(mapStateToProps)(Board);
