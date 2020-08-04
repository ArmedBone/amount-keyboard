/**
 *@author 赵亚杰
 *@description 金额输入键盘。
 *@date 202/06/18
 */
var source = 'data:image/png;base64,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'
var amountReg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
var keyBoardTemplate = '<div class="bc-amount-btns">' +
    '<div class="bc-amount-btn">1</div>' +
    '<div class="bc-amount-btn">2</div>' +
    '<div class="bc-amount-btn">3</div>' +
    '<div class="bc-amount-btn">4</div>' +
    '<div class="bc-amount-btn">5</div>' +
    '<div class="bc-amount-btn">6</div>' +
    '<div class="bc-amount-btn">7</div>' +
    '<div class="bc-amount-btn">8</div>' +
    '<div class="bc-amount-btn">9</div>' +
    '<div class="bc-amount-btn bc-amount-btn-point">.</div>' +
    '<div class="bc-amount-btn">0</div></div>'+
    '<div class="bc-amount-btns-side">'+
    '<div class="bc-amount-side bc-amount-btn-clear-container"><img class="bc-amount-btn-clear" src="'+source+'"></div>' +
    '<div class="bc-amount-side bc-amount-side-sure">确定</div>' +
    '</div>';


(function () {
    var CustomEvent = function (event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};

        var evt = document.createEvent('CustomEvent');

        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

        return evt;
    };

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

function matchesSelector(element, selector) {
    if (element.matches) {
        return element.matches(selector);
    } else if (element.matchesSelector) {
        return element.matchesSelector(selector);
    } else if (element.webkitMatchesSelector) {
        return element.webkitMatchesSelector(selector);
    } else if (element.msMatchesSelector) {
        return element.msMatchesSelector(selector);
    } else if (element.mozMatchesSelector) {
        return element.mozMatchesSelector(selector);
    } else if (element.oMatchesSelector) {
        return element.oMatchesSelector(selector);
    }
}


var AmountChangeEvent = new CustomEvent('change', {value: ''});

function Cursor() {
    this.cursor = null;
}

Cursor.prototype.create = function () {
    this.cursor = document.createElement('div');
    this.cursor.className = 'bc-amount-field-cursor';
    return this.cursor;
};
Cursor.prototype.focus = function (parent) {
    parent.appendChild(this.create());
}
Cursor.prototype.getCursor = function (parent) {
    return this.cursor || parent.querySelector('.bc-amount-field-cursor');
}

function Node(num, AmountField, Cursor) {
    this.$el = document.createElement('div');
    this.$el.className = "bc-amount-number";
    this.$el.innerText = num;
    this.$el.instance = this;
    this.AmountField = AmountField;
    this.Cursor = Cursor;
    this.bindClick();
}

Node.prototype.bindClick = function () {
    var _this = this;
    this.$el.addEventListener('click', function (event) {
        event.stopPropagation();
        _this.cursorInsert();
    })
}
Node.prototype.cursorInsert = function () {
    var container = this.AmountField.container;
    var cursor = this.Cursor.getCursor(container);
    container.removeChild(cursor);
    var preCursor = this.Cursor.create();
    container.insertBefore(preCursor, this.$el);
}

function KeyBoard(amount) {
    var self = this;
    this.container = document.createElement("div");
    this.container.className = "bc-amount-keyboard";
    document.body.appendChild(this.container);
    this.container.innerHTML = keyBoardTemplate;
    this.amount = amount;
    this.btns = Array.prototype.slice.call(this.container.querySelectorAll(".bc-amount-btn"));
    this.clear = this.container.querySelector(".bc-amount-btn-clear-container");
    this.confirm = this.container.querySelector(".bc-amount-side-sure");
    this.clear.addEventListener("click",function () {
        self.amount.delete();
    });
    this.confirm.addEventListener("click",function () {
        self.amount.blur();
    })
    this._btnsBindClickEvent()
}

String.prototype.splice = function (start, newStr) {
    return this.slice(0, start) + newStr + this.slice(start);
};
KeyBoard.prototype._btnsBindClickEvent = function () {
    var _this = this;
    this.btns.forEach(function (item) {
        item.addTapEvent(function () {
            var num = this.innerText;
            if (_this.amount.cursor.getCursor(_this.amount.container)) {
                if (num != 'x') {
                    var children = Array.prototype.slice.call(_this.amount.container.querySelectorAll('div'));
                    var index = children.indexOf(_this.amount.cursor.getCursor(_this.amount.container));
                    var lastValue = _this.amount.container.innerText;
                    var value = lastValue.splice(index, num);
                    if (!amountReg.test(value)) return;
                    _this.amount.insert(num);
                } else {
                    _this.amount.delete();
                }
            }

        })
    })
}
KeyBoard.prototype.show = function () {
    this.container.style.display = "block";
}
KeyBoard.prototype.hide = function () {
    this.container.style.display = "none";
}

function AmountField(className, options) {
    this.container = document.querySelector(className);
    this.cursor = new Cursor();
    this.keyboard = new KeyBoard(this);
    this.options = options?options:{};
    if (!this.options.disable) this.bindEvents()
}

AmountField.prototype.isFocus = function () {
    var cursor = this.cursor.getCursor(this.container);
    return cursor != null;
}
AmountField.prototype.bindEvents = function () {
    var _this = this;
    this.container.addEventListener('click', function () {
        if (!_this.isFocus()) {
            _this.focus();
        } else {
            var cursor = _this.cursor.getCursor(this.container);
            _this.container.removeChild(cursor);
            var newCursor = _this.cursor.create();
            _this.container.appendChild(newCursor);
        }
    })
}
AmountField.prototype.focus = function () {
    this.cursor.focus(this.container);
    this.keyboard.show();
    this.container.classList.add("focus");
    this.container.classList.remove('blur');
}
AmountField.prototype.insert = function (param) {
    console.log(this.options.maxLength)
    if (this.options.maxLength && this.getChildren().length >= this.options.maxLength) return;
    var node = new Node(param, this, this.cursor);
    var cursor = this.cursor.getCursor(this.container);
    this.container.insertBefore(node.$el, cursor);
    AmountChangeEvent.value = this.container.innerText;
    this.container.dispatchEvent(AmountChangeEvent);
}
AmountField.prototype.delete = function () {
    var cursor = this.cursor.getCursor(this.container);
    var previous = cursor.previousElementSibling;
    if (previous == null) return;
    previous.parentNode.removeChild(previous);
    AmountChangeEvent.value = this.container.innerText;
    this.container.dispatchEvent(AmountChangeEvent);
}
AmountField.prototype.blur = function () {
    var cursor = this.cursor.getCursor(this.container);
    if (cursor) this.container.removeChild(cursor);
    this.cursor.cursor = null;
    this.keyboard.hide();
    this.container.classList.add("blur");
    this.container.classList.remove('focus');
}
AmountField.prototype.getChildren = function () {
    return Array.prototype.slice.call(this.container.querySelectorAll(".bc-amount-number"));
}
AmountField.prototype.removeChildren = function () {
    var children = this.getChildren();
    children.forEach(function (node) {
        node.parentNode.removeChild(node);
    })
}
AmountField.prototype.val = function (value) {
    var _this = this;
    var valueText = this.container.innerText;
    if (value == undefined) return valueText ? valueText : 0;
    var valueList = value.toString().split("");
    amount.removeChildren();
    var cursor = _this.cursor.getCursor(_this.container);
    valueList.forEach(function (val) {
        var node = new Node(val, _this, _this.cursor);
        if (cursor == null) {
            _this.container.appendChild(node.$el);
        } else {
            _this.container.insertBefore(node.$el, cursor);
        }
    });
    this.container.dispatchEvent(AmountChangeEvent);
}
document.onclick = function (event) {
    //点击他处失焦

    if (!matchesSelector(event.target, "*[class|='bc-amount']")) {
        amount.blur();
    }

// 阻止双指放大
    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });
}


