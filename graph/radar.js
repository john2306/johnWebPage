var ctx = document.getElementById("radar").getContext('2d');

// Define the data 
var data = [22006299, 15834918, 14919501, 14797756, 14433147, 13524139, 11877109, 11862073, 11779606, 10452000]; // Add data values to array

var labels = ["Tokyo", "Mumbai", "Mexico City", "Shanghai", "Sao Paulo", "New York", "Karachi", "Buenos Aires", "Delhi", "Moscow"]; // Add labels to array
// End Defining data

var options = {responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
};

var radar = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: labels,
        datasets: [{
                label: 'Population', // Name the series
                data: data, // Specify the data values array
                fill: false,
                borderColor: '#f50057', // Add custom color border (Line)
                backgroundColor: '#f50057', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]
    },
    options: options
});

