/**
 *@author 赵亚杰
 *@description 金额输入键盘。
 *@date 202/06/18
 */
const amountReg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
const CLOSEIMAGE = `data:image/png;base64,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`
const DOT = `data:image/png;base64,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`;
const keyBoardTemplate = `
      <div class="bc-amount-btns">
        <div class="bc-amount-btn" data="1">1</div>
        <div class="bc-amount-btn" data="2">2</div>
        <div class="bc-amount-btn" data="3">3</div>
        <div class="bc-amount-btn" data="4">4</div>
        <div class="bc-amount-btn" data="5">5</div>
        <div class="bc-amount-btn" data="6">6</div>
        <div class="bc-amount-btn" data="7">7</div>
        <div class="bc-amount-btn" data="8">8</div>
        <div class="bc-amount-btn" data="9">9</div>
        <div class="bc-amount-btn symbol" data=".">
            <img class="bc-amount-img" src="${DOT}">
        </div>
        <div class="bc-amount-btn" data="0">0</div>
        <div class="bc-amount-btn symbol" data="x">
            <img class="bc-amount-img" src="${CLOSEIMAGE}">
        </div>
      </div>
    `
const AmountChangeEvent =  new CustomEvent('change', {value: ''});

function Cursor() {
    this.cursor =null;
}
Cursor.prototype.create=function(){
    this.cursor = document.createElement('div');
    this.cursor.className = 'bc-amount-field-cursor';
    return  this.cursor;
};
Cursor.prototype.focus = function (parent) {
    parent.appendChild(this.create());
}
Cursor.prototype.getCursor=function (parent) {
    return  this.cursor || parent.querySelector('.bc-amount-field-cursor');
}

function Node(num,AmountField,Cursor) {
    this.$el = document.createElement('div');
    this.$el.className = "bc-amount-number";
    this.$el.innerText = num;
    this.$el.instance = this;
    this.AmountField = AmountField;
    this.Cursor = Cursor;
    this.bindClick();
}
Node.prototype.bindClick=function () {
    var _this = this;
    this.$el.addEventListener('click',function (event) {
        event.stopPropagation();
        _this.cursorInsert();
    })
}
Node.prototype.cursorInsert=function(){
    let container = this.AmountField.container;
    let cursor = this.Cursor.getCursor(container);
    container.removeChild(cursor);
    let preCursor = this.Cursor.create();
    container.insertBefore(preCursor,this.$el);
}

function KeyBoard(amount){
    this.container = document.createElement("div");
    this.container.className="bc-amount-keyboard";
    document.body.appendChild(this.container);
    this.container.innerHTML = keyBoardTemplate;
    this.amount = amount;
    this.btns = Array.prototype.slice.call(this.container.querySelectorAll(".bc-amount-btn"));
    this._btnsBindClickEvent()
}
String.prototype.splice = function(start, newStr) {
    return this.slice(0, start) + newStr + this.slice(start);
};
KeyBoard.prototype._btnsBindClickEvent=function(){
    let _this = this;
    this.btns.forEach(function (item) {
        item.addTapEvent(function () {
            let num = this.getAttribute("data");
            if(_this.amount.cursor.getCursor(_this.amount.container)){
                if(num != 'x'){
                    let children = Array.prototype.slice.call(_this.amount.container.querySelectorAll('div'));
                    let index = children.indexOf(_this.amount.cursor.getCursor(_this.amount.container));
                    let lastValue =_this.amount.container.innerText;
                    let value = lastValue.splice(index,num);
                    if(!amountReg.test(value))return;
                    _this.amount.insert(num);
                }else{
                    _this.amount.delete();
                }
            }

        })
    })
}
KeyBoard.prototype.show=function(){
    this.container.style.display="block";
}
KeyBoard.prototype.hide=function(){
    this.container.style.display="none";
}
function AmountField(className){
    this.container = document.querySelector(className);
    this.cursor = new Cursor();
    this.keyboard = new KeyBoard(this);
    this.bindEvents()
}
AmountField.prototype.isFocus=function(){
    let cursor = this.cursor.getCursor(this.container);
    return cursor!=null;
}
AmountField.prototype.bindEvents= function () {
    var _this =this;
    this.container.addEventListener('click',function () {
        if(!_this.isFocus()){
            _this.focus();
        }else{
            let cursor = _this.cursor.getCursor(this.container);
            _this.container.removeChild(cursor);
            let newCursor = _this.cursor.create();
            _this.container.appendChild(newCursor);
        }
    })
}
AmountField.prototype.focus=function () {
    this.cursor.focus(this.container);
    this.keyboard.show();
    this.container.classList.add("focus");
    this.container.classList.remove('blur');
}
AmountField.prototype.insert=function (param) {
    let node = new Node(param,this,this.cursor);
    let cursor = this.cursor.getCursor(this.container);
    this.container.insertBefore(node.$el,cursor);
    AmountChangeEvent.value = this.container.innerText;
    this.container.dispatchEvent(AmountChangeEvent);
}
AmountField.prototype.delete=function(){
    let cursor = this.cursor.getCursor(this.container);
    let previous = cursor.previousElementSibling;
    if(previous==null)return;
    previous.parentNode.removeChild(previous);
    AmountChangeEvent.value = this.container.innerText;
    this.container.dispatchEvent(AmountChangeEvent);
}
AmountField.prototype.blur = function () {
    let cursor = this.cursor.getCursor(this.container);
    if(cursor)this.container.removeChild(cursor);
    this.cursor.cursor=null;
    this.keyboard.hide();
    this.container.classList.add("blur");
    this.container.classList.remove('focus');
}
AmountField.prototype.getChildren = function(){
    return Array.prototype.slice.call(this.container.querySelectorAll(".bc-amount-number"));
}
AmountField.prototype.removeChildren=function(){
    let children = this.getChildren();
    children.forEach(function (node) {
        node.parentNode.removeChild(node);
    })
}
AmountField.prototype.val = function(value){
    var _this= this;
    if(value==undefined)return this.container.innerText;
    let valueList = value.toString().split("");
    amount.removeChildren();
    let cursor = _this.cursor.getCursor(_this.container);
    valueList.forEach(function (val) {
        let node = new Node(val,_this,_this.cursor);
        if(cursor==null){
            _this.container.prependChild(node.$el);
        }else{
            _this.container.insertBefore(node.$el,cursor);
        }

    })
}
document.onclick=function (event) {
    //点击他处失焦
    if(!event.target.matches("*[class|='bc-amount']")){
        amount.blur();
    }

// 阻止双指放大
    document.addEventListener('gesturestart', function(event) { event.preventDefault(); });
}


