console.log("Aggravation")

// build RN 1-6 generator (button)√
//random number generated between 1 and 6

$("#dice").on("click", (event) => {
  const dice = {
  sides: 6,
  roll() {
    const randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
  $("#dice").text(dice.roll()); 
});


// $("#red-start4").append("red-piece4");
 
// game = {
//   players: []
//   createPlayer() {
//     return new player
//   }
// }
// game.players.push(game.createPlayer());



// class Piece {
//   location = "#red-start4"
//   htmlId = ("blue-piece1"),
//   color = #33ccff,
//   print() {
    
//   }

// const p = new Piece
// p.print()


// class Player {
//   pieces []
//   printPieces() {
    
//   }
// }




// get piece to print itself in any div
// get piece to print itself in specific (by id) div

// --

// move piece 


// [
//   [
//     {
//       id: 8
//     },
//     {
//       id: 9
//     },
//     {
//       id: 10
//     },
//     {
//       color: red
//       id: 11
//     },
//     {
//       color: red
//       id: 12
//       occupant: null
//     },
//     {
//       color: red
//       type: normal
//       id: 13
//     },
//     {
//       color: red
//       type: startFinish
//       homeStretch: [
//         {
//           id hb1
//           type: home-stretch
//         }
//         {
//           hb2
//         }
//         {
//           hb3
//         }
//         {
//           hb4
//         }
//       ]
//     },
//     {
//       id: 1
//     },
//     {
//       type: normal
//       id: 2
//     },
//     {
//       id: 3
//     }
//   ],

//   {
//     type: star
//   },
//   Y,
//   {star},
//   W,
//   {star},
//   O,
//   {star}
//   G,
//   {star}
//   B,
// ]




