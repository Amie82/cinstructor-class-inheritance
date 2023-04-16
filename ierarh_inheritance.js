//задача - организовать веб-мессенджер.
//В базовой версии он должен позволять обмениваться сообщениями
//только пользователям, зарегистрированным в нашей системе.
//А затем мы хотим подготовить специализированные версии, которые
//позволят общаться с пользователями других мессенджеров, например,
//Viber.

function Messenger(name) {
    this.name = name;
}

Messenger.prototype.recipients = [
    67895,
    6584,
    11 // Список абонентов
]


    // prototype - уже объект, поэтому можем просто добавлять свойства
    // (но можем и заменить целиком, нарушив предыдущую цепочку)
    
Messenger.prototype.send = function(recipient, msg) {
    // TODO: send text message
    console.log(`message from ${recipient}: ${msg}`);
};
    
function Multimessenger(name, logo) {  // logo добавим доп свойство
    Messenger.call(this, name),
    this.logo = logo;
}

    //пример. создадим новый мультимессенджер
Multimessenger.prototype = Object.create(Messenger.prototype);
Multimessenger.prototype.constructor = Multimessenger;
    // собственное свойство продотипа
  // переопредели метод сенд

Multimessenger.prototype.send = function(recipient, msg) {
    
    
    if (this.recipients.includes(recipient)) {
        Messenger.prototype.send.call(this, recipient, msg);
        return;

    }
    console.log(`message from Multimessenger: ${recipient}: ${msg}`);
};

    //теперь в Multimessenger можно добавлять новые методы, не боясь, что они попадут и в конструктор Messenger

const viber = new Multimessenger('Viber', 'V');

console.log(viber);


    //также хотим, чтобы все экземпляры Мультимессенджера обладали методом send
const messenger = new Messenger('Basic');
viber.send(8923, "Hello");
viber.send(67895, 'Bye');



