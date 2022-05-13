const btn_years=document.querySelector(".btn_years");
const years=document.querySelector(".years");
const input_years=document.querySelector(".input_years");


btn_years.onclick=function(){
    input_years.innerHTML='';
    for(let i=0;i<years.value;i++){
        input_years.innerHTML+= i+1+" год <input type=\"number\" class=\"pribl_year\"> <br>";
    }
}

function ChDD_f(procent,pribl_year,Invest){
    procent=Number(procent);
    let itog_ChDD=0,pribl;
    for(let i=0;i<pribl_year.length;i++){
        pribl=Number(pribl_year[i].value);
        itog_ChDD+=(pribl/((1+procent)**(i+1)));
    }
    itog_ChDD-=+Invest.value;
    console.log(itog_ChDD);
    return itog_ChDD;
    
}
function ID_f(procent,pribl_year,Invest){
    let itog_ChDD=0,pribl;
    for(let i=0;i<pribl_year.length;i++){
        pribl=Number(pribl_year[i].value);
        itog_ChDD+=(pribl/((1+procent)**(i+1)));
    }
    let itog_ID=itog_ChDD/Invest.value;
    console.log(itog_ID);
    return itog_ID;
}
function VND_f(procent,pribl_year,Invest){
    let itog_ChDD, proc,flag=0;
    //itog_ChDD=ChDD_f(procent,pribl_year,Invest);
    proc=1;
    itog_ChDD=ChDD_f(proc,pribl_year,Invest);
    let proc_pol=-1,proc_otr=-1,back;
    for(proc;proc>0;proc-=0.01){
        itog_ChDD=ChDD_f(proc,pribl_year,Invest);
        if(flag==2){
            break;
        }
        if((itog_ChDD>0)&&(back<0)){
            proc_pol=proc;
            proc_pol=proc_pol.toFixed(2);
            flag++;
            console.log(proc_pol);
        }
        if((itog_ChDD>0)&&(back<0)){
            proc_otr=proc;
            proc_otr+=0.01;
            proc_otr=proc_otr.toFixed(2);
            flag++;
            console.log(proc_otr);
        }
        back=itog_ChDD;
    }
    chdd_otr=ChDD_f(proc_otr,pribl_year,Invest);
    chdd_pol=ChDD_f(proc_pol,pribl_year,Invest);
    itog_VND=(proc_pol*100)+(chdd_pol/(chdd_pol-chdd_otr))*((proc_otr-proc_pol)*100)
    console.log(itog_VND);
    return itog_VND;
}
function Tok_f(procent,pribl_year,Invest){
    let sum=0,i;
    let invest_num=Number(Invest.value);
    for( i=0;sum<=invest_num;i++){
        let int_prib=Number(pribl_year[i].value);
        sum+= int_prib;
        console.log(sum);
    }
    let int_prib=Number(pribl_year[i-1].value);
    let x=(invest_num-sum+int_prib)/int_prib;
    console.log(x);
    let itog_Tok=i-1+x;
    console.log(itog_Tok);
    return itog_Tok;
}
function Tdok_f(procent,pribl_year,Invest){
    let sum=0,i;
    let invest_num=Number(Invest.value);
    for( i=0;sum<=invest_num;i++){
        let pribl=Number(pribl_year[i].value);
        sum+=(pribl/((1+procent)**(i+1)));
        console.log(sum);
    }
    let pribl=Number(pribl_year[i-1].value);
    let prib=(pribl/((1+procent)**(i)));
    let x=(invest_num-sum+prib)/prib;
    console.log(x);
    let itog_Tdok=i-1+x;
    console.log(itog_Tdok);
    return itog_Tdok;
}
const procent=document.querySelector(".procent");
const Invest=document.querySelector(".Invest");
const ID=document.querySelector(".ID");
const ChDD=document.querySelector(".ChDD");
const VND=document.querySelector(".VND");
const Tok=document.querySelector(".Tok");
const Tdok=document.querySelector(".Tdok");

const div_ID=document.querySelector(".div_ID");
const div_ChDD=document.querySelector(".div_ChDD");
const div_VND=document.querySelector(".div_VND");
const div_Tok=document.querySelector(".div_Tok");
const div_Tdok=document.querySelector(".div_Tdok");
ChDD.onclick=function(){
    const pribl_year=document.querySelectorAll(".pribl_year");
    let proc=Number(procent.value);
    div_ChDD.innerHTML+=ChDD_f(proc,pribl_year,Invest)+'Д.е.';

}
ID.onclick=function(){
    const pribl_year=document.querySelectorAll(".pribl_year");
    let proc=Number(procent.value);
    div_ID.innerHTML+=ID_f(proc,pribl_year,Invest);
}
VND.onclick=function(){
    const pribl_year=document.querySelectorAll(".pribl_year");
    let proc=Number(procent.value);
    div_VND.innerHTML+=VND_f(proc,pribl_year,Invest)+'%';
}
Tok.onclick=function(){
    const pribl_year=document.querySelectorAll(".pribl_year");
    let proc=Number(procent.value);
    div_Tok.innerHTML+=Tok_f(proc,pribl_year,Invest)+'лет';
}
Tdok.onclick=function(){
    const pribl_year=document.querySelectorAll(".pribl_year");
    let proc=Number(procent.value);
    div_Tdok.innerHTML+=Tdok_f(proc,pribl_year,Invest)+'лет';
}