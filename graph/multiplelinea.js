var ctx = document.getElementById("multiplelinea").getContext('2d');

var multiplelinea = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Start", "Universidad",	"Trabajo",	"Proyectos",	"Empresa",	"Voluntariado",	"Persona"],
        datasets: [{
            label: 'Analítico', // Name the series
            data: [0, 50000,	8000,	9424,	14040,	4141,	5111], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
                  {
            label: 'Estratégico', // Name the series
            data: [0, 60000,	6000,	16545,	20588,	3000,	9242], // Specify the data values array
            fill: false,
            borderColor: '#4CAF50', // Add custom color border (Line)
            backgroundColor: '#4CAF50', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
        {
            label: 'Táctico', // Name the series
            data: [0, 40288,	12942,	20245,	30348,	2339, 12990], // Specify the data values array
            fill: false,
            borderColor: '#f50057', // Add custom color border (Line)
            backgroundColor: '#f50057', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
    }
});