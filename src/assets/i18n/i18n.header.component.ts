export const header: HeaderI18NTextResource = {
    hu: {
        register: 'Regisztráció',
        login: 'Bejelentkezés',
        logout: 'Kijelentkezés',
        feedback: 'Visszajelzés'
    },
    gb: {
        register: 'Register',
        login: 'Log In',
        logout: 'Log Out',
        feedback: 'Feedback'
    }
};

export interface HeaderI18NTextResource {
    hu: HeaderTextResource;
    gb: HeaderTextResource;
}

interface HeaderTextResource {
   register: string;
   login: string;
   logout: string;
   feedback: string;
}
