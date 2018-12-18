export const feedback: FeedbackI18NTextResource = {
    hu: {
        title: 'Adjon visszajelzést',
        explanation: `Amennyiben hibát észlelt, véleményt nyilvánítana, esetleg ötlete támadt, kérjük írjon
                         pár sort. Mindenki véleménye fontos számunkra, ezek mintegy útmutató, formálják
                         oldalunk útját, javítják hibáit!`,
        name: 'Név',
        email: 'E-mail cím',
        send: 'Küldés',
        text: 'Visszajelzés',
        hint: 'Írja ide üzenetét...'
    },
    gb: {
        title: 'Give feedback',
        explanation: `In case you found something buggy, or you would like to give feedback, or you have a suggestion
                        please leave a few lines. Everyone's feedback is appreciated as a guideline to tailor
                        our application as you wish.`,
        name: 'Name',
        email: 'E-mail address',
        send: 'Send',
        text: 'Feedback',
        hint: 'Write your e-mail here'
    }
};

export interface FeedbackI18NTextResource {
    hu: FeedbackTextResource;
    gb: FeedbackTextResource;
}

export interface FeedbackTextResource {
    title: string;
    explanation: string;
    name: string;
    email: string;
    send: string;
    text: string;
    hint: string;
}
