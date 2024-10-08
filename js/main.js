let playeronetext = document.querySelector(".playeronetext")
let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton")
let playeroneerror = document.querySelector(".playeroneerror")
let oneplayer = document.querySelector(".oneplayer")
let twoplayer = document.querySelector(".twoplayer")
let playertwotext = document.querySelector(".playertwotext")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobutton = document.querySelector(".playertwobutton")
let playertwoerror = document.querySelector(".playertwoerror")
let chance = document.querySelector(".chance")


let result;

let chancevalue = 3


playeronebutton.addEventListener("click",function(){
      if(playeroneinput.value){
         if(playeroneinput.value - 10){
              if(playeroneinput.value > 0 && playeroneinput.value < 10){  
                result = playeroneinput.value
                oneplayer.style.display = "none"
                twoplayer.style.display = "block"
                  
              }else
              playeroneerror.innerHTML = "please number 1 to 9"
         }else{
              playeroneerror.innerHTML = "please number value"
         }
        
      }else{
        playeroneerror.innerHTML = "please some value"
      }
})


playertwobutton.addEventListener("click",function(){
    if(playertwoinput.value){
       if(playertwoinput.value - 10){
            if(playertwoinput.value > 0 && playertwoinput.value < 10){
                if(playertwoinput.value == result){
                      console.log("ami win");
                      
                }else{
                    chancevalue--
                  if(chancevalue !== 0){
                    playertwoerror.innerHTML = ""
                      chance.innerHTML = chancevalue
                  }else{
                       chance.innerHTML = "Game over"
                  }  
                }
            }else
            playertwoerror.innerHTML = "please number 1 to 9"
       }else{
            playertwoerror.innerHTML = "please number value"
       }
      
    }else{
      playertwoerror.innerHTML = "please some value"
    }
})