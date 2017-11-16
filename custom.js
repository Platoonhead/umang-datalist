function Element(subcatagory,primarycatagory) {
    this.subcatagory = subcatagory;
    this.primarycatagory = primarycatagory;
}

const first   =   new Element("Infra", "scala");
const second  =   new Element("Devops", "jankins");
const third   =   new Element("Frontend", "Html");
const fourth  =   new Element("Backend", "scala") ;
const fifth   =   new Element("Devops", "code ship") ;
const sixth   =   new Element("Frontend", "Angular") ;
const seventh =   new Element("testing", "sillenium") ;
const eighth  =   new Element("Devops", "docker") ;

const fields = [first, second, third, fourth, fifth, sixth, seventh, eighth];

var result = "";

$("#datalist").keyup(function(event){
    var keyword = $("#datalist").val().toLowerCase(); 
    result = "";
    prepareResult(keyword)
});

function prepareResult(keyword){
    fields.forEach(function (element) {
       if(element.subcatagory.toLowerCase().includes(keyword)){
          result = result + '<div class="result" id="'+element.subcatagory+'-'+element.primarycatagory+'"><div class="sub-catagory wordwrap"><strong>'+element.subcatagory+'</strong></div><div class="primary-catagory">'+element.primarycatagory+'</div> </div>'
       }
    }); 
    $('#results-outer').html(result);
    $('#results-outer').show();
    result = "";
}

 $("#drop-btn").click(function(){
     var keyword = $("#datalist").val().toLowerCase();
     if( keyword == ""){
        if($('#results-outer').is(":visible")){
             $('#results-outer').hide();
        }else{
          prepareResult("");
        }
      }
     else{

       if($('#results-outer').is(":visible")){
           $('#results-outer').hide();
        }else{
          prepareResult(keyword);
        }
     }
});
 
$("#submit-btn").click(function(){
  alert( $("#pair").val().split('-'));
}); 
 
$("#datalist").blur(function() {
     $('#results-outer').hide()
});

$(document).mouseup(function(e) {
    var container = $("#holder");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    $('#results-outer').hide()
});

$("html").delegate( ".result", "mousedown", function() { 
  var attribute = $(this).attr('id');
  var splits = attribute.split('-');
  $("#datalist").val(splits[0]);
  $("#pair").val(attribute);
  $('#results-outer').hide();
});

$("html").delegate( ".result", "mouseover", function() { 
   $(this).addClass('over');
   
});

$("html").delegate( ".result", "mouseleave", function() { 
   $(this).removeClass('over');
  
});

