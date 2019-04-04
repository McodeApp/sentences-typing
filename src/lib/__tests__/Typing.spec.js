import React from 'react';
import Typing from '../components/Typing';
import renderer from 'react-test-renderer'

jest.useFakeTimers();

const sentences = [
    "1234567890",
    "qwerty",
    "dfksjn32",
];

const runTimersToTime = (sentence, clearNextLine = false) => {
    let time = sentence.length * typeSpeed;
    time = clearNextLine ? time + typeSpeed : time;
    jest.runTimersToTime(time);
};

const [first, second, three] = sentences;
const typeSpeed = 100;

describe('Typing sentence', () => {
    describe('One sentence', () => {
        it("renders properly one sentence", () => {
            const tree = renderer.create(<Typing sentences={[first]}/>);

            runTimersToTime(first);
            expect(tree.toJSON()).toMatchSnapshot();
        })
    });

    describe('Two sentences', () => {
        it("renders properly two sentences", () => {
            const tree = renderer.create(<Typing sentences={[first, second]}/>);

            runTimersToTime(first);
            expect(tree.toJSON()).toMatchSnapshot();
            runTimersToTime(second);
            expect(tree.toJSON()).toMatchSnapshot();
        })
    });

    describe('Three sentences', () => {
        it("renders properly three sentences", () => {
            const tree = renderer.create(<Typing sentences={[first, second, three]} infinity/>);

            runTimersToTime(first);
            expect(tree.toJSON()).toMatchSnapshot();
            runTimersToTime(second);
            expect(tree.toJSON()).toMatchSnapshot();
            runTimersToTime(three, true);
            expect(tree.toJSON()).toMatchSnapshot();
        })
    });

    describe('Three sentences - infinity mode', () => {
        it("renders properly three sentences", () => {
            const tree = renderer.create(<Typing sentences={[first, second, three]} infinity/>);

            runTimersToTime(first);
            expect(tree.toJSON()).toMatchSnapshot();
            runTimersToTime(second);
            expect(tree.toJSON()).toMatchSnapshot();
            runTimersToTime(three, true);
            expect(tree.toJSON()).toMatchSnapshot();
            runTimersToTime(second, true);
            expect(tree.toJSON()).toMatchSnapshot();
            runTimersToTime(three, true);
            expect(tree.toJSON()).toMatchSnapshot();
        })
    });
});