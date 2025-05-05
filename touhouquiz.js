const question = document.getElementById('question_area');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const result = document.getElementById('result');

let question_number = Math.floor(Math.random());
let correctans;
let selectedans;
let explanation;

window.addEventListener('DOMContentLoaded', function(){

    let input_answers = document.querySelectorAll("input[name=answer]");
  
    for(let element of input_answers) {
  
      element.addEventListener('change',function(){
        if( this.checked ) {
          console.log(this.value);
          selectedans = this.value;
          console.log(selectedans);
        }
      });
    }
  
  });

function answerCheck(){
    if(selectedans===correctans){
        result.innerText = `正解！${explanation}`;
    }else{
        result.innerText = `不正解！正解は${correctans}番です！`
    }
}

if (question_number === 0){
    question.innerHTML="<h3>博麗霊夢の職業は？</h3>";
    label1.innerText="魔法使い";
    label2.innerText="ヴァンパイア";
    label3.innerText="メイド";
    label4.innerText="巫女";
    correctans = "4";
    explanation = "博麗霊夢は博麗神社の巫女さんです。"
}
if (question_number === 1){
    
}
if (question_number === 2){
    
}
if (question_number === 3){
    
}
if (question_number === 4){
    
}
if (question_number === 5){
    
}
if (question_number === 6){
    
}
if (question_number === 7){
    
}
if (question_number === 8){
    
}
if (question_number === 9){
    
}

