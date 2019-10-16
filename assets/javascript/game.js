
$(document).ready(function() {
const targetNumber = Math.floor(Math.random()*120)+19;
$("#Target").text(targetNumber);
let sum = 0;

// here we begin to define our variables for each image
const numberOption1 = Math.floor(Math.random()*12)+1;
const numberOption2 = Math.floor(Math.random()*12)+1;
const numberOption3 = Math.floor(Math.random()*12)+1;
const numberOption4 = Math.floor(Math.random()*12)+1;
console.log(targetNumber);

//creatin iteractions
const Ariel = $("<img>");
const Aurora = $("<img>");
const Belle = $("<img>");
const Cinderella = $("<img>");

// This will allow the CSS to take effect.
Ariel.addClass("img-thumbnail");
Aurora.addClass("img-thumbnail");
Belle.addClass("img-thumbnail");
Cinderella.addClass("img-thumbnail");

// Each image will be given a src link here
Ariel.attr("src", "./assets/images/ariel.png");
Aurora.attr("src", "./assets/images/aurora.jpg");
Belle.attr("src", "./assets/images/belle.jpg");
Cinderella.attr("src", "./assets/images/cinderella.jpg");

// This data attribute will be set equal to the value that we define before.
Ariel.attr("data-imagevalue", numberOption1);
Aurora.attr("data-imagevalue", numberOption2);
Belle.attr("data-imagevalue", numberOption3);
Cinderella.attr("data-imagevalue", numberOption4);

 // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
$("#Ariel").append(Ariel);
$("#Aurora").append(Aurora);
$("#Belle").append(Belle);
$("#Cinderella").append(Cinderella);

//here we are going to set a function click for each image 
$(".img-thumbnail").on("click", function() {

    var ImageValue = ($(this).attr("data-imagevalue"));
    ImageValue = parseInt(ImageValue);
    sum += ImageValue;

//here we print sum to see if we are winner or looser
$("#Gussing-Answer").text(sum);

if (sum === targetNumber) {
   alert("You win!");
 }
  
 else if (sum >= targetNumber) {
        alert("You lose!!");
    }
})
    
});