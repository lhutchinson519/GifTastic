//inital buttons being pushed to the page
var topics = ["Basketball", "Soccer", "Football", "Hockey", 
"Golf", "Lacrosse", "Track", "Cross Country", "Volleyball", 
"Rugby", "Squash", "Biking"] 

//function re-renders the HTML to display the right stuff
      function displayTopicInfo() {

        var topic = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC";

        // Creating an AJAX call for the specific sport button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	console.log(response.data[0].embed_url);
        	$("#add-sport").append("src", response.data[0].bitly_url);

	    });
    }

	  function renderButtons(){

	  	$("#sportButtons").empty();

	  	for (var i=0; i<topics.length; i++)
	  	{
	  		//creating a button
	  		var a = $("<button>");
	  		//add class to button
	  		a.addClass("sport");
	  		//add data attribute with value of topic at index i
	  		a.attr("data-name", topics[i]);
	  		//provide button's text with value of topic at index i
	  		a.text(topics[i]);
	  		$("#sportButtons").append(a);
		  	}
	  	}
	  renderButtons();
	 
	 $("#add-sport").on("click", function(event){
	 	event.preventDefault();
	 	var topic = $("#sport-input").val().trim();
	 	topics.push(topic);
	 	renderButtons();

	 });

	   $(document).on("click", ".sport", displayTopicInfo);

//limit 10
//clicking on picture makes them move and stops
//on click buttons
//add values to buttons to bring down 10 gifs
//adding will add to the array
