/*
    重複結構
    1. 迴圈 for ，讓電腦重複執行相同的處理動作
        for(宣告變數初始化；迴圈的條件；每次執行後的動作){ }
        陣列：讀取陣列的「索引標籤」(索引 key)
*/
for( let i=1; i<=10; i++) {
    console.log(i);
}

/*
    #Items
        1. 內容需要用陣列(array)呈現
            讀取陣列資料 變數名稱[索引編號]
            索引編號預設值為0
*/
let Items = ["沙拉區", "湯品區", "炸物區", "主食區", "飲品區", "點心區"];
//console.log(Items[0]);
{
    let Items = ["沙拉區", "湯品區", "炸物區", "主食區", "飲品區", "點心區"];
    for(let i=0; i<Items.length; i++){
        console.log(Items[i]);
    }
}

/*
    1. 在HTML文件中新增標籤
        document.creatElement(標籤名稱)
    2. 在取得的HTML元素中添加子元素
        取得的元素.appendChild(想添加的子元素)

    先設定HTML文件中要新增的標籤，再設定將「新增的標籤」置入哪個父元素中
*/
{
    let Items = ["沙拉區", "湯品區", "炸物區", "主食區", "飲品區", "點心區"];
    for(i=0; i<Items.length; i++){
        let li = document.createElement("li");//新增li標籤
        li.textContent = Items[i];//將Items[i]塞給li的內容裡面
        document.getElementById("Items").appendChild(li);
        document.getElementById("Items").style.listStyleType = "none";
    }
}

/*
    3. 新增 屬性
    setAttribute(屬性,內容);
*/
{
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

/*
    重複結構
    2. for...in(主要用來「遍歷」可疊代物件，所謂「遍歷」是指不重複拜訪物件元素的過程)
        for(let 變數 in 物件) {
            程式敘述;
        }
        陣列：讀取陣列的「物件屬性」(值 value)
*/
{
    //json格式{ 名稱:值 }
    let person = {name:"Eileen", age:19, tel:"07-3602222"};
    for(let x in person) {
        console.log(person[x]);
    }
}

/*
    3. forEach 只能使用於陣列(Array)、地圖(Map)、集合(Set)等物件
        物件.forEach(function(參數[,index]) {
            程式敘述;
        })
        上述 function 匿名函式，這個會把物件的每一個元素作為參數，帶進函式裡一一執行
        可以使用 E56 規範的箭頭函式
        物件.forEach(參數 => {
            程式敘述;
        })
*/
{
    let ClassName = ["one", "two", "three", "four", "five", "six"];
    ClassName.forEach (
        function(x) {
            console.log(x);
            let li = document.createElement("li");
            document.getElementById("Items").appendChild(li);
            li.textContent = x;
        })
}
{
    let ClassName = ["one", "two", "three", "four", "five", "six"];
    ClassName.forEach (
        x => {
            console.log(x);
            let li = document.createElement("li");
            document.getElementById("Items").appendChild(li);
            li.textContent = x;
        })
}

/*
    4. while 迴圈
        let 變數初始化
        while(條件判斷式) {
            程式敘述;
        }
*/
{
    let ClassName = ["1", "2", "3", "4", "5", "6"]; 
    let i = 0;
    //最大外框不用打迴圈
    let ol = document.createElement("ol");
    document.body.appendChild(ol);
    while(i < ClassName.length) {
        console.log(ClassName[i]);
        let li = document.createElement("li");
        ol.appendChild(li);
        li.textContent = ClassName[i];
        i++;
    }
}

/*
    5. do...while 迴圈
        do {
            程式敘述;
        }
        while(條件式)

    while 與 do...while 的差別：while條件不符合不執行迴圈；do...while即使條件不成立，敘述至少會被執行一次

    break 強迫終止迴圈的執行
    continue 敘述，是馬上回到迴圈的一開始，再繼續執行迴圈

    forEach 迴圈不能使用break 指令中斷循環
*/
{
    //do...while
    let i = 11;
    do {
        console.log(i);
        i++;
    }
    while(i<=10);
    console.log("i現在的值 = " + i);
    //結果：會先執行一次，所以跑出i值 = 12
}
{
    //while
    let i = 11;
    while (i<=10) {
        console.log(i);
        i++;
    }
    console.log("i現在的值 = " + i);
    //結果：i值比條件大，所以不會執行，跑出i值 = 11
}

//continue and break
{
    for(a=0; a<=10; a++) {
        if(a === 3) {
            console.log(a);
            continue;
        }
        if(a === 8) {
            console.log(a);
            break;
        }
        console.log("for loop a = " + a);
    }
}

{
    let Items = ["沙拉區", "湯品區", "炸物區", "主食區", "飲品區", "點心區"];
    let ClassName = ["one", "two", "three", "four", "five", "six"];
    let a = ["web/salad.htm", "javascript:;", "javascript:;", "javascript:;", "javascript:;", "javascript:;"]
    for(i=0; i<Items.length; i++){
        //新增標籤
        let li = document.createElement("li");
        let a = document.createElement("a");
        let span = document.createElement("span");
        //新增屬性
        li.setAttribute("class", ClassName[i]);
        a.setAttribute("href", a[i]);
        //將li寫入#Items中
        document.querySelector("#Items").appendChild(li);
        document.getElementById("Items").style.listStyleType = "none";
        li.appendChild(a);
        a.appendChild(span);
        span.textContent = Items[i];
    }
}