
var $UserId = $("#UserId");
var $destination =$("#address");
var $tripRemark = $("#trip-remark");
var $startDate = $("#startDate");
var $endDate = $("#endDate");
<<<<<<< HEAD
var $tripList = $("#tripList");
var $tripInterests = document.getElementsByName("interests");
//18/12/04 CHi - change the name of the id to confirm because the page needs to wait until host is selected on the modal. 
var $submitBtnT = $("#confirm");
=======
var $tripList = $("#trip-list");
var $tripInterests = $("#interests");
var $submitBtnT = $("#submitT");
>>>>>>> 7b22bf3c3397eb03fc4d4e72cac6ef9249b4cc51

// The API object contains methods for each kind of request we'll make
var API = {
  saveTrip: function (trip) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/trips",
      data: JSON.stringify(trip)
    });
  },
  getTrips: function () {
    return $.ajax({
      url: "api/trips",
      type: "GET"
    });
  },
  deleteTrip: function (id) {
    return $.ajax({
      url: "api/trips/" + id,
      type: "DELETE"
    });
  }
};

// refreshTrips gets new examples from the db and repopulates the list
var refreshTrips = function () {
  API.getTrips().then(function (data) {
    var $trip = data.map(function (trip) {
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
    $tripList.append($trip);
  });
  location.reload();
};


// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var trip = {
    destination: $destination.val(),
    remark: $tripRemark.val().trim(),
    start_date: $startDate.val(),
    end_date: $endDate.val(),
    trip_interests: $tripInterests.val(),
    //added UserId
    UserId: $UserId.val()
    //ends
<<<<<<< HEAD

    // trip_interests: tripInterestString
=======
>>>>>>> 7b22bf3c3397eb03fc4d4e72cac6ef9249b4cc51
  };

  // if (!(trip.destination && trip.remark)) {
  //   alert("You must enter an trip destination and trip interests!");
  //   return;
  // }

  API.saveTrip(trip).then(function () {
    refreshTrips();
  });
//added UserId
 $UserId.val(""); 
//ends
  $destination.val("");
  $tripRemark.val("");
  $startDate.val("");
  $endDate.val("");
  $tripInterests.val("");

};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteTrip(idToDelete).then(function () {
    refreshTrips();
  });

};

// Add event listeners to the submit and delete buttons

  
//continue the processing
$submitBtnT.on("click", handleFormSubmit);
$tripList.on("click", ".delete", handleDeleteBtnClick);

