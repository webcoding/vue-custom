// import Vue from 'vue'
// const isServer = Vue.prototype.$isServer
const isBrowser = typeof window !== 'undefined'

/* istanbul ignore next */
export const on = (function () {
  // if (isBrowser) {
  //   if (window.addEventListener) {
  //     window.addEventListener('scroll', self.handleScroll, false)
  //   } else if (window.attachEvent) {
  //     window.attachEvent('onscroll', self.handleScroll)
  //   } else {
  //     window['onscroll'] = self.handleScroll
  //   }
  // }
  if (isBrowser && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
export const off = (function () {
  if (isBrowser && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
