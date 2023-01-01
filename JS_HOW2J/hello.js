
/*
var x =10;
document.write("x的值是多少:"+x)
ralert(1)

x =10
console.log("x="+x);
document.write("没有用var声明的变量x的值:"+x);
console.log("end")

var x
document.write("x的值:"+x)

var x=true;
var y = false;
document.write("x的值:"+x);
document.write("<br>");
document.write("y的值:"+y);


var a = 10;
var b = 012;
var c = 0xA;
var d = 3.14;
var e = 3.14e2;
document.write("十进制 10 的值: "+a);
document.write("<br>");
document.write("八进制 012 的值: "+b);
document.write("<br>");
document.write("十六进制 0xA 的值: "+c);
document.write("<br>");
document.write("浮点数 3.14 的值: "+d);
document.write("<br>");
document.write("科学记数法 3.14e2 的值: "+e);
document.write("<br>");

var str = 'hello world';
var str2 = "hello canberra";
document.write(str);
document.write("<br>");
document.write(str2);

var x;
document.write("声明了但是未赋值的时候，类型是："+typeof x);
document.write("<br>");
x = 5;
document.write("声明了但是未赋值的时候，类型是："+typeof x);
document.write("<br>");
x = 5.1
document.write("声明了但是未赋值的时候，类型是："+typeof x);
document.write("<br>");
x = 'hello world';
document.write("声明了但是未赋值的时候，类型是："+typeof x);
document.write("<br>");

var str = 'hello world';
document.write('str的长度:'+str.length);

var a = 10;
document.write("数字转字符串:"+a.toString());
document.write("<br>");

var b = true;
document.write("数字转字符串:"+b.

var a =10;
document.write('默认模式下:'+a.toString());
document.write("<br>");
document.write('二进制基模式下:'+a.toString(2));
document.write("<br>");
document.write('八进制基模式下:'+a.toString(8));
document.write("<br>");
document.write('十六进制基模式下:'+a.toString(16));

document.write("字符串的\"10\"转换为数字的:"+parseInt('10'));
document.write("<br>");
document.write("字符串的\"3.14\"转换为数字的:"+parseFloat('3.14'));
document.write("<br>");
document.write("字符串的\"10abc\"转换为数字的:"+parseInt("10abc"));
document.write("<br>");
document.write("字符串的\"hello javascript\"转换为数字的:"+parseInt('hello world'));
document.write("<br>"); // Nan: not a number

document.write("空字符串''转换为布尔后的值:"+Boolean(""));
document.write("<br>");
document.write("非空字符'hello javascript '串转换为布尔后的值:"+Boolean("hello world"));
document.write("<br>");
document.write("数字 0 转换为布尔后的值:"+Boolean(0));
document.write("<br>");
document.write("数字 3.14 转换为布尔后的值:"+Boolean(3.14));
document.write("<br>");
document.write("空对象 null 转换为布尔后的值:"+Boolean(null));
document.write("<br>");
document.write("非空对象 new Object() 转换为布尔后的值:"+Boolean(new Object));

document.write("通过Number() 函数转换字符串'123' 后得到的数字："+Number('123'));
document.write("<br>");
document.write("通过Number() 函数转换字符串'123abc' 后得到的数字："+Number('123abc'));
document.write("<br>");
document.write("通过Number() 函数转换字符串'abc123' 后得到的数字："+Number('abc123'));
document.write("<br>");
document.write("通过parseInt() 函数转换字符串'123' 后得到的数字："+parseInt('123'));
document.write("<br>");
document.write("通过parseInt() 函数转换字符串'123abc' 后得到的数字："+parseInt('123abc'));
document.write("<br>");
document.write("通过parseInt() 函数转换字符串'abc123' 后得到的数字："+parseInt('abc123'));

var a = null;
document.write('String(null) 把空对象转换为字符串：'+String(a));
document.write("<br>");
document.write('null.toString() 就会报错，所以后面的代码不能执行'+a.toString());
document.write("因为第5行报错，所以这一段文字不会显示"); 

function print(){
    document.write("这一句话是由一个自定义函数打印");
}
print();

function print(message){
    document.write(message);
}
print("hello")
print("<br>");
print("world");

function print(message){
    document.write(message);
}
function calc(x,y){
    return x+y;
}
var sum = calc(100,100);
print(sum);

var a = 0;
function f1 (){
    document.write('通过函数f1 设置全局变量a的值 为 5');
    a = 5; // 这个时候 全局变量 a 的值已经改成 5了;
}
function f2 (){
    document.write('通过函数f2 访问并打印全局变量a的值 '+a);
}
f1();
document.write("<br>");
f2();
function showHello(){
    alert('Hello Javascript');
}
function p(s){
    document.write(s);
    document.write('<br>');
}
p("1+2="+(1+2));
p("5-3="+(5-3));
p("3*2="+(3*2));
p("9/3="+(9/3));
p("10%3="+(10%3));
var a = 5;
document.write('a++ 是先取值，再运算，所以打印出来是：'+a++);
document.write('<br>')
var b = 5;
document.write('++b 是先运算，再取值，所以打印出来是：'+ ++b);
document.write('当+两边都是数字的时候，+就是加法运算符，所以1+2='+(1+2));
document.write('<br>');
document.write('当+任意一边是字符串的时候，+就是字符串连接符，所以1+\"2\"='+(1+'2'));
function p(s){
    document.write(s);
    document.write('<br>');
}
p("1==2: "+(1==2));
p("1!=2: "+(1!=2));
p("1>2: "+(1>2));
p("1<2: "+(1<2));
p("1>=2: "+(1>=2));
function p(s){
    document.write(s);
    document.write('<br>');
}
p("1=='1': "+(1=='1'));
p("1==='1': "+(1==='1'));
var age = 15;
var movie = age<18? '卡通': '你懂的';
document.write('使用?: 三相运算法进行判断。 <br>');
document.write('age<18?"卡通":"你懂的" <br>表示当年纪小于18的时候，就看卡通，否则就看 你懂得<br>');
document.write('而age变量的值是15，所以返回 '+movie);
var age = 20;
if(age<18){
    document.write("如果年纪小于18，就看 卡通");
}else if(age<22){
    document.write("大于等于18，并且小于22，就看 你懂的");
}else{
    document.write("大于等于22就看 新闻联播");
}
var day = new Date().getDay();//通过日期对象获取数字形式的星期几
var today;
switch(day){
    case 0:
        today = '星期天';
        break;
    case 1:
        today = '星期一';
        break;
    case 2:
        today = '星期二';
        break;
    case 3:
        today = '星期三';
        break;
    case 4:
        today = '星期四';
        break;
    case 5:
        today = '星期五';
        break;
    case 6:
        today = '星期六';
        break;
}
document.write("今天是 ： "+ today);
*/
var day = new Date().getDay();//通过日期对象获取数字形式的星期几
var today;
if(day==8){
    today = '星期天';
    
}else if(day == 1){
    today = '星期一';
    
}else if(day == 2){
    today = '星期二';
    
}else if(day == 3){
    today = '星期三';
    
}else if(day == 4){
    today = '星期四';
    
}else if(day == 5){
    today = '星期五';
    document.write("今天是 ： "+ today);
}else {
    today = '星期六';
    
}
document.write("今天是 ： "+ today);
