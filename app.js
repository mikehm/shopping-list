
$(document).ready(function(){
    $('#add').attr('disabled',true);
    $('#item, #qty, #price').keyup(function(){
        if(($(this).val().length !=0) && isNaN($("#qty").val()) == false &&  isNaN($("#price").val()) == false )
            $('#add').attr('disabled', false);            
        else
            $('#add').attr('disabled',true);
    })
});

$(document).ready(function(){

  (function() {
    
      return arr = [];
  
    })();

$("#add").click(function(event){
    event.preventDefault();
    var item = $("#item").val();
    var qty = parseInt($("#qty").val());
    var price = parseFloat($("#price").val());
    var total = qty * price;
    total = parseFloat(total.toFixed(2));
    arr.push(total);

/* --- Begin DOM addition of rows to the table -- */

  $("table").append("<tr class='rows' >"+
  "<td>"+item+"</td>"+
  "<td>"+qty+"</td>"+
  "<td>"+price+"</td>"+
  "<td id='total'>"+total+"</td>"+
  "<td>"+"<button id='yes'>"+"yes"+"</button>"+"</td>"+
  "<td>"+"<button id='rem'>"+"remove"+"</button>"+"</td>"+
  "</tr>");

/* --- End DOM addition of rows to the table -- */
 
  console.log("the array: " +arr);
/* --- Begin Calulate the gross total -- */

  var grossTotal = 0;
 
  for(var i = 0; i < arr.length; i++) {

    grossTotal = grossTotal + arr[i];

  }
  console.log(grossTotal);
  $("#gross").text(grossTotal);

  /* --- End Calulate the gross total -- */

  /* ---  Begin Clear Table - */
  $("#clear").click(function(event){
    event.preventDefault();
    $(".rows").remove();
    arr.length = 0;
    grossTotal = 0;
    $("#gross").text(grossTotal);
  });

  /* ---  End Clear Table - */

  /* -- Begin Clear Input values -- */

  $("#item").val("");
  $("#qty").val("");
  $("#price").val("");

  /* -- End Clear Input values -- */
});

$(".table").on("click", "#yes", function(event){
  event.preventDefault();
  $(this).closest("tr").css("background", "rgb(0, 220, 50)")
});


$(".table").on("click", "#rem", function(event){
  event.preventDefault();

  var itemtoRemove = $(this).closest("tr").find("#total").text();
  console.log(itemtoRemove);
 
  function remove(a, item){
    var i;
    while((i = a.indexOf(item)) != -1) {
      a.splice(i,1)
    }
  }

  
  remove(arr,itemtoRemove);
  
  console.log(arr);
  
  $(this).closest("tr").remove();


});



});






