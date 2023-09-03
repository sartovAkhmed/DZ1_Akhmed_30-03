var month = parseInt(prompt('Введите месяц от 1-12'))
var day = parseInt(prompt('Введите день рождение 1-31'))
var result

if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
    result = 'Овен'
}else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
    result = 'Телец'
}else if ((month === 5 && day >= 22) || (month === 6 && day <= 21)) {
    result = 'Близнецы'
}else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    result = 'Рак'
}else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
    result = 'Лев'
}else if ((month === 8 && day >= 24) || (month === 9 && day <= 22)) {
    result = 'Дева'
}else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    result = 'Весы'
}else if ((month === 10 && day >= 23) || (month === 11 && day <= 22)) {
    result = 'Скорпион'
}else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    result = 'Стрелец'
}else if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
    result = 'Козерог'
}else if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
    result = 'Водолей'
}else if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) {
    result = 'Рыбы'
}else {
    alert('ERROR')
    console.error('ERROR')
}

alert(`Ваш знак зодиака: ${result}`)