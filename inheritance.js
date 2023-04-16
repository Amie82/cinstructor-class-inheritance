//function Messenger(name) {
//this.name = name;
//}

//Messenger.prototype.send = function(recipient, msg) {
    // TODO: send text message
   // console.log(`message from ${recipient}: ${msg}`);
//};
    

//function MultiMessenger(name, logo) {
//Messenger.call(this, name);
//this.logo = logo; // <-
//}
//MultiMessenger.prototype = Object.create(Messenger.prototype);
//MultiMessenger.prototype.constructor = MultiMessenger;

class Messenger {
    constructor(name) {
        this.name = name;
    }
    
    send(recipient, msg) {
        console.log(`message from ${recipient}: ${msg}`);
    }
};
Messenger.recipients = [
    67895,
    6584,
    11 // Список абонентов
]

class MultiMessenger extends Messenger{ //MultiMessenfer наследуюет класс Messenger
    constructor(name, logo) {
        super(name) // super указывает, что мы обращаемся к функции -конструктору нашего родительского класса Messenger
        this.logo = logo;
    }
    send(recipient, msg) {
        
        if (Messenger.recipients.includes(recipient)) {
            super.send(recipient, msg);
    }
    console.log(`message from ${recipient}: ${msg}`);
}
}

const viber = new MultiMessenger('Viber', 'V');

console.log(viber);
viber.send(8923, "Hello");
viber.send(67895, 'Bye');
