let mainContainer = document.querySelector('#mainContainer')

function createCard(linkToImg, price, name) {
    let parent = mainContainer;

    let card = document.createElement('div');
    card.classList.add('card');

    let picture = document.createElement('div')
    picture.classList.add('itemImage')
    picture.style.backgroundImage = `url('${linkToImg}')`
    card.appendChild(picture)

    let span = document.createElement('span')
    span.classList.add('itemDescription')
    span.innerHTML = name
    card.appendChild(span)

    let button = document.createElement('button')
    button.classList.add('purchaseButton')
    button.innerHTML = 'Купить'
    button.dataset.price = price
    button.dataset.name = name
    button.dataset.quantity = ""
    card.appendChild(button)

    parent.appendChild(card)
}
let arr = []

for (let i = 0; i < arrClothes.length; i++) {
    createCard(arrClothes[i].img, arrClothes[i].price, arrClothes[i].name)
}

class item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let sum = 0;
let quantity = 0;

function render() {
    basket.innerHTML = "";
    basket.innerHTML = `Всего товаров ${quantity} , на сумму ${sum} рублей. Нажми, чтобы перейти к покупке.`;
    basket.style.color = "green"
}

mainContainer.onclick = (e) => {
    if (e.target.className === 'purchaseButton') {
        let obj = new item(e.target.dataset.name, e.target.dataset.price)
        arr.push(obj)
        e.target.dataset.quantity += "*"
        e.target.innerHTML = `В корзине ${e.target.dataset.quantity.length} шт`
        e.target.style.background = "green"
        e.target.style.color = "white"
        quantity += 1
        sum = sum + parseInt(obj.price)
        // console.log(arr)
    }
    localStorage.setItem('result', JSON.stringify(arr));
    render();
}

