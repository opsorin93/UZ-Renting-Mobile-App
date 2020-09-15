

var index =0;
var page;
var lewis = ["img/p.JPG", "img/property1_2.JPG", "img/property1_3.JPG"];
var chris = ["img/property2_1.JPG", "img/property2_2.JPG", "img/property2_3.JPG", ];
var images = [];

function init(){
$(document).on("pageshow","#property1", function(){
	if($("#popupPhoto1").on("swiperight",function (){
		$("#popupPhoto1 img").attr("src", images[index+1]) 
		if (index > images.length-1){
				index = 0;
		}
	}));
    if($("popupPhoto1").on("swipeleft", function(){
		$("popupPhoto1 img").attr("src", images[index-1])
		if (index < 0){
				index = 0;
	   }
	}));
});
$(document).on("pageshow","#property1", function(){
	if($("#popupPhoto2").on("swiperight",function (){
		$("#popupPhoto2 img").attr("src", images[index+1])
		if (index > images.length-1){
				index = 0;
		}
	}));
	if($("popupPhoto2").on("swipeleft", function(){
		$("popupPhoto1 img").attr("src", images[index-1])
		if (index < 0){
				index = 0;
		}
	}));
    });
}

$(document).on("pageshow", function() {
  page = $.mobile.activePage[0].id;

  if (page == "property1") {
    images = lewis;
  } else if (page == "property2") {
    images = chris;
  }
  init();
});

