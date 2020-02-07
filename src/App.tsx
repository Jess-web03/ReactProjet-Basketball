import React from 'react';
import './App.css';
import matches from './data';
import teams from './data';

const App = () => {
  const toto: string ="toto";
  console.log(toto);
  return (
    <div className="App">
      <h1>Les matchs</h1>
         {matches.map((match)=>(
         <div>
           <h2>{match.name}</h2>
           <p>Le score est : {match.scores}</p>
        
        </div>
         ))}
       
          {teams.map((team)=>(
            <p>{team.fautes}</p>
          ))}
    </div>
  );
}

export default App;
{/** {matches.map((x)=>JSON.stringify(x))}
retourne du json 
*/}
 