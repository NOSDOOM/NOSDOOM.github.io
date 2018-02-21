var processData = function(data) {
	console.log(data);
	$("#output").empty();
	for (var i = 0; i < data.results.length; i++) {
		if (data.results[i].artworkUrl100) {
			var $div = $("<div></div>");
			var $img = $("<img src='" + data.results[i].artworkUrl600 + "' />");
			var $link = $(
				"<a href='" + data.results[i].feedUrl + "' target='_blank'></a>"
			);
			$link.html($img);
			$("#output").append($div);
			$div
				.append(data.results[i].trackName)
				.append("<br>")
				.append($link)
				.append("<br>");
		}
	}
	$("a").click(termo);
	function termo(event) {
		event.preventDefault();
		var tang = $(this)[0].href;
		$(document).ready(function() {
			parseFeed(tang, "#codrops");
		});
	}
};
var search = function() {
	var term = $("#term").val();
	$.getScript(
		"https://itunes.apple.com/search?term=" +
			term +
			"&entity=podcast&callback=processData"
	);
};

$("#search").click(search);
search();
// YQL: https://developer.yahoo.com/yql/
// YQL Console: https://developer.yahoo.com/yql/console/

function parseFeed(url, container) {
	// yql query
	var query =
		"https://query.yahooapis.com/v1/public/yql?q=" +
		encodeURIComponent('select * from feednormalizer where url="' + url + '"') +
		"&format=json";

	// send request
	$.getJSON(query, function(data, status, errorThrown) {
		// if successful... *
		if (status === "success") {
			// log object data in console
			console.log(data);
			$(container).empty();
			// append feed link and title in container
			$(container).append(
				'<a href="' + url + '"><span class="oi" data-glyph="rss-alt"></span></a>'
			);
			$(container).append(
				'<h1 class="feed">' + data.query.results.rss.channel.title + "</h1>"
			);

			// for each entry... *
			$.each(data.query.results.rss.channel.item, function(key, value) {
				// * create new date object and pass in entry date
				var date = new Date(value.pubDate);

				// * create months array
				var months = new Array(12);
				months[0] = "January";
				months[1] = "February";
				months[2] = "March";
				months[3] = "April";
				months[4] = "May";
				months[5] = "June";
				months[6] = "July";
				months[7] = "August";
				months[8] = "September";
				months[9] = "October";
				months[10] = "November";
				months[11] = "December";

				// * parse month, day and year
				var month = date.getMonth();
				var day = date.getDate();
				var year = date.getFullYear();
				// * build content snippet
				var content = (value.description || value.summary)
					.replace(/<\/?[^>]+>/gi, "")
					.substring(0, 160);
				if (value.summary.length || value.description.length > content.length) {
					content += " ...";
				}

				// * assign entry variables
				var title =
					'<h3 class="title"><a href="' +
					value.link +
					'" target="_blank">' +
					value.title +
					"</a></h3>";
				var time =
					'<p class="time">' + months[month] + " " + day + ", " + year + "</p>";
				var snippet = '<p class="snippet">' + content + "</p>";
				var muzik =
					'<audio controls class="snippet" preload="none">' +
					'<source src="' +
					value.enclosure.url +
					'"' +
					"</source></audio>";
				var entry =
					'<div class="entry">' + title + time + snippet + muzik + "</div>";

				// * append entire entry in container
				$(container).append(entry);
			});

			// if there's an error... *
		} else if (status === "error" || status === "parsererror") {
			// * log error message in console
			console.log(errorThrown);

			// * show error message
			alert("Could not load RSS feed!");
		}
	});
}
$('input:text').focus(
    function(){
        $(this).val('');
    });
$("#search").click(
function(){
	$("#term").val('Search');
});