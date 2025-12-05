"use strict";
const friend = ["Rahim", "Karim"];
const schoolFriend = ["Pijush", "Chintu"];
friend.push(...schoolFriend);
const collegeFriend = ["Pijush", "Chintu"];
// friend.push(collegeFriend)
const sendInvite = (...friends) => {
    console.log(friends);
};
sendInvite("Pintu", "Cintu", "bulbul", "chulbul");
