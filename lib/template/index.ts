import { AlignmentType } from "docx";
import { Paragraph } from "./paragraph";
import { Template } from "./template";
import { Choice } from "./text-nodes/choice";
import { Combination } from "./text-nodes/combination";
import { Input } from "./text-nodes/date-input";
import { Label } from "./text-nodes/label";
import { Subtitle } from "./text-nodes/subtitle";
import { Text } from "./text-nodes/text";
import { Title } from "./text-nodes/title";

export const template = new Template("Осмотр терапевта", [
    new Paragraph([new Title("ОСМОТР ТЕРАПЕВТА")], {
        alignment: AlignmentType.CENTER,
        margin: false,
    }),
    new Paragraph([new Subtitle("(первичный)")], {
        alignment: AlignmentType.RIGHT,
        margin: false,
    }),
    new Paragraph([
        new Label("Дата: "),
        new Input("", { type: "date" }),
        new Text(". "),
        new Label("Жалобы: "),
        new Combination({
            variants: [
                "на общую слабость",
                "ломота",
                "головная боль",
                "першение",
                "боль в горле",
                "насморк",
                "заложеность носа",
                "кашель сухой",
                "с мокротой",
            ],
        }),
        new Text(". "),
        new Label("Болен: "),
        new Choice({ variants: ["1", "2", "3", "4", "5"] }),
        new Text(" день после переохлаждения."),
    ]),
    new Paragraph([
        new Label("Анамнез: "),
        new Combination({
            variants: ["ОРВИ", "ГБ 2 ст.", "ИБС", "АСК", "ЦВБ", "ДДЗП"],
        }),
        new Text(". "),
        new Label("Эпиданамнез: "),
        new Combination({ variants: ["гепатит", "туберкулез", "отрицает"] }),
        new Text(". За пределы города "),
        new Choice({ variants: ["выезжал(а)", "не выезжал(а)"] }),
        new Text(". Контакт с covid-19 "),
        new Choice({ variants: ["был", "не был"] }),
        new Text(". Вакцинация "),
        new Choice({ variants: ["была", "не была"] }),
        new Text("."),
        new Label("Страховой анамнез: "),
        new Choice({ variants: ["работает", "не работает"] }),
        new Text(", за год ЛН "),
        new Choice({ variants: ["был", "не был"] }),
        new Text("."),
    ]),
    new Paragraph([
        new Label("Кожные покровы: "),
        new Combination({ variants: ["чистые", "влажные", "сухие"] }),
        new Text(". "),
        new Label("Лимфатические узлы: "),
        new Choice({ variants: ["увеличенные", "не увеличенные"] }),
        new Text(". "),
        new Label("Суставы: "),
        new Choice({ variants: ["изменены", "не изменены"] }),
        new Text(". "),
        new Label("Зев: "),
        new Combination({ variants: ["чистый", "гиперемированный"] }),
        new Text(". "),
        new Label("Миндалины: "),
        new Combination({
            variants: ["обычные", "рыхлые", "увеличены", "уменьшены"],
        }),
        new Text(". "),
        new Label("Число дыханий: "),
        new Text("16 в мин. "),
        new Label("В легких: "),
        new Text("дыхание "),
        new Combination({
            variants: [
                "везикулярное",
                "жесткое",
                "единичные",
                "сухие",
                "влажные",
                "хрипы",
            ],
        }),
        new Text(". Притупление перкуторного звука в области "),
        new Choice({ variants: ["нижних", "средних", "верхних"] }),
        new Text(" долей. "),
        new Label("Тоны сердца: "),
        new Choice({ variants: ["чистые", "ясные", "приглушенные"] }),
        new Text(". "),
        new Label("АД: "),
        new Text("сидя "),
        new Choice({ variants: ["120/80", "130/80", "140/90"] }),
        new Text(" мм рт. ст. "),
        new Label("Пульс: "),
        new Choice({ variants: ["88", "92"] }),
        new Text(" удар. в мин "),
        new Choice({ variants: ["ритмичный", "аритмичный"] }),
        new Text(". "),
    ]),
    new Paragraph([
        new Label("Язык: "),
        new Choice({
            variants: ["чистый", "влажный", "обложен белым налетом"],
        }),
        new Text(". "),
        new Label("Живот: "),
        new Text("мягкий, безболезненный. "),
        new Label("Печень: "),
        new Text("не увеличена. "),
        new Label("Стул: "),
        new Choice({ variants: ["нормальный", "неустойчивый"] }),
        new Text(". "),
        new Label("Мочеиспускание: "),
        new Choice({ variants: ["нормальное", "болезненное", "учащенное"] }),
        new Text(". "),
        new Label("Диагноз: "),
        new Choice({
            variants: [
                "ОРВИ",
                "Острый трахеит",
                "Острый ринит",
                "Острый ларингит",
            ],
        }),
        new Text("."),
    ]),
    new Paragraph([
        new Text("Временно нетрудоспособен(на). ЭЛН/ЛН № "),
        new Input("", { type: "text" }),
        new Text(" с "),
        new Input("", { type: "date" }),
        new Text(" по "),
        new Input("", { type: "date" }),
        new Text("."),
    ]),
    new Paragraph([
        new Choice({ variants: ["Активное посещение", "Явка в поликлинику"] }),
        new Text("."),
    ]),
    new Paragraph([new Label("Диета, Режим: "), new Text("полупостельный.")]),
    new Paragraph([
        new Label("Лечение: "),
        new Combination({
            variants: [
                "ингавирин 90 по 1 табл. 1 раз/день 6 дней",
                "арбидол 200 млг по схеме 6 дней",
                "амоксиклав 1000 по 1 табл. 2 раза/день 7 дней",
                "лизобакт рассасывать по 1 табл. 4 раза/день 6 дней",
                "граммидин по 1 табл. 3 раза/день 6 дней",
                "амброгексал по 1 табл. 3 раза/день 6 дней",
                "амбробене по 1 табл. 3 раза/день 6 дней",
                "обильное теплое питье поливитамины",
                "парацетамол по 1 табл. при высокой температуре",
                "гриппферон",
            ],
        }),
        new Text("."),
    ]),
    new Paragraph(
        [new Input("", { type: "date" }), new Text("Врач Цой К.Я.")],
        { alignment: AlignmentType.JUSTIFIED }
    ),
]);
