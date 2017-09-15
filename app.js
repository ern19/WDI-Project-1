const wordBank = [//all word/def pairs for gameplay
    {
        word: "element",
        blanks: [],
        definition: "An individual component of an HTML document or web page. (7 letters)",
       
    },

    {
        word: "selector",
        blanks: [],
        definition: "Are used to select the element(s) you want to style. (8 letters)",
        
    },

    {
        word: "function",
        blanks: [],
        definition: "A reusuable block of code that does something in a script (8 letters)",
       
    },
    
    {
        word: "variable",
        blanks: [],
        definition: "Something that you assign a value to. (8 letters)",
       
    },

    {
        word: "loop",
        blanks: [],
        definition: "A kind of function that carries out a block of code a specified # of times. (4 letters)",
        
    },
    
    {
        word: "jquery",
        blanks: [],
        definition: "A library of functions that allows developers to manipulate the DOM more efficiently. (6 letters)",

    }
]

$(document).ready(function(){//start code
    let randWord = Math.floor(Math.random() * wordBank.length)
    $("#startButton").click(function() {   
          
        $("#hint").html(wordBank[randWord].definition)
        $("#blanks").html(wordBank[randWord].blanks)

        
    });
    $("#nextButton").click(function() {
        console.log("nextButton pressed")
        let randWord = Math.floor(Math.random() * wordBank.length)
        var wordInPlay = wordBank[randWord].word
        var blanksInPlay = wordBank[randWord].blanks
        $("#hint").html(wordBank[randWord].definition)
        $("#blanks").html(wordBank[randWord].blanks)
        blanksInPlay = []
    });
    $('.letter').click(function(){
        $(this).prop("disabled", true)
    });
    $('.letter').click(function(){//comparison code
        
        var letterVal = ($(this).attr('value'));
        console.log(letterVal)
        var wordInPlay = wordBank[randWord].word
        var blanksInPlay = wordBank[randWord].blanks
        var wordArray = wordBank[randWord].word.split("");
        console.log(wordArray);
        $('.letter').click(function(){
            $(this).prop("disabled", true)
        });
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
        
        if (wordLength === blankLength) {
            $('.letter').prop("disabled", false)
            setTimeout(function() { $("#hint").html("You win!") }, 1500);
            winCount.html(+1)
            $("#nextButton").show()          
        }

        if (!wordInPlay.includes(letterVal)) { //failed attempts
            var failCount = document.getElementById('failCount');
            var number = failCount.innerHTML;
            number++;
            failCount.innerHTML = number;
        }

        if (number === 6) {
            $('.letter').prop("disabled", false)
            setTimeout(function() { $("#hint").html("You lost :(") }, 1500);
            $(".start").hide()
            $(".lose").show()
            var bodyCount = document.getElementById('bodyCount');
            var number = bodyCount.innerHTML;
            number++;
            bodyCount.innerHTML = number;
            $("#nextButton").show()   
        }
    });
    
    $('.letter').click(function(){
       console.log("a button was pressed")
    //    $('.letter').css("color", "red");

    });

});







