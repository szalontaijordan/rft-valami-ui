export const header: HeaderI18NTextResource = {
    hu: {
        register: 'Regisztráció',
        login: 'Bejelentkezés',
        logout: 'Kijelentkezés',
        feedback: 'Visszajelzés',
        dashboard: 'Vezérlőpult'
    },
    gb: {
        register: 'Register',
        login: 'Log In',
        logout: 'Log Out',
        feedback: 'Feedback',
        dashboard: 'Dashboard'
    }
};

export interface HeaderI18NTextResource {
    hu: HeaderTextResource;
    gb: HeaderTextResource;
}

export interface HeaderTextResource {
   register: string;
   login: string;
   logout: string;
   feedback: string;
   dashboard: string;
}
