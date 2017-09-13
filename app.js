const words = ["element", "selector", "function", "variable", "loop", "jquery"]
const defs = ["An individual component of an HTML document or web page.", "In CSS, selectors are patterns used to select the element(s) you want to style.", "A function is a reusuable block of code that does something in a script", "A variable is how you assign a value to something in JS", "Loops are a kind of function that carry out a block of code a specified number of times", "jQuery is a library of functions that allows developers to manipulate the DOM more efficiently"]
// var letterContent = document.getElementsByClassName("letter").textContent;
$(document).ready(function(){
    // let letterValue = $(".button").text
    // $(".letter").click(function() {
    //     $(".blanks").html(letterContent);
    // });
    
    $("#startButton").click(function() {
        $("#hint").html(defs[0])

    });
});
