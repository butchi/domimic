class Ua {
  constructor() {
    var ua = navigator.userAgent.toLowerCase();
    var os;
    var browser;

    if(false) {
    } else if(ua.includes('safari')) {
      browser = 'safari';
    } else if(ua.includes('firefox')) {
      browser = 'firefox';
    } else if(ua.includes('chrome')) {
      browser = 'chrome';
    }

    if(false) {
    } else if(ua.includes('mac os')) {
      os = 'mac';
    } else if(ua.includes('windows')) {
      os = 'windows';
    }

    this.os = os;
    this.browser = browser;
  }
}

export default Ua;