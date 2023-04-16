/*
    撰寫 手機選單內容
    for迴圈 - 陣列[] ；for...in - 陣列[] or 資料{ }
        1. 建立陣列[ ] 或是 資料{ }
        2. 宣告 html 標籤 變數
        3. 宣告變數，建立新標籤 createElement
        4. 給予屬性 setAttribute
        5. 建立實體標籤與屬性 appendChild
*/
function PhoneMenu() {
    let ulid = ["menuheader", "menunav", "menuicon"];
    let PhoneMenu = document.getElementById("PhoneMenu");

    for(let i in ulid){
    let ul = document.createElement("ul");
    ul.setAttribute("id", ulid[i]);
    PhoneMenu.appendChild(ul);
    }

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
PhoneMenu();