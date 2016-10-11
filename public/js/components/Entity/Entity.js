import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

/* COMPONENTS */
import Stats from '../Stats';
import Render from '../Render';
import Location from '../Location';

export default class Entity extends Component {
  constructor(props) {
    super(props);
  }

  addComponent = (component, key) => {
    const { entity } = this.props;
    switch(component.get('name')) {
      case 'Stats':
        return (<Stats key={key}
                       entity={entity.get('id')}
                       data={component.get('data')} />);
      case 'Render':
        return (<Render key={key}
                        entity={entity.get('id')}
                        data={component.get('data')} />);
      case 'Location':
        return (<Location key={key}
                          entity={entity.get('id')}
                          data={component.get('data')} />);
      default:
        return null;
    }
  };
  
  render() {
    return (
      <div>
        {
          this.props
              .entity
              .get('components', List())
              .map(this.addComponent)
        }
      </div>
    );
  }
}

Entity.propTypes = {
  entity: React.PropTypes.object
};

Entity.defaultProps = {
  entity: Map()
};
