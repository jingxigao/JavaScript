function Person(name) {
    var _this={};//创建空对象
    _this._name=name;
    _this.sayHi=function () {
        alert("P:Hi!"+_this._name);
    }
    return _this;
}

function teacher(name) {
    var _this=Person();
    _this._name=name;
    var SayHi=_this.sayHi();
    _this.sayHi=function () {
        SayHi.call(_this);
        alert("t:Hi!"+_this._name);
    }
    return _this;
}

var t=teacher("Jingxi");
t.sayHi();