let range = document.querySelector('.number');
let rangeNum = document.querySelector('.range-num');
rangeNum.innerHTML = 0;
range.oninput = function (){
    console.log(this.value);
    rangeNum.style.left = (this.value - 20) +"px";
    rangeNum.innerHTML = this.value;
}

