var arr = []

var w_audio = new Audio("sounds/tom-1.mp3");
var a_audio = new Audio("sounds/tom-2.mp3");
var s_audio = new Audio("sounds/tom-3.mp3");
var d_audio = new Audio("sounds/tom-4.mp3");
var j_audio = new Audio("sounds/snare.mp3");
var k_audio = new Audio("sounds/crash.mp3");
var l_audio = new Audio("sounds/kick-bass.mp3");

var arr = [w_audio,a_audio,s_audio,d_audio,j_audio,k_audio,l_audio]

//Addint the event listener for click event
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick)
}



function handleclick(){
    // arr[the_sound].play()
    var currinnerhtml = this.innerHTML;
       buttonanimation(this)
       console.log(this)
    
    switch(currinnerhtml){
        case "w":
            arr[0].play();
            break;
            case "a":               
             arr[1].play();
                break;
                case "s":                 
                   arr[2].play();
                    break;
                    case "d":                 
                          arr[3].play();
                        break;
                        case "j":                            
                        arr[4].play();
                            break;
                            case "k":                                
                            arr[5].play();
                                break;
                                case "l":                                    
                                arr[6].play();
                                    break;

    }
}; 

document.addEventListener("keydown", everything)

function everything(event){
    console.log("."+event.key)
    if(keypress(event)==true){
       var curbut =  document.querySelector("."+event.key);
       curbut.style.colorolor = 'white';
       buttonanimation(curbut)
       console.log(curbut)
    }
}


function keypress(olay){
    var kee =  olay.key
    switch(kee){
        case "w":
            arr[0].play();
            return true;
            break;
            case "a":               
             arr[1].play();
             return true;
                break;
                case "s":                 
                   arr[2].play();
                   return true;
                    break;
                    case "d":                 
                          arr[3].play();
                          return true;
                        break;
                        case "j":                            
                        arr[4].play();
                        return true;
                            break;
                            case "k":                                
                            arr[5].play();
                            return true;

                                break;
                                case "l":                                    
                                arr[6].play();
                                return true;

                                    break;

    }
};

function buttonanimation(button_to_press){
    button_to_press.classList.add("pressed")
    setTimeout(function() {
        button_to_press.classList.remove("pressed");
      }, 100);  // 1000 milliseconds = 1 second
}