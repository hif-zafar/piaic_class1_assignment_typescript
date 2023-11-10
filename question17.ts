// Define the original guest list
const originalGuestList: string[] = [
    "Ania",
    "Maya",
    "Eurm",
  ];
  
  // Function to generate dinner invitations
  function generateInvitations(guests: string[]): string[] {
    return guests.map((guest) => `Dear ${guest}, you are invited to dinner!`);
  }
  
  // Invite guests
  const originalInvitations: string[] = generateInvitations(originalGuestList);
  
  // Print original invitations
  originalInvitations.forEach((invitation) => console.log(invitation));
  
  // Inform that only two people can be invited
  console.log("Due to a delay, we can only invite two people for dinner.");
  
  // Remove guests until only two names remain
  while (originalGuestList.length > 2) {
    const removedGuest = originalGuestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
  }
  
  // Print invitations for the two remaining people
  const remainingInvitations: string[] = generateInvitations(originalGuestList);
  remainingInvitations.forEach((invitation) => console.log(invitation));
  
  // Remove the last two names from the list
  originalGuestList.pop();
  originalGuestList.pop();
  
  // Print the empty list
  console.log("Guest list is now empty:", originalGuestList);
  