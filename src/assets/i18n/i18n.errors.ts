export const errors: ErrorsI18NTextResource = {
    hu: {
        invalidCredentials: 'Helytelen felhasználónév vagy jelszó!',
        common: 'Rendszerhiba lépett fel, kérjük próbálja újra.',
        required: 'Ennek a mezőnek a kitöltése kötelező',
        mustMatch: 'A két jelszónak egyeznie kell, tartalmazi kell kis- és nagybetűt, valamint számot.'

    },
    gb: {
        invalidCredentials: 'Invalid username or password!',
        common: 'Internal error occured, please try again.',
        required: 'This field is required',
        mustMatch: 'The two passwords must match, contain both upper- and lowercase characters at least a number.'
    }
};

export interface ErrorsI18NTextResource {
    hu: ErrorsTextResource;
    gb: ErrorsTextResource;
}

export interface ErrorsTextResource {
    invalidCredentials: string;
    common: string;
    required: string;
    mustMatch: string;
}
