var scope = 'global';
function f(){
    console.log(scope); //输出undefined
    var scope = 'local';
    console.log(scope); //输出local
}

var scope = 'global';
function f(){
    var scope;
    console.log(scope); //输出undefined
    scope = 'local';
    console.log(scope); //输出local
}

var point = {x:1, y:1};
'x' in point  //true
'z' in point  //false
"toString" in point //true 对象继承了toString方法


var o = {x:1,y:2};
delete o.x;
"x" in o

var a = [7,8,9];
delete a[2]
2 in a

delete Object.prototype //不可删除
var x = 1;
delete this.x; //不可删除
function f(){}
delete this.f; //不可删除


var d = new Date();
d instanceof Date;


var max = max_width || preferences.max_width || 500;


//将o的成员属性复制到p中，并返回p
function copy(o,p){
    //如果向参数p没有传入任何对象，则使用一个新创建的对象
    p = p || {};

    //函数体内的主逻辑
}

for(var i = 0; i < a.length; a[i++] =0) ;

for(var p in o){
    console.log(o[p]);
}

var empty = {}
var point = {x:0, y:0}
var point2 = {x:point.x, y:point.y+1}
var book = {
    "main title": "javaScript", //key中间有空格
    "sub-title": "The define guid", //key中间有横线
    "for": "all audiences", //key为javaScript的保留字
    author : {
        firstname : "David",
        surname : "Flanagan"
    }
}


var o = new Object(); //创建一个空对象，和{}一样
var a = new Array();  //创建一个空数组，和[]一样
var d = new Date();
var r = new RegExp("js");

var o1 = Object.create({x:1, y:2});

var o2 = Object.create(Object.prototype)


//返回了一个继承自原型对象p的属性的新对象
function inherit(p){
    if(p == null) throw TypeError();
    if(Object.create){
        return Object.create(p);
    }

    var t =  typeof p;
    if(t !== "object" && t !== "function")
        throw TypeError();

    function f(){}
    f.prototype = p;
    return new f();
}

var o = {} //o 从 Object.prototype继承对象的方法
o.x = 1;

var p = inherit(o); //p继承o和Object.prototype
p.y = 2;

var q = inherit(p); //q继承p、o、和Object.prototype
q.z = 3;

var s = q.toString();//toString继承自Object.prototype
q.x + q.y


var o = inherit({y:2})
o.x = 1;

o.propertyIsEnumerable("x") //true o有可枚举的自有属性。
o.propertyIsEnumerable("y") //false y是继承来的
Object.prototype.propertyIsEnumerable("toString") //false不可枚举

var o = {x:1}
o.x !== undefined; //true o中有属性x
o.y !== undefined; //false
o.toString() !== undefined; //true o继承了toString


//把p中可枚举的属性复制到o中，并返回o
function extend(o,p){
    for(prop in p){
        o[prop] = p[prop];
    }
    return o;
}

function union(o,p){
    return extend(extend({},o),p);
}

//返回对象自有属性的数组
function keys(o){
    if(typeof o !== "object") throw TypeError;
    var result = [];
    for(var prop in o){
        if(o.hasOwnProperty(prop)){ //判断是否是自有属性
            result.push(prop);
        }
    }
    return result;
}

$("ul li").click(function(){
    //复制当前单击的节点，并将它追加到<ul>元素中
    $(this).clone().appendTo("ul");
})

$("p").replaceWith("<strong>你最不喜欢的水果是？</strong>");
$("<strong>你最不喜欢的水果是？</strong>").replaceAll("p");

$("strong").wrapInner("<b></b>");

<strong title="选择你最喜欢的水果."><b>你最喜欢的水果是？</b></strong>

<b>
<strong title="选择你最喜欢的水果."><b>你最喜欢的水果是？</b></strong>
<strong title="选择你最喜欢的水果.">你最喜欢的水果是？</strong>
</b>

<b><strong title="选择你最喜欢的水果.">你最喜欢的水果是？</strong></b>




var $para = $("p"); //获取<p>节点
var p_txt = $para.attr("title"); //获取<p>元素节点属性title

$("p").attr("title","you title"); //设置单个的属性值

$("p").attr({"title":"your title","name":"test"});


var offset = $("p").offset(); //获取<p>元素的offset()
var left = offset.left; //获取左偏移
var top = offset.top; //获取右偏移


