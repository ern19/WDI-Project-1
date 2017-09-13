const wordBank = [
    {
        word: "element",
        blanks: "_______",
        definition: "An individual component of an HTML document or web page.",
        wordToArray: function wordArray(word) {
            word.split("")
        }
    },

    {
        word: "selector",
        blanks: "________",
        definition: " Are used to select the element(s) you want to style.",
        wordToArray: function wordArray(word) {
            word.split("")
        }
    },

    {
        word: "function",
        blanks: "________",
        definition: "A reusuable block of code that does something in a script",
        wordToArray: function wordArray(word) {
            word.split("")
        }
    },
    
    {
        word: "variable",
        blanks: "________",
        definition: "Something that you assign a value to.",
        wordToArray: function wordArray(word) {
            word.split("")
        }
    },

    {
        word: "loop",
        blanks: "____",
        definition: "A kind of function that carries out a block of code a specified # of times.",
        wordToArray: function wordArray(word) {
            word.split("")
        }
    },
    
    {
        word: "jQuery",
        blanks: "______",
        definition: "A library of functions that allows developers to manipulate the DOM more efficiently",
wordToArray: function wordArray(word) {
            word.split("")
        }
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

var wordArray = wordBank[1].word.split("")

var buttonValue = $(".button").value
//Upon clicking the letter button, the value of the button clicked is compared to the 
//values contained within wordArray.
//
console.log(wordBank[1].wordToArray(wordBank[1].word))


// $('.button').click(function(){
//     console.log($(this).attr('value'));
// });
// $('.letter').click(function(){
//     console.log($(this).attr('value'));
// });

$('.letter').click(function(){
    var letterVal = ($(this).attr('value'));
    console.log(letterVal)
});

