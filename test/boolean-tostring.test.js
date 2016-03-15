import chai from 'chai';
import booleanToString from './../tasks/boolean-tostring.js';
const should = chai.should();
const expect = chai.expect;

describe('Task Boolean to string', () => {
	describe('booleanToString should available', () => {
		it('Available!!', () => {
			expect(booleanToString).not.to.be.null;
		});
	});

	describe('Run boolean to string function', () => {
		it('should return string', () => {
			booleanToString(true).should.be.a('string');
		});
	});
});