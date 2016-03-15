import chai from 'chai';
import multiply from './../tasks/multiply.js';
const should = chai.should();
const expect = chai.expect;

describe('Tasks multiply', () => {
	describe('multiply should available', () => {
		it('Available!!', () => {
			expect(multiply).not.to.be.null;
		});
	});

	describe('Test Multiply', () => {
		it('should return number from result multiply', () => {
			multiply(2,3).should.equal(6);
		});
	});
});