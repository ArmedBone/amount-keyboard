/**
 *@author 赵亚杰
 *@description 金额输入键盘。
 *@date 202/06/18
 */
const amountReg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
const keyBoardTemplate = `
      <div class="bc-amount-btns">
        <div class="bc-amount-btn">1</div>
        <div class="bc-amount-btn">2</div>
        <div class="bc-amount-btn">3</div>
        <div class="bc-amount-btn">4</div>
        <div class="bc-amount-btn">5</div>
        <div class="bc-amount-btn">6</div>
        <div class="bc-amount-btn">7</div>
        <div class="bc-amount-btn">8</div>
        <div class="bc-amount-btn">9</div>
        <div class="bc-amount-btn">.</div>
        <div class="bc-amount-btn">0</div>
        <div class="bc-amount-btn">x</div>
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
            let num = this.innerText;
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
        let node = new Node(val);
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


