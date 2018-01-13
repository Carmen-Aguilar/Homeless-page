var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "The ten cities with the lowest rate of homelessness in England",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 20,
    padding: 15,
	},
	axisY: {
		title: "% Acceptances by authorities",
		fontFamily: "Montserrat",
	},
  dataPointMaxWidth: 60,
	data: [{
		type: "column",
    color: "#0881A3",
		showInLegend: false,
		legendText: "Source: Statutory Homelessness - Department for Communities and Local Government",
		dataPoints: [
			{ y: 4.5, label: "Dudley", color: "#A30881" },
			{ y: 5.6,  label: "Blackpool" },
			{ y: 8.4,  label: "Sunderland" },
			{ y: 9.5,  label: "Canterbury" },
			{ y: 17.1,  label: "Cotswold" },
			{ y: 17.4, label: "Chichester" },
			{ y: 18,  label: "Chesterfield" },
			{ y: 18.4,  label: "Luton" },
      { y: 19.2,  label: "Middlesbrough" },
      { y: 19.5,  label: "Leeds" }
		]
	},]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Homelessness rate in Black Country",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
	},
	axisY: {
		title: "% Acceptances by authorities"
	},
  dataPointMaxWidth: 60,
	data: [{
		type: "column",
    color: "#0881A3",
		showInLegend: false,
		legendText: "Source: Statutory Homelessness - Department for Communities and Local Government",
		dataPoints: [
			{ y: 4.5, label: "Dudley", color: "#A30881" },
			{ y: 47.6,  label: "Wolverhampton" },
			{ y: 63.7,  label: "Birmingham" },
			{ y: 69.5,  label: "Sandwell" },
			{ y: 84.2,  label: "Walsall" },
      { y: 51.1, label: "England", color: "#81A308" }
            ]
        },]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer3", {
	theme:"light2",
	animationEnabled: true,
	title:{
		text: "Evolution in homelessness rate in the Black Country",
     fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
	},
	axisY :{
		includeZero: false,
		title: "% Acceptances",
		suffix: "%"
	},
	toolTip: {
		shared: "true"
	},
	legend:{
		cursor:"pointer",
		itemclick : toggleDataSeries
	},
	data: [{
		type: "spline",
		visible: true,
		showInLegend: true,
		name: "Dudley",
    color: "#A30881",
    dataPoints: [
			{ label: "2010 - 2011", y: 12.4 },
			{ label: "2011 - 2012", y: 8 },
			{ label: "2012 - 2013", y: 9 },
			{ label: "2013 - 2014", y: 8 },
			{ label: "2014 - 2015", y: 5.4 },
			{ label: "2015 - 2016", y: 4.1 },
			{ label: "2016 - 2017", y: 3.4 },
		]
	},
	{
		type: "spline",
		showInLegend: true,
		visible: true,
		name: "Wolverhampton",
   color: "#65B0C6",
		dataPoints: [
			{ label: "2010 - 2011", y: 46.7 },
			{ label: "2011 - 2012", y: 48.1 },
			{ label: "2012 - 2013", y: 45 },
			{ label: "2013 - 2014", y: 49.1 },
			{ label: "2014 - 2015", y: 45.9 },
			{ label: "2015 - 2016", y: 53.8 },
			{ label: "2016 - 2017", y: 49.3 }
		]
	},
         {
		type: "spline",
		showInLegend: true,
		visible: true,
		name: "Birmingham",
    color: "#C1E0E8",
		dataPoints: [
			{ label: "2010 - 2011", y: 50.5 },
			{ label: "2011 - 2012", y: 57.1 },
			{ label: "2012 - 2013", y: 60.9 },
			{ label: "2013 - 2014", y: 57.5 },
			{ label: "2014 - 2015", y: 62.1 },
			{ label: "2015 - 2016", y: 65.9 },
			{ label: "2016 - 2017", y: 63.6 }
		]
	},
	{
		type: "spline",
		showInLegend: true,
		visible: true,
		name: "Sandwell",
    color: "#07718F",
		dataPoints: [
			{ label: "2010 - 2011", y: 61.9 },
			{ label: "2011 - 2012", y: 59.4 },
			{ label: "2012 - 2013", y: 71.1 },
			{ label: "2013 - 2014", y: 68.8 },
			{ label: "2014 - 2015", y: 69.7 },
			{ label: "2015 - 2016", y: 73.9 },
			{ label: "2016 - 2017", y: 70.1 }
		]
	},
         	{
		type: "spline",
		showInLegend: true,
		visible: true,
		name: "Walsall",
     color: "#03303D",
		dataPoints: [
			{ label: "2010 - 2011", y: 69.5 },
			{ label: "2011 - 2012", y: 65.5 },
			{ label: "2012 - 2013", y: 75.9 },
			{ label: "2013 - 2014", y: 79.2 },
			{ label: "2014 - 2015", y: 78.3 },
			{ label: "2015 - 2016", y: 80.9 },
			{ label: "2016 - 2017", y: 81.5 }
		]
	},
         	{
		type: "spline",
		showInLegend: true,
		visible: true,
		name: "England",
    color: "#81A308",
		dataPoints: [
			{ label: "2010 - 2011", y: 43.2 },
			{ label: "2011 - 2012", y: 46.3 },
			{ label: "2012 - 2013", y: 47.4 },
			{ label: "2013 - 2014", y: 46.9 },
			{ label: "2014 - 2015", y: 48.5 },
			{ label: "2015 - 2016", y: 50.3 },
			{ label: "2016 - 2017", y: 51.1 }
		]
	}
	]
});
chart.render();
function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	chart.render();
}

