document.getElementById("getFname").onchange = function (e) {
    if (this.value == 0) {
        document.getElementById("admDivCheck").style.display = "";
    } else {
        document.getElementById("admDivCheck").style.display = "none";
    }
};