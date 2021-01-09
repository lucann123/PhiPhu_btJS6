// !Get element short
function GetEle(id){
    return document.getElementById(id);
}

document.getElementById('btnStart').addEventListener("click", function(){
    var n = GetEle('txtN').value;
    var x = GetEle('txtX').value;
    n = parseInt(n);
    x = parseInt(x);
    var sum = x;
    for(var i = 0; i < n; i++){
        sum += sum * x;
    }
    GetEle('noti').innerHTML = "Tổng : " + sum;
})