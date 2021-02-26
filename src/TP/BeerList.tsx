import * as React from 'react';

import Beer from './Beer';

interface Props {
  supprimer(nom:string) : void;
  beers: string[];
}

interface State {
  
};

export default class BeerList extends React.Component<Props, State> { 

  render () {
    return (
      <>
        <h1 className="m-3">Liste des bières disponibles</h1>
        <ul className="list-group m-3">
          {
            this.props.beers.map((beer,i) => <Beer key={i} supprimer={this.props.supprimer} nom={beer} />)
          }
        </ul>
      </>
    );
  }
}