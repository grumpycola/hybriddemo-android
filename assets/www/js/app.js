$(function() {
	
	var App = {
		
		buildList: function() {
			// sort the missions by title
			MISSIONS.sort(function(a,b) { return (a.title < b.title) ? -1 : (a.title > a.title) ? 1: 0; });
	
			// aggregate them
			var html = [];
			$.each(MISSIONS, function() {
				html[html.length] = "<li><a class='detail-link' href='#detailPage&ui-page=" + this.id + "' data-theme='a' id='" + this.id + "'>" + this.title + "</a></li>";
			});

			// now display them
			$('#listdata').empty();
		    $("#listdata").append(html.join(''));
		},
		
		
		buildSubPages: function() {
			var template = '\
<div data-role="page" id="detailPage&ui-page={{id}}">\
	<div data-role="header"><h1 style="color:white;">NASA Missions</h1></div>\
	<div data-role="content">\
	   <div class="box corners shadow">\
	     <div class="box-content">\
			<img class="pic" src="nasa/{{image}}" />\
			<h2>{{title}}</h2>\
			<a href="{{link}}" rel="external">{{link}}</a>\
			<p>{{descr}}</p>\
		 </div>\
	  </div>\
	</div>\
</div>';
		
			$.each(MISSIONS, function() {
				var html = Mustache.to_html(template, this);
				$('body').append(html);
			});		
		},
		
		buildAboutPage: function() {
			$("#platform").text(device.platform);
			$("#version").text(device.version);
		}

	};

	// building the page
	document.addEventListener("deviceready", App.buildAboutPage, true);		
	App.buildList();
	App.buildSubPages();

	// add behaviors
	$('#aboutPage-link').click(function() {
		navigator.notification.beep(1);
	});
	
	$('.detail-link').click(function() {
		navigator.notification.vibrate(0);
	});
	
});