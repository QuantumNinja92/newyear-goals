var goalsSection = document.getElementById('goals');
for(var j = 0 ; j < mygoals.length; j++){
  goalsSection.innerHTML = goalsSection.innerHTML + goalsTemplate(j+1, mygoals[j].title, mygoals[j].goals, mygoals[j].state);
}
