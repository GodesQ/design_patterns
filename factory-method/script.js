class SocialNetworkPoster {

    getSocialNetwork() {
        throw ('This method should be overriden');
    }

    post(content) {
        let network = this.getSocialNetwork();

        network.login();
        network.createPost(content);
        network.logout();

    }
}

class FacebookPoster extends SocialNetworkPoster {
    constructor(email, password) {
        super(email, password);
        this.email = email;
        this.password = password;
    }

    getSocialNetwork() {
        return new FacebookConnector(this.email, this.password);
    }
}

class LinkedInPoster extends SocialNetworkPoster {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    getSocialNetwork() {
        return new LinkedInConnector(this.email, this.password);
    }
}

class SocialNetworkConnector {
    login() {
        throw Error('This method should be overriden');
    }

    logout() {
        throw Error('This method should be overriden');
    }

    createPost(content) {
        throw Error('This method should be overriden');
    }
}

class FacebookConnector extends SocialNetworkConnector {

    constructor(email, password) {
        super(email, password);

        this.email = email;
        this.password = password;
    }

    login() {
        return console.log(`${this.email} Facebook successfully login`);
    }

    logout() {
        return console.log(`${this.email} Facebook successfully logout`);
    }

    createPost(content) {
        return console.log(`${this.email} Facebook created a post`);
    }
}

class LinkedInConnector extends SocialNetworkConnector {

    constructor(email, password) {
        super(email, password);

        this.email = email;
        this.password = password;
    }

    login() {
        return console.log(`${this.email} LinkedIn successfully login.`);
    }

    logout() {
        return console.log(`${this.email} LinkedIn successfully logout`);
    }

    createPost() {
        return console.log(`${this.email} LinkedIn created a post`);
    }
}

function clientCode(creator) {
    creator.post('Hello! This is Content');
}

clientCode(new FacebookPoster('jamesgarnfil@gmail.com', 'Test123!'));

