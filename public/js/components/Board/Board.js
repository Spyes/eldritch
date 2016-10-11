import React from 'react';
import { Map } from 'immutable';

/* COMPONENTS */
import RenderEntity from '../RenderEntity';

const onClickEntity = (entity, e) => {
  console.log(`clicked entity ${entity}`);
}

const Board = (props) => {
  const { entities } = props;
  return (
    <div>
      { entities
        .keySeq()
        .map((entity, key) => (
          <RenderEntity key={ key }
                        entity={ entity }
                        onClick={ onClickEntity } />
        ))
      }
    </div>
  );
};

Board.propTypes = {
  entities: React.PropTypes.object
};
Board.defaultProps = {
  entities: Map()
};

export default Board;
