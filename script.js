const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let team=players;
let team1=[];
for(let i in players){
	players[i]=team1[i];
}
let cap1={};
for(let i in person){
	person[i]=cap1[i];
}
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
