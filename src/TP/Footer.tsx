import * as React from 'react';
import { NavLink } from 'react-router-dom'
  
const Footer : React.FunctionComponent = () =>{  

    return (
    <>
    <br></br><br></br><br></br><br></br>
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
            <NavLink to="/" className="btn btn-outline-dark" >App</NavLink>
            <NavLink to="/a-propos" className="btn btn-outline-dark">A Propos</NavLink>
        </div>
    </footer>
    </>
    )
};
export default Footer; 