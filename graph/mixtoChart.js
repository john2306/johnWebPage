var ctx = document.getElementById("mixtoChart").getContext('2d');

// Define the data 
var barTotalPopulationData = [22006299,	15834918,	14919501,	14797756,	14433147]; // Add data values to array
var lineExample1 = [120000, 15000000, 1454210, 240124, 3358452];
var lineExample2 = [5024554, 2001424, 4454201, 4565420, 5659888];

var labels = ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo"]; // Add labels to array
// End Defining data

// End Defining data
var mixtoChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Population', // Name the series
            data: barTotalPopulationData, // Specify the data values array
            backgroundColor: [ // Specify custom colors
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            
            borderWidth: 1 // Specify bar border width
        },
                  {
            label: 'ExampleLine1', // Name the series
            data: lineExample1, // Specify the data values array
            backgroundColor: '#f443368c',
            borderColor: '#f443368c',
            
            borderWidth: 1, // Specify bar border width
            type: 'line', // Set this data to a line chart
            fill: false        
        },
                  {
            label: 'ExampleLine2', // Name the series
            data: lineExample2, // Specify the data values array
            backgroundColor: '#2196f38c',
            borderColor: '#2196f38c',
            
            borderWidth: 1, // Specify bar border width
            type: 'line', // Set this data to a line chart
            fill: false        
        }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
    },
    event: ['click']
});