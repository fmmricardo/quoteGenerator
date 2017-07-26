// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", IntervalOn , false);

//initialiye variables
 var outputdiv = "";
 var getrandomQuote="";
 var quoteList = [];
 //var intervalID = setInterval(printQuote,30);



// function print message

 function printMessage (message){

  var outputdiv = document.getElementById('quote-box');
      outputdiv.innerHTML = message;
      console.log(message);
}

//generate a random quote

  var getrandomQuote = function() {
    randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
  return randomQuote;
  }


  //generate the random background

  function generateRBG() {

    var r = Math.floor(Math.random()* 100);
    var b = Math.floor(Math.random()* 150);
    var g = Math.floor(Math.random()* 250);

    var RGB = "rgb(" +r + "," +b+ "," +g +")";
    return (RGB)
    }

  // Change the background color

   function bgColor(){

    var bg = generateRBG();
    document.body.style.background = bg;
  }


// use the random quote genetated and add it into the HTML
  //function printQuote



  function printQuote (){

      //get reandom quote
      getRamndomeQuotes = getrandomQuote()
      //return quote
      message= '<p class="quote">' + getRamndomeQuotes.quote + '</p>'
      //return the source
      message+= '<p class="source">' + getRamndomeQuotes.source + '</p>'
      //reuurn the citation
      if (getRamndomeQuotes.citation){
      message+= '<span class="citation">' + getRamndomeQuotes.citation +  '</span>'
      }

      if(getRamndomeQuotes.date){
        // return the date
        message+= '<span class="year">' + getRamndomeQuotes.date + '</span>'
      }
      if (getRamndomeQuotes.citation){
      message+= '<span class="citation">' + getRamndomeQuotes.citation +  '</span>'
      }
      if (getRamndomeQuotes.tag){
      message+= '<p class="citation">' + getRamndomeQuotes.tag +  '</p>'
      }

        printMessage (message);
        bgColor();
  };

// problem with this function
  function IntervalOn(){

    IntervalOff();
    intervalID = setInterval(printQuote,30);

  }
  //quoteInterval = setInterval(printQuote,30);
  function IntervalOff(){
    clearInterval(intervalID);

  }
