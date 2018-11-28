// Get references to page elements
var $destination = $("#destination");
var $tripRemark = $("#trip-remark");
var $startDate= $("#startDate");
var $endDate = $("#endDate");
var $tripInterests = $("trip_interests")
var $submitBtnT = $("#submitT");

// The API object contains methods for each kind of request we'll make
var API = {
  saveTrip: function(trip) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/trips",
      data: JSON.stringify(trip)
    });
  },
  getTrips: function() {
    return $.ajax({
      url: "api/trips",
      type: "GET"
    });
  },
  deleteTrip: function(id) {
    return $.ajax({
      url: "api/trips/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshTrips = function() {
  API.getTrips().then(function(data) {
    var $trips = data.map(function(trip) {
      var $a = $("<a>")
        .text(trip.destination)
        .attr("href", "/trip/" + trip.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": trip.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $tripList.empty();
    $tripList.append($trips);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var trip = {
    destination: $destination.val().trim(),
    remark: $tripRemark.val().trim(),
    start_date: $startDate.val(),
    end_date: $endDate.val(),
    trip_interests: $trip_interests.val().trim(),
  };

  if (!(trip.destination && trip.trip_interests)) {
    alert("You must enter an trip destination and trip interests!");
    return;
  }

  API.saveTrip(trip).then(function() {
    refreshTrips();
  });

  $destination.val("");
  $tripRemark.val("");
  $startDate.val("");
  $endDate.val("");
  $trip_interests.val("");
  
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteTrip(idToDelete).then(function() {
    refreshTrips();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtnT.on("click", handleFormSubmit);
$tripList.on("click", ".delete", handleDeleteBtnClick);






$("input[class*='datepicker-']").pickadate({
    selectMonths: true,
    selectYears: 100,
    format: 'dd/mmm/yyyy',    // Canadian date format, eh.
    onSet: function(obj){
      let thisPicker = $(this)[0].$node;    // Needed to hack to get the thing I was after.
  
      // Check if this is the start date
      let classes = thisPicker.attr("class");
      if (classes === undefined || classes.length === 0 || classes.indexOf("datepicker-start") < 0){
        return;
      }
  
      // .datepicker-start must be wrapped in a div.input-field element (in this example), and
      // .datepicker-end must be in the next div.input-field.  Change selectors for your conditions.
      let parent1 = thisPicker.closest("div.input-field");    // This picker's parent
      let parent2 = parent1.next("div.input-field");          // Next picker's parent
      let picker2 = parent2.find(".datepicker-end");          // Matching 'end' picker
      
      // Set end picker minimum date, or whatever you need.
      if(obj.select){
        let dt = new Date(obj.select);
        picker2.pickadate('picker').set('min', dt);
      }
  
      if(obj.hasOwnProperty('clear')){
        picker2.pickadate('picker').set('min', false);
      }
    }
  });
