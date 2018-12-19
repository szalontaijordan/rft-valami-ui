export const dashboard: DashboardI18NTextResource = {
    hu: {
        info: {
            title: 'Személyes adatok',
            name: 'Teljes név',
            email: 'E-mail cím',
            role: 'Szerepkör',
            edit: 'Szerkesztés',
            delete: 'Törlés',
            tbd: 'Ez a funkcionalitás még nem érhető el.',
            adminDelete: 'Az ilyen módon való törlés azonnali és végleges, használja elővigyázatosan.',
            areYouSure: {
                text: 'Épp törölni készülsz a saját felhasználódat. Biztos vagy benne, hogy ezt szeretnéd?',
                yes: 'Igen',
                no: 'Nem'
            },
            editModalText: 'A szerkesztés csak akkor lehetséges, ha új jelszót adsz meg.'
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
            tbd: 'This feature is not available yet',
            adminDelete: 'Deleting a user here is instant and permanent, use this with caution.',
            areYouSure: {
                text: 'You are about to delete your own user. Are you sure?',
                yes: 'Yes',
                no: 'No'
            },
            editModalText: 'Editing is only available if you also change your password.'
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

export interface DashboardTextResource {
    info: {
        title: string;
        name: string;
        email: string;
        role: string;
        edit: string;
        delete: string;
        tbd: string;
        adminDelete: string;
        areYouSure: {
            text: string;
            yes: string;
            no: string;
        },
        editModalText: string;
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
