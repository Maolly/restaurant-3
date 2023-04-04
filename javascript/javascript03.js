/*
    1. console.log(輸出變數或資料) 瀏覽器控制台
    2.document.write(輸出變數或資料) HTML文件之內呈現
    3. 指定在html標籤之內輸出
        3-1 設定標籤
        3-2 給予標籤ID名稱
        3-3 javascript 語法呼叫 document.getElementById(id)
        3-4 .innerHTML = (要輸出的資料)可以接受HTML標籤
        3-5 .innerText = (要輸出的資料)純文字
*/
document.getElementById("content").innerHTML = "由Javascript呈現文字";

/*
    4. 選擇結構
        4-1 if 條件敘述(單一條件 成立)
            if (條件運算式)
                程式敘述;
            if (條件運算式){
                程式敘述;
            }
        4-2
            4-2-1 if...else 條件敘述(單一條件 成立；不成立)
                if (條件運算式){
                    程式敘述;
                }else{
                    程式敘述;
                }
            4-2-2 特別格式
                (1)如果if及else內的程式敘述只有一行，同樣可以省略大括號{}
                    if (條件運算式) 程式敘述; else 程式敘述;
                    if(a == 1)b=1; else b=2;
                (2)三元運算子 ?:
                    條件運算式 ? 程式敘述 1 : 程式敘述 2;
                    b = (a == 1? 1:2);
                    條件運算式 ? (程式敘述;):(程式敘述;);
                    a == 1 ? ( b = 1 ):( b = 2 );
        4-3 if...else if...else 條件敘述(複數條件)
            if (條件運算式){
                程式敘述;
            }else if{
                程式敘述;
            }else{
                程式敘述;
            }
*/
a = 5;
if(a == 1) b="是"; else b="否";
document.getElementById("content").innerHTML = "a 是否等於 1：" + b;
a1 = 1;
// if(a1 == 1) b1="是"; else b1="否";
// document.getElementById("content1").innerHTML = "a1 是否等於 1：" + b1;
a1 == 1? (
    b1 = "是"
):(
    b1 = "否"
);
document.getElementById("content1").innerHTML = "a1 是否等於 1：" + b1;
document.getElementById("content1").style.color = "red";
//用代號判斷文字顏色，如果 c = 2，成立:文字為紅色；不成立:文字為藍色
let ca = 2;
let da;
if( ca == 2){
    da = "orange";
}//可以單一條件 成立(只有 if)
else {
    da = "blue";
}
document.getElementById("content2").innerHTML = "由Javascript呈現文字";
document.getElementById("content2").style.color = da;

//複數條件
let cx = 5;
let dx;
if(cx <= 2){
    dx = "purple";
}else if(cx <= 5){
    dx = "brown";
}else {
    dx = "yellow";
}
document.getElementById("content3").innerHTML = "由Javascript呈現文字";
document.getElementById("content3").style.color = dx;

/*
    5. 自訂函數 function yourname(){}
*/
function ButtonRed(){
    document.getElementById("H2Text").style.color = "red";
}
function ButtonBiue(){
    document.getElementById("H2Text").style.color = "blue";
}

/*
    6. 按鈕 開啟 / 關閉
*/
// function OpenButton(){
//     document.getElementById("H3Text").style.display = "block";
// }
//cssText可以複數寫法
function OpenButton(){
    document.getElementById("H3Text").style.cssText = "display:none; color:red";
}
// function CloseButton(){
//     document.getElementById("H3Text").style.display = "none";
// }
//第二種寫法 CloseButton(全域變數)
CloseButton = function(){
    document.getElementById("H3Text").style.cssText = "display:none";
}