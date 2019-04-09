var ctx = document.getElementById("donusChart").getContext('2d');

var donusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai"],
        datasets: [{    
            data: [5000,	5240,	5424,	14040], // Specify the data values array
          
            borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border 
            backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},         
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
    }
});