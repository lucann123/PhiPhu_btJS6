// !Get element short
function GetEle(id){
    return document.getElementById(id);
}

document.getElementById('btnStart').addEventListener("click", function(){
    var n = GetEle('txtN').value;
    var kq = 1;
    for(var i = 1; i <= n; i++){
        kq = kq * i;
    }
    GetEle('noti').innerHTML = "Kết quả : " + kq;

})