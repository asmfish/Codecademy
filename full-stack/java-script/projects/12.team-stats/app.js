const team = {
  _players: [
    {firstName: 'Luis', lastName: 'Nani', age: 41},
    {firstName: 'Wine', lastName: 'Rooney', age: 37},
    {firstName: 'Cristiano', lastName: 'Ronaldo', age: 38}
  ],
  _games: [
    {opponent: 'Chelsea', teamPoints: 89, opponentPoints: 95},
    {opponent: 'Liverpool', teamPoints: 98, opponentPoints: 78},
    {opponent: 'Man City', teamPoints:75, opponentPoints: 80}
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      newOpponent: newOpponent, 
      newTeamPoints: newTeamPoints, 
      newOpponentPoints: newOpponentPoints
    }
    this._games.push(game);
  }
};

//Add Player
team.addPlayer('Asm', 'Fish', 37);
console.log(team.players)

//Add game
team.addGame('Titans', 100, 98);
console.log(team.games);

