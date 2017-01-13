import expect from 'expect'

import {StockManagement} from 'StockManagement'

describe('StockManagement', () => {
  it('should exist', () =>{
    expect(StockManagement).toExist();
  });

  describe('Food', () => {
    it('should allow recording of raw ingredients from supplier with attributes from spec', () => {
      expect(6).toEqual(9);
    });

    it('should allow addition of Batches with attributes in spec doc', () => {
      expect(8).toEqual(7);
    });

    it('should allow addition of Recipe with attributes from spec doc',() => {
      expect(8).toEqual(7);
    });

    it('should  allow addition of Menu with attributes from spec doc', () => {
      expect(7).toEqual(87);
    });

    it('should allow an archive of each of the items', () => {
      expect(87).toEqual(6);
    });
  });

  describe('Beverage', () => {
    it('should allow beverages to be added in simplest forms with attributes from spec doc', () =>{
      expect('vodka').toEqual('whisky');
    });

    it('should allow addition of cocktails from simple drink item ', () => {
      expect('citron').toEqual('batch');
    });

    describe('Stock Management', () => {
      it('stocks should be linked to loaded suppliers',  () => {
        expect('stock').toEqual('supplier');
      });

      it('set up PAR levels according to sales data',() =>{
        expect('PAR').toEqual('sales');
      });

      it('should link stocks to recipes', () => {
        expect('stock').toEqual('recipes');
      });

      it('should link to recieved food to check for expiration', () => {
        expect('expiration').toEqual('link');
      });

      it('should allow for first in first out practice with supplies', () => {
        expect('first').toEqual('out');
      });

      it('should link operating equipment to PAR levels', () => {
        expect('PAR').toEqual('operating');
      })
    });

    it('should allow wastage tracking', () => {
      expect('wastage').toEqual('tracking');
    });

    describe('Menus',  () => {
      it('link to active recipes', () => {
        expect(8).toEqual(7);
      });

      it('populated automatically based on templates', () => {
        expect(78).toEqual(98);
      });

      it('should be linked to produce data based on items sold',  () => {
        expect(8).toEqual(890);
      });
    });

    describe('Stock Management Reports', () => {
      it('should allow for tracking of breakage', () => {
        expect(6).toEqual(7);
      });

      it('should allow waste report generation', () => {
        expect(7).toEqual(9);
      });
    });
  })
})
