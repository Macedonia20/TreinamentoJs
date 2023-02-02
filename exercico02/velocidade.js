    const car1 = prompt('Informe o nome do seu carro')
    const velocity1 = prompt('Informe sua velocidade')
    const car2 = prompt('Informe o nome do segundo carro')
    const velocity2 = prompt('Informe sua velocidade')



    if(velocity1 > velocity2) {
        alert(`${car1} é mais veloz que ${car2}`)
    } else if(velocity1 < velocity2) {
        alert(`${car2} é mais veloz que ${car1}`)
    } else if(velocity1 === velocity2) {
        alert(`${car2} tem a mesma velocidade que ${car1}`)
    }

