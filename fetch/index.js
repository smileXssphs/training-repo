// let myContainer = document.getElementById('container')
// let myContainer = container
let myContainer = document.querySelector('#container');
let text = '<h1> it just works! </h1> <div> hello </div>';
let newStr = 'это пример интерполяции';
let easy = 'интерполяция - это легко';
let level = 'junior'
// myContainer.innerHTML = newStr + ' ' + easy + ' ' + 'для' + level + 'разработчиков';

myContainer.innerHTML = `${newStr} ${easy} для ${level} разработчиков`

/////////////////////////////////////////////////
let arrObj = [
    { name: 'alex', age: 15 },
    { name: 'felix', age: 10 },
    { name: 'andrew', age: 27 }
]

// arrObj.forEach(element > console.log(element))
// console.log(arrObj[1].name, arrObj[1].age)

arrObj.forEach(element => myContainer.innerHTML += `<p> Имя: ${element.name}. Возраст: ${element.age} </p>`)

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())

    .then(result => result.forEach(
        element => myContainer.innerHTML += `<p style='background-color: lightblue' ><b>case no:</b> ${element.id}. <b>Case name:</b> ${element.title}. Ready: ${element.completed}</p>`
    ))