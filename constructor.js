//const tshirt = createProduct(280, 340, 'No name t-shirt', 't-shirt');
//const iphone = createProduct(281, 60000, 'iPhone 11', 'mobile');

//function createProduct(id, price, title, category) {
    //return {
        //id: id,
        //price: price,
        //title: title,
        //category: category,
    //};
//}

//когда пишем new, то возвращается ссылка на объект this, return не пишется

const tshirt = new Product(280, 340, 'No name t-shirt', 't-shirt');
const iphone = new Product(281, 60000, 'iPhone 11', 'mobile');

function Product(id, price, title, category) {
        this.id = id;
        this.price = price;
        this.title = title;
        this.category = category
    
}

//можно добавить доп свойство

tshirt.discount = 50;

console.log(tshirt);