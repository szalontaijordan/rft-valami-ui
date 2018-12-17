export const register: RegisterI18NTextResource = {
    hu: {
       title: 'Regisztráció',
       username: 'Felhasználónév',
       password: 'Jelszó',
       firstName: 'Keresztnév',
       lastName: 'Vezetéknév',
       nickName: 'Becenév',
       passwordAgain: 'Jelszó még egyszer',
       email: 'E-mail cím'
    },
    gb: {
        title: 'Registration',
        username: 'Username',
        password: 'Password',
        firstName: 'Last name',
        lastName: 'First name',
        nickName: 'Nick name',
        passwordAgain: 'Password again',
        email: 'E-mail address'
    }
};

export interface RegisterI18NTextResource {
    hu: RegisterTextResource;
    gb: RegisterTextResource;
}

export interface RegisterTextResource {
    title: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    nickName: string;
    passwordAgain: string;
    email: string;
}
