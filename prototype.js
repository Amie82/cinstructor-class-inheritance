const person = {
    name: "John",
    age: 45,
}

console.log(person.name);
console.log(person.age);
console.log(person.toString());



function Product(id, price, title, category) {
        this.id = id;
        this.price = price;
        this.title = title;
        this.category = category
        //this.getInfo = function() {
            //return `${category} - ${price}`
        //}
}


//свойство prototype пишем у самой функции Product


//сильно затратно для памяти
// Воспользуемся прототипом  будет общая ссылка на участок оперативной памяти

Product.prototype.getInfo = function () {
   // this.lastName = "Ivanov";
    return `${this.category} - ${this.price}`
}


const tshirt = new Product(280, 340, 'No name t-shirt', 't-shirt');
const iphone = new Product(281, 60000, 'iPhone 11', 'mobile');


console.log(tshirt.getInfo());
console.log(tshirt.getInfo === iphone.getInfo);

//методы объекта в прототипе можем вызывать с ключевым словом new. такие методы могут быть функциями контрукторами

//В случае, если runtime не поддерживает необходимые методы (например, closest для
    //DOM элементов), можно написать свою реализацию, обязательно проверив отсутствие
    //нативной реализации.
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
   // if (!Element.prototype.matches) {
    //Element.prototype.matches = Element.prototype.msMatchesSelector ||
    //Element.prototype.webkitMatchesSelector;
    //}
    //if (!Element.prototype.closest) {
   // Element.prototype.closest = function(s) {
   // var el = this;
    //do {
    //if (Element.prototype.matches.call(el, s)) return el;
   // el = el.parentElement || el.parentNode;
    //} while (el !== null && el.nodeType === 1);
    //return null;
    //};
    //}
   
    //Для проверки принадлежности экземпляра к определенному типу
//существует оператор instanceof .
//Важно: instanceof проверяет всю цепочку прототипов.
//Пример использования:
//const product = new Product(...);
//console.log(product instanceof Product); // true
//console.log(product instanceof Object); // true

console.log(tshirt instanceof Product);