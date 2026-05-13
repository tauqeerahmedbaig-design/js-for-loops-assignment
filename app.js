function checkCity() {
    var cityToCheck = prompt("Enter your city name");
    var cleanestCities = ["Islamabad", "Karachi", "Murree", "balochistan", "Quetta"];

    var numElements = cleanestCities.length;
    var matchFound = false;

    for (var i = 0; i < numElements; i++) {
        if (cityToCheck === cleanestCities[i]) {
            matchFound = true;
            alert("It's one of the cleanest cities");
            break;
        }
    }

    if (matchFound === false) {
        alert("It's not on the list");
    }
}

function printNumbers() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function nestedLoopTable() {
    var table = "";

    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 5; j++) {
            table += i + " x " + j + " = " + (i * j) + "\n";
        }
        table += "\n";
    }

    alert(table);
}