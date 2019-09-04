

//  array of topics to start with
var topics = [
    "dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", 
    "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", 
    "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", 
    "salamander", "frog",
]


// builds the url for the api query
var starterURL = "https://api.giphy.com/v1/gifs/search?q=";
var endURL = "&api_key=OGhYmnPJ3MgZO707Wi2K9MxzY0Mu2HUz&limit=10"


// create buttons for each array item 
function loadButtons(){
  // empty previous array of buttons before adding new buttons
  $("#buttons").empty();

  for (var i=0; i<topics.length; i++){
      $("#buttons").append(`
      <button class="btn">${topics[i]}</button>
      `);
  }
}


// calls button function initially
loadButtons();


// when a button is clicked, the gifs will appear at the top of the page with their rating
$(document).on("click", "button", function(){
  console.log("this works still")
    var tag = $(this).text();

    var queryURL = starterURL + tag + endURL;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

      // loops through each result of the query and push it to html
      for (var i=0; i < response.data.length; i++){
        var result = response.data[i];

        // assigns the data properties to variables
        var rating = result.rating;
        var title = result.title;
        var still = result.images.fixed_width_still.url;
        var animate = result.images.fixed_width.url;

        $("#gifs").prepend(`
        <div class='imgDiv'>
            <img 
              src='${still}' 
              data-still='${still}' 
              data-animate='${animate}' 
              data-state='still' 
              class='clickGif'>
            <p class='data'>${title}</p>
            <p class='data'> Rating: ${rating}</p>
        </div>
        `);
      };
    });
});


// when the gif is clicked it will either start or stop depending
$(document).on("click", ".clickGif", function(){

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


// takes value of user animal and creates a new button for it
$(document).on("click", "#submitButton", function(event){
  event.preventDefault();

  // adds user animal to the topics array
  var userSub = $("#newAnimal").val();
  topics.push(userSub);
  
  // rebuilds all buttons with the new array
  loadButtons();
})

