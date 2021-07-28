import jwtDecode from 'jwt-decode';

export default {
  async asyncFunc (fn) {
    try {
      const ret = await fn();

      return ret
        ? [null, ret.data]
        : [true];

    } catch (err) {
      return [err, null];
    }
  },

  partialFn(asyncFn, fn) {
    return async (args) => {
      return asyncFn(() => fn(args));
    };
  },

  findItem (tar, className = 'item') {
    while (!tar.classList.contains(className)) {
      tar = tar.parentNode;
    }

    return tar;
  },

  formatCount (arr, key) {
    arr.forEach(val => {
      if (val[key]) {
        val[key] = `${ Math.floor(val[key] / 1000) }万`;
      }
    })

    return arr;
  },

  _throttle (fn, delay = 500) {
    var fTime = Date.now(),
      res = null,
      t = null;

    return function () {
      var curTime = Date.now(),
        args = arguments;

      t && clearTimeout(t);
      t = null;

      if (curTime - fTime >= delay) {
        res = fn.apply(this, args);
        fTime = curTime;
      } else {
        t = setTimeout(function () {
          res = fn.apply(this, args);
        }.bind(this), delay)
      }
      return res;
    }
  },

  replaceSpace (str) {
    return str.replace(/\s+/, '');
  },

  checkEmail (str) {
    const reg = /^[A-z0-9_\-\.]+\@[A-z0-9_\-\.]+\.[A-z0-9]{2,4}$/;
    return reg.test(str.trim());
  },

  checkPhone (str) {
    const reg = /^1[3-9]\d{9}$/;
    return reg.test(str);
  },

  formatTime (num) {
    const { floor } = Math;
    num = floor(num);

    if (num < 60) {
      return `00:${ ('0' + num).substr(-2) }`
    }
    return `${ ('0' + floor(num / 60)).substr(-2) }
            :${('0' + floor(num % 60)).substr(-2) }`
  },

  formatLyric (lyric) {
    return (
      lyric &&
      lyric
        .split(/\n?\[/)
        .reduce((prev, cur) => {
          const value = cur.split(']');
          value[1] && prev.push(value);
          return prev;
        }, [])
    );
  },

  getStyle (el, prop) {
    if (window.getComputedStyle) {
      return parseInt(window.getComputedStyle(el, null)[prop]);
    }
    return parseInt(el.currentStyle(prop));
  },

  formatDate (arr, key) {
    arr.forEach(val => {
      if (val[key]) {
        const date = new Date(val[key]),
          y = date.getFullYear(),
          m = this.addZore(date.getMonth() + 1),
          d = date.getDate(),
          h = this.addZore(date.getHours()),
          f = this.addZore(date.getMinutes()),
          s = this.addZore(date.getSeconds()),
          res = `${ y }-${ m }-${ d } ${ h }:${ f }:${ s }`;

        val[key] = res;
      }
    })

    return arr;
  },

  addZore (num) {
    return `${ ('0' + num).substr(-2) }`;
  },

  deepClone (org, tar = {}) {
    const typeArray = '[object Array]',
      toStr = {}.toString;

    for (const key in org) {
      if (org.hasOwnProperty(key)) {
        const res = org[key];

        if (res && typeof (res) === 'object') {
          tar[key] = toStr.call(res) === typeArray ? [] : {};
          this.deepClone(res, tar[key]);
        } else {
          tar[key] = res;
        }
      }
    }

    return tar;
  },

  decodeToken (token) {
    if (!token) {
      return null;
    }

    try {
      token = jwtDecode(token);
    } catch (err) {
      token = null;
      console.log('err', err)
    }

    return token;
  },

  debounce (fn, delay = 500, immediate = false) {
    let t = null,
        res = null;

    const later = function (args) {
      t = setTimeout(() => {
        res = fn.call(this, args);
        debounced.onremove();
      }, delay);
    }

    const debounced = function (...args) {
      if (!t) {
        immediate ? res = fn.apply(this, args) : later.apply(this, args);
      } else {
        debounced.onremove();
        later.apply(this, args);
      }

      return res;
    }

    debounced.onremove = () => {
      clearTimeout(t);
      t = null;
    }

    return debounced;
  }
}
