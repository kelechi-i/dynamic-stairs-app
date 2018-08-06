import dynamicStairs from './dynamicStairs';
import { equal } from 'assert';
import { assert as chai } from 'chai';
import { describe } from 'mocha';

describe('dynamic stairs function', () => {

    it('correctly returns the number of possible paths', () => {
        equal(dynamicStairs.num_ways(2).length, 2);
    });
    
    it('correctly returns the number of possible paths', () => {
        equal(dynamicStairs.num_ways(7).length, 7);
    });
    
    it('correctly returns an array of possible paths', () => {
        chai.isArray(dynamicStairs.num_ways(7), "array of possible paths");
    });
    
    it('returns undefined when an input isNAN', () => {
        chai.isUndefined(dynamicStairs.num_ways("abc"), "input isNAN");
    });
    
    it('returns undefined when an input isNAN', () => {
        chai.isUndefined(dynamicStairs.num_ways("5"), "input isNAN");
    });
    
    it('returns undefined when an input isNAN', () => {
        chai.isUndefined(dynamicStairs.num_ways(true), "input isNAN");
    });
    
    it('returns undefined when an input isNAN', () => {
        chai.isUndefined(dynamicStairs.num_ways(undefined), "input isNAN");
    });
    
    it('indicates false when an input is not a number', () => {
        equal(dynamicStairs.validateInputs("not a number"), false);
    });

    it('indicates true when an input is a number', () => {
        equal(dynamicStairs.validateInputs(10), true);
    });
});
