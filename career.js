


document.addEventListener('DOMContentLoaded', function() {

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
    // Add the resize event listener
    //window.addEventListener('resize', function() {
        //myDoughnutChart.resize();  // Recalculate chart size on window resize
    //});
});


function openNav() {
  document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("open");
}

let currentIndex = {
  music: 0,
  yoga: 0,
  travel: 0
};

function showSlide(sliderType, index) {
  const slides = document.querySelector(`#${sliderType}-slides`);
  const totalSlides = slides.querySelectorAll('.slide').length;

  if (index >= totalSlides) {
    currentIndex[sliderType] = 0; // Loop back to the first slide
  } else if (index < 0) {
    currentIndex[sliderType] = totalSlides - 1; // Loop to the last slide
  } else {
    currentIndex[sliderType] = index;
  }

  const offset = currentIndex[sliderType] * -100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide(sliderType) {
  showSlide(sliderType, currentIndex[sliderType] + 1);
}

function prevSlide(sliderType) {
  showSlide(sliderType, currentIndex[sliderType] - 1);
}

// Optional: Auto-slide feature for both sliders
setInterval(() => {
  nextSlide('music');
}, 20000); // Music slides every 20 seconds

setInterval(() => {
  nextSlide('yoga');
}, 25000); // Yoga slides every 25 seconds





