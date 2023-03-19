const loginUser = () => {
    let value1 = document.getElementById("userName").value
    let value2 = document.getElementById("emailA").value
    let value3 = document.getElementById("passWord").value
    if (value1 && value2 == "admin@user.com" && value3 == "123456") {
        alert("Submitted")
        window.location.href = "cities.html";
        document.getElementById("userNameA").innerHTML = value1
    } else {
        alert("PLZ Enter Your Data")
        return
    } 
}
let cities = ["Faisalabad", "Lahore", "Islamabad", "Karachi", "Burewala", "Sheikhupura", "Kashmir"]
for (let i = 0; i < cities.length; i++) {
    document.getElementById("inputGroup").innerHTML += i+1 + ")" + " " + cities[i] + " "
}


const addCity = () => {
    let newCity = document.getElementById("inputValue").value
    if (newCity.length < 3) {
        Toastify({
            text: "Enter Your City Name",
            className: "info",
            style: {
              background: "linear-gradient(to right, #A40606, #D98324)",
            }
          }).showToast();
          return 
    }
    let cityFirstletter = newCity.charAt(0).toUpperCase()
    let cityAllLetters = newCity.slice(1).toLowerCase()

    let capitalLetters = cityFirstletter + cityAllLetters

    let cityFound = false;
    for (let i = 0; i <cities.length; i++) {
        if (cities[i] === capitalLetters) {
        cityFound = true;
        Toastify({
            text: "Your City is Already In The List",
            className: "info",
            style: {
              background: "linear-gradient(to right, #FE0944, #FEAE96)",
            }
          }).showToast();
          return 
        }
    }
    if (cityFound === false) {
        document.getElementById("inputGroup").innerHTML = ""
        cities.push(capitalLetters)
        for (let i = 0; i < cities.length; i++) {
            document.getElementById("inputGroup").innerHTML += i+1 + ")" + " " + cities[i] + " "
        }
    }
}


function clearInput() {
    document.getElementById("inputValue").value = " "
}