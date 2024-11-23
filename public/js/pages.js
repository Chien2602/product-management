const ctx = document.getElementById('myDonutChart').getContext('2d');

const myDonutChart = new Chart(ctx, {
type: 'doughnut',
data: {
    labels: ['Visitors', 'Subscribers', 'Sales', 'Orders'], // Segment labels
    datasets: [{
    data: [40, 30, 20, 10], // Data values for each segment (percentage or count)
    backgroundColor: ['#ff6384', '#36A2EB', '#4BC0C0', '#ffcc00'], // Segment colors
    borderWidth: 0 // Remove borders between segments
    }]
},
options: {
    responsive: true,
    plugins: {
    legend: {
        display: false // Hide the legend
    },
    tooltip: {
        enabled: true, // Enable tooltips on hover
        callbacks: {
        label: function(tooltipItem) {
            const label = tooltipItem.label;
            const value = tooltipItem.raw;
            return `${label}: ${value}%`; // Show value with label
        }
        }
    }
    },
    cutout: '70%', // Makes the center of the donut empty
    maintainAspectRatio: false // Allows resizing the chart with the container
}
});
