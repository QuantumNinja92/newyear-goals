var goalsSection = document.getElementById('goals');
var index = 1;
var title = "Hello New Year";
var mygoals = [
  "love new year",
  "have six packs",
  "eat well"
];
var mystate = [
  0,
  1,
  0
];
goalsSection.innerHTML = goalsTemplate(index, title, mygoals, mystate);
