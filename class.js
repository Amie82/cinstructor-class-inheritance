//Messenger.prototype.send = function(recipient, msg) {
    // TODO: send text message
    //console.log(`message from ${recipient}: ${msg}`);
//};
    


class Messenger {
    constructor(name) {
        this.name = name;
    }
    //перепишем функцию send, которая была изначально в прототипе

    send(recipient, msg) {
        console.log(`message from ${recipient}: ${msg}`);
    }
};

const baseMessenger = new Messenger('Basic');

baseMessenger.send(12345, 'Hello');
console.log(baseMessenger);

class Messenger2 {
    constructor(name) {
        this.name = name;
        Object.defineProperty(this, 'version', {
        get: function() {
            return '10.0.6';
        }
    } );
}
}

const base = new Messenger2('Base';)