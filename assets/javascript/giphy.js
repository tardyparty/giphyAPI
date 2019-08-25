



// Your app should take the topics in this array and create buttons in your HTML.


// Try using a loop that appends a button for each string in the array.


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

// api call minus specific tag value
var starterURL = "https://api.giphy.com/v1/gifs/random?api_key=OGhYmnPJ3MgZO707Wi2K9MxzY0Mu2HUz&tag="

// create buttons for each array item 
for (car i=0; i<topics.length; i++){
    $(".section").html(`
    <button id=${topics[i]}>${topics[i]}</button>
    `)
}