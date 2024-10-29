    const tiposDeHamburguesas = ['Clásica', 'Doble', 'Picante', 'Deluke', 'Vegetariana', 'Pescado', 'BBQ', 'Mediterránea'];
    const ventasHamburguesas = [15, 30, 12, 22, 8, 18, 25, 10]; 

    const ctx = document.getElementById('ventasChart').getContext('2d');
    let ventasChart = new Chart(ctx, {
        type: 'bar', // Tipo inicial
        data: {
            labels: tiposDeHamburguesas,
            datasets: [{
                label: 'Cantidad Vendida',
                data: ventasHamburguesas,
                backgroundColor: [
                    'rgba(29, 119, 41, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(99, 255, 132, 0.5)',
                    'rgba(162, 54, 235, 0.5)',
                ],
                borderColor: [
                    'rgba(29, 119, 41, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(99, 255, 132, 1)',
                    'rgba(162, 54, 235, 1)',
                ],
                borderWidth: 2.5 
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true 
                }
            }
        }
    });

    // Función para cambiar el tipo de gráfico
    function cambiarGrafico(tipo) {
        ventasChart.destroy(); // Destruir el gráfico actual
        ventasChart = new Chart(ctx, {
            type: tipo,
            data: {
                labels: tiposDeHamburguesas,
                datasets: [{
                    label: 'Cantidad Vendida',
                    data: ventasHamburguesas,
                    backgroundColor: tipo === 'pie' ? [
                        'rgba(29, 119, 41, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(99, 255, 132, 0.5)',
                        'rgba(162, 54, 235, 0.5)',
                    ] : 'rgba(75, 192, 192, 0.5)', // Color para otros tipos
                    borderColor: tipo === 'pie' ? [
                        'rgba(29, 119, 41, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(99, 255, 132, 1)',
                        'rgba(162, 54, 235, 1)',
                    ] : 'rgba(75, 192, 192, 1)', // Color para otros tipos
                    borderWidth: 2.5 
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true 
                    }
                }
            }
        });
    }

    