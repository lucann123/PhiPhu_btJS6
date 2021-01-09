document.getElementById('btnStart').addEventListener("click", function(){
    var sum = 0;
    var n = 0;
    while(sum<10000){
        sum = sum + n;
        n++;
    }
    document.getElementById('noti').innerHTML = "Tổng : "+ sum + "<br>Số n :" + n;
    document.getElementById('thongBao').className = "border border-danger";
})