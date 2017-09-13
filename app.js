const wordBank = [
    {
        word: "element",
        blanks: "_______",
        definition: "An individual component of an HTML document or web page.",
    },

    {
        word: "selector",
        blanks: "________",
        definition: " Are used to select the element(s) you want to style.",
    },

    {
        word: "function",
        blanks: "________",
        definition: "A reusuable block of code that does something in a script",
    },
    
    {
        word: "variable",
        blanks: "________",
        definition: "Something that you assign a value to.",
    },

    {
        word: "loop",
        blanks: "____",
        definition: "A kind of function that carries out a block of code a specified # of times.",
    },
    
    {
        word: "jQuery",
        blanks: "______",
        definition: "A library of functions that allows developers to manipulate the DOM more efficiently",
    }
]
// var letterContent = document.getElementsByClassName("letter").textContent;
$(document).ready(function(){
    // let letterValue = $(".button").text
    // $(".letter").click(function() {
    //     $(".blanks").html(letterContent);
    // });
    
//     $("#startButton").click(function() {
        
//         $("#hint").html(defs[0])
//     $(".letter").click(function() { 
//         console.log(textContent(".letter")) 
    
//     });
//     });
// });
$("#startButton").click(function() {
    $("#hint").html(wordBank[4].definition)
    $("#blanks").html(wordBank[4].blanks)
});
});
console.log(wordBank[1].definition);

var wordArray = wordBank[1].word.split(""))

var buttonValue = $(".button").html
