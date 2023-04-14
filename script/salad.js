function Menu(){
    //開啟手機版 PhoneMenu
    document.getElementById("PhoneMenu").style.display = "block";
}
function PhoneMenu(){
    //關閉手機版 PhoneMenu
    document.getElementById("PhoneMenu").style.display = "none";
}
function MenuItems() {
    let Items = ["沙拉區", "湯品區", "炸物區", "主食區", "飲品區", "點心區"];
    let ClassName = ["one", "two", "three", "four", "five", "six"];
    for(i=0; i<Items.length; i++){
        let li = document.createElement("li");//新增li標籤
        li.setAttribute("class", ClassName[i]);
        document.getElementById("Items").appendChild(li);
        document.getElementById("Items").style.listStyleType = "none";
        li.textContent = Items[i];//將Items[i]塞給li的內容裡面
    }
}
MenuItems();