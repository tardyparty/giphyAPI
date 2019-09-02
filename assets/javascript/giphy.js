// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).


// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

//  array of topics to start with
var topics = [
    "dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", 
    "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", 
    "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", 
    "salamander", "frog"
]

// builds the url for the api query
var starterURL = "https://api.giphy.com/v1/gifs/search?q=";
var endURL = "&api_key=OGhYmnPJ3MgZO707Wi2K9MxzY0Mu2HUz&limit=10"

// create buttons for each array item 
for (var i=0; i<topics.length; i++){
    $("#buttons").append(`
    <button id=${topics[i]}>${topics[i]}</button>
    `);
}

// when a button is clicked, the gifs will appear at the top of the page with their rating
$(document).on("click", "button", function(){
    var tag = $(this).text();

    var queryURL = starterURL + tag + endURL;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

      // loops through each result of the query and push it to html
      for (var i=0; i < response.data.length; i++){

        // assigns the data properties to variables
        var rating = response.data[i].rating;
        var still = response.data[i].images.fixed_width_still.url;
        var animate = response.data[i].images.fixed_width.url;

        $("#gifs").prepend(`
        <div class='imgDiv'>
          <img src='${still}' data-still='${still}' data-animate='${animate}' data-state='still' class='clickGif'>
          <p class='rating'>Rating: ${rating}</p>
        </div>
        `);
      };
    });
});

// when the gif is clicked it will either start or stop depending
$(document).on("click", ".clickGif", function(){
  console.log("clickGif clicks");

  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

