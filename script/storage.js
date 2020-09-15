// Setting up the local storage // 

$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	if(page === "favorites") {
		if (typeof(Storage) != "undefined") {
			displayFavorites(getData());
}}});
	

function addFavorites(name, id) {
	var storedFavorites = getData();
	if (storedFavorites === null) {
		var storedFavorites = [
		{name: name, id: id}];
	} else {
		var favorites = { };
		favorites.name = name;
		favorites.id = id;
		storedFavorites.push(favorites);
	}

	localStorage.setItem("storedFavorites",JSON.stringify(storedFavorites));
}


function getData() {
	var storedFavorites = JSON.parse( localStorage.getItem('storedFavorites'));
	return storedFavorites;
}

function displayFavorites(details) {
	var displayText;
	if(details){
		displayText = '<ul data-role="listview" data-inset="true" class="ui-listview">';

  	for(var i in details) {
  		displayText += '<li><a style="text-align: center; " href=\"#' + details[i].id + '\" class="ui-btn" >' + details[i].name + '</a></li>';
  	}
  	displayText += '</ul>';
	$("#removeFav").css("display","block");
	
	}
	else displayText = '<p>You have no favorites properties saved.';
	$("#storedFav").html(displayText);
}

function removeFav(name, id) {
	localStorage.removeItem("storedFavorites");
    S("removeFav").css("display","none");
	$("storedFav").css("display","none")
}




	