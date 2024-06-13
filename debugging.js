var numberOfExercises;
var isValidNumber = false;

while (!isValidNumber){
    numberOfExercises = prompt("How many workout exercises would you like to enter?");
    numberOfExercises = parseInt(numberOfExercises);

    if (!isNaN(numberOfExercises) && numberOfExercises > 0) {
        isValidNumber = true;
    } else {
        alert("Please enter a valid number greater than 0.");
    }
}



var i;
var response;
var exercises = [];
var currentExerciseIndex = 0; //track the current exercise 


let exercisesEl = document.getElementById("exercises-el");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");



//convert input to a number
//numberOfExercises = parseInt(numberOfExercises);

if (!isNaN(numberOfExercises) && numberOfExercises > 0) {
    for (i = 1; i <= numberOfExercises; i++) {
        response = prompt("What is exercise" + " " + i + "?");

        //make sure response is not empty and is a string

        if (response && typeof response === 'string' && response.trim() !== '') {
            exercises.push(response.trim()); // store excercise in an array and trim whitespace
        } else {
            alert ("Sorry, please enter valid exercise.");
            i--;
        }
    }

    if (exercises.length === numberOfExercises) {
        alert("Thank you for entering the exercises: " + exercises.join(", "));
    } else {
        alert("Failed to enter valid exercises.");

    }

    } else {
        alert("Please enter a valid number greater than 0.");
    };

    
    
    var count=0;

    function increment() {
        count += 1
        countEl.textContent = count;
    }

    function save(){

        if (exercises.length > 0){
            let currentExercise = exercises[currentExerciseIndex];
            currentExercise.reps.push(count);
            saveEl.textContent += ` ${currentExercise.name}: ${count} reps - `;
            countEl.textContent = 0;
            count = 0;
            currentExerciseIndex = (currentExerciseIndex + 1) % exercises.length; //move to the next exercise
            displayCurrentExercise();
        }
    }


function displayCurrentExercise(){
    if (exercises.length > 0) {
        exercisesEl.textContent = `Current Exercise: ${exercises[currentExerciseIndex].name}`;
    }

}

displayCurrentExercise();// Initial display 

