/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Field.ts":
/*!**********************!*\
  !*** ./src/Field.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Field = /*#__PURE__*/function () {
  function Field(rows, cols, result) {
    _classCallCheck(this, Field);

    this.rows = rows;
    this.cols = cols;
    this.score = 0;
    this.result = result;
  }

  _createClass(Field, [{
    key: "create",
    value: function create() {
      var cells = this.rows * this.cols;
      var field = document.getElementById('matrix');
      if (!field) return;
      field.innerHTML = '';

      for (var i = 0; i < cells; i++) {
        var cell = document.createElement('div');
        cell.className = 'cell';
        field.appendChild(cell);
      }
    }
  }, {
    key: "showSnakeCell",
    value: function showSnakeCell(cellCoords) {
      var isSnakeAlive = true;
      var cellEl = this.getCellElemByCoordinates(cellCoords);

      if (cellEl.classList.contains('fruit')) {
        this.score++;
        this.result.showScore(this.score);
        cellEl.setAttribute("style", "background-image: inherit);");
        cellEl.classList.remove('fruit');
        cellEl.classList.add('on');
      } else if (cellEl.classList.contains('on')) {
        isSnakeAlive = false; // змея заехала на свой хвост
      } else {
        cellEl.classList.add('on');
      }

      return isSnakeAlive;
    }
  }, {
    key: "removeSnakeCell",
    value: function removeSnakeCell(cellCoords) {
      var cellEl = this.getCellElemByCoordinates(cellCoords);
      cellEl.classList.remove('on');
    }
  }, {
    key: "addFruitCell",
    value: function addFruitCell(cellCoords) {
      var cellEl = this.getCellElemByCoordinates(cellCoords);
      var imageId = Math.floor(Math.random() * 10);

      if (!cellEl.classList.contains('on')) {
        cellEl.classList.add('fruit');
        cellEl.setAttribute("style", "background-image: url(img/" + imageId + ".png);");
      }
    }
  }, {
    key: "getCellElemByCoordinates",
    value: function getCellElemByCoordinates(cellCoords) {
      var row = cellCoords[0];
      var col = cellCoords[1];
      var index = (row - 1) * this.cols + col - 1;
      var allCells = document.querySelectorAll('.cell');
      return allCells[index];
    }
  }, {
    key: "removeFruitCell",
    value: function removeFruitCell(cellCoords) {
      var cellEl = this.getCellElemByCoordinates(cellCoords);
      cellEl.classList.remove('fruit');
    }
  }]);

  return Field;
}();

exports["default"] = Field;

/***/ }),

/***/ "./src/Fruit.ts":
/*!**********************!*\
  !*** ./src/Fruit.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Fruit = /*#__PURE__*/function () {
  function Fruit(field) {
    _classCallCheck(this, Fruit);

    // this.body = [1, 1]
    this.field = field;
  }

  _createClass(Fruit, [{
    key: "create",
    value: function create() {
      for (var i = 0; i < 3; i++) {
        // let x = Math.floor((Math.random() * 20));
        // let y = Math.floor((Math.random() * 20));
        // random int between min and max included
        //Math.floor(Math.random() * (max - min + 1)) + min;
        var x = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        var y = Math.floor(Math.random() * (20 - 1 + 1)) + 1; // this.body = [x, y];
        // console.log(this.body)
        // this.field.setCell(this.body, true, 'fruit');

        this.field.addFruitCell([x, y]);
      }
    }
  }, {
    key: "removeAllFruits",
    value: function removeAllFruits() {
      var fruits = document.querySelectorAll('.fruit');

      var _iterator = _createForOfIteratorHelper(fruits),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fruit = _step.value;
          fruit.setAttribute("style", "background-image: inherit);");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Fruit;
}();

exports["default"] = Fruit;

/***/ }),

/***/ "./src/Result.ts":
/*!***********************!*\
  !*** ./src/Result.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Result = /*#__PURE__*/function () {
  function Result() {
    _classCallCheck(this, Result);

    this.fruitsEatenNumber = 0;
    this.timerValue = 0;
  }

  _createClass(Result, [{
    key: "setTimer",
    value: function setTimer(value) {
      this.timerValue = value;
      return this;
    }
  }, {
    key: "getTimer",
    value: function getTimer() {
      return this.timerValue;
    }
  }, {
    key: "showTimer",
    value: function showTimer() {
      var el = document.querySelector('#timer b');
      if (!el) return;
      el.innerHTML = String(this.timerValue);
    }
  }, {
    key: "showScore",
    value: function showScore(value) {
      var el = document.querySelector('#score b');
      if (!el) return;
      el.innerHTML = String(value);
    }
  }, {
    key: "showEndGameMessage",
    value: function showEndGameMessage() {
      var msgEl = document.getElementById('intro');

      if (msgEl) {
        msgEl.classList.add('show');
        msgEl.innerText = 'Game over!';
      }

      var buttonEl = document.getElementById('start');

      if (buttonEl) {
        buttonEl.innerText = 'Let me try again,please!';
      }
    }
  }]);

  return Result;
}();

exports["default"] = Result;

/***/ }),

