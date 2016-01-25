import Ua from './Ua';

class Domimic {
  constructor() {
    this.init();
  }

  init () {
    var ua = new Ua();
    console.log(ua.os, ua.browser);
  }
}

export default Domimic;