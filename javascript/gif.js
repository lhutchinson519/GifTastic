//inital buttons being pushed to the page
var topics = ["Basketball", "Soccer", "Football", "Hockey", 
"Golf", "Lacrosse", "Track", "Cross Country", "Volleyball", 
"Rugby", "Squash", "Biking"] 

//function re-renders the HTML to display the right stuff
      function displayTopicInfo() {

        var topic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Creating an AJAX call for the specific sport button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

        	console.log(response)

			//for loop to define i
	        for ( var i=0; i < response.data.length; i++) {

	        	console.log(response.data.length);

				//create image tag for each data image
	        	var image = $("<img>")
						        .attr("src", response.data[i].images.fixed_height_still.url)
						        .attr("still", response.data[i].images.fixed_height_still.url)
						        .attr("moving",response.data[i].images.fixed_height.url)
						        .on("click", function(animate){
						        	console.log($(this).attr("src"));
						        	console.log($(this).attr("still"));

						        	if ($(this).attr("src") == $(this).attr("still"))
						        			$(this).attr("src", $(this).attr("moving"))
						        	else 
						        		$(this).attr("src", $(this).attr("still"))
						        		});		        		

	        	$("#image-container").append(image)

	        	//create paragraph that holds the rating 
				var rating = $("<div>")
								.attr("rating", response.data[i].rating);
								console.log(response.data[i].rating);

				$("#image-container").append("Rating: " + response.data[i].rating);

				// var parentImage= $("<div>")
				// 						.attr("src", response.data[i].images.fixed_height_still.url)
				// 						.attr("moving", response.data[i].images.fixed_height.url)
				// 						.append("src", response.data[i].rating);
					};
				});
    		};

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


	 	$(document).on("click", ".sport", function(){
	 		$("#image-container").empty();
	 	});

	   	$(document).on("click", ".sport", displayTopicInfo);



//clicking on picture to stop
//add values to buttons to bring down 10 gifs
