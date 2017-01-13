import expect from 'expect'

import {Operations} from 'Operations'

describe('Operations',  () => {
  it('should exist', () => {
    expect(Operations).toExist();
  });

  it('should allow real time stock tracking', () => {
    expect(78).toEqual(89);
  });

  it('should easily show sections of a property', () => {
    expect(9).toEqual(8);
  });

  describe('Operations Reports', () => {
    it('should pull up VIP list and tables', () => {
      expect(0).toEqual(9);
    });

    it('should show real time wait for course',() => {
      expect(9).toEqual(8);
    });

    it('should show average number of courses', () => {
      expect(9).toEqual(10);
    });

    it('should allow menu engineering by date and category', () => {
      expect(4).toEqual(0);
    });

    it('should show top salesperson', () => {
      expect(9).toEqual(8);
    });

    it('should show the hand over diary report', () => {
      expect(8).toEqual(78);
    });

    it('should generate items to push based on menu eng, least selling items', () => {
      expect(9).toEqual(0);
    });

    describe('POS', () => {
      it('should show table plan', () => {
        expect(9).toEqual(0);
      });

      it('should enable check creation', () => {
        expect(8).toEqual(0);
      });

      it('should to print to Kitchen and POS Terminal', () => {
        expect(9).toEqual(7);
      });

      it('should print bills', () => {
        expect(8).toEqual(7);
      });
    });

    it('should allow busy period analytics', () => {
      expect(8).toEqual(0);
    });

  })
})
