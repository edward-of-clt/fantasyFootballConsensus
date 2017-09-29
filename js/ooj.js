/****
32 Team array
**********/
var NFLTeams = ["Arizona","Atlanta", "Baltimore", "Buffalo", "Carolina", "Chicago", "Cincinnati", "Cleveland", "Dallas", "Denver", "Detroit", "Green Bay", "Houston", "Indianapolis", "Jacksonville", "Kansas-City", "LA-Rams", "LA-Chargers", "Miami", "Minnesota", "New-England", "New-Orleans", "NY-Jets", "NY-Giants", "Oakland", "Philadelphia", "Pittsburgh", "San Francisco", "Seattle", "Tampa-Bay", "Tennessee", "Washington"];

/*var fullTeams = {
  Team1: {
      Value: 'arizona',
      DisplayName: "Arizona"
    },
    Team2: {
      Value: 'atlanta',
      DisplayName: "Atlanta"
    },
    Team3: {
      Value: 'baltimore',
      DisplayName: "Baltimore"
    },
    Team4: {
      Value: 'buffalo',
      DisplayName: "Buffalo"
    },
    Team5: {
      Value: 'carolina',
      DisplayName: "Carolina"
    },
    Team6: {
      Value: 'chicago',
      DisplayName: "Chicago"
    },
    Team7: {
      Value: 'cincinnati',
      DisplayName: "Cincinnati"
    },
    Team8: {
      Value: 'cleveland',
      DisplayName: "Cleveland"
    }
};*/

/***
Rosters Array
******/
  var rosters = ['teamTy', 'teamTravis', 'teamBryant', 'teamElijah', 'teamBrad', 'teamKiran', 'teamMiller', 'teamKnox', 'teamDaniel', 'teamMatt'];

  /****
  Shuffle/Randomize Array
  ******/
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

  /***
  Remove From Array
  ****/
  function remove(arr, what) {
    var found = arr.indexOf(what);

    while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
    }
  }


function weeklyTeam(name, first, second, third, keeper){
  this.name = name;
  this.teams = {
    first,
    second,
    third
  };
  this.keeper = false;
  this.display = addTeam();
}

document.addEventListener('DOMContentLoaded', function addTeam(){
  shuffle(NFLTeams);
  console.log(NFLTeams);
  for (i = 0; i < NFLTeams.length; i++) {
  var  add = NFLTeams.shift();
    console.log(add);
    weeklyTeam["teams"] = add;
  }
}, false);
