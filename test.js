const weave = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
describe('weave', function () {
    it('weave two arrays of the same length', function () {
        const srcOne = [1, 2, 3];
        const srcTwo = ['Hello', 'world', '!'];
        const expectRes = [

            'Hello',
            1,

            'world',
            2,

            '!',
            3
        ];

        let res = weave(srcOne, srcTwo);
        expect(res.data)
            .to
            .deep
            .equal(expectRes);
    });

    it('weave two arrays of the same length', function () {
        const srcOne = [1, 2, 3];
        const srcTwo = ['Hello'];
        const expectRes = [1, 2, 'Hello', 3];

        let res = weave(srcOne, srcTwo);
        expect(res.data)
            .to
            .deep
            .equal(expectRes);
    });
});