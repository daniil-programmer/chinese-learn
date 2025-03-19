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

    new LearnItem("人", "Rén", "Человек"),
    new LearnItem("你", "Nǐ", "Ты"),
    new LearnItem("我", "Wǒ", "Я"),
    new LearnItem("他", "Tā", "Он"),
    new LearnItem("她", "Tā", "Она"),
    new LearnItem("是", "Shì", "Быть, являться"),
    new LearnItem("不", "Bù", "Не"),
    new LearnItem("有", "Yǒu", "Иметь"),
    new LearnItem("没", "Méi", "Отрицание 'иметь'"),
    new LearnItem("这", "Zhè", "Это"),
    new LearnItem("那", "Nà", "То"),
    new LearnItem("什么", "Shénme", "Что?"),
    new LearnItem("哪", "Nǎ", "Какой? Который?"),
    new LearnItem("谁", "Shéi", "Кто?"),
    new LearnItem("怎么", "Zěnme", "Как?"),
    new LearnItem("好", "Hǎo", "Хороший"),
    new LearnItem("大", "Dà", "Большой"),
    new LearnItem("小", "Xiǎo", "Маленький"),
    new LearnItem("多", "Duō", "Много"),
    new LearnItem("少", "Shǎo", "Мало"),
    new LearnItem("天", "Tiān", "Небо, день"),
    new LearnItem("月", "Yuè", "Луна, месяц"),
    new LearnItem("日", "Rì", "Солнце, день"),
    new LearnItem("年", "Nián", "Год"),
    new LearnItem("学", "Xué", "Учиться"),
    new LearnItem("书", "Shū", "Книга"),
    new LearnItem("水", "Shuǐ", "Вода"),
    new LearnItem("火", "Huǒ", "Огонь"),
    new LearnItem("山", "Shān", "Гора"),
    new LearnItem("爱", "Ài", "Любить")

    // new LearnItem("你好", "Nǐ hǎo", "Привет"),
    // new LearnItem("谢谢", "Xièxiè", "Спасибо"),
    // new LearnItem("再见", "Zàijiàn", "До свидания"),
    // new LearnItem("请", "Qǐng", "Пожалуйста"),
    // new LearnItem("对不起", "Duìbuqǐ", "Извините"),
    // new LearnItem("我爱你", "Wǒ ài nǐ", "Я тебя люблю"),
    // new LearnItem("是", "Shì", "Да"),
    // new LearnItem("不是", "Bù shì", "Нет"),
    // new LearnItem("早上好", "Zǎoshang hǎo", "Доброе утро"),
    // new LearnItem("晚安", "Wǎn'ān", "Спокойной ночи")
    // new LearnItem("你好", "Nǐ hǎo", "Привет "),
    // new LearnItem("谢谢", "Xièxiè", "Спасибо (Благодарю)"),  
    // new LearnItem("再见", "Zàijiàn", "До свидания (Снова Видеть)"),  
    // new LearnItem("请", "Qǐng", "Пожалуйста (Просить)"),  
    // new LearnItem("对不起", "Duìbuqǐ", "Извините (Против Не Подниматься)"),  
    // new LearnItem("没关系", "Méi guānxi", "Ничего страшного (Нет Связи)"),  
    // new LearnItem("是", "Shì", "Да/есть (Являться)"),  
    // new LearnItem("不是", "Bù shì", "Нет (Не Являться)"),  
    // new LearnItem("好", "Hǎo", "Хорошо (Хороший)"),  
    // new LearnItem("不好", "Bù hǎo", "Плохо (Не Хороший)"),  
    // new LearnItem("中国", "Zhōngguó", "Китай (Середина Страна)"),
    // new LearnItem("老师", "Lǎoshī", "Учитель (Старый Учить)"),  
    // new LearnItem("学生", "Xuéshēng", "Ученик (Учить Рождаться)"),  
    // new LearnItem("学校", "Xuéxiào", "Школа (Учить Здание)"),  
    // new LearnItem("朋友", "Péngyǒu", "Друг (Друг Друг)"),  
    // new LearnItem("家", "Jiā", "Дом (Семья)"),  
    // new LearnItem("饭店", "Fàndiàn", "Ресторан (Еда Гостиница)"),  
    // new LearnItem("水", "Shuǐ", "Вода (Вода)"),  
    // new LearnItem("茶", "Chá", "Чай (Чай)"),  
    // new LearnItem("苹果", "Píngguǒ", "Яблоко (Спокойствие Фрукт)"),  
    // new LearnItem("医生", "Yīshēng", "Доктор (Медицина Рождаться)"),  
    // new LearnItem("医院", "Yīyuàn", "Больница (Медицина Учреждение)"),  
    // new LearnItem("天气", "Tiānqì", "Погода (Небо Газ)"),  
    // new LearnItem("飞机", "Fēijī", "Самолет (Лететь Машина)"),  
    // new LearnItem("汽车", "Qìchē", "Автомобиль (Газ Машина)"),  
    // new LearnItem("猫", "Māo", "Кошка (Кошка)"),  
    // new LearnItem("狗", "Gǒu", "Собака (Собака)"),  
    // new LearnItem("晚上", "Wǎnshàng", "Вечер (Поздний Верх)"),  
    // new LearnItem("早上", "Zǎoshàng", "Утро (Ранний Верх)"),  
    // new LearnItem("现在", "Xiànzài", "Сейчас (Настоящее Время)"),  
    // new LearnItem("明天", "Míngtiān", "Завтра (Светлый День)"),
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