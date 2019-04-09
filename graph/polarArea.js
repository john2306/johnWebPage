var ctx = document.getElementById("polarArea").getContext('2d');

var polarArea = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai"],
        datasets: [{    
            data: [10200, 7820,	11424,	14040], // Specify the data values array
            
            borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border (Line)
            backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},         
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      animation: {
					animateRotate: true,
					animateScale: true
				}
    }
});