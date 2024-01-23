let str = "";

let a = 0;

function calc_on(){
    a = 0;
    let s_btn = document.querySelectorAll(".s-btn");

    Array.from(s_btn).forEach((btn)=>{

        btn.disabled = false;
        btn.style.opacity = 1;
    });
}

function calc_off(){
    a = 1;
    let s_btn = document.querySelectorAll(".s-btn");

    Array.from(s_btn).forEach((btn)=>{

        btn.disabled = true;
        btn.style.opacity = 0.5;
    });
}

let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        
        let val = e.target.innerHTML;

        // console.log(val);
        if(val == "="){
            
            try{

                str = eval(str);
                document.querySelector('input').value = str;

            }catch(error){

                document.querySelector('input').value = "Naan :(";
            }

            
        }else if(val == "C"){
            
            str = "";
            document.querySelector('input').value = str;
            
        }else if(val == "AC"){

            if(a == 0){

                calc_off();
            }else{
                calc_on();
            }

        }else{

            str = str+val;
            document.querySelector('input').value = str;
        }

    });
});