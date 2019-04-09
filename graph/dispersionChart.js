var ctx = document.getElementById("dispersionChart").getContext('2d');

// Define the data 
var data = [{
                x: 5,
                y: 4
            }, {
                x: 2,
                y: 14
            },
            {
                x: 4,
                y: 12
            },
            {
                x: 2,
                y: 10
            },
            {
                x: 3,
                y: 4
            },
            {
                x: 3,
                y: 5
            },
            {
                x: 3,
                y: 8
            },
            {
                x: 6,
                y: 12
     
         }]; // Add data values to array
// End Defining data


// Define the data 
var data2 = [{
    x: 5,
    y: 4,
    r: 1
}, {
    x: 2,
    y: 14,
    r: 3
},
{
    x: 4,
    y: 12,
    r: 5
},
{
    x: 2,
    y: 10,
    r: 5
},
{
    x: 3,
    y: 4,
    r: 6
},
{
    x: 3,
    y: 5,
    r: 7
},
{
    x: 3,
    y: 8,
    r: 8
},
{
    x: 6,
    y: 12,
    r: 20

}]; // Add data values to array
// End Defining data

var options = {responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
};

// End Defining data

//(data, scatter) ; (data2, bubble)
var dispersionChart = new Chart(ctx, {
    type: 'bubble', // scatter or bubble
    data: {
        datasets: [{
                label: 'Population', // Name the series
                data: data2, // or use data -Specify the data values array
                borderColor: '#2196f3', // Add custom color border            
                backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            }]
    },
    options: options
});