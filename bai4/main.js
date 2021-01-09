// !Get element short
function GetEle(id){
    return document.getElementById(id);
}

document.getElementById('btnCreate').addEventListener("click", function(){
    GetEle('thongBao').innerHTML = "";
    for(var i = 0; i < 10; i++){
        if(i % 2 === 0){
            var tagDiv = document.createElement("div");
            GetEle('thongBao').appendChild(tagDiv);
            tagDiv.className = "bg-danger my-2";
            tagDiv.style.height = "50px";
        }
        else{
            var tagDiv = document.createElement("div");
            GetEle('thongBao').appendChild(tagDiv);
            tagDiv.className = "bg-info my-2";
            tagDiv.style.height = "50px";
        }
    }
})