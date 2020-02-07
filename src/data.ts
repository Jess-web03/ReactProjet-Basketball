type Match = {
    id:string;
    name:string;
    winner:number;
    scores:Array<number>;
    fautes:Array<number>; //objet de type number
    teams: Array<Team>; //objet de type Team
}
type Team = {
    city:string;
    level:string;
    color:string;
    id:number;
    cap:{nom:string, img:string},
}
const teams: Array<Team>=
    [
    {
      city: "rennes", level: "j", color: "red", id: 35,
      cap: { nom: "Salima Belhadj", img: "salima.jpg" }
    }, 
    {
      city: "vannes", level: "j", color: "black", id: 56,
      cap: { nom: "Aurélie Menard", img: "aurelie.jpg"}
    }
  ]
const matches: Array<Match> =   //array de match
[{
    id: "XM284",
    name: "Amicale nat. fém. Junior Rennes-Vannes Jan. 2017",
    teams  :teams,
    winner: 35,
    scores: [74, 49],
    fautes: [3, 9]
  }];
  export default matches;