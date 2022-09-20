let showAnswer = document.getElementById("show");

const calc = {
    operate: function(opt){
        showAnswer.append(opt.value);
    },
    answer: function(){
        showAnswer.innerHTML = eval(showAnswer.innerHTML);
    },
    clear: function(){
        showAnswer.innerHTML = "";

    }
}

let btns = document.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",()=>{
        calc.operate(btns[i]);
        // console.log(btns[i].value)
        
        let ans = document.getElementById("ans");
        ans.addEventListener("click",()=>{
            calc.answer()
        });
        let clear = document.getElementById("clear");
        clear.addEventListener("click",()=>{
            calc.clear()
        });
    });
}