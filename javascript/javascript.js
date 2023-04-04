document.write("javascript列印")

/* 
    資料型態 javascript 原生型別
        1. 數值 number javascript 唯一的數值型別：整數或帶有小數的浮點數
            1 宣告變數 var
            2 變數名稱 - 英文開頭+數字+底線(_)，設計有意義的名稱
    */
   var a;
   var b=5;
   var c=1+8;
   var d, e;
   var f=6, g=15;
   //javascript 數字是採用 IEEE 754 雙精確度(64位元)格式儲存，電腦只認識 0 跟 1 ，十進位轉換為二進位時產生精確度誤差，需手動排除
   /* 1. 將數值比例放大，變成非浮點數，連算之後再除以放大的倍數
      2. 內建 toFixed 函數強制取到小數點的指定位數
    */
   var h=0.1+0.2;
   //var h = (0.1 * 10 + 0.2 * 10) / 10;
   var i=0.2+0.3;
   document.write("<br>" + h.toFixed(1));
   document.write("<br>" + i);
   
/* 
    2. 字串 String
        由 0 個或 0 個以上的字元結合而成，用一對雙引號("")或一對單引號('')框住字元，則一使用
        字串的長度 Length(字串物件屬性)
        引號之內有「空格」，會計算在長度之中
    */
a="0.5"+0.2;
document.write("<br>"+a.length);


/* 
    3. 布林 boolean
        只有兩種值，true(1)與false(0)
        任何值都可以被轉換成布林值
        1 false 0 空字串 NaN null undefined 都會成為 false
        2 除了上述的其他值都會成為 true
*/
c="";
document.write("<br>" + Boolean(a));
document.write("<br>" + Boolean(c));

/*
    4. 未定義 undefined
        4-1 變數沒有被宣告，沒有給值(瀏覽器新的版本，會擋)
        4-2 有宣告變數，但沒有指定變數的值
*/
//j;//沒有宣告變數
//document.write("<br>" + j);

/*
    5. 空值 null
        清除某個變數的值
/
a="";
document.write("<br>" + "空字串" + a);
a=null;
document.write("<br>" + "空值" + a);

/*
    6. 等號用法
        6-1 = 將右邊的值賦予給左邊的「變數」
        6-2 == 左邊的值要與右邊的值相等
        6-3 === 左邊的值要與右邊的值相等，含型態
*/
a = 12;
b = 12;
document.write("<br>" + Boolean(a == b));
a = "12";
b = 12;
document.write("<br>" + Boolean(a === b));

/*
    7. undefined (未定義) vs null(空值)
        null 不是物件，是javascript未修正的bug

    查詢變數型態 typeof
*/
document.write("<br>" + "Null =" + typeof(null));
document.write("<br>" + "undefined =" + typeof(undefined));

a=null;
b=undefined;
document.write("<br>");
document.write(a == b);
document.write("<br>");
document.write(null === b);
document.write("<br>");

/*
    8. NaN(無效的數字)
        8-1 進行運算時的運算元資料類別無法轉換為數字
        8-2 無意義的運算，例如：0/0
        檢查是否為NaN：isNaN()
        是 true  不是 false
    */
a="120";
document.write("<br>" + Number(a));
a="pp";
document.write("<br>" + Number(a));

a=0/0;
document.write("<br>" + a);

document.write("<br>" + isNaN("2023/03/07"));
document.write("<br>" + isNaN(-1));

/*
    9. Infinity(數學的無限大)，非0的數字除以0，除數或是分母為0
    檢查是否為Infinity：isFinity()
    是 false  不是 true
*/
document.write("<br>" + isFinite(9/0));
document.write("<br>" + isFinite(9/8));
document.write("<br>" + isFinite(-9/0));
document.write("<br>" + isFinite(-9/8));

/*
    10. Object(物件)
        function(函數)、Object(物件)、Array(陣列)、Date(日期)
*/

/*
    11. Symbol(符號) 是 ES6(ECMAScript 6)新定義
        Symbol() 有一個 description(描述)屬性，用來定義 Symbol 的名稱，傳回的值是唯一的識別值
*/
x=Symbol('a');
y=Symbol('s');
document.write("<br>");
document.write(x === y);