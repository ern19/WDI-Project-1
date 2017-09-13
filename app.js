const wordBank = [
    {
        word: "element",
        definition: "An individual component of an HTML document or web page.",
    },

    {
        word: "selector",
        definition: " Are used to select the element(s) you want to style.",
    },

    {
        word: "function",
        definition: "A reusuable block of code that does something in a script",
    },
    
    {
        word: "variable",
        definition: "Something that you assign a value to.",
    },

    {
        word: "loop",
        definition: "A kind of function that carries out a block of code a specified # of times.",
    },
    
    {
        word: "jQuery",
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
    $("#hint").html(wordBank[0].definition)
    $("#blanks").html(wordBank[0].word)
});
});
console.log(wordBank[1].definition);


