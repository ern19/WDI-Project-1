// 1. On start, load a definition and blanks corresponding to the number 
//of letters in the word that goes with the definition
//
// 2. When the user presses a letter whose value corresponds with a letter found
//in the word, the button disappears, and it is placed in the position where it is 
//found in the word.
//
// 3. When the user presses a letter whose value does not correspond with a 
//letter found in the word, the button disappears and failed atts increases 
//by 1.
// 
//4. When the user has correctly selected all of the letters in the word, 
//"You did it! Press START! for next word" appears in place of the word, 
//and correct words increases by 1.
//
// 5. When failed attempts = 6, the hanged man appears in place of the empty
//gallows, the word is replaced with "Another one bites the dust. Press START! 
//to try again.", and body count increases by 1. (Possibly, the word auto-completes 
//after the 6th failed attempt?)
//
// 6. Win or lose, when the start button is pressed, all removed letters 
//reappear and a new word is loaded up. Go back to start, pass go, collect $200.
// 

//Combining arrays words and defs into a single object instead.
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

$("#startButton").click(function() {
    $("#hint").html(wordBank[0].definition)
    $("#blanks").html(wordBank[0].blanks)
});


$('.letter').click(function(){
    var letterVal = ($(this).attr('value'));
    console.log(letterVal)
    var wordArray = wordBank[0].word.split("");
    console.log(wordArray);
    var blankArray = wordBank[0].blanks.split("");
    console.log(blankArray); 
    for (var i = 0; i < wordArray.length; i++) {
        for (var j = 0; j < blankArray.length; j++) {
            if (letterVal === wordArray[i]) {
                console.log("Correct!")
                letterVal.appendTo(blankArray)
            }
            else {
                console.log("Incorrect!")
            }

        }
    }

});