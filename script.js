var i = 0;
var txt = "I'm from Kharkiv, Ukraine and I study CS50!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


document.addEventListener('DOMContentLoaded', function() {
    typeWriter()
    // Get the canvas element
var ctx = document.getElementById('myDoughnutChart').getContext('2d');

// Create the doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut', // Specify the type of chart
    data: {
        labels: ['Music', 'Yoga', 'Hiking','Other'], // Labels for each section
        datasets: [{
            label: 'My Hobbies', // Dataset label
            data: [60, 20, 10, 10], // Data values
            backgroundColor: [ // Colors for each section
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [ // Border colors for each section
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1 // Border width
        }]
    },
    options: {
        responsive: false, // Make the chart responsive
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top', // Position of the legend
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.label + ': ' + context.raw; // Custom tooltip label
                    }
                }
            }
        }
    }
});
});


function openNav() {
  document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("open");




}


