export const feedback: FeedbackI18NTextResource = {
    hu: {
        title: 'Adjon visszajelzést',
        explanation: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur laboriosam non perspiciatis est
                      praesentium dicta mollitia nam eum dolore, omnis impedit cupiditate provident eius quas! Ex facilis
                      quasi nobis omnis.`,
        name: 'Név',
        email: 'E-mail cím',
        send: 'Küldés',
        text: 'Visszajelzés',
        hint: 'Írja ide üzenetét...'
    },
    gb: {
        title: 'Give feedback',
        explanation: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur laboriosam non perspiciatis est
                      praesentium dicta mollitia nam eum dolore, omnis impedit cupiditate provident eius quas! Ex facilis
                      quasi nobis omnis.`,
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

interface FeedbackTextResource {
    title: string;
    explanation: string;
    name: string;
    email: string;
    send: string;
    text: string;
    hint: string;
}
