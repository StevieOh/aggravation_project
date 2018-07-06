console.log("Aggravation")

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
  //console.log(dice.roll());
});
 

// example of how to print a piece in a hole
$('#yellow5').append($('<div/>').attr('id', 'yellow-piece1'));


class Piece {
  constructor(color, number){
      this.color = color;
      this.number = number;
      this.location = this.color + "-start" + this.number;
  }
  move(){

  }
  getId(){
    // return  a concatenated string
    this.color = color;
    this.number = number;
    //return this.color + "-piece" + this.number
    
  }
}

const piece = new Piece("yellow", "1");
console.log(piece.getId()); // should print "yellow-piece1" in the console




/* 
  getIdString() {
    // return a string corresponding to this piece's id
  }
  
  move(targetId) {
    move piece with this.getIdString() to target ID
    using jQuery (remove and reappend in new location)
  }
  
  getLocation() {
      
  }

}





will produce:



p = {
  color: blue, 
  number: 3,
  location: "blue-start-3",
  getIdString() {
  
  },
  move(target) {
  
  },
  getLocation() {
  
  }


}

p.move('#orange3')


*/


























/*

[
  [
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    },
    {
      color: red
      id: 11
    },
    {
      color: red
      id: 12
      occupant: null
    },
    {
      color: red
      type: normal
      id: 13
    },
    {
      color: red
      type: startFinish
      homeStretch: [
        {
          id hb1
          type: home-stretch
        }
        {
          hb2
        }
        {
          hb3
        }
        {
          hb4
        }
      ]
    },
    {
      id: 1
    },
    {
      type: normal
      id: 2
    },
    {
      id: 3
    }
  ],

  {
    type: star
  },
  Y,
  {star},
  W,
  {star},
  O,
  {star}
  G,
  {star}
  B,
]


*/

