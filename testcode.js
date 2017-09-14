const wordBank = [//all word/def pairs for gameplay
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

$(document).ready(function(){//start code
    function randWord() {
        Math.floor(Math.random() * wordBank.length)
    }
    $("#startButton").click(function() {
        $("#hint").html(wordBank[1].definition)
        $("#blanks").html(wordBank[1].blanks)
        var gamePlay = true
        if (gamePlay === true) {
            $("#startButton").click(function() {
                randWord(); //On click, the game will load a random array index number
        }
    });
    
    $('.letter').click(function(){//comparison code
        var letterVal = ($(this).attr('value'));
        console.log(letterVal)
        var wordInPlay = wordBank[randWord].word
        var blanksInPlay = wordBank[randWord].blanks
        var wordArray = wordBank[randWord].word.split("");
        console.log(wordArray);
        
        for (var i = 0; i < wordArray.length; i++) {         
            if (letterVal === wordArray[i]) {
                    console.log("Correct!")
                    blanksInPlay.splice([i], 0, letterVal);
                    $("#blanks").html(blanksInPlay)
                }
                else {
                    console.log("Incorrect!")
                    
                }
            
                
        }
        
        
        
    });
    $('.letter').click(function(){ //"scoreboard" code
        var letterVal = ($(this).attr('value'));
        var wordLength = wordBank[randWord].word.length
        var wordInPlay = wordBank[randWord].word
        var blanksInPlay = wordBank[randWord].blanks
        var blankLength = wordBank[randWord].blanks.length
        var winCount = $("#winCount")
        
        if (wordLength === blankLength) {//wins
            alert("You win!")
            winCount.html(+1)
            
        }
        if (!wordBank[1].word.includes(letterVal)) { //failed attempts
            var failCount = document.getElementById('failCount');
            var number = failCount.innerHTML;
            number++;
            failCount.innerHTML = number;
        }
        if (number === 6) { //body count
            alert("he ded")
            $(".start").hide()
            $(".lose").show()
            var bodyCount = document.getElementById('bodyCount');
            var number = bodyCount.innerHTML;
            number++;
            bodyCount.innerHTML = number;
        }
    });
    $('.letter').click(function(){
       console.log("a button was pressed")
       $('.letter').css("color", "red");

    });

});







