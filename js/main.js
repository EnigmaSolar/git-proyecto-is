const chart = document.getElementById('chart');

// Crear una nueva instancia de chart

const ctx = new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
        datasets: [
            {
                label: 'Fardos',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 
                33572, 39974, 48847, 48116, 57014, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'Bobinas',
                data: [31500, 41000, 88631, 26095, 46000, 32184, 
                33572, 5000, 3000, 18656, 27520, 36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Producción mensual'
            }
        }
    }
});

const chart2 = document.getElementById('chart2');

const ctx2 = new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Unidades vendidas (en miles)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Ventas mensuales'
            }
        }
    }
});

const chart3 = document.getElementById('chart3');

const ctx3 = new Chart(chart3, {
    type: 'doughnut',
    data: {
        labels: ['Humedad', 'Falla electrica', 'Mal uso'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Causas de fallas de maquinaria'
            }
        }
    }
});