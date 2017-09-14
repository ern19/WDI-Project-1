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
    $("#startButton").click(function() {
        $("#hint").html(wordBank[1].definition)
        $("#blanks").html(wordBank[1].blanks)
    });
    
    $('.letter').click(function(){//comparison code
        var letterVal = ($(this).attr('value'));
        console.log(letterVal)
        var wordArray = wordBank[1].word.split("");
        console.log(wordArray);
        
        for (var i = 0; i < wordArray.length; i++) {         
            if (letterVal === wordArray[i]) {
                    console.log("Correct!")
                    wordBank[1].blanks.splice([i], 0, letterVal);
                    $("#blanks").html(wordBank[1].blanks)
                }
                else {
                    console.log("Incorrect!")
                    
                }
            
                
        }
        
        
        
    });
    $('.letter').click(function(){ //"scoreboard" code
        var letterVal = ($(this).attr('value'));
        var wordLength = wordBank[1].word.length
        var blankLength = wordBank[1].blanks.length
        var winCount = $("#winCount")
        
        if (wordLength === blankLength) {
            alert("You win!")
            winCount.html(+1)
            
        }
        if (!wordBank[1].word.includes(letterVal)) {
            var failCount = document.getElementById('failCount');
            var number = failCount.innerHTML;
            number++;
            failCount.innerHTML = number;
        }
        if (number === 6) {
            alert("he ded")
            $(".start").hide()
            $(".lose").show()
            var bodyCount = document.getElementById('bodyCount');
            var number = bodyCount.innerHTML;
            number++;
            bodyCount.innerHTML = number;
        }
    });
});







