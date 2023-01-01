
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
*/
function print(message){
    document.write(message);
}
function calc(x,y){
    return x+y;
}
var sum = calc(100,100);
print(sum);





