mailto.ninja(); // enable mailto.ninja()

// Twitter 404 Tweet Link
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src=p+'://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document, 'script', 'twitter-wjs');

// Insert Content
$(function(){
  $("#langTable").load("/includes/langtable.html");
  $("#toolsTable").load("/includes/toolstable.html");
  $("#osTable").load("/includes/ostable.html");
  $("#cidTable").load("/includes/cidtable.html");
  $("#projTable").load("/includes/projtable.html");
  $("#socialList").load("/includes/sociallist.html");
});
