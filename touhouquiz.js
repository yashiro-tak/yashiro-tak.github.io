const question = document.getElementById('question_area');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const result = document.getElementById('result');

const question_list = [
    "博麗霊夢の職業は？",
    "霧雨魔理沙の職業は？",
    "東方紅魔郷のラスボスは？",
    "レミリア・スカーレットの能力は？",
    "フランドール・スカーレットの能力は？",
    "十六夜咲夜の能力は？",
    "パチュリー・ノーレッジの能力は？",
    "アリス・マーガトロイドの能力は？",
    "西行寺幽々子の能力は？",
    "八雲紫の能力は？"
];
const answer_list = [
    ["魔法使い", "ヴァンパイア", "メイド", "巫女"],
    ["魔法使い", "ヴァンパイア", "メイド", "巫女"],
    ["レミリア・スカーレット", "フランドール・スカーレット", "十六夜咲夜", "パチュリー・ノーレッジ"],
    ["運命を操る程度の能力", "空を飛べる程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛べる程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛べる程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛べる程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛べる程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛べる程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛べる程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"]
];
const correct_answer_list = [
    "4", "1", "1", "4", "2", "3", "4", "1", "2", "3"
];
const explanation_list = [
    "博麗霊夢は博麗神社の巫女さんです。",
    "霧雨魔理沙は魔法使いです。",
    "東方紅魔郷のラスボスはレミリア・スカーレットです。",
    "レミリア・スカーレットの能力は運命を操る程度の能力です。",
    "フランドール・スカーレットの能力は運命を操る程度の能力です。",
    "十六夜咲夜の能力は運命を操る程度の能力です。",
    "パチュリー・ノーレッジの能力は運命を操る程度の能力です。",
    "アリス・マーガトロイドの能力は運命を操る程度の能力です。",
    "西行寺幽々子の能力は運命を操る程度の能力です。",
    "八雲紫の能力は運命を操る程度の能力です。"
];
let correctans;
let selectedans;
let explanation;
let question_num;
let question_number = Math.floor(Math.random() * question_list.length);

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

function startQuiz(){
    question_num = question_number;
    question.innerText = question_list[question_num];
    label1.innerText = answer_list[question_num][0];
    label2.innerText = answer_list[question_num][1];
    label3.innerText = answer_list[question_num][2];
    label4.innerText = answer_list[question_num][3];
    correctans = correct_answer_list[question_num];
    explanation = explanation_list[question_num];
}
function reloadQuiz(){
    startQuiz();
}
function reloadPage(){
    location.reload();
}
