/* global Nightmare describe it  */
module.exports.test = (uiTestCtx) => {
  describe('Module test: inventory:new-item', function testDescribe() {
    const { config, helpers: { login, createInventory, logout } } = uiTestCtx;
    const nightmare = new Nightmare(config.nightmare);

    this.timeout(Number(config.test_timeout));

    describe('Login > Create inventory record > Create holdings record > Create item record > Checkout item > Logout\n', function descStart() {
      it(`should login as ${config.username}/${config.password}`, (done) => {
        login(nightmare, config, done);
      });

      const barcode = createInventory(nightmare, config, 'Catch-22 / Joseph Heller');
      console.log('barcode: ', barcode);

      it('should logout', (done) => {
        logout(nightmare, config, done);
      });
    });
  });
};
