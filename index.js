let number;

const generate_num =()=>{
    number=(Math.trunc(Math.random()*10)%6)+1;
    console.log(number);
};
// generate_num();
const generate_num_btn_click=()=>{
    document.querySelector("#section1").style.display="none";
    document.querySelector("#section2").style.display="none";
    document.querySelector("#section3").style.display="block";
    
    setTimeout(()=>{
        generate_num();
        document.querySelector("#field").value="";

        document.querySelector("#section1").style.display="none";
        document.querySelector("#section2").style.display="block";
        document.querySelector("#section3").style.display="none";

    },2000);

};
// check
const check_number=()=>{
    let value=document.querySelector("#field").value;
    if(value==number)
    {
        alert("Congrats, You won this Game :-)")
    }
    else{
        alert("OOPS! You lose this Game :'(")
    }
    generate_num_btn_click();
    
};
