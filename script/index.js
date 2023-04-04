function Menu(){
    //開啟手機版 PhoneMenu
    document.getElementById("PhoneMenu").style.display = "block";
}
function PhoneMenu(){
    //關閉手機版 PhoneMenu
    document.getElementById("PhoneMenu").style.display = "none";
}

/*
    活動文字顯示，依照特定時段
        1. 晚上19點過後到21點前顯示「訂購餐點現在8折起!」
        2. 早上10點和下午15點時顯示「現在訂購餐點買3送1!」
        3. 其他時間則顯示「連續假期須提前一個月預定。」

    在HTML顯示的部分
        1. 設定「對話視窗」呈現
        2. 設定「標籤區塊」呈現(固定位置) - 文字
        3. 設定「標籤區塊」呈現(浮動位置) - 圖片加文字
*/
//設定「標籤區塊」呈現(固定位置) - 文字 自訂函數
function Timerest() {
    //呼叫日期物件 Date() ；宣告變數承接物件
    //日期物件 Date() ：沒有特別設定為24小時制
    let hour = new Date().getHours();
    let Name = document.getElementById("Timerest");

    //判斷選擇 if...else if...else
    if(hour >= 19 && hour < 21){
        Name.innerText = "訂購餐點現在8折起!";
    }else if(hour === 10 || hour === 15) {
        Name.innerText = "現在訂購餐點買3送1!";
    }else{
        Name.innerText = "連續假期須提前一個月預定。";
    };
}
Timerest();

//設定「對話視窗」呈現
function restWindow(){
    //呼叫日期物件 Date() ；宣告變數承接物件
    //日期物件 Date() ：沒有特別設定為24小時制
    let hour = new Date().getHours();

    //判斷選擇 if...else if...else
    if(hour >= 19 && hour < 21){
        window.alert("訂購餐點現在8折起!");
    }else if(hour === 10 || hour === 15) {
        window.alert("現在訂購餐點買3送1!")
    }else{
        window.alert("連續假期須提前一個月預定。")
    };
}
//restWindow();

//讀取 年份，讓系統自動轉換為當下的年份
function Years(){
    let years = new Date().getFullYear();
    document.getElementById("Years").textContent = years;
}
Years();

//手機選單資料
function MenuItems() {
    let Items = ["沙拉區", "湯品區", "炸物區", "主食區", "飲品區", "點心區"];
    let ClassName = ["one", "two", "three", "four", "five", "six"];
    for(i=0; i<Items.length; i++){
        let li = document.createElement("li");//新增li標籤
        li.textContent = Items[i];//將Items[i]塞給li的內容裡面
        li.setAttribute("class", ClassName[i]);
        document.getElementById("Items").appendChild(li);
        document.getElementById("Items").style.listStyleType = "none";
    }
}
MenuItems();

//聯絡方式
function ConnBox() {
    let Name = ["吃吃餐廳網。eat eat", "高雄市好事區悠閒路111號", "07-3332255", "eatrestaurant@gmal.com"];
    let ClassName = ["WebName", "Address", "PhoneNumber", "Email"]
    for(i=0; i<Name.length; i++) {
        let li = document.createElement("li");
        li.textContent = Name[i];
        li.setAttribute("class", ClassName[i]);
        document.querySelector("header > .ConnBox").appendChild(li);
    }
    for(let i in Name) {
        let li = document.createElement("li");
        li.textContent = Name[i];
        li.setAttribute("class", ClassName[i]);
        document.querySelector("footer > .ConnBox").appendChild(li);
    }
}
ConnBox();

//選單內容
function ItemsContent() {
    let ItemsContent = ["沙拉區", "湯品區", "炸物區", "主食區", "飲品區", "點心區"];
    let ClassName = ["one", "two", "three", "four", "five", "six"];
    let Href = ["web/salad.htm", "javascript:;", "javascript:;", "javascript:;", "javascript:;", "javascript:;"]
    for(i=0; i<ItemsContent.length; i++) {
        //宣告Items變數，初始化指向類別Items
        let Items = document.querySelector("nav > .Items");
        
        //宣告變數，建立新標籤 li a span
        let li = document.createElement("li");
        let a = document.createElement("a");
        let span = document.createElement("span");

        //給予屬性 li 與 a
        li.setAttribute("class", ClassName[i]);
        a.setAttribute("href", Href[i]);

        //建立實體標籤與屬性
        Items.appendChild(li);
        li.appendChild(a);
        a.appendChild(span);

        //置入文字
        span.textContent = ItemsContent[i];
    }
}
ItemsContent();