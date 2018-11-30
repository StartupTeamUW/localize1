// ---FILTER BY LOCATION—
// ---FILTER BY HOST YES/NO Boolean
// ---FILTER BY INTEREST
// ---FILTER BY NUMBER OF MATCHING INTERESTS


// ---HAVE to distinguish between location vs residence and travel interest vs residence interest 




// FOR NOW!!!
// User = existing people in our API
// Input = new user who just entered their data.

var allMatches = [];
var match = [];

//looping thru the users with the first for loop
for (var i = 0; i < users.length; i++) {

    //checking if the new traveler’s traveling location matches existing user’s residence area
    //and to check whether those users that match are signed up to be hosts
    if (input.location === users[i].residence && users[i].host) {

        // trying to find the users that have the highest match with the new user(input)
        for (var n = 0; n < input.interests; n++) {

            for (var u = 0; u < users[i].localInterests; u++) {

                if (input.interests[n] === users[i].localInterests[u]) {

                    //push all matching interests to ‘match’ array
                    match.push(input.interests[n]);

                }
                else {
                    console.log("no matching interest");
                }

            };

        };//done pushing interests into match array.

        //after done pushing all the interests, count how many are matching and unshift(to the front) that value into the array.
        //Then unshift user’s name. This way the names and the matches are at index [0 & 1]
        var numbersMatched = match.length;
        match.unshift(numbersMatched);
        match.unshift(users.name)

        // put the match array into the big allMatches array
        allMatches.push(match);

        // Initialize variables..might not need this.
        numbersMatched = 0;
        match = [];

    }
    else {
        console.log("not this person");
    }// done comparing interest of new user(input) and ONE of the users that matches the location & host status. NOW will loop move on to the next user.

};// done comparing intersts of new user(input) and ALL the users that match the location & host status.




//sorting all the match(es) by number of common interests

function Comparator(a ,b){
    if (a[1] < b[1]) { 
        return 1
    } if (a[1] > b[1]) { 
        return -1
    } else {
        return 0
    };
};

allMatches = allMatches.sort(Comparator);
console.log(allMatches);


// function Comparator(a, b) {
//    if (a[1] < b[1]) return -1;
//    if (a[1] > b[1]) return 1;
//    return 0;
//  }

//  var myArray = [
//    [1, 'alfred', '...'],
//    [23, 'berta', '...'],
//    [2, 'zimmermann', '...'],
//    [4, 'albert', '...'],
//  ];



//  myArray = myArray.sort(Comparator);
//  console.log(myArray);

// for (var m = 0; m < allMatches; m++) {
//     if (allMatches[m][1] < allMatches[m + 1][1]) {
//         return 1;

//     } if (allMatches[m][1] > allMatches[m + 1][1]) {
//         return -1;

//     } else {
//         return 0;

//     }
// };