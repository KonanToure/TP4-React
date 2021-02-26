import * as React from 'react';

interface Props {
    nom: string;
    supprimer(nom:string) : void;
  };

  
const Beer : React.FunctionComponent<Props> = ({nom, supprimer}) =>{  

    return (
      <li className="list-group-item d-flex align-tiems-center ">
        {nom}
        <button  className ="btn btn-sm ml-auto" onClick={() => supprimer(nom)}> &#128465;</button>
      </li>
    )
};
export default Beer;