var obj = {
    a : 2,
    b : 4,
    c : function(){
        console.log("1");
    },
    d : {
        name : "zhangsan",
        age : 20
    }
}


var p = {
    //x和y是普通的可读写的数据属性
    x : 1.0,
    y : 1.0,

    //r是可读写的存取器属性，因为它有getter和setter
    get r(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    set r(newvalue){
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newvalue / oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },

    //theta是只读存取器属性，它只有getter方法
    get theta(){
        return Math.atan2(this.y,this.x);
    }
}


var p = {x : 1}
var o = Object.create(p); //使用p作为原型对象创建一个对象
p.isPrototypeOf(o); //true o继承p
Object.prototype.isPrototypeOf(o); //true p继承Object.prototype


function classof(o){
    if(o === null) return "Null";
    if(o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

classof(null) //Null
classof(1) //Number
classof({}) //Object
classof([]) //Array
classof(/./) //Regexp
classof(window) //Window
function f(){}
classof(new f()); //Object


var len = book && book.subtitle && book.subtitle.length


Object.getOwnPropertyDescriptor();


Object.getOwnPropertyDescriptor({x:1},"x");

//返回
{value:1,writable:true,enumberable:true,configurable:true}

var random = {
    get octet(){ return Math.floor(Math.random() * 256); },
    get uint16(){ return Math.floor(Math.random() * 65536); },
    get int16(){ return Math.floor(Math.random() * 65536) - 32768; },
}
Object.getOwnPropertyDescriptor(random,"octet");

//返回
{get:/*func*/,set:undefined,enumberable:true,configurable:true}

//对于继承属性和不存在的属性，返回undefined
Object.getOwnPropertyDescriptor({},"x") //undefined 因为没有这个属性
Object.getOwnPropertyDescriptor({},"toString") //undefined 因为继承属性


//设值
var o = {}
Object.defineProperty(o,{
    value:1,
    writable:true,
    enumberable:false,
    configurable:true
});

//取值
o.x;  //1
Object.keys(o); //{}





var p = Object.defineProperties({},{
    x : {value:1,writable:true,enumerable:true,configurable:true},
    y : {value:1,writable:true,enumerable:true,configurable:true},
    r : {
        get : function(){ return Math.sqrt(this.x * this.x + this.y * this.y);},
        enumerable : true,
        configurable: true
    }
});



//给Object.prototype添加不可枚举的extend()方法
//这个方法继承自调用它的对象，将作为参数传入的对象属性一一复制
Object.defineProperty(Object.prototype,"extend",{
    writable: true,
    enumerable: false,
    configurable: true,
    value: function(o){
        //得到所有的自有属性，包括不可枚举属性
        var names = Object.getOwnPropertyNames(o);
        for(var i = 0; i < names.length; i++){
            //如果属性已经存在，则跳过
            if(names[i] in this) continue;
            //获取o中的属性描述符
            var desc = Object.getOwnPropertyDescriptor(o,names[i]);
            //用它给this创建一个属性
            Object.defineProperty(this,names[i],desc);
        }
    }
});


var empty = []; //创建一个没有元素的数组

var primes = [2,3,5,7,11]; //有5个数值的数组

//3个不同类型的元素和结尾的逗号，需要注意，这是3个元素不是4个元素
var misc = [1.1,true,"a",];

var count = [1,,3]; //数组有3个元素，中间的那个元素是undefined

//数组有2个元素，都是undefined，最后的逗号是可选的
var undefs = [,,]




var a = new Array(); //没有参数的数组，相当于[]

//需要注意：这种创建数组的方式没有存储值，甚至连所谓0，1..都没有
var b = new Array(10); //调用有一个数值参数，它指定长度10
//b.length  = 10

//显示指定两个或者多个数组元素
var c = new Array(5,4,3,2,1,"testing");



var a = ["world"];
a[1] = 0;
a[-1.23] = true //这里将创建一个名为"-1.23"的属性
a[1000] = 0; //这是数组的第1001个元素
a[1.000]; //和a[1]相等





[].length //0

['a','b','c'].length //3

//数组的长度居然可以设置。现在数组a为[1,2,3]。其它元素将被删除
var a = [1,2,3,4,5]
a.length = 3
a.length = 0 //删除所有的元素，a为[]
a.length = 5 //长度为5，但是没有元素，就像new Array(5)



var a  = [1,2,3,4,5]
Object.defineProperty(a,"length",{writable:false}); //让length属性只读

a.length = 0 //a的值不会改变，这个操作无效



var a = [];
a.push("zero");
a.push("one","two");
console.log(a); // ["zero","one","two"]

var b = a.pop();
console.log(a); //["one","two"]
console.log(a); // zero


var a = []
for(var i = 0; i < 10; i++){
    a[a.length] = i;
}
console.log(a) //[0,1,2,3,4,5,6,7,8,9]



var a = [1,2,3]
delete a[1] //a在索引1的位置不再有元素
1 in a //false 数组索引1并未在数组中定义
a.length //3 delete操作不影响数组长度


var a = [1,2,3,4,5]
var b = a.shift();
console.log(b); //1
console.log(a); //[2,3,4,5]  可以看出长度为4了

a.unshift(1);
console.log(a); //[1,2,3,4,5] 可以看出长度为5了
a.unshift(-1,0)
console.log(a); //[-1,0,1,2,3,4,5]




//方式一
function plus(x){
    return x + 1;
}

//方式二
var square = function(x){
    return x * x;
}


//定义和使用私有变量实现计数器
function counter(){
    var n = 0;
    return {
        count : function() { return n++; },
        reset : function() { n = 0; }
    }
}


//函数参数n是一个私有变量
function counter(n){
    return {
        //属性getter方法返回并给私有计数器var递增1
        get count() { return n++; },

        //属性setter不允许n递减
        set count(m) {
            if(m >= n){
                n = m;
            }else{
                throw Error("count can only be set to a larger value")
            }
        }
    };
}



//这个函数使用arguments.callee,因此它不能在严格模式下工作
//注意： 这里的args实际上是f方法中的arguments
function check(args){
    var actual = args.length;  //实参的真实个数
    var expected = args.callee.length; //期望的实参个数
    console.log("ac:[" + actual + "] ex:[" + expected + "]")

    if(actual !== expected){
        throw Error("Expected " + expected + " args: got " + actual);
    }
}

function f(x,y,z){
    check(arguments);
    return x + y + z;
}

f(1,2,3,4)




//返回一个函数，通过调用它来调用o中的方法f(),传递它所有实参
function bind(f,o){
    if(f.bind){
        //如果bind方法存在的话，使用bind方法
        return f.bind(o);
    }else{
        //模拟绑定调用
        return f.apply(o,arguments);
    }
}


//如果想检测一个对象是否是真正的函数对象，可以参考下面的示例
function isFunction(x){
    return Object.prototype.toString.call(x) == "[object Function]";
}

var section1 = document.getElementById("id");

var radiobuttons = document.getElementsByName("favorite_color");



var spans = document.getElementsByTagName("span");

var firstpara = document.getElementsByTagName("p")[0];
var firstParaSpans = firstpara.getElementsByTagName("span");


var warnings = document.getElementsByClassName("warning");

var log = document.getElementById("log");
var fatal = log.getElementsByClassName("fatal error");


//基本的CSS语法
#nav        //id="nav"的元素
div          //所有<div>元素
.warning     //所有在class属性值中包含了warning的元素

//元素可以基于属性值来选取
p[lang="fr"]   //所有使用法语的段落<p lang="fr">
*[name="x"]    //所有包含name="x"属性的元素


//基本选择器的组合
span.fatal.error   //其class中包含fatal和error的所有span元素
                   //<span class="fatal error">
span[lang="fr"].warning   //<span lang="fr" class="warning">
                          //所有包含这种标签的元素

//选择器可以包含文档结构
#log span  //id="log"元素的后代元素中所有<span>元素
#log > span  //id="log"元素的子元素中的所有<span>元素
body>h1:first-child  //<body>的子元素中的第一个<h1>元素


//选择器可以组合起来选取多个或者多组元素
div,#log  //所有div元素，以及id="log"的元素



var person = {
    name : ['Bob','Smith'],
    age : 32,
    gender : 'male',
    interests : ['music','skiing'],
    greeting : function(){
        alert('Hi! I\'m ' + this.name[0] + '.')
    }
};

var personx = new Object();
personx.name = "狼狼的蓝胖子";
personx.age = 25

function Person(name,age){
    this.name = name;
    this.age = age;
    this.show = function(){}
}
var person = new Person("Jack",15);


name : {
    first : 'Bob',
    last : 'Smith'
}
