//只宣告變數(會避免的 s x z i l I L 1 0 o)
var _a;
var a;

//宣告多個變數
var name, score, flag;

//宣告變數並初始化
var name = "Eileen", score = 25, flag = "true";

/*
    1. 變數宣告時不需要加上型別，javascript會視需求自動轉換變數型態
*/
var Value;
Value = 123;
document.write("<br>" + typeof(Value));
var Value = "Hello";
document.write("<br>" + typeof(Value));

/*
    2. 數值與字串轉換須特別留意的情況
        2-1 javascript 充許字串相加，當字串內容為數值時，使用加(+)號相連結，運算結果仍為字串
*/
var x, y, z;
x = "123";
y = "456";
z = x + y;
document.write("<br>", z);
document.write("<br>",typeof(z));

/*
        2-2 當字串內容為數值，使用減(-)號、乘(*)號、除(/)號相連結，運算結果為數值
*/
var x, y, z;
x = "123";
y = "456";
z = x - y;
document.write("<br>", z);
document.write("<br>",typeof(z));

/*
        2-3 null 乘以任何數皆為0
*/
var x, y, z;
x = "123";
y = null;
z = x * y;
document.write("<br>", z);
document.write("<br>",typeof(z));

var x, y, z;
x = "123";
y = null;
z = x / y;
document.write("<br>", z);
document.write("<br>",typeof(z));

/*
    3. var 宣告的作用域
        3-1 全域變數：不在函數內的變數都屬於全域範圍變數，此程式文件都可以使用
        3-2 區域變數：變數在函數之內宣告，只有在這一個函數區域內可以使用
*/
var A = 2;
function cal(){
    var A = 5, y = 2;
    document.write("<br>", (A + y));
}
cal();
document.write("<br>", A);

var b = 2;
function cal(){
    b = 5, d = 2;
    document.write("<br>", (b + d));
}
cal();
document.write("<br>", b);

/*
    4. 注意事項
        4-1 沒有宣告變數 或是 給予變數名稱但沒有給值
*/
// var X = Y + 1;
// X = Y + 1;
// document.write("<br>", X);

/*
        4-2 變數可以不宣告直接給初始值，javascript 會視為全域變數
*/
aa = 2;
var X = aa + 1;
document.write("<br>",X);

/*
        4-3 還未宣告變數時，就直接輸出變數
*/
document.write("<br>", x);
var x = 12;

/*
    5. var 關鍵字認定的作用只有函數 function()、if、else、for、while
        程式中的區塊不只有函數
        程式的區塊敘述，是以一對大括號{ }來界定
        let 關鍵字：帶入了區塊作用域的概念，在區塊以外的為「全域」變數；區塊以內的為「區域」變數
        let 關鍵字：宣告變數只能是唯一
*/
var x2 = 8, y2 = 9;
let a2 = 3, b2 = 10;
{
    var z1 = x2 + y2;
    let c1 = a2 + b2;
}
document.write("<br> z1 = x2 + y2 = ", z1);
//document.write("<br> c1 = a2 + b2 = ", c1);

/*
    6. const 關鍵字宣告 常數：不變的常量
        6-1 不重覆宣告
        6-2 必須指定初始值
        6-3 不能再變更它的值
*/
const x3 = 30;
//x3 = 25;
document.write("<br>",x3);

const x4 = "文字";
document.write("<br>",x4);

let x5 = 15, y3 = "54";
let z2 = x5 + y3;
document.write("<br>", z2);
document.write("<br>",typeof(z2));

/*
    7.強制轉換型別
        7-1 字串轉換為整數 parseInt()
*/
function billing(x, y){
    let z = parseInt(x) + parseInt(y);
    document.write("<br>", z);
    document.write("<br>",typeof(z));
}
billing(3, "5");

/*
        7-2 字串轉換為浮點數 parseFloat()
*/
function billing(x, y){
    let z = parseFloat(x) + parseFloat(y);
    document.write("<br>", z);
    document.write("<br>",typeof(z));
}
billing(3, "5.22");

/*
        7-3 字串或物件轉為數值 Number()
*/
function billing(x, y){
    let z = Number(x) + Number(y);
    document.write("<br>", z);
    document.write("<br>",typeof(z));
}
billing(3, "5.3");
billing(3, "5.3a");//不是數值，結果會跑出NaN

/*
    8. 日期 Date()
        單位：毫秒 1000ms = 1s
        是以世界標準時間(UTC)1970/01/01 開始
*/
d2 = Number(new Date());
document.write("<br>", d2);

/*
    9. 運算式與運算子
        9-1 指定運算式
            指定運算子
                9-1-1 = (例 a=b, 將b的值指定給a ;a=1)
                9-1-2 += (例 a+=b, a=a+b ; a+=1 -> a = a+1)
                9-1-3 -= (例 a-=b, a=a-b ; a-=1 -> a = a-1)
                9-1-4 *= (例 a*=b, a=a*b ; a*=1 -> a = a*1)
                9-1-5 /= (例 a/=b, a=a/b ; a/=1 -> a = a/1)商數
                9-1-6 %= (例 a%=b, a=a%b ; a%=1 -> a = a%1)餘數
        9-2 算術運算式
            算術運算子
                9-2-1 + a=b+c
                9-2-2 - a=b-c
                9-2-3 * a=b*c
                9-2-4 / a=b/c
                9-2-5 % a=b%c
                9-2-6 ++ a++(迴圈)
                9-2-7 -- a--(迴圈)
                9-2-8 - -a
                9-2-9 ++a(運算前增量)
                9-2-10 a++(運算後增量)
                9-2-11 --a(運算前減量)
                9-2-12 a--(運算後減量)
        9-3 布林運算式
            比較運算子
                9-3-1 == 等於 a==10
                9-3-2 != 不等於 a!=10
                9-3-3 > 大於 a>10
                9-3-4 >= 大於等於 a>=10
                9-3-5 < 小於 a<10
                9-3-6 <= 小於等於 a<=10
            邏輯運算子
                9-3-1 && and (只有a跟b兩方都為真，結果才為真) a&&b  a<=10 && a==b
                9-3-2 || or (只要a跟b一方為真，結果就為真) a||b  a<=10 || a==b
                9-3-3 ! Not (只要不符合a者，皆為真) !a  !(a == 10)
        9-4 字串運算式

        運算子優先順序
            (1)括號 .(的/甚麼的東西) [] ()
            (2)變數、增量、減量 ++ -- - ~ !
            (3)乘除法 * / %
            (4)加減法 + -
            (5)位移 << >>
            (6)比較 < > <= >=
            (7)等值、不等值 == !=
            (8)位元邏輯 & (將a與b轉換為二進位[0,1]比較[假,真]，比較最後一位數。
                            兩者為0，或是一個為0；結果都是假[0]
                            兩者為1；結果才是真[1]) a=5, b=6  a & b
            (9)位元互斥邏輯 ^ (將a與b轉換為二進位[0,1]比較[假,真]，比較最後一位數。
                                兩者一個為1或是兩者一個為0，結果才是真[1]
                                兩者同時為1或是同時為0，結果都是假[0]) a^b；a XOR b
            (10)位元邏輯 | (將a與b轉換為二進位[0,1]比較[假,真]，比較最後一位數。
                            兩者一個為1或是兩者一個為0或是兩者同時為1，結果才是真[1]
                            兩者同時為0，結果都是假[0]) a|b；a OR b
            (11)且 &&
            (12)或 ||
            (13)三項運算式 ?:
            (14)算術 =
*/