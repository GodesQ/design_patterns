class Mail {

    constructor(transport_type) {
        this.transport_type = transport_type;
    }

    createMail() {
        throw Error("This method should be override.");
    }

    send() {
        const mail = this.createMail();
        console.log(mail.message());
    }
}

class Transport {
    message() {
        throw Error("This method should be override.");
    }
}

class Plane extends Transport {
    message() {
        return 'Airplane is on the way! It is in air now!';
    }
}

class Truck extends Transport {
    message() {
        return 'Truck is on the way! There traffic in express way';
    }
}

class Train extends Transport {
    message() {
        return 'Train is on the way! Train is faster than truck';
    }
}

class AirMail extends Mail {
    createMail() {
        return new Plane();
    }
}

class GroundMail extends Mail {
    constructor(transport_type) {
        super(transport_type);
        this.transport_type = transport_type;
    }

    createMail() {
        return new this.transport_type();
    }
}

class Application {

    constructor() {
        this.delivery_mail = null;        
    }
    
    run() {
        const mail_delivery_type = 'Ground';
        const mail_transport_type = Truck;

        switch (mail_delivery_type) {
            case 'Air':
                this.delivery_mail = new AirMail();
                break;
            
            case 'Ground':
                this.delivery_mail = new GroundMail(mail_transport_type);
                break;
            default:
                break;
        }
    }

    main() {
        this.run();
        this.delivery_mail.send();
    }
}

const app = new Application();
app.main();