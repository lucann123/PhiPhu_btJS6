// !Get element short
function GetEle(id){
    return document.getElementById(id);
}

document.getElementById('btnStart').addEventListener("click", function(){
    var n = GetEle('txtN').value;
    var content = "";
    if(n < 0 || n === ""){
        content = "Nhập đúng giá trị!!";
        GetEle('noti').innerHTML = content;
        GetEle('noti').className = "text-warning";
        return;
    }
    for(var i = 0; i <= n; i++){
        if(i<n){
            content += i + " -> ";
        }
        else content += i;
    }
    GetEle('noti').innerHTML = "Kết quả : " + content;
    GetEle('noti').className = "text-success";

})