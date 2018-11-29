export const login: LoginI18NTextResource = {
    hu: {
        title: 'Bejelentkezés',
        username: 'Felhasználónév',
        password: 'Jelszó',
        forgotten: 'Elfelejtettem a jelszavam',
        description: {
            title: 'Leírás',
            text: [
                {
                    title: 'Lorem',
                    short: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend sit amet
                            turpis at euismod. Nulla facilisi.`
                },
                {
                    title: 'Ipsum',
                    short: `Cras elementum, leo in malesuada aliquet, diam est elementum risus, ac lobortis eros ex
                            in sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                            mus. Cras ex lorem, lacinia vitae eros feugiat, dignissim aliquam lacus. Nunc odio odio,
                            consectetur sed aliquam vel, ultrices id erat.`
                },
                {
                    title: 'Dolor',
                    short: `Nulla facilisi. Mauris erat enim, consequat vitae elit ut, varius sollicitudin odio. In in
                            ex a arcu fermentum tempor non et odio. Suspendisse aliquet ipsum vel odio scelerisque 
                            convallis. Praesent vehicula dignissim dictum. Donec cursus tincidunt orci eget porttitor. 
                            Suspendisse potenti. Morbi vitae sagittis nisl. Fusce sed purus non purus fermentum tempus.`
                }
           ]
        },
        errors: {
            invalidCredentials: 'Helytelen felhasználónév vagy jelszó!',
            common: 'Rendszerhiba lépett fel, kérjük próbálja újra.',
            required: 'Ennek a mezőnek a kitöltése kötelező'
        }
    },
    gb: {
        title: 'Log In',
        username: 'Username',
        password: 'Password',
        forgotten: 'I forgot my password',
        description: {
            title: 'Description',
            text: [
                {
                    title: 'Lorem',
                    short: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend sit amet
                            turpis at euismod. Nulla facilisi.`
                },
                {
                    title: 'Ipsum',
                    short: `Cras elementum, leo in malesuada aliquet, diam est elementum risus, ac lobortis eros ex
                            in sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                            mus. Cras ex lorem, lacinia vitae eros feugiat, dignissim aliquam lacus. Nunc odio odio,
                            consectetur sed aliquam vel, ultrices id erat.`
                },
                {
                    title: 'Dolor',
                    short: `Nulla facilisi. Mauris erat enim, consequat vitae elit ut, varius sollicitudin odio. In in
                            ex a arcu fermentum tempor non et odio. Suspendisse aliquet ipsum vel odio scelerisque 
                            convallis. Praesent vehicula dignissim dictum. Donec cursus tincidunt orci eget porttitor. 
                            Suspendisse potenti. Morbi vitae sagittis nisl. Fusce sed purus non purus fermentum tempus.`
                }
           ]
        },
        errors: {
            invalidCredentials: 'Invalid username or password!',
            common: 'Internal error occured, please try again.',
            required: 'This field is required'
        }
    }
};

export interface LoginI18NTextResource {
    hu: LoginTextResource;
    gb: LoginTextResource;
}

interface LoginTextResource {
    title: string;
    username: string;
    password: string;
    forgotten: string;
    description: {
        title: string,
        text: Array<{
            title: string,
            short: string
        }>;
    };
    errors: {
        invalidCredentials: string,
        common: string,
        required: string
    };
}
