const person1 = {
    name: "Ivan",
    age: 56
};

const person2 = {
    name: "Olga",
    age: 15
}

const getAge = function() {
    return this.age;
}

person1.getAge = getAge;
person2.getAge = getAge;


console.log(person1.getAge());
console.log(person2.getAge());

console.log(person1.getAge === person2.getAge);


//если потерялся контектс this, можно позаимствовать
//позаимствуем метод getInfo у объекта tshirt

function Product(id, price, title, category) {
    this.id = id;
    this.price = price;
    this.title = title;
    this.category = category

}

Product.prototype.getInfo = function (additional) {
    // this.lastName = "Ivanov";
     return `${this.category} - ${this.price} - ${additional}`
 }

 const tshirt = new Product(280, 340, 'No name t-shirt', 't-shirt');

 const getInfo = tshirt.getInfo; // без () получаем underfined
 //данная функция потеряла контекст

 // можем привязать любой контекст к функции
 //для этого есть три функции
 // call
// func.call(context, arg1, arg2, ...)

const ctx = {
    category: 'Toys',
    price: 4000
};

getInfo.call(ctx, 'some text');


// метод apply работает как и call, разница только, как передаются аргументы. у call передаются через запятуюб у apply одним массивом
// func.apply(contect, [arg1, arg2]);

getInfo.apply(ctx, ['some text']);


//пример из старой практики. есть массив чисел и надо найти большее из чисел

const data = [6, 7, 8, 9, 11, 345, 78, 91];

console.log(Math.max(6, 7, 8, 9, 11, 345, 78, 91));

console.log(Math.max(...data));

//раньше писали
console.log(Math.max.apply(null, data));

// Метод bind помогает прикрепить к функции не только контекст, но и жёстко объявить часть аргументов
//func.bind(context, arg1, arg2, ...);

//Есть функция, которая складывает два числа
function add(a, b) {
    return a+b;
}

// создадим на основе имеющейся функции собственную

const add10 = add.bind(null, 10);

//10 будет первым аргументом, т.е. 10 подставится в качестве значения а (в function add(a, b) ) и сохранится
//теперь когда мы будем вызывать полученную функцию достаточно указать только один аргумент, т.е. второй, так как первый мы уже указали

console.log(add10(8));


//если бы в функции использовался this, то уточнение контекста необходимо

function add2() {
    return this.a+this.b;
}

const add1 = add2.bind({
    a:8,
    b:9
}
)

console.log(add1());

//если один раз подвязали bind, отвязать уже не получится

function add3(a, b) {
    return this.value + a +b;
}

const add4 = add3.bind({
    value: 10,
}, 5)
// 5 это будет первый аргумент в add3

console.log(add4(9));

//создадим функцию add5, которая будет перепривязывать контекст ранее созданный

const add5 = add4.bind({
    value: 100,
}, 5)

console.log(add5(9));