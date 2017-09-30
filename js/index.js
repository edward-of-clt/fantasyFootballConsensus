var NFLTeams = ["Arizona","Atlanta", "Baltimore", "Buffalo", "Carolina", "Chicago", "Cincinnati", "Cleveland", "Dallas", "Denver", "Detroit", "Green Bay", "Houston", "Indianapolis", "Jacksonville", "Kansas City", "LA Rams", "LA Chargers", "Miami", "Minnesota", "New England", "New Orleans", "NY Jets", "NY Giants", "Oakland", "Philadelphia", "Pittsburgh", "San Francisco", "Seattle", "Tampa Bay", "Tennessee", "Washington"];

var Teams = [ "Ty Eades", "Travis Hyatt", "John Bryant", "Elijah Townsend", "Brad Royal", "Kiran Mangipudi", "John Miller", "Ryan Knox", "Daniel Hedrick", "Matt Armfield" ];


var NFLApp = class {

  constructor(Teams,NFLTeams) {
    this.teams = Teams;
    this.NFLTeams = NFLTeams;

    this.info = {
        count: this.teams.length-2,
        current: -1
    };

    this.showTeams();
    this.showKeepers();

    this.documentready();
  }

  documentready() {
    document.getElementById('roll-button').setAttribute('style','');
  }

  showTeams() {
    document.getElementById('draftTeam').innerHTML = '<h1>Teams</h1>';
    for(var x in this.teams) {
      document.getElementById('draftTeam').innerHTML = this.getContent('draftTeam')+'<li>'+this.teams[x]+'<div id="team'+x+'"></div></li>';
    }
  }

  getContent(id) {
    return document.getElementById(id).innerHTML;
  }

  showKeepers() {
    document.getElementById('keepers').innerHTML = '<h1>Keepers</h1>';
    for(var x in this.NFLTeams) {
      document.getElementById('keepers').innerHTML = this.getContent('keepers')+' <label>'+this.NFLTeams[x]+' <input value="'+this.NFLTeams[x]+'" id="NFLTeam'+x+'" class="teamBox" type="checkbox"></label><br/>';
    }
  }

  shuffleNFL() {
      var ctr = this.NFLTeams.length, temp, index;
      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = this.NFLTeams[ctr];
          this.NFLTeams[ctr] = this.NFLTeams[index];
          this.NFLTeams[index] = temp;
      }
      return this.NFLTeams;
  }

  removeFromList(team) {
      var found = this.NFLTeams.indexOf(team);

      while (found !== -1) {
          this.NFLTeams.splice(found, 1);
          found = this.NFLTeams.indexOf(team);
      }
  }

  addToOwner(team,id) {

    if(this.info.count < this.info.current) {
      this.info.current = 0;
    } else {
      this.info.current++;
    }

    document.getElementById('team'+this.info.current).innerHTML = this.getContent('team'+this.info.current)+'<div>'+team+'</div>';
  }

  diceRoll(){
      document.getElementById("teams").innerHTML = this.shuffleNFL();

      var checkedValue = null;

      if(this.NFLTeams.length-2 > this.teams.length) {
        for(var i=0; i < this.teams.length; ++i){
              if(!document.getElementById('NFLTeam'+i).checked){
                checkedValue = this.NFLTeams[i];
                this.removeFromList(checkedValue);
                this.addToOwner(checkedValue);
              }
        }
      }
  }

}

var app = new NFLApp(Teams,NFLTeams);
