function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

var NFLTeams = ["Arizona","Atlanta", "Baltimore", "Buffalo", "Carolina", "Chicago", "Cincinnati", "Cleveland", "Dallas", "Denver", "Detroit", "Green Bay", "Houston", "Indianapolis", "Jacksonville", "Kansas City", "LA Rams", "LA Chargers", "Miami", "Minnesota", "New England", "New Orleans", "NY Jets", "NY Giants", "Oakland", "Philadelphia", "Pittsburgh", "San Francisco", "Seattle", "Tampa Bay", "Tennessee", "Washington"];


function diceRoll(){
document.getElementById("teams").innerHTML = shuffle(NFLTeams);

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
      arr.splice(found, 1);
      found = arr.indexOf(what);
  }
}


var checkedValue = null;
var inputElements = document.getElementsByClassName('teamBox');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
        checkedValue = inputElements[i].value;
        console.log(checkedValue);
        remove(NFLTeams, checkedValue);
        continue;
      } else {
        break;
      }
}

var indexToSplit = NFLTeams.indexOf('c');
var first = NFLTeams.slice(0, 3);
var second = NFLTeams.slice(3, 6);
var third = NFLTeams.slice(6, 9);
var fourth = NFLTeams.slice(9, 12);
var fifth = NFLTeams.slice(12, 15);
var sixth = NFLTeams.slice(15, 18);
var seventh = NFLTeams.slice(18, 21);
var eighth = NFLTeams.slice(21, 24);
var nineth = NFLTeams.slice(24, 27);
var tenth = NFLTeams.slice(27, 30);
var teamsLeft = NFLTeams.slice(30, 32);

document.getElementById("team1").innerHTML = first;
document.getElementById("team2").innerHTML = second;
document.getElementById("team3").innerHTML = third;
document.getElementById("team4").innerHTML = fourth;
document.getElementById("team5").innerHTML = fifth;
document.getElementById("team6").innerHTML = sixth;
document.getElementById("team7").innerHTML = seventh;
document.getElementById("team8").innerHTML = eighth;
document.getElementById("team9").innerHTML = nineth;
document.getElementById("team10").innerHTML = tenth;
document.getElementById("team11").innerHTML = teamsLeft;
}
