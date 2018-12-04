// Get references to page elements
var $userName = $("#username");
var $userEmail = $("#user-email-address");
var $userPassword = $("#user-password");
var $phoneNumber = $("#phone-number");
var $profilePicUrl = $("#profile-photo");
var $firstName = $("#first-name");
var $lastName = $("#last-name");
var $gender = $("#gender");
var $DOB = $("#DOB");
var $hometown = $("#hometown");
var $bio = $("#bio");
var $languages = $("#languages");
var $whyOn =$("#why-on");
var $oneAThing =$("#one-A-thing");
var $hobby =$("#hobby");
var $countries =$("#countries-lived");
var $whatIShare =$("#what-I-share");
// var $interests = [$('input[name ="Food"]:checked').val()]

var $interests = $("#interests");
var $guideStatus = $("#guideStatus");
var $submitBtnU = $("#submitU");
var $userList = $("#user-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function (user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  getUsers: function () {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },
  editUsers: function (id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "PUT"
    });
  },
  deleteUser: function (id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshUsers = function () {
  API.getUsers().then(function (data) {
    var $users = data.map(function (user) {
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
    //maybe add spliting here?
  });
  location.reload();
};

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function (event) {

  event.preventDefault();

  var user = {
    user_name: $userName.val().trim(),
    email: $userEmail.val().trim(),
    password: $userPassword.val(),
    // phonenumber: $phoneNumber.val(),
    profile_pic_url: $profilePicUrl.val(),
    first_name: $firstName.val(),
    last_name: $lastName.val(),
    gender: $gender.val(),
    DOB: $DOB.val(),
    hometown: $hometown.val(),
    bio: $bio.val(),
    languages: $languages.val(),
    whyOn: $whyOn.val(),
    one_Athing: $oneAThing.val(),
    hobby: $hobby.val(),
    countries: $countries.val(),
    what_I_share: $whatIShare.val(),
    // guide_status : $guideStatus.val(),
    interests: $interests.val()

  };

  // if (!(user.userName && user.userEmail)) {
  //   alert("You must enter a valid username and email address!");
  //   return;
  // }

  API.saveUser(user).then(function () {
    refreshUsers();
  });

  $userName.val("");
  $userEmail.val("");
  $userPassword.val("");
  // $phoneNumber.val("");
  $profilePicUrl.val("");
  $firstName.val("");
  $lastName.val("");
  $gender.val("");
  $DOB.val("");
  $hometown.val("");
  $bio.val("");
  $languages.val("");
  $whyOn.val("");
  $oneAThing.val("");
  $hobby.val("");
  $countries.val("");
  $whatIShare.val("");
  $interests.val("");

};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteUser(idToDelete).then(function () {
    refreshUsers();
  });
};

var handleEditBtnClick = function () {
  var idToEdit = $(this)
    .parent()
    .attr("data-id");

  API.editUser(idToEdit).then(function () {
    refreshUsers();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtnU.on("click", handleFormSubmit);

$userList.on("click", ".delete", handleDeleteBtnClick);
