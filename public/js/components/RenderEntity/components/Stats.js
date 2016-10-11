import React from 'react';
import { Map } from 'immutable';

const Stats = (props) => {
  const { stats } = props;
  return (
    <div>
      { stats
        .keySeq()
        .map((stat, key) => (
          <div key={key}>{stat}: {stats.get(stat)}</div>
        ))
      }
    </div>
  );
}

Stats.propTypes = {
  stats: React.PropTypes.object
};

Stats.defaultProps = {
  stats: Map()
};

export default Stats;