var chart = new CanvasJS.Chart("chartContainer4", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "The applicants for housing in Dudley",
     fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 20,
    padding: 15,
	},
	legend:{
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}%</strong>",
		indexLabel: "{name}",
		dataPoints: [
			{ y: 4.5, name: "Unintentionally and in priority need", exploded: true, color: "#3D0330" },
			{ y: 5.3, name: "In priority need but intentionally homeless", color: "#7A0661" },
			{ y: 28.6, name: "Not in priority need", color: "#A30881" },
			{ y: 57.4, name: "Not homeless", color: "#C665B0" },
			{ y: 4.3, name: "Ineligible", color: "#E8C1E0" }
		]
	}]
});

chart.render();


function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();
}


var chart = new CanvasJS.Chart("chartContainer5", {
	theme:"light2",
	animationEnabled: true,
	title:{
		text: "Temporary accommodation in the Black Country",
     fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
	},
	axisY :{
		includeZero: false,
		title: "No. of temporary accommodation",
	},
	toolTip: {
		shared: "true"
	},
	legend:{
		cursor:"pointer",
		itemclick : toggleDataSeries
	},
	data: [{
		type: "spline",
		visible: true,
		showInLegend: true,
		name: "Dudley",
    color: "#A30881",
    dataPoints: [
			{ label: "2010 - 2011", y: 43 },
			{ label: "2011 - 2012", y: 36 },
			{ label: "2012 - 2013", y: 55 },
			{ label: "2013 - 2014", y: 29 },
			{ label: "2014 - 2015", y: 14 },
			{ label: "2015 - 2016", y: 12 },
		]
	},
	{
		type: "spline",
		showInLegend: true,
		visible: true,
		name: "Wolverhampton",
   color: "#65B0C6",
		dataPoints: [
			{ label: "2010 - 2011", y: 51 },
			{ label: "2011 - 2012", y: 57 },
			{ label: "2012 - 2013", y: 54 },
			{ label: "2013 - 2014", y: 65 },
			{ label: "2014 - 2015", y: 57 },
			{ label: "2015 - 2016", y: 56 }
		]
	},

	{
		type: "spline",
		showInLegend: true,
		visible: true,
		name: "Sandwell",
    color: "#07718F",
		dataPoints: [
			{ label: "2010 - 2011", y: 13 },
			{ label: "2011 - 2012", y: 17 },
			{ label: "2012 - 2013", y: 17 },
			{ label: "2013 - 2014", y: 47 },
			{ label: "2014 - 2015", y: 36 },
			{ label: "2015 - 2016", y: 39 }
		]
	},
         	{
		type: "spline",
		showInLegend: true,
		visible: true,
		name: "Walsall",
     color: "#03303D",
		dataPoints: [
			{ label: "2010 - 2011", y: 13 },
			{ label: "2011 - 2012", y: 22 },
			{ label: "2012 - 2013", y: 45 },
			{ label: "2013 - 2014", y: 40 },
			{ label: "2014 - 2015", y: 31 },
			{ label: "2015 - 2016", y: 112 }
		]
	},
	]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	chart.render();
}
