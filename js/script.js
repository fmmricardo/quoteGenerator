// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//document.getElementById('loadQuote').addEventListener("click", IntervalOn , false);

//initialize variables
 var outputdiv = '';
 //var getRandomQuote='';
 //var message;
 var quoteList ;
 var quotesCopyArray=[];

var timer = window.setInterval(printQuote, 3000);


// function print message

 function printMessage (message){

  var outputdiv = document.getElementById('quote-box');
      outputdiv.innerHTML = message;
      console.log(message);
}

//generate a random quote
  // alternative snipet
  function getRandomQuote(){

    if (quotesCopyArray[0]=== undefined){
        quotesCopyArray= quotesCopyArray.concat(quoteList);

    }

      var randomNumber = Math.floor(Math.random()*quotesCopyArray.length);
      var getRandomQuotes = quotesCopyArray[randomNumber];
      quotesCopyArray.splice(randomNumber, 1);
      return getRandomQuotes;
    }


  //generate the random background

  function generateRBG() {

    var r = Math.floor(Math.random()* 250);
    var b = Math.floor(Math.random()* 250);
    var g = Math.floor(Math.random()* 250);

    var RGB = "rgb(" +r + "," +b+ "," +g +")";
    return RGB
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
       var getRandomQuotes = getRandomQuote();
      //return quote
      message= '<p class="quote">' + getRandomQuotes.quote + '</p>'
      //return the source
      message+= '<p class="source">' + getRandomQuotes.source + '</p>'
      //reuurn the citation
      if (getRandomQuotes.citation){
      message+= '<span class="citation">' + getRandomQuotes.citation +  '</span>'
      }

      if(getRandomQuotes.date){
        // return the date
        message+= '<span class="year">' + getRandomQuotes.date + '</span>'
      }
      if (getRandomQuotes.citation){
      message+= '<span class="citation">' + getRandomQuotes.citation +  '</span>'
      }
      if (getRandomQuotes.tag){
      message+= '<p class="citation">' + getRandomQuotes.tag +  '</p>'
      }

        printMessage(message);
        bgColor();
        window.clearTimeout(timer);
        timer = window.setInterval(printQuote, 3000);

  };
