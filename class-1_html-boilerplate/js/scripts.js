// week 1

//exercise 1

console.log("hello");

let greeting_container;
//assign greeting to variable

greeting_container="Hannah";

console.log(greeting_container);

alert("greetings" + greeting_container);

document.write('<p>' + greeting_container + '</p>')

//exercise 2 

const button = document.getElementById('button');
const rainbow=['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];

}

button.addEventListener('click', change)

//exercise 3
//simple DOM manipulation example

const now = new Date();
const hours = now.getHours();

document.write(`it is now: ${hours}. <br><br>`);
let bgColor="black";

if (hours > 17 && hours < 20) {
    bgColor= "orange";
} else if (hours > 19 && hours <22) {
    bgColor="orangered";
} else if (hours > 21 || hours < 5) {
    bgColor = "#C0C0C0";
} else if (hours > 8 && hours < 18) {
    bgColor = "lightblue";
} else if (hours > 6 && hours < 9) {
    bgColor = "skyblue";
} else if (hours > 4 && hours < 7) {
    bgColor = "steelblue";
} else {
    bgColor="white";
}
document.body.style.background=bgColor;

