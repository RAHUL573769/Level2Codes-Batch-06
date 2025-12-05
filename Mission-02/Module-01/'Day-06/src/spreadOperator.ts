

const friend: string[]=["Rahim","Karim"]

const schoolFriend: string[]=["Pijush","Chintu"]

friend.push(...schoolFriend)


const collegeFriend: string[]=["Pijush","Chintu"]
// friend.push(collegeFriend)

const sendInvite=(...friends:string[])=>{

console.log(friends)
}


sendInvite("Pintu","Cintu","bulbul","chulbul")