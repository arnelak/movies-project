$(document).ready(function(){
  var url = document.location.search.split("=");
  var decoded = decodeURIComponent(url[1]);

  var actor = '';
  actorsObject.forEach(function(item){
      if(item.name.toLowerCase() == decoded.toLowerCase()) actor = item;
  });

  $("#mainImg").attr("src", actor.image);

  var actorElement =
      `<div class="col-xs-12 col-sm-5">
          <img class="img-responsive" id="poster" src="${actor.image}" />
      </div>
      <div class="col-xs-12 col-sm-7">
        <div class="singleDescription">
          <h1>${actor.name}</h1>
          <p>${actor.biography}</p>
       </div>
     </div>`;


  $(".actorsRow").append(actorElement);
});
