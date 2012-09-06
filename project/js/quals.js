// Global variables
var GRAPH_WIDTH = 600;
var GRAPH_HEIGHT = 400;
var BAR_WIDTH = 35;
var BAR_SPACING;
var STUDENTS_MAX = 200;
var PASS_RATE_MAX = 100;
var statsArray = new Array({year: 2000, pass_total: 86, pass_threshold: 79, pass_appeal: 7, take: 144}, {year: 2001, pass_total: 85, pass_threshold: 82, pass_appeal: 3, take: 160}, {year: 2002, pass_total: 89, pass_threshold: 79, pass_appeal: 10, take: 194}, {year: 2003, pass_total: 94, pass_threshold: 79, pass_appeal: 15, take: 195}, {year: 2004, pass_total: 93, pass_threshold: 78, pass_appeal: 15, take: 182}, {year: 2005, pass_total: 87, pass_threshold: 82, pass_appeal: 5, take: 148}, {year: 2006, pass_total: 94, pass_threshold: 85, pass_appeal: 9, take: 160}, {year: 2007, pass_total: 102, pass_threshold: 83, pass_appeal: 19, take: 181}, {year: 2008, pass_total: 96, pass_threshold: 80, pass_appeal: 16, take: 161}, {year: 2009, pass_total: 104, pass_threshold: 86, pass_appeal: 18, take: 174}, {year: 2010, pass_total: 93, pass_threshold: 82, pass_appeal: 11, take: 152}, {year: 2011, pass_total: 102, pass_threshold: 84, pass_appeal: 18, take: 147}, {year: 2012, pass_total: 101, pass_threshold: 82, pass_appeal: 19, take: 143});

window.onload = init;

function init() {
	document.getElementById("quals_graph").style.width = GRAPH_WIDTH + "px";
	document.getElementById("quals_graph").style.height = GRAPH_HEIGHT + "px";
	drawGraph("rate");
}

function shortenYear(year) {
	var year_string = year.toString();
	return ("\'" + year_string.substring(year_string.length - 2, year_string.length));
}

function drawGraph(option) {
	clearGraph();
	BAR_SPACING = (GRAPH_WIDTH - (statsArray.length * BAR_WIDTH))/(statsArray.length + 1);  
	var graph = document.getElementById("quals_graph");
	for (var i = 0; i < statsArray.length; i++) {
		var data;
		var bar_height;
		switch (option) {
			case "pass_total":
				data = statsArray[i].pass_total;
				bar_height = (data/STUDENTS_MAX) * GRAPH_HEIGHT;
				document.getElementById("y_label_max").innerHTML = STUDENTS_MAX;
				break;
			case "pass_threshold":
				data = statsArray[i].pass_threshold;
				bar_height = (data/STUDENTS_MAX) * GRAPH_HEIGHT;
				document.getElementById("y_label_max").innerHTML = STUDENTS_MAX;
				break;
			/*case "pass_appeal":
				data = statsArray[i].pass_appeal;
				bar_height = (data/STUDENTS_MAX) * GRAPH_HEIGHT;
				document.getElementById("y_label_max").innerHTML = STUDENTS_MAX;
				break;*/
			case "take": 
				data = statsArray[i].take;
				bar_height = (data/STUDENTS_MAX) * GRAPH_HEIGHT;
				document.getElementById("y_label_max").innerHTML = STUDENTS_MAX;
				break;
			case "rate": 
				data = Math.round((100 * (statsArray[i].pass_total/statsArray[i].take)));
				bar_height = (data/PASS_RATE_MAX) * GRAPH_HEIGHT;
				document.getElementById("y_label_max").innerHTML = PASS_RATE_MAX;
				break;
		}

		var div = document.createElement('DIV');
		div.className = "bar";
		var data_label = document.createElement('P');
		data_label.appendChild(document.createTextNode(data));
		var x_label = document.createElement('SPAN');
		x_label.appendChild(document.createTextNode(shortenYear(statsArray[i].year)));
		x_label.className = "x_label";
		div.appendChild(data_label);
		div.appendChild(x_label);

		div.style.left = BAR_SPACING + (i * (BAR_SPACING + BAR_WIDTH)) + "px";
		div.style.height = bar_height + "px";
		graph.appendChild(div);
	}
}

function clearGraph() {
	var divArray = document.getElementsByTagName("div");
	for (var i = 0; i < divArray.length; i++) {
		if (divArray[i].className == "bar") {
			divArray[i].parentNode.removeChild(divArray[i]);
			i--;
		}
	}
}