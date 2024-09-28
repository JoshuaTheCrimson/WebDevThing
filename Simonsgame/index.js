
const previous_ones = []

var flag = true;

var greeny = document.querySelector(".greenbox")
var redy = document.querySelector(".redbox")
var yellowy = document.querySelector(".yellowbox")
var bluey = document.querySelector(".bluebox")

const allbuttons = [greeny,redy,yellowy,bluey]


// previous_ones.push(0)
// previous_ones.push(1)
// previous_ones.push(2)
// previous_ones.push(3)


$("body").on('keydown', rnd);
var counter = 0

external_flag = false


function rnd() {
    let counter = 0;
    let external_flag = false;
    let interval = setInterval(function () {
        if (counter < 2) {
            counter += 1;
            previous_ones.push(Math.floor(Math.random() * 4));  // Add random button index

            // Iterate through previous_ones and apply animations with delays
            for (let i = 0; i < previous_ones.length; i++) {
                setTimeout(function () {
                    let currentbutton = allbuttons[previous_ones[i]];  // Get the current button
                    currentbutton.classList.add('scale-effect');  // Add class to button
                    setTimeout(function () {
                        currentbutton.classList.remove('scale-effect');  // Remove class after 250ms
                    }, 250);  // Button remains scaled for 250ms
                }, 500 * i);  // Delay each iteration by 500ms * i
            }

            let inner_interval = setInterval(function () {
                if (!clicked()) {  // If clicked() returns false
                    external_flag = true;
                    clearInterval(inner_interval);  // Stop inner interval
                } else {
                    counter--;  // Decrease counter when clicked() is true
                    clearInterval(inner_interval);  // Stop inner interval
                }
            }, 500);  // Check every 500ms

            // If external_flag is set to true, clear the outer interval
            if (external_flag === true) {
                clearInterval(interval);
            }
        } else {
            clearInterval(interval);  // Stop the interval when the counter reaches 2
        }

    }, 3000);  // Interval runs every 3000ms (3 seconds)
}





function clicked() {
    var checker_array = [];
    // Attach click listener to all buttons with class "mibutton"
    $(".mibutton").on('click', function(event) {
        buttonanimation($(this))
        $(this).addClass()

        let classList = $(this).attr('class').split(' ');  // Get all the classes as an array
        let thenumberwechoose = classList[2];  // Get the class at index 2 (the third class)
        checker_array.push(thenumberwechoose);  // Example action

        // Perform any actions using the previous_ones array
        for (var cc = 0; cc < previous_ones.length; cc++) {
            if (checker_array[cc] !== previous_ones[cc]){
                return false
            }
        }
        console.log(checker_array)
    });

    return true;  // Return the updated checker_array
}


function buttonanimation(button_to_press){
    $(button_to_press).addClass('scale-effect')
    setTimeout(function() {
        $(button_to_press).removeClass('scale-effect');
    }, 100);  // 1000 milliseconds = 1 second
}



