const question = document.getElementById('question_area');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const result = document.getElementById('result');

const question_list = [
    "<h3>博麗霊夢の職業は？</h3>",
    "<h3>霧雨魔理沙の職業は？</h3>",
    "<h3>東方紅魔郷のラスボスは？</h3>",
    "<h3>レミリア・スカーレットの能力は？</h3>",
    "<h3>フランドール・スカーレットの能力は？</h3>",
    "<h3>十六夜咲夜の能力は？</h3>",
    "<h3>パチュリー・ノーレッジの能力は？</h3>",
    "<h3>アリス・マーガトロイドの能力は？</h3>",
    "<h3>西行寺幽々子の能力は？</h3>",
    "<h3>八雲紫の能力は？</h3>"
];
const answer_list = [
    ["魔法使い", "ヴァンパイア", "メイド", "巫女"],
    ["魔法使い", "ヴァンパイア", "メイド", "巫女"],
    ["レミリア・スカーレット", "フランドール・スカーレット", "十六夜咲夜", "パチュリー・ノーレッジ"],
    ["運命を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["時間を操る程度の能力", "ありとあらゆるものを破壊する程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛ぶ程度の能力", "時間を操る程度の能力", "運命を操る程度の能力"],
    ["空を飛ぶ程度の能力", "魔法を操る程度の能力", "奇跡を起こす程度の能力", "魔法を使う程度の能力"],
    ["人形を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"],
    ["運命を操る程度の能力", "死を操る程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"]
];
const correct_answer_list = [
    "4", "1", "1", "4", "2", "3", "4", "1", "2", "4"
];
const explanation_list = [
    "博麗霊夢は博麗神社の巫女さんです。",
    "霧雨魔理沙は魔法使いです。",
    "東方紅魔郷のラスボスはレミリア・スカーレットです。",
    "レミリア・スカーレットの能力は運命を操る程度の能力です。",
    "フランドール・スカーレットの能力はありとあらゆるものを破壊する程度の能力です。",
    "十六夜咲夜の能力は時間を操る程度の能力です。",
    "パチュリー・ノーレッジの能力は魔法を使う程度の能力です。",
    "アリス・マーガトロイドの能力は人形を操る程度の能力です。",
    "西行寺幽々子の能力は死を操る程度の能力です。",
    "八雲紫の能力は境界を操る程度の能力です。"
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
    question.innerHTML = question_list[question_num];
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
