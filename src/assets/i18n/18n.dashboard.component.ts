export const dashboard: DashboardI18NTextResource = {
    hu: {
        info: {
            title: 'Személyes adatok',
            name: 'Teljes név',
            email: 'E-mail cím',
            role: 'Szerepkör',
            edit: 'Szerkesztés',
            delete: 'Törlés',
        },
        main: {
            subjects: 'Tárgyak',
            download: 'Letöltés',
            upload: 'Feltöltés',
            allUsers: 'Minden felhasználó',
        },
        log: {
            title: 'Üzenetek',
            clicked: 'Klikk',
        }
    },
    gb: {
        info: {
            title: 'Personal data',
            name: 'Full name',
            email: 'E-mail address',
            role: 'Role',
            edit: 'Edit',
            delete: 'Delete',
        },
        main: {
            subjects: 'Subjects',
            download: 'Download',
            upload: 'Upload',
            allUsers: 'All users',
        },
        log: {
            title: 'Messages',
            clicked: 'Click',
        }
    }
};

export interface DashboardI18NTextResource {
    hu: DashboardTextResource;
    gb: DashboardTextResource;
}

interface DashboardTextResource {
    info: {
        title: string;
        name: string;
        email: string;
        role: string;
        edit: string;
        delete: string;
    };
    main: {
        subjects: string;
        download: string;
        upload: string;
        allUsers: string;
    };
    log: {
        title: string;
        clicked: string;
    };
}
