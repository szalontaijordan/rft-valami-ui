export const footer: FooterI18NTextResource = {
    hu: {
        news: {
            title: 'Naprakész információk',
            feed: 'Hírek forrása',
            noText: 'Kattintson a címre a hír elolvasásához'
        },
        aside: {
            date: {
                text: 'Dátum',
                display: new Date().toLocaleDateString('hu-HU', { formatMatcher: 'basic' })
            },
            supportedBrowsers: 'Támogatott böngészők',
            version: 'Verzió',
            team: 'A fejlesztő csapat'
        }
    },
    gb: {
        news: {
            title: 'Up to date information',
            feed: 'Source of News',
            noText: 'Click on the title to see the news'
        },
        aside: {
            date: {
                text: 'Date',
                display: new Date().toLocaleDateString('en-GB', { formatMatcher: 'basic' })
            },
            supportedBrowsers: 'Browser Support',
            version: 'Version',
            team: 'Developer team'
        }
    }
};

export interface FooterI18NTextResource {
    hu: FooterTextResource;
    gb: FooterTextResource;
}

export interface FooterTextResource {
    news: {
        title: string;
        feed: string;
        noText: string;
    };
    aside: {
        date: {
            text: string;
            display: string;
        };
        supportedBrowsers: string;
        version: string;
        team: string;
    };
}