/***/ "./src/Snake.ts":
/*!**********************!*\
  !*** ./src/Snake.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Snake = /*#__PURE__*/function () {
  function Snake(row, col, course, field) {
    _classCallCheck(this, Snake);

    // тело змеи - коорлинаты правого верхнего угла ячейки
    this.body = [[row, col], [row, col - 1], [row, col - 2]];
    this.course = course;
    this.field = field;
  }

  _createClass(Snake, [{
    key: "create",
    value: function create() {
      // замя гначинается с головы
      for (var i = 0; i < 3; i++) {
        this.field.showSnakeCell(this.body[i]);
      }
    }
  }, {
    key: "move",
    value: function move(direction) {
      // console.log(this.body)
      // координаты головы
      var newRow = this.body[0][0];
      var newCol = this.body[0][1];
      var isSnakeAlive = true; // определяем новые координаты головы

      switch (direction) {
        case 'right':
          if (newCol === 20) {
            isSnakeAlive = false;
          } else {
            newCol++;
          }

          break;

        case 'left':
          if (newCol === 1) {
            isSnakeAlive = false;
          } else {
            newCol--;
          }

          break;

        case 'up':
          if (newRow === 1) {
            isSnakeAlive = false;
          } else {
            newRow--;
          }

          break;

        case 'down':
          if (newRow === 20) {
            isSnakeAlive = false;
          } else {
            newRow++;
          }

          break;
      }

      var newHead = [newRow, newCol];
      this.body.unshift(newHead); // добавляем новый элемент в начало

      isSnakeAlive = this.field.showSnakeCell(this.body[0]);
      return isSnakeAlive;
    }
  }, {
    key: "addBody",
    value: function addBody() {
      var lastBody = this.body[this.body.length - 1];
      var preLastBody = this.body[this.body.length - 2];
      var newCol;
      var newRow;

      if (lastBody[0] === lastBody[0]) {
        newRow = lastBody[0];
        newCol = lastBody[0] - 1;
      } else {
        newRow = lastBody[0] - 1;
        newCol = lastBody[1];
      }

      this.body.push(newRow, newCol);
    }
  }, {
    key: "removeBody",
    value: function removeBody() {
      var cells = document.querySelectorAll('#matrix div');

      if (cells) {
        var _iterator = _createForOfIteratorHelper(cells),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cell = _step.value;
            cell.classList.remove('on');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }]);

  return Snake;
}();

exports["default"] = Snake;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Field_1 = __webpack_require__(/*! ./Field */ "./src/Field.ts");

var Result_1 = __webpack_require__(/*! ./Result */ "./src/Result.ts");

var Fruit_1 = __webpack_require__(/*! ./Fruit */ "./src/Fruit.ts");

var Snake_1 = __webpack_require__(/*! ./Snake */ "./src/Snake.ts");

document.addEventListener('DOMContentLoaded', function () {
  var initialTimerValue = 300;
  var initialSnakeVelocity = 500;
  var timerSpeed = 1000; // ms

  var initFieldSize = [20, 20]; // [rows, cols]

  var initSnakePosition = [10, 10]; // [row, col]

  var snakeIntervalID;
  var timerInterval;
  var score = 0;
  var timer = 0;
  var counter = 0;
  var direction = 'right'; // направление движения

  var snakeIncreaseBodyInterval = 10; // с какой периодичностью увеличивать скорость и тело змеи

  var snakeVelocity = initialSnakeVelocity;
  var isSnakeAlive = true; // false - конец игры

  var result = new Result_1["default"]();
  var field = new Field_1["default"](initFieldSize[0], initFieldSize[1], result);
  var fruit = new Fruit_1["default"](field);
  var snake = new Snake_1["default"](initSnakePosition[0], initSnakePosition[0], direction, field);
  field.create();
  result.setTimer(initialTimerValue).showTimer();
  result.showScore(0);
  var startButton = document.getElementById('start');

  if (startButton) {
    startButton.innerText = "Let's get started!";
    startButton.addEventListener('click', function (e) {
      if (startButton) {
        startButton.classList.toggle('hide');
      }

      startGame();
    });
  }

  var startGame = function startGame() {
    timer = result.getTimer();
    snake.create();
    fruit.create();
    timerInterval = setInterval(doTimerStep, timerSpeed);
    snakeIntervalID = setInterval(doSnakeStep, snakeVelocity);
    keyboardHandler();
  };

  var doSnakeStep = function doSnakeStep() {
    console.log('snake step');
    isSnakeAlive = snake.move(direction);
    clearInterval(snakeIntervalID);
    counter++;

    if (counter % snakeIncreaseBodyInterval === 0) {
      console.log('counter: ', counter);
      console.log('snakeVel: ', snakeVelocity);
      snakeVelocity = snakeVelocity - 15;
      fruit.create();
      snake.addBody();
    }

    if (!isSnakeAlive) {
      endGame();
    }

    snakeIntervalID = setInterval(doSnakeStep, snakeVelocity);
  };

  var endGame = function endGame() {
    clearInterval(snakeIntervalID);
    clearInterval(timerInterval);
    snake.removeBody();
    fruit.removeAllFruits();
    result.showEndGameMessage();
    snakeVelocity = initialSnakeVelocity;
    isSnakeAlive = false;
    return;
  };

  var doTimerStep = function doTimerStep() {
    result.setTimer(timer--).showTimer();

    if (timer < 0) {
      isSnakeAlive = false;
    }
  };

  var keyboardHandler = function keyboardHandler() {
    document.addEventListener('keyup', function (event) {
      if (!event.repeat) {
        console.log('первичное срабатывание');

        switch (event.code) {
          case 'ArrowRight':
            direction = 'right';
            break;

          case 'ArrowUp':
            direction = 'up';
            break;

          case 'ArrowDown':
            direction = 'down';
            break;

          case 'ArrowLeft':
            direction = 'left';
            break;

          default:
            alert('Incorrect key pressed');
        }
      } else {//повторное срабатывание
      }
    });
  };
});
})();

/******/ })()
;