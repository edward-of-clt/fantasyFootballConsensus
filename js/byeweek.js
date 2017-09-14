/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "../byeWeeks.xml", true);
xhttp.send();

function myFunction(xml) {
    var x, txt, xmlDoc;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("Team");
    for (i = 0; i < x.length; i++) {
       txt += x[i].getAttribute('name') + "<br>";


    document.getElementById("byeWeeks").innerHTML = txt;
}*/

Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};


var curr = new Date;
var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));

console.log(new Date().getWeekNumber());

  var week;
switch (true){
    case new Date().getWeekNumber() == 37:
        week = "Miami Dolphins, Tampa Bay Buccaneers";
        break;
    case new Date().getWeekNumber() == 38:
        week = "Atlanta Falcons, Denver Broncos, New Orleans Saints, Washington Redskins";
        break;
    case new Date().getWeekNumber() == 39:
        week = "Buffalo Bills, Cincinnati Bengals, Dallas Cowboys, Seattle Seahawks";
        break;
    case 3:
        week = "Houston Texans, Detroit Lions";
        break;
    case 4:
        week = "Tennessee Titans, New York Giants, Jacksonville Jaguars, Arizona Cardinals, LA Rams, Green Bay Packers";
        break;
    case 5:
        week = "Chicago Bears, Cleveland Browns, San Diego Chargers, Pittsburgh Steelers, Minnesota Vikings, New England Patriots";
        break;
    case 6:
        week = "Baltimore Ravens, Kansas City Chiefs, Oakland Raiders, Philadelphia Eagles";
        break;
    case 7:
        week = "San Francisco 49ers, New York Jets, Carolina Panthers, Indianapolis Colts";
        break;
    default:
      week = "No Teams";
}
document.getElementById("byeWeeks").innerHTML = week + " On Bye";
