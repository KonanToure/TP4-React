import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBeer from './TP/AddBeer';
import Apropos from './TP/Apropos';
import BeerList from './TP/BeerList';
import Footer from './TP/Footer';


interface Props {
}

interface State {
  beers: string[];
};

class App extends React.Component<Props, State>{

  state: State = {
    beers: ['Coreff', 'Corona', 'Mort Subite']
  };

  supprimer = (nom : string) =>{
    this.setState({
      beers : this.state.beers.filter(beer => beer!==nom)
    })
  }

  ajouter = (nom: string) =>{

    if(nom!=="" && this.state.beers.find(elt => elt === nom) === undefined){
      this.setState({
        beers : [...this.state.beers, nom]
      })
    }

  }

  render() {
    return (
      <section id="beer">
        <BrowserRouter>
            <Switch>
                <Route path="/a-propos" render={(props) => <Apropos />} />
                <Route path="/" render={(props) => 
                    (<>
                    <BeerList supprimer={this.supprimer} beers = {this.state.beers} />
                      <AddBeer ajouter={this.ajouter} /> 
                      </>)
                  } />
            </Switch>
            <Footer/>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;