import * as Module from '../script/function.js';

/*
    撰寫 手機選單內容
    for迴圈 - 陣列[] ；for...in - 陣列[] or 資料{ }
        1. 建立陣列[ ] 或是 資料{ }
        2. 宣告 html 標籤 變數
        3. 宣告變數，建立新標籤 createElement
        4. 給予屬性 setAttribute
        5. 建立實體標籤與屬性 appendChild
*/
export function PhoneMenu() {
    let ulid = ["menuheader", "menunav", "menuicon"];
    let PhoneMenu = document.getElementById("PhoneMenu");

    for(let i in ulid){
    let ul = document.createElement("ul");
    ul.setAttribute("id", ulid[i]);
    PhoneMenu.appendChild(ul);
    }

    {
        let menuheader = document.getElementById("menuheader");
        let li = document.createElement("li");
        li.setAttribute("id", "close");
        menuheader.appendChild(li);
        let a1 = document.createElement("a");
        a1.setAttribute("href", "javascript:;");
        document.getElementById("close").appendChild(a1);
        a1.textContent = "Ｘ";
        let h1 = document.createElement("h1");
        let a2 = document.createElement("a");
        a2.setAttribute("href", "index.htm");
        menuheader.appendChild(h1);
        h1.appendChild(a2);
        a2.textContent = "吃吃餐廳網";
    }

    {
        let h2class = ["type", "Conn"];
        let ulclass = ["Items", "Icon"];
        for(let i in h2class){
            let h2 = document.createElement("h2");
            h2.setAttribute("class", h2class[i]);
            let ul = document.createElement("ul");
            ul.setAttribute("class", ulclass[i]);
            ul.setAttribute("id", ulclass[i]);
            document.getElementById("menunav").appendChild(h2);
            document.getElementById("menunav").appendChild(ul);
    }
        //document.getElementsByClassName("type")[0].textContent = "種類";
        document.querySelector("#menunav > .type").textContent = "種類";
        document.querySelector("#menunav > .Conn").textContent = "聯絡方式";

        Module.Items("#menunav > .Items");
    }
    {
        let IconText = ["聯絡表單", "客服電話", "加入line官方"];
        let IconHref = ["javascript:;", "javascript:;", "javascript:;"];
        for(let i in IconText){
            let li = document.createElement("li");
            document.querySelector("#menunav > .Icon").appendChild(li);
            let a = document.createElement("a");
            a.setAttribute("href", IconHref[i]);
            li.appendChild(a);
            a.textContent = IconText[i];
        }
    }
    {
        let IconText = ["line官方", "fb粉絲頁", "youtube影片"];
        let IconHref = ["javascript:;", "javascript:;", "javascript:;"];
        for(let i in IconText){
            let li = document.createElement("li");
            document.getElementById("menuicon").appendChild(li);
            let a = document.createElement("a");
            a.setAttribute("href", IconHref[i]);
            li.appendChild(a);
            a.textContent = IconText[i];
        }
    }
}
//PhoneMenu();