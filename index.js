
function Sum() {
	username = document.getElementById('username').value
	password = document.getElementById('password').value

	sum = parseInt(username) + parseInt(password)
	alert(sum)
}


	
function ShowMe() {
	username = document.getElementById('username').value
	password = document.getElementById('password').value
	display_username = document.getElementById('display_username').innerText =
	"Username: " + username
	display_password = document.getElementById('display_password').innerHTML =
	"Username: " + password

}

function onTitleHover() {
	alert('Daniel')
}

var x = 1
y = 2
let hassan = 4
const pi = 3.14




// object
student1 = {name : "Fidaa" , age : 30}
student2 = {name: "Badih", age: 120 }
// alert(student2.name)

// Array of names
names = ["Elena", "Salaman", "Yara", "Malak"]

// Array of numbers
numbersArray = [1, 2, 3, 4, 5]

// Array of objects
students = [
	{ name: "Fidaa", age: 30 },
	{ name: "Badih", age: 15 }
]

// alert(names[3])
alert(numbersArray.slice(1,4))