
function convertMoney() {
    let result;
    let amount = parseInt(document.getElementById("amount").value);
    let selectFrom = document.getElementById("nationFrom");
    let fromMoney = selectFrom.value;
    let selectTo = document.getElementById("nationTo");
    let toMoney = selectTo.value;
    if(fromMoney === toMoney){
        alert("Lỗi xảy ra . Vui lòng nhập lại!!")
    }
    else {
        if((fromMoney ==="vietNam") && (toMoney === "usd")){
            result = amount / 23000;
            document.getElementById("result").innerHTML = "Kết quả : "+result+ " USD";
        }
        else {
            result = amount * 23000;
            document.getElementById("result").innerHTML = "Kết quả : "+result + " VND";
        }
    }

}