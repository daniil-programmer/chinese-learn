class LearnItem{
    constructor(character, transcription, translation){
        this.character = character;
        this.transcription = transcription;
        this.translation = translation;
    }
}

const container = document.querySelector(".container");

const character = document.querySelector(".character");
const transcription = document.querySelector(".transcription");
const translation = document.querySelector(".translation");
const go_next = document.querySelector(".go-next");
const speak = document.querySelector('.speak');

let last_selected_id = -1;

const translationsList = [
    new LearnItem("我", "Wǒ", "Я"),
    new LearnItem("学习", "Xuéxí", "Учить"),
    new LearnItem("学", "Xué", "Учить"),
    new LearnItem("中文", "Zhōngwén", "Китайский язык"),
    new LearnItem("因为", "Yīnwèi", "Потому что"),
    new LearnItem("喜欢", "Xǐhuān", "Нравиться"),
    new LearnItem("中国", "Zhōngguó", "Китай"),
    new LearnItem("想", "Xiǎng", "Хотеть"),
    new LearnItem("去", "Qù", "Идти, ехать"),
    new LearnItem("这些", "Zhèxiē", "Эти"),
    new LearnItem("城市", "Chéngshì", "Город"),
    new LearnItem("国家", "Guójiā", "Страна"),
    new LearnItem("音乐", "Yīnyuè", "Музыка"),
    new LearnItem("这个", "Zhège", "Этот")
];

function main(){
    transcription.addEventListener("click", (e)=>onClickButton(e));
    translation.addEventListener("click", (e)=>onClickButton(e));
    go_next.addEventListener("click", GoNext);
    speak.addEventListener("click", speakButton);
    GoNext();
}

function setTranslationValue(char, transcr, transl){
    character.textContent = char;
    transcription.textContent = transcr;
    translation.textContent = transl;
}

function GoNext(){
    const new_selected_id = getRandomInt(translationsList.length);
    if(last_selected_id == new_selected_id) return GoNext();
    last_selected_id = new_selected_id;
    const newWord = translationsList[last_selected_id];
    setTranslationValue(newWord.character, newWord.transcription, newWord.translation);
    
    transcription.classList.add("hidden");
    translation.classList.add("hidden");

    container.classList.add("shake");
    setTimeout(() => {
        container.classList.remove("shake");
    }, 300);
}


function onClickButton(event){
    const item = event.target;

    item.classList.toggle("hidden");
}

function speakButton(){
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(translationsList[last_selected_id].character);
    console.log(translationsList[last_selected_id]);
    utterance.lang = 'zh-CN';
    utterance.pitch = 1; // Normal pitch (range 0 to 2)
    utterance.rate = 1;  // Normal speed (range 0.1 to 10)
    window.speechSynthesis.speak(utterance);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



main();
