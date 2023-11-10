// Define the original guest list
var originalGuestList = [
    "Ania",
    "Maya",
    "Eurm",
];
// Function to generate dinner invitations
function generateInvitations(guests) {
    return guests.map(function (guest) { return "Dear ".concat(guest, ", you are invited to dinner!"); });
}
// Invite guests
var originalInvitations = generateInvitations(originalGuestList);
// Print original invitations
originalInvitations.forEach(function (invitation) { return console.log(invitation); });
// Inform that only two people can be invited
console.log("Due to a delay, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (originalGuestList.length > 2) {
    var removedGuest = originalGuestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitations for the two remaining people
var remainingInvitations = generateInvitations(originalGuestList);
remainingInvitations.forEach(function (invitation) { return console.log(invitation); });
// Remove the last two names from the list
originalGuestList.pop();
originalGuestList.pop();
// Print the empty list
console.log("Guest list is now empty:", originalGuestList);
