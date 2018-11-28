export const header: HeaderI18NTextResource = {
    hun: {
        register: 'Regisztráció',
        login: 'Bejelentkezés',
        logout: 'Kijelentkezés',
        feedback: 'Visszajelzés'
    },
    eng: {
        register: 'Register',
        login: 'Log In',
        logout: 'Log Out',
        feedback: 'Feedback'
    }
};

interface HeaderI18NTextResource {
    hun: HeaderTextResource;
    eng: HeaderTextResource;
}

interface HeaderTextResource {
   register: string;
   login: string;
   logout: string;
   feedback: string;
}
