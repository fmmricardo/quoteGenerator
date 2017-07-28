// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//initialize variables

 var message;
 var quotesCopyArray=[];
 var timer = window.setInterval(printQuote, 30000);


// function print message

 function printMessage (message){
  var outputdiv = document.getElementById('quote-box');
      outputdiv.innerHTML = message;
      console.log(message);
}

//generate a random quote
  //the quotes already displayed are merged in a new array quotesCopyArray
  function getRandomQuote(){
    if (quotesCopyArray[0]=== undefined){
        quotesCopyArray= quotesCopyArray.concat(quotes);
    }
      var randomNumber = Math.floor(Math.random()*quotesCopyArray.length);
      var randomQuote = quotesCopyArray[randomNumber];
    //Don't display a random quote more than once until ALL quotes from the array have been displayed.
      // splice () method changes the contents of an array by removing existing elements and/or adding new elements.

      quotesCopyArray.splice(randomNumber, 1);
      return randomQuote;
    }


  //generate the random background

  function generateRBG() {
    var r = Math.floor(Math.random()* 250);
    var b = Math.floor(Math.random()* 250);
    var g = Math.floor(Math.random()* 250);

    var RGB = "rgb(" +r + "," +b+ "," +g +")";
    return RGB;
      }

  // Change the background color

   function bgColor(){

    var bg = generateRBG();
    document.body.style.background = bg;
  }


// use the random quote generated and add it into the HTML
  //function printQuote

  function printQuote (){



      //get random quote
       var randomQuote = getRandomQuote();
      //return quote
      message= '<p class="quote">' + randomQuote.quote + '</p>';
      //return the source
      message+= '<p class="source">' + randomQuote.source + '</p>';

      // Check if quote has a citation attached
      if (randomQuote.citation){
        //return the citation
          message+= '<span class="citation">' + randomQuote.citation +  '</span>';
      }
      // Check if quote has a date attached
      if(randomQuote.date){
        // return the date
          message+= '<span class="year">' + randomQuote.date + '</span>';
      }
      // Check if quote has a citation attached
      if (randomQuote.citation){
        // return the citation
          message+= '<span class="citation">' + randomQuote.citation +  '</span>';
      }
      // Check if quote has a tag attached
      if (randomQuote.tag){
        // return the tag
          message+= '<p class="citation">' + randomQuote.tag +  '</p>';
      }

        printMessage(message);
        bgColor();
        //Refresh the quote after a set amount of time
        window.clearTimeout(timer);
        timer = window.setInterval(printQuote, 30000);

  }
