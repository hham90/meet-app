import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the user hasn\'t specified or filtered the number of events', () => {

        });

        when('the user sees the list of events', () => {

        });

        then(/^the default number of displayed events will be (\d+)$/, (arg0) => {

        });
    });
    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('the user has events displayed', () => {

        });

        when('the user chooses to change the number of events displayed', () => {

        });

        then('the number of events displayed will update to the number the user selected', () => {

        });
    });
})
