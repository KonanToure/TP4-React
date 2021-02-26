import * as React from 'react';

interface Props{
    ajouter(name:string):void;
    
}

interface State{
    newBeer : string
}
  
class AddBeer extends React.Component<Props, State> { 
    
    state : State = {
        newBeer :""
    }
    strUcFirst = (str : string) : string => (str+'').charAt(0).toUpperCase()+str.substr(1);
    handleNameOnChange = (e:any) => {
        this.setState({
            newBeer:e.target.value
        })
    }
    
    handleFormSubmit = (e:any) => {
        e.preventDefault();
        this.props.ajouter(this.strUcFirst(this.state.newBeer))  
    }

    render(){
        return (
        <section>
            <br></br>
            <div className="card mx-3">
                <form className="card-body" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label form="beerName">Ajouter une bière</label>
                        <input type="text" className="form-control" name="beerName" id="beerName" onChange={this.handleNameOnChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>
            </div>
        </section>
        )
    }
};
export default AddBeer;