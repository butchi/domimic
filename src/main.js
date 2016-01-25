import Test from './Test'
((ns) => {
  class Domimic {
    constructor() {
      this.test1();
      this.test2();
    }

    test1 () {
      console.log(1);
    }

    test2 () {
      Test.testtest();
    }
  }

  // export
  window.domimic = new Domimic();
})(window.licker);
