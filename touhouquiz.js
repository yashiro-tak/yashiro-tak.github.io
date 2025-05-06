const question = document.getElementById('question');
const question_ber = document.getElementById('question_ber');
const question_area = document.getElementById('question_area');
const button_area = document.getElementById('button_area');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const result = document.getElementById('result');
const button = document.getElementById('resultOrNextButton');
const resetButton = document.getElementById('resetButton');
const resultButton = document.getElementById('resultButton');

//問題リスト
const question_list = [
    "<h3>博麗霊夢の職業は？</h3>",
    "<h3>白玉楼の庭師は？？</h3>",
    "<h3>東方紅魔郷のラスボスは？</h3>",
    "<h3>レミリア・スカーレットの能力は？</h3>",
    "<h3>フランドール・スカーレットの能力は？</h3>",
    "<h3>十六夜咲夜の能力は？</h3>",
    "<h3>パチュリー・ノーレッジの能力は？</h3>",
    "<h3>アリス・マーガトロイドの能力は？</h3>",
    "<h3>西行寺幽々子の能力は？</h3>",
    "<h3>八雲紫の能力は？</h3>"
];
//選択肢リスト
const answer_list = [
    ["魔法使い", "ヴァンパイア", "メイド", "巫女"],
    ["魂魄妖夢", "風見幽香", "火焔猫燐", "霊烏路空"],
    ["レミリア・スカーレット", "フランドール・スカーレット", "十六夜咲夜", "パチュリー・ノーレッジ"],
    ["時間を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["時間を操る程度の能力", "ありとあらゆるものを破壊する程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛ぶ程度の能力", "時間を操る程度の能力", "運命を操る程度の能力"],
    ["空を飛ぶ程度の能力", "魔法を操る程度の能力", "奇跡を起こす程度の能力", "魔法を使う程度の能力"],
    ["人形を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"],
    ["運命を操る程度の能力", "死を操る程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"]
];
//正解リスト
const correct_answer_list = [
    "4", "1", "1", "4", "2", "3", "4", "1", "2", "4"
];
//正解の説明リスト
const explanation_list = [
    "博麗霊夢は博麗神社の巫女さんです。",
    "白玉楼の庭師は妖夢です。",
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
let correct_count = 0;
let wrong_count = 0;
let question_count = 0;
let question_count_max = question_list.length;
let resultMode = true;

//ラジオボタンの選択肢を取得
window.addEventListener('DOMContentLoaded', function () {

    let input_answers = document.querySelectorAll("input[name=answer]");

    for (let element of input_answers) {

        element.addEventListener('change', function () {
            if (this.checked) {
                selectedans = this.value;
            }
        });
    }

});

//答え合わせボタンを押したときの処理
function answerCheck() {

    
    question_list.splice(question_num, 1);
    answer_list.splice(question_num, 1);
    correct_answer_list.splice(question_num, 1);
    explanation_list.splice(question_num, 1);
    if (selectedans === correctans) {
        result.innerText = `正解！${explanation}`;
        correct_count++;
    } else {
        result.innerText = `不正解！正解は${correctans}番です！`
        wrong_count++;
    }
    resultMode = false;
    if (question_count >= question_count_max) {
        button.innerText = "結果発表";
    }
    else {
        button.innerText = "次の問題";
        resultButton.classList.remove("hide");
    }
}

//ゲーム開始処理
function startQuiz() {
    question_count++;
    question_ber.innerText = `${question_count}問目/${question_count_max}問中`;
    let input_answers = document.querySelectorAll("input[name=answer]");
    for (let element of input_answers) {
        element.checked = false;
      }
    result.innerText = "";
    button.innerText = "答え合わせ";
    resultButton.classList.add("hide");
    question_num = Math.floor(Math.random() * question_list.length);
    question.innerHTML = question_list[question_num];
    label1.innerText = answer_list[question_num][0];
    label2.innerText = answer_list[question_num][1];
    label3.innerText = answer_list[question_num][2];
    label4.innerText = answer_list[question_num][3];
    correctans = correct_answer_list[question_num];
    explanation = explanation_list[question_num];
    resultMode = true;
}
//リセットボタンを押したときの処理
function resetQuiz() {
    location.reload();
}
//結果ボタンを押したときの処理
function showResult() {
    let correctratio = Math.round(correct_count / (question_count) * 100);
    result.innerText = `正解数：${correct_count}問、不正解数：${wrong_count}問、正答率：${correctratio}%`;
    question_area.classList.add("hide");
    button.classList.add("hide");
    resultButton.classList.add("hide");
}
//一番左のボタンの処理
function buttonFunction() {
    if (resultMode) {
        answerCheck();
    } else {
        if (question_count < question_count_max) {
            startQuiz();
        } else {
            showResult();
            button.innerText = "リトライ";
            button.setAttribute("onclick", "resetQuiz()");
        }
    }
}
