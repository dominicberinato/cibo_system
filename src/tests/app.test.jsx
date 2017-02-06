import expect from 'expect'
// load jquery and foundation in the window scope
import 'script-loader!jquery'
import 'script-loader!what-input'
import 'script-loader!foundation-sites'

describe('App', () => {
  it('should run this test test properly', /*Name of test*/ () => {//Assertions
    expect(1).toBe(1);
  });
});
