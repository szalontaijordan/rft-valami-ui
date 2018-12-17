export const errors: ErrorsI18NTextResource = {
    hu: {
        invalidCredentials: 'Helytelen felhasználónév vagy jelszó!',
        common: 'Rendszerhiba lépett fel, kérjük próbálja újra.',
        required: 'Ennek a mezőnek a kitöltése kötelező'

    },
    gb: {
        invalidCredentials: 'Invalid username or password!',
        common: 'Internal error occured, please try again.',
        required: 'This field is required'
    }
};

export interface ErrorsI18NTextResource {
    hu: ErrorsTextResource;
    gb: ErrorsTextResource;
}

export interface ErrorsTextResource {
    invalidCredentials: string,
    common: string,
    required: string
}
