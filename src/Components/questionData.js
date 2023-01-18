class Quiz {
    static index = 0;
    static correctCount = 0;
    static totalPoint = 0;
    static quizLength = 5;
    static MIN = 0;
    constructor(text, buttonsList, correct, point) {
        if(correct > 4) {
            console.log(`correctの値が不正です。`);
        }
        this.text = text;
        this.buttonsList = buttonsList;
        this.correct = correct;
        this.point = point;
        Object.freeze(this);
    }
 }

const QUESTIONS = [
    new Quiz("体育活動中の死亡事故で一番多い原因は？", ["心臓発作", "頭部をぶつける", "エレベータで押し合う", "こける"], 1, 2),
    new Quiz("大相撲の力士が禁止されているのはどれ", ["ダイエット", "車の運転", "電車の乗車", "小舟の乗船"], 2, 2),
    new Quiz("「最初はグー」初めて使った人は。", ["志村けん", "吉澤俊介", "じゃんけん協会会長 松本さん", "ヒカキン"], 1, 2),
    new Quiz("「音楽の父」と称される音楽家は誰でしょう？", ["バッハ", "モーツァルト", "ベートーヴェン", "チャイコフスキー"], 1, 2),
    new Quiz("世界で最も古いとされている奈良にある木造建築の寺の名前はなんでしょう？", ["東大寺", "法隆寺", "金閣寺", "唐招提寺"], 2, 2),
    new Quiz("40人クラスに、誕生日が同じ組み合わせがいる確率でもっとも近いものは？", ["約12%", "約27%", "約90%", "約3%"], 3, 2),
    new Quiz("ダンゴ虫の呼吸法は？何呼吸？", ["肺呼吸", "水の呼吸", "えら呼吸", "皮膚呼吸"], 3, 2),
    new Quiz("夏目漱石の作品、吾輩は猫である の冒頭文「吾輩は猫である。名前は〇〇〇〇。」ここに入る文字は？", ["レオ", "ヨシザワ", "ニャー子", "まだない"], 4, 2),
    new Quiz("日本で初めて拳銃の携帯が認められた職業はなんでしょうか？", ["警察官", "国家警備員", "郵便配達員", "自宅警備隊"], 3, 2),
    new Quiz("FIFA(国際サッカー連盟)の本部がある国の名前は？", ["スイス", "ブラジル", "アルゼンチン", "フランス"], 1, 2),
];

export {QUESTIONS, Quiz};