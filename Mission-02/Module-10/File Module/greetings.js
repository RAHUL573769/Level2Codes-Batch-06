const args = process.argv;
const time = new Date().getHours();
console.log(time);
console.log(args);
const name = args[2] || "Guest";
let greetings;
if (time < 12) {
  greetings = "Good Morning";
} else if (time < 18) {
  greetings = "Good Afternoon";
} else {
  greetings = "Good Evening";
}
console.log(`${greetings} ${name}`);
