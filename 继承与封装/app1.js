// var person={
//     name:"Jingxi",
//     age:23,
//     eat:function f() {
//         alert("不能吃");
//     }
// }
// alert(person.name)
//
// function person() {
//
// }
// person.prototype={
//     name:"Jingxi",
//     age:23,
//     eat:function () {
//         alert("I'm eating");
//     }
// }
// var p=new person();
//封装
(function (){
    function People(name) {
        this.name=name;
    }

    People.prototype.speak=function () {
        alert("peo:hello"+this.name);
    }
    window.People=People;
}());

(function () {
    function student(name) {
        this.name=name;
    }
    student.prototype=new People();

    var SSpeak=student.prototype.speak;
    student.prototype.speak=function () {
        SSpeak.call(this);//父类方法
        alert("stu:hello"+this.name);
    }
    window.student=student;
}());



var s=new student("Jingxi");
s.speak();//子类方法