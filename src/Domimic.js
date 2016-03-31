import Ua from './Ua';
import Img from './components/img/Component';

class Domimic {
  constructor() {
    this.init();
  }

  init () {
    this.ua = new Ua();
    console.log(this.ua.os, this.ua.browser);

    document.querySelectorAll('[data-domimic-tag]').forEach((elm) => {
      this.mimic(elm);
    });
  }

  mimic(elm) {
    if(!elm) {
      return;
    }

    var tagName = elm.getAttribute('data-domimic-tag').toLowerCase();

    if(tagName === undefined) {
    } else if(tagName === 'img') {
      new Img({
        elm: elm,
        ua: this.ua,
      });
    }
  }
}

export default Domimic;