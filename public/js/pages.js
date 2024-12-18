const ctx = document.getElementById('myDonutChart').getContext('2d');
const product = require("../../model/product.model");
const employee = require("../../model/employee.model");
const customer = require("../../model/customer.model");

async function createDonutChart() {
    try {
        // Fetch the count of documents for each model
        const productCount = await product.estimatedDocumentCount();
        const employeeCount = await employee.estimatedDocumentCount();
        const customerCount = await customer.estimatedDocumentCount();

        // Create the donut chart
        const myDonutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Khách hàng', 'Nhân viên', 'Sản phẩm'], // Segment labels
                datasets: [{
                    data: [productCount, employeeCount, customerCount], // Data values
                    backgroundColor: ['#ff6384', '#36A2EB', '#4BC0C0'], // Segment colors
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
                                return `${label}: ${value}`; // Show value with label
                            }
                        }
                    }
                },
                cutout: '70%', // Makes the center of the donut empty
                maintainAspectRatio: false // Allows resizing the chart with the container
            }
        });
    } catch (err) {
        console.error("Error fetching data for donut chart:", err);
    }
}

createDonutChart();
