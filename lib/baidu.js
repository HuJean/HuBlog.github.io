'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until;

(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var driver;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Builder().forBrowser('chrome').build();

          case 2:
            driver = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return driver.get('http://www.baidu.com');

          case 6:
            _context.next = 8;
            return driver.findElement(By.id('kw')).sendKeys('webdriver');

          case 8:
            _context.next = 10;
            return driver.wait(until.titleIs('webdriver_百度搜索'), 1000);

          case 10:
            _context.prev = 10;
            _context.next = 13;
            return driver.quit();

          case 13:
            return _context.finish(10);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3,, 10, 14]]);
  }));

  function test() {
    return _ref.apply(this, arguments);
  }

  return test;
})()();