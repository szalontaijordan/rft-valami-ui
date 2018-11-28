export const login: LoginI18NTextResource = {
    hun: {
        title: 'Bejelentkezés',
        username: 'Felhasználónév',
        password: 'Jelszó',
        forgotten: 'Elfelejtettem a jelszavam',
        description: {
            title: 'Leírás',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
            ' Qui debitis perspiciatis similique consectetur quas illum illo eligendi' +
            ' eos assumenda ea minus nemo non accusantium voluptatem blanditiis facere sunt, provident vero!'
        },
        errors: {
            invalidCredentials: 'Helytelen felhasználónév vagy jelszó!',
            common: 'Rendszerhiba lépett fel, kérjük próbálja újra.'
        }
    },
    eng: {
        title: 'Log In',
        username: 'Username',
        password: 'Password',
        forgotten: 'I forgot my password',
        description: {
            title: 'Description',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
            ' Qui debitis perspiciatis similique consectetur quas illum illo eligendi' +
            ' eos assumenda ea minus nemo non accusantium voluptatem blanditiis facere sunt, provident vero!'
        },
        errors: {
            invalidCredentials: 'Invalid username or password!',
            common: 'Internal error occured, please try again.'
        }
    }
};

interface LoginI18NTextResource {
    hun: LoginTextResource;
    eng: LoginTextResource;
}

interface LoginTextResource {
    title: string;
    username: string;
    password: string;
    forgotten: string;
    description: {
        title: string,
        text: string
    };
    errors: {
        invalidCredentials: string,
        common: string
    };
}
