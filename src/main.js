'use strict';

function App() {
  let Money = 5000

  function PickRandom(slot){
    let RNG = Math.floor(Math.random() * 100)

    //8 possibilities (7 without the coin)

    //Cherry 20%
    if ((0 <= RNG) && (RNG <= 20)){
      slot.src="/Cherry.f590875b.png"
    }

    //Watermelon 18%
    else if ((20 < RNG) && (RNG <= 38)){
      slot.src="/Watermelon.89415fdd.png"
    }

    //Lemon 17%
    else if ((38 < RNG) && (RNG <= 55)){
      slot.src="/Lemon.c3d21eb1.png"
    }

    //Clover 16%
    else if ((55 < RNG) && (RNG <= 71)){
      slot.src="/Clover.d1182bae.png"
    }

    //Diamond 15%
    else if ((71 < RNG) && (RNG <= 86)){
      slot.src="/Diamond.980b154e.png"
    }

    //Seven 14%
    else if ((86 < RNG) && (RNG <= 100)){
      slot.src="/Seven.cb961cef.png"
    }

    else{
      console.log("ERR: number higher than 100 or lower than 0");
    }
  }

  function Roll(Money){

    Money -= 100

    let slot1 = document.getElementById("slot1") 
    let slot2 = document.getElementById("slot2")
    let slot3 = document.getElementById("slot3")
    let slot4 = document.getElementById("slot4")
    let slot5 = document.getElementById("slot5")
    let slot6 = document.getElementById("slot6")
    let slot7 = document.getElementById("slot7")
    let slot8 = document.getElementById("slot8")
    let slot9 = document.getElementById("slot9")
    let slot10 = document.getElementById("slot10")
    let slot11 = document.getElementById("slot11")
    let slot12 = document.getElementById("slot12")
    let slot13 = document.getElementById("slot13")
    let slot14 = document.getElementById("slot14")
    let slot15 = document.getElementById("slot15")

    let slots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12, slot13, slot14, slot15]

    for(let i = 0;i < slots.length; i++){
      PickRandom(slots[i])
    }

    //console.log(slot1.src)

    Analyze(slots, Money);
  }

  function Analyze(slots, Money){
    if((slots[0].src == slots[6].src) && (slots[6].src == slots[12].src)){
      console.log("UP DIAGONAL")
      if(slots[0].src == "http://localhost:8080/Cherry.f590875b.png"){
        
      }
    }
    if((slots[0].src == slots[1].src) && (slots[1].src == slots[2].src)){
      console.log("FIRST ROW")
    }
    if((slots[5].src == slots[6].src) && (slots[6].src == slots[7].src)){
      console.log("SECOND ROW")
    }
    if((slots[10].src == slots[11].src) && (slots[11].src == slots[12].src)){
      console.log("LAST ROW")
    }
    if((slots[10].src == slots[6].src) && (slots[6].src == slots[2].src)){
      console.log("DOWN DIAGONAL")
    }
  }

  Roll()

  let button = document.getElementById("playButton");

  button.addEventListener("click", function(){
    Roll(Money)
  })

  

}

App();
