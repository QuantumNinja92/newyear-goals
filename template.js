// template function
function goalsTemplate(id, title, goals, state){
  var goalspanel;
  var top = "<div class='panel-group'>";
  top  = top + "<div class='panel panel-default'>";
  top  = top + "<div class='panel-heading'>";
  top  = top + "<h4 class='panel-title'>";
  top = top + "<a data-toggle='collapse' href='#collapse";

  var success = "<div class='panel-body alert alert-success'>";
  var pending = "<div class='panel-body alert alert-danger'>";


  goalspanel = top + id + "'>" + title + "</a></h4> </div> <div id='collapse" + id +"' class='panel-collapse collapse'> ";

  // goals loop
  for(var i = 0; i < goals.length ; i++){
    if(state[i] === 1){
      goalspanel = goalspanel + success + goals[i] + "</div>";
    }else{
      goalspanel = goalspanel + pending + goals[i] + "</div>";
    }
  }

  goalspanel = goalspanel + "</div></div></div>";

  return goalspanel;
}
