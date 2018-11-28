// Get references to page elements
var $userName = $("#user_name");
var $userEmail = $("#userEmail");
var $userPassword = $("#password");
var $profilePicUrl = $("#profilePicUrl");
var $firstName = $("#firstName");
var $lastName = $("#lastName");
var $gender = $("#gender");
var $DOB = $("#DOB");
var $hometown = $("#hometown");
var $bio = $("#bio");
var $guideStatus = $("#guideStatus");
var $userInterests = $("#userInterests");


var $submitBtnU = $("#submitU");
var $userList = $("#user-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  getUsers: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },
  deleteUser: function(id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshUsers = function() {
  API.getUsers().then(function(data) {
    var $users = data.map(function(user) {
      var $a = $("<a>")
        .text(user.user_name)
        .attr("href", "/user/" + user.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": user.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $userList.empty();
    $userList.append($users);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    user_name: $userName.val().trim(),
    email: $userEmail.val().trim(),
    password: $userPassword.val(),
    profile_pic_url: $profilePicUrl.val(),
    first_name: $firstName.val().trim(),
    last_name: $lastName.val().trim(),
    gender: $gender.val().trim(),
    DOB: $DOB.val(),
    hometown: $hometown.val().trim(),
    bio: $bio.val().trim(),
    guide_status : $guideStatus.val(),
    userInterests : $userInterests.val()
    
  };

  if (!(user.userName && user.userEmail)) {
    alert("You must enter a valid username and email address!");
    return;
  }

  API.saveUser(user).then(function() {
    refreshUsers();
  });

  $userName.val("");
  $userEmail.val("");
  $userPassword.val("");
  $profilePicUrl.val("");
  $firstName.val("");
  $lastName.val("");
  $gender.val("");
  $DOB.val("");
  $hometown.val("");
  $bio.val("");
  $guideStatus.val("");
  $userInterests.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteUser(idToDelete).then(function() {
    refreshUsers();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtnU.on("click", handleFormSubmit);
$userList.on("click", ".delete", handleDeleteBtnClick);

