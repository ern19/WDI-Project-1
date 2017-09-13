const wordBank = [
    {
        word: "element",
        blanks: [],
        definition: "An individual component of an HTML document or web page.",
       
    },

    {
        word: "selector",
        blanks: [],
        definition: " Are used to select the element(s) you want to style.",
        
    },

    {
        word: "function",
        blanks: [],
        definition: "A reusuable block of code that does something in a script",
       
    },
    
    {
        word: "variable",
        blanks: [],
        definition: "Something that you assign a value to.",
       
    },

    {
        word: "loop",
        blanks: [],
        definition: "A kind of function that carries out a block of code a specified # of times.",
        
    },
    
    {
        word: "jQuery",
        blanks: [],
        definition: "A library of functions that allows developers to manipulate the DOM more efficiently",

    }
]

$(document).ready(function(){
    $("#startButton").click(function() {
        $("#hint").html(wordBank[0].definition)
        $("#blanks").html(wordBank[0].blanks)
    });
    
    $('.letter').click(function(){
        var letterVal = ($(this).attr('value'));
        console.log(letterVal)
        var wordArray = wordBank[0].word.split("");
        console.log(wordArray);
        
        for (var i = 0; i < wordArray.length; i++) {         
            if (letterVal === wordArray[i]) {
                    console.log("Correct!")
                    wordBank[0].blanks.splice([i], 0, letterVal);
                    $("#blanks").html(wordBank[0].blanks)
                }
                else {
                    console.log("Incorrect!")
                    
                }
            
        }
        if (wordBank[0].blanks.length === wordBank[0].word.length) {
            alert("You win!")
        }
    });
});







