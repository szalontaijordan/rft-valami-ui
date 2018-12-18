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
                    title: 'Kedves Látogató!',
                    short: `Oldalunk célja az oktatók és a diákok közti szakadék áthidalása. Tanárok és diákok egyaránt
                             megtalálják a számukra leginkább hasznos funkciókat. Bejelentkezés után eldöntheted, mit
                             szeretnél: tanulni, esetleg megosztani tudásod, jegyzeted. Az együttműködés lesz sikerünk kulcsa!
                    `
                },
                {
                    title: 'Oktatók',
                    short: `A felgyorsult világban elengedhetetlen, hogy az internet is az oktatás színterévé váljon.
                             A diákok kezében ma már nem füzetek és könyvek vannak, hanem telefonok és egyéb okos eszközök.
                             Az oldal lehetőséget biztosít tantárgyak létrehozására, azokon belül tanulók hozzáadására,
                             akik közt bármilyen segédlet, tananyag esetleg házi feladat megosztható. Miért kellene a tanári
                             szobában a fénymásoló előtt sorban állni, ha egyszerűen oszthatjuk meg tudásunk
                             diákjainkkal?
                    `
                },
                {
                    title: 'Diákok',
                    short: `Valószínű, hogy valamelyik oktatótok által találtatok az oldalra. Ha mégsem, akkor a tudásvágy lehet
                             az oka. Mindenképp azt szeretnénk, ha a tanulás egy hasznos játék, mintsem teher lenne. Az oldalon számtalan
                             tantárgy és hozzá tartozó segédlet, jegyzet, gyakorló feladat található, melyek segíthetik felkészülésetek.
                             Talán mire legközelebb beléptek, már egy csoport tagjai lesztek, ahol együtt fejleszthetitek tudásotokat.
                             A tudás hatalom, melynek ezentúl semmi sem szabhat határt!
                    `
                }
           ]
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
                    title: 'Dear Visitor!',
                    short: `The purpose of this site is to create a connection between the students and the teachers. All of them
                             can find the useful information they need. After you log in you can decide how you would like to proceed,
                             learn, share your knowledge. Sharing is the key to everything.`
                },
                {
                    title: 'Teachers',
                    short: `Nowadays internet connection is essential for education. Students prefer holding a smart phone or some other
                     device rather than an exercise book. This site enables you to create subjects, assign students, manage your homework
                     and share it if needed. Why would you queue in front of the copier, when you can easily share everything?`
                },
                {
                    title: 'Students',
                    short: `There's a high chance that you found this site because one of your teachers. If not, you have a desigre for
                             for knowledge. We'd love to look at studying like fun rather than a burden. On this site you can find numerous
                             materials for studying. Knowledge is power!`
                }
           ]
        }
    }
};

export interface LoginI18NTextResource {
    hu: LoginTextResource;
    gb: LoginTextResource;
}

export interface LoginTextResource {
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
}
