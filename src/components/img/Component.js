import _ from 'lodash';

export default class Img {
  constructor(opt) {
    this.elm = opt.elm;

    this.ua = opt.ua;

    var attribute = opt.attribute || {};

    this.alt = attribute.alt;

    if(!this.ua) {
    } else if(this.ua.browser === 'chrome') {
      let tmpl = `
<span class="domimic__img__appearance"></span>
`;
      let compiled = _.template(tmpl);
      this.elm.innerHTML = compiled({
      });

      this.elm.querySelector('.domimic__img__appearance').style = `
display: inline-block;
width: 100px;
height: 100px;
background-image: url(http://placehold.it/100x100);
`;
    } else if(this.ua.browser === 'firefox') {
    }
  }
}