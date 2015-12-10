$(".speed").click(function() {
 
 $(".spbutton").removeClass("click");
 $(this).addClass("click");
 });

$(".animations").click(function() {

 
 $(".anbutton").removeClass("click");
 $(this).addClass("click");
 });

$("#play_button").click(function() {
 $(this).addClass("submit-button-click");
 setTimeout(function(){
 	$("#play_button").removeClass("submit-button-click");
 }, 250);
});

$("#save_button").click(function() {
 $(this).addClass("submit-button-click");
 setTimeout(function(){
 	$("#save_button").removeClass("submit-button-click");
 }, 250);
 messageSave();
});

function messageSave() {
 var fileName = prompt('Please choose a file name to save:');
 if (fileName != null) {
 	if (localStorage['numCartItems'] == null) {
 		localStorage['numCartItems'] = 0;
 	}
    var currentItemIdx = parseInt(localStorage['numCartItems']);
    
    localStorage['cartItem' + currentItemIdx.toString()] = fileName;

    localStorage['numCartItems'] = currentItemIdx + 1;
    document.getElementById('cart').innerHTML = currentItemIdx + 1;
  }  
}

function windowLoaded() {
	var value = localStorage['numCartItems'];
	if (value == null) {
		value = 0;
	}
	document.getElementById('cart').innerHTML = value;
}

function cartLoaded() {
    if (localStorage['numCartItems'] != null) {
	   var itemCount = parseInt(localStorage['numCartItems']);
	   var newContent = "";
	   for (var i = 0; i < itemCount; i++) {
	      newContent = newContent +"<div class='col col100 cart_list'>" + "<div class='col col60 cart_item'>" + "<a href='#'>" + localStorage['cartItem' + i.toString()] + "</a></div>" + "<div class='col col20 delete'>" + "<a href='#'>" + "<img src='images/icons/delete.svg' alt='Delete' onclick='deleteCartItem("+i+")'/>" + '</a></div>' + "<div class='col col20 schedule' onclick='scheduleClick("+i+")'>" +  "<img src='images/icons/calendar.svg'>" + "</div>" + "<div class='col col100 schedule_date' id='schedule_date"+i+"'>" +"<input type='datetime-local' name='bdaytime' >" + "<input type='submit' value='Submit' class='submit_schedule'>" + "</div></div>" ;
	   }
	   document.getElementById('cartContents').innerHTML = newContent;
    }
}

function deleteCartItem(number){
   // move subsequent items
   var totalItems = parseInt(localStorage['numCartItems']);

   for (var i = parseInt(number); i < totalItems; i++) {
      localStorage['cartItem' + i] = localStorage['cartItem' + (i + 1)];
   }

   localStorage.removeItem('cartItem' + (totalItems - 1));

   localStorage['numCartItems'] = totalItems - 1;
   window.location.reload();
}


function scheduleClick(number){

   var uniqueId = '#schedule_date' + number;
   $(uniqueId).toggle("slide", "right", 300);

}


 












