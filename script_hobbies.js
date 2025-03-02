


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


let currentIndex = 0;
const totalSlides = {
    music: document.querySelectorAll('#music-slides .slide').length,
    yoga: document.querySelectorAll('#yoga-slides .slide').length,
    travel: document.querySelectorAll('#travel-slides .slide').length,
};

// Function to navigate slides
function showSlide(sliderId, index) {
    const slider = document.getElementById(`${sliderId}-slides`);
    const slides = slider.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function prevSlide(sliderId) {
    showSlide(sliderId, currentIndex - 1);
}

function nextSlide(sliderId) {
    showSlide(sliderId, currentIndex + 1);
}

// Touch events for swiping
let startX;
function touchStart(e) {
    startX = e.touches[0].clientX;
}

function touchMove(e, sliderId) {
    let touchEndX = e.changedTouches[0].clientX;
    if (startX > touchEndX + 50) {
        nextSlide(sliderId);
    } else if (startX < touchEndX - 50) {
        prevSlide(sliderId);
    }
}

// Add touch event listeners
const sliders = ['music', 'yoga', 'travel'];
sliders.forEach(sliderId => {
    const sliderElement = document.getElementById(`${sliderId}-slides`);
    sliderElement.addEventListener('touchstart', touchStart, false);
    sliderElement.addEventListener('touchend', (e) => touchMove(e, sliderId), false);
});










