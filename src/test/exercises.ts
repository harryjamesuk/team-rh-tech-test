import {_clearTags, formatDesc} from "../utils/exercises";

describe('clearTags()', () => {
    test('<p>abc</p>', () => {
        const str = '<p>abc</p>';
        expect(_clearTags([str])).toEqual(['abc']);
    });
    test('empty string unchanged', () => {
        const str = '';
        expect(_clearTags([''])).toEqual(['']);
    });
    test('single tag becomes blank', () => {
        const str = '<p>';
        expect(_clearTags([str])).toEqual(['']);
    });
});

describe('formatDesc()', () => {
    test('first tag is shifted', () => {
        expect(formatDesc('<p>a')).toEqual(['a']);
    });
    describe('numerical style', () => {
        test('(1) (2) (3)', () => {
            const str = '(1) a (2) b (3) c';
            expect(formatDesc(str)).toEqual([' a ', ' b ', ' c']);
        });
    });
    describe('<p>- style', () => {
        test('<p>a b', () => {
            const str = '<p>a b';
            expect(formatDesc(str)).toEqual(['a b']);
        });
        test('<p>a b </p><p>-c</p>', () => {
            const str = '<p>a b </p><p>c</p>';
            expect(formatDesc(str)).toEqual(['a b ', 'c']);
        });
    });
    describe('<p>- style', () => {
        test('<p>-a b', () => {
            const str = '<p>-a b';
            expect(formatDesc(str)).toEqual(['-a b']);
        });
        test('<p>-a b </p><p>-c</p>', () => {
            const str = '<p>-a b </p><p>-c</p>';
            expect(formatDesc(str)).toEqual(['-a b ', '-c']);
        });
    });
    describe('<li> style', () => {
        test('<li>a</li><li>b</li>', () => {
            const str = '<li>a</li><li>b</li>';
            expect(formatDesc(str)).toEqual(['a', 'b'])
        });
        test('<ul><li>a</li><li>b</li></ul>', () => {
            const str = '<ul><li>a</li><li>b</li></ul>';
            expect(formatDesc(str)).toEqual(['a', 'b'])
        });
        test('<ul><li>a</li><li>b</li></ul><ul><li>c</li></ul>', () => {
            const str = '<ul><li>a</li><li>b</li></ul><ul><li>c</li></ul>';
            expect(formatDesc(str)).toEqual(['a', 'b', 'c'])
        });
    });
    describe('plaintext style', () => {
        test('abc', () => {
            expect(formatDesc('abc')).toEqual(['abc']);
        });
    });
});

export {};
