import { ArticleInfo } from '../models/article-info';
import { Component} from '@angular/core';
import { FeedInfoComponent } from '../feed-info/feed-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-feed',
  standalone: true,
  imports: [FeedInfoComponent, CommonModule],
  templateUrl: './user-feed.component.html',
  styleUrl: './user-feed.component.css'
})
export class UserFeedComponent {
  articleInfoList: ArticleInfo[] = [{"title": 'Пари от REPowerEU може да се насочат към санирането',
  "link": "https://www.capital.bg/politika_i_ikonomika/ikonomika/2024/01/30/4582371_pari_ot_repowereu_moje_da_se_nasochat_kum_saniraneto/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4582369.jpg",
  "summary": 'Програмите за справедлив преход най-накрая тръгват, RepowerEU ще се ползва за саниране, а България като цяло ще се опита да намали загубите на евросредства. Това стана ясно от изслушването на финансовия министър Асен Василев във вторник в Комисията за контрол върху управлението на средствата от европейските фондове в Народното събрание. От изказванията на Василев още се разбра, че през 2024 г. ще се работи по третото и четвъртото плащане, по които страната може да поиска общо 2.5 млрд. лева. Реа...',
  "published": "Tue, 30 Jan 2024 18:30"},
  {"title": 'Срещите на турския външен министър: кой на кого беше домакин',
  "link": "https://www.capital.bg/politika_i_ikonomika/sedmicata/mediina_sergiia/2024/01/30/4582339_sreshtite_na_turskiia_vunshen_ministur_koi_na_kogo/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4582334.jpg",
  "summary": 'Визитата на турския външен министър Хакан Фидан в България започна с две отделни срещи с висши представители на ДПС. Първо Хакан се срещна с подалия оставка бивш председател на движението Мустафа Карадайъ, а след него разговаря и с номинираните от почетния председател ДПС Ахмед Доган за съпредседатели на партията Делян Пеевски и Джевдет Чакъров. Турският първи дипломат е на официално посещение у нас по покана на българския си колега Мария Габриел, а визитата му е част от балканската му обиколка ...',
  "published": "Tue, 30 Jan 2024 17:44"},
  {"title": 'Може ли да има "тристранен Шенген" с Гърция и Румъния?',
  "link": "https://www.capital.bg/politika_i_ikonomika/bulgaria/2024/01/30/4582090_moje_li_da_ima_tristranen_shengen_s_gurciia_i_rumuniia/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4582292.jpg",
  "summary": 'Миналата седмица най-голямата гръцка организация за ресторантьорство, хотелиерство и кетъринг ХОРЕКА настояха за премахването на контрола на сухопътните граници между страните - членки от региона, за да се улесни пътуването на румънски и български туристи към Гърция още от идното лято. А политиците само чакаха да се качат на тази вълна. Непосредствено след това те лансираха идеята за формиране на "мини Шенген" на Балканите. Този път той се очаква да включва България, Румъния и Гърция.  Какво е Ш...',
  "published": "Tue, 30 Jan 2024 17:34"},
  {"title": 'Икономиката на еврозоната е била в застой през четвъртото тримесечие',
  "link": "https://www.capital.bg/politika_i_ikonomika/sviat/2024/01/30/4582326_ikonomikata_na_evrozonata_e_bila_v_zastoi_prez/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4582325.jpg",
  "summary": 'Икономиката на еврозоната е била в застой през последните три месеца на миналата година, показват предварителните данни, публикувани от статистическата агенция на Европейския съюз (ЕС). Представянето на 20-те държави е силно повлияно от свиването на производството в Германия и спирането на френския растеж, които компенсират по-силното от очакваното възстановяване в Испания и Италия.  Бизнес активността в еврозоната започна годината с лек ръст  Представянето на 20-те икономики във валутния съюз б...',
  "published": "Tue, 30 Jan 2024 16:47"},
  {"title": 'Снимка на деня: Космическият телескоп James Webb разкрива нови кадри от 19 галактики',
  "link": "https://www.capital.bg/politika_i_ikonomika/sedmicata/2024/01/30/4582052_snimka_na_denia_kosmicheskiiat_teleskop_james_webb/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4582060.jpg",
  "summary": '',
  "published": "Tue, 30 Jan 2024 15:43"},
  {"title": 'Мъск обяви, че първият човек с мозъчен имплант вече се възстановява успешно',
  "link": "https://www.capital.bg/biznes/tehnologii_i_nauka/2024/01/30/4582020_musk_obiavi_che_purviia_chovek_s_mozuchen_implant/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4582024.jpg",
  "summary": 'Илон Мъск, собственикът на Neuralink, наред с компании като Tesla, SpaceX и X, съобщи, че първият пациент с инсталиран мозъчен имплант "се възстановява успешно". В публикация от 29 януари в X Мъск споделя, че човекът успешно е получил импланта в неделя, 28 януари, и че първите резултати показват "обещаващо откриване на невронна активност". The first @Neuralink product is called Telepathy - Elon Musk (@elonmusk)  January 29, 2024  Имплантът в мозъка, разработен от Neuralink, има за цел да помогне...',
  "published": "Tue, 30 Jan 2024 15:15"},
  {"title": 'МВФ прогнозира "меко приземяване" за световната икономика',
  "link": "https://www.capital.bg/politika_i_ikonomika/sviat/2024/01/30/4581974_mvf_prognozira_meko_prizemiavane_za_svetovnata/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4582015.jpg",
  "summary": 'Глобалната икономика се оказва изненадващо устойчива на кризите, свързани с пандемията, войната в Украйна и покачващите се разходи за живот, а инфлацията вече пада по-бързо от очакваното. Това посочва в последната си макроикономическа прогноза Международният валутен фонд (МВФ), който ревизира леко нагоре с 0.2 процентни пункта до 3.1% очакванията си за глобалния растеж тази година. Стабилната активност и успокояването на инфлацията от своя страна отварят пътя за меко приземяване, т.е. световната...',
  "published": "Tue, 30 Jan 2024 15:07"},
  {"title": 'Централна и Източна Европа e новият магнит за борсовите инвеститори',
  "link": "https://www.capital.bg/moiat_capital/investments/2024/01/30/4581928_centralna_i_iztochna_evropa_e_noviiat_magnit_za/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581940.jpg",
  "summary": 'Българският борсов индекс Sofix продължава да расте през януари след инерцията, която набра през миналата година. След покачване от 27% през 2023 г., за първите четири седмици от 2024 г. бенчмаркът се разраства с още 3% и вече достигна 790 пункта - рекорд от септември 2009 г. Все пак това до голяма степен се дължи на растежа при "Шелли груп", която вече е най-голямата компания в индекса, като изпревари "Софарма". Оказва се обаче, че Българската фондова борса не е единствената, която регистрира д...',
  "published": "Tue, 30 Jan 2024 13:58"},
  {"title": 'Wizz Air отчита 180 млн. евро загуба през последното тримесечие',
  "link": "https://www.capital.bg/biznes/transport/2024/01/30/4581993_wizz_air_otchita_180_mln_evro_zaguba_prez_poslednoto/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581994.jpg",
  "summary": 'Унгарският нискотарифен авиопревозвач Wizz Air отчете загуба от 180 млн. евро за последното тримесечие на 2023 г., като според ръководството това се дължи на прекъсването на полетите до Близкия изток и заземяването на част от флотилията. Представянето през периода октомври - декември, което за компанията е трето тримесечие във фискалната година, е по-лошо от това за третото тримесечие на миналата година. Тогава беше отчетена загуба в размер на 155 млн. евро. Проучване на LSEG показа, че анализат...',
  "published": "Tue, 30 Jan 2024 13:57"},
  {"title": 'United Group пласира облигации за 1.73 млрд. евро',
  "link": "https://www.capital.bg/biznes/telekomi/2024/01/30/4581975_united_group_plasira_obligacii_za_173_mlrd_evro/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581997.jpg",
  "summary": 'Собственикът на "Виваком" и "Нова телевизия" United Group пласира облигации за 1.73 млрд. евро, предназначени предимно за рефинансиране на част от дълга ѝ. В официално съобщение от компанията обявиха: "Постъпленията ще бъдат използвани за погасяване на съществуващите обезпечени облигации с падеж през 2026 и 2029 г., съществуващите облигации с опция за капитализиране на лихвата с падеж през 2025 г. и револвиращи заеми. По този начин ефективно ще се удължи падежът на рефинансираните облигации от 2...',
  "published": "Tue, 30 Jan 2024 13:55"},
  {"title": 'Италия и Гърция имат най-голям потенциал за перки в морето, в България е сложно и скъпо',
  "link": "https://www.capital.bg/biznes/energetika/2024/01/30/4581599_italiia_i_gurciia_imat_nai-goliam_potencial_za_perki_v/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581601.jpg",
  "summary": '   Инвестициите в офшорни паркове в Европа до 2025 г. се изчисляват на около 400 млрд. евро. Според ENTSO-E на няколко километра от брега Черно море става много дълбоко, а това би затруднило и оскъпило изграждането на централи. Експерти на Световната банка смятат, че по-голямата част от потенциала за вятърна енергия в морето е свързан с плаващи паркове.     Европейска мрежа на системните оператори на преносни системи за електроенергия (ENTSO-E) публикува своите планове за развитие на офшорната м...',
  "published": "Tue, 30 Jan 2024 13:46"},
  {"title": 'Бизнесът започва новата година с оптимизъм',
  "link": "https://www.capital.bg/politika_i_ikonomika/ikonomika/2024/01/30/4581915_biznesut_zapochva_novata_godina_s_optimizum/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581980.jpg",
  "summary": 'Бизнесът влиза в новата година с оптимизъм. Очакванията на мениджърите за състоянието на компаниите им се подобрява във всички сектори на икономиката през януари, показват данните на НСИ. Така общата оценка за бизнес климата се увеличава с 3 пункта до 22.8%. Само месец по-рано - през декември, нагласите сред фирмите в страната достига най-ниското ниво за 2023 г. Проинфлационните нагласи също се успокояват. Очакванията на мениджърите в промишлеността и строителството са за леко увеличение на цени...',
  "published": "Tue, 30 Jan 2024 13:18"},
  {"title": 'ЕС се договори да използва печалбите от замразените руски активи',
  "link": "https://www.capital.bg/politika_i_ikonomika/sviat/2024/01/30/4581964_es_se_dogovori_da_izpolzva_pechalbite_ot_zamrazenite/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581966.jpg",
  "summary": 'Страните от ЕС подкрепиха план за заделяне на милиарди евро от печалбата, получена от замразяването на активите на Руската централна банка, като първа стъпка към евентуалното им използване за възстановяване на Украйна. Единодушното решение от понеделник, което предстои да бъде официализирано през следващите седмици, е част от демонстрацията на подкрепа на блока за Киев преди втората годишнина от руската инвазия. Освен това то идва в навечерието на срещата на върха в четвъртък, на която се очаква...',
  "published": "Tue, 30 Jan 2024 12:47"},
  {"title": 'Коментар | Необходима е реформа на антитръстовите закони',
  "link": "https://www.capital.bg/politika_i_ikonomika/redakcionni_komentari/2024/01/30/4581921_komentar_neobhodima_e_reforma_na_antitrustovite_zakoni/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581961.jpg",
  "summary": '   [[img:4581920]]Мордекай Курц, професор по икономика в Stanford University, в коментар за Project Syndicate    Истинската цел на антитръстовите закони е да ограничават прекомерната икономическа и политическа власт на бизнеса. На практика антитръстовата политика се използва, за да се гарантира свободно влизане на конкурентите на всички пазари.  Как е най-добре да се регулира тех индустрията Рекордната антитръстова глоба за Google беше потвърдена от съда  Докато американският икономист Милтън Фр...',
  "published": "Tue, 30 Jan 2024 12:34"},
  {"title": 'Криптоборсите в ЕС ще прилагат мерки срещу прането на пари както банките',
  "link": "https://www.capital.bg/moiat_capital/crypto/2024/01/30/4579792_kriptoborsite_shte_prilagat_merki_sreshtu_praneto_na/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4580441.jpg",
  "summary": '   При над 10 000 евро за големи парични плащания в ЕС ще има засилена проверка на страните по транзакцията. От криптоиндустрията вече изразиха притеснения, че мерките за нея ще са по-сериозни от тези при традиционните компании. Регулацията на криптотрансферите демонстрира ангажимента на ЕС за създаване на надзорна система въпреки опасенията от по-строги правила.     Криптокомпаниите, които са регистрирани по силата на регулацията MiCA на Европейския съюз, ще трябва да прилагат същите мерки срещ...',
  "published": "Tue, 30 Jan 2024 12:15"},
  {"title": 'НАТО започва утре най-голямото си учение от Студената война насам',
  "link": "https://www.capital.bg/politika_i_ikonomika/sviat/2024/01/30/4581602_nato_zapochva_utre_nai-goliamoto_si_uchenie_ot/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4582291.jpg",
  "summary": 'НАТО започва на 31 януари най-голямото си военно учение от десетилетия насам. Steadfast Defender има за цел да покаже, че западният отбранителен алианс бързо може да придвижи и разположи сили от Северна Америка и Западна Европа, за да подсили източния си фланг. Над 90 хил. души ще участват във военните маневри, като се очаква те да продължат до май. Войници от държавите, членки на НАТО, както и от Швеция, която съвсем скоро би трябвало да стане пълноправен член на алианса, ще вземат участие в ра...',
  "published": "Tue, 30 Jan 2024 10:57"},
  {"title": 'Русия бави строителството на газопровода към Китай "Силата на Сибир – 2"',
  "link": "https://www.capital.bg/politika_i_ikonomika/sviat/2024/01/30/4581450_rusiia_bavi_stroitelstvoto_na_gazoprovoda_kum_kitai/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581579.jpg",
  "summary": 'Строителството на планирания газопровод "Силата на Сибир - 2", свързващ западните газови находища на Русия с Китай, се очаква да се забави, предупреди министър-председателят на Монголия Лувсанамсрайн Оюун-Ердене. Газопроводът, който ще преминава през монголска територия, е приоритет за Москва от над десетилетие, като придоби още по-голямо значение, след като Европа ограничи вноса на руски газ в отговор на руската инвазия в Украйна през 2022 г., пише Financial Times.  Си подкрепя Путин за Украйна...',
  "published": "Tue, 30 Jan 2024 10:27"},
  {"title": 'Великобритания: Мъката на торите',
  "link": "https://www.capital.bg/politika_i_ikonomika/sviat/2024/01/30/4554908_mukata_na_torite/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4565772.jpg",
  "summary": 'Твърдят, че скръбта има пет етапа: отричане, гняв, пазарене, депресия и приемане. С предстоящите парламентарни избори през 2024 г. Консервативната партия ще мине през всички тях. Отричането ще дойде първо. На каквато и дата да са изборите, кампанията ще стартира в началото на годината. Риши Сунак се смята за най-голямата надежда на консерваторите. Планът все още е за кампания в президентски стил, като г-н Сунак ще се изправи срещу сър Кийр Стармър, лидерът на лейбъристите. Но ако е президент, то...',
  "published": "Tue, 30 Jan 2024 10:00"},
  {"title": '"От нула до еднорог", S1E2: Как се набира финансиране с Тодор Брешков',
  "link": "https://www.capital.bg/podcast/ot_nula_do_ednorog/2024/01/30/4581559_ot_nula_do_ednorog_s1e2_kak_se_nabira_finansirane_s/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581619.jpg",
  "summary": '[[aud:4581560]] Подкаст поредицата с видеоинтервюта на "Капитал" "От нула до еднорог" проследява как се прави успешен стартъп от идея до продукт. В рамките на 10 епизода Мери Иванова разговаря с предприемачи, фонд мениджъри и експерти от българската стартъп екосистема по ключови за стартираща компания бизнес теми - как се набира финансиране, как се контролира растежът, как се продава и как се става еднорог (компания с оценка над 1 млрд. долара).  "От нула до еднорог", S1E1: как се започва стартъ...',
  "published": "Tue, 30 Jan 2024 09:30"},
  {"title": 'Седмични новини за маркетинг и реклама (30 януари)',
  "link": "https://www.capital.bg/biznes/media_i_reklama/2024/01/30/4581481_sedmichni_novini_za_marketing_i_reklama_30_ianuari/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4305793.jpg",
  "summary": 'На българския пазар "Видимо и невидимо тв": Новата частна обществена телевизия [[img:4579884]] Новият телевизионен канал "Видимо и невидимо тв" (ВНТ) цели да се превърне в хъб на гражданската журналистика в България. В ефира й се излъчват общо 20 предавания на независими автори, които не са професионални журналисти, а анализатори и лидери на обществено мнение. Сред тях са "Алтернативата", "Контракоментар с Асен Генов" и Инициатива "Правосъдие за всеки". Тяхното съдържание вече е популярно в соци...',
  "published": "Tue, 30 Jan 2024 09:29"},
  {"title": 'САЩ продават на Гърция до 40 изтребителя F-35 в замяна на оръжейна помощ за Украйна',
  "link": "https://www.capital.bg/politika_i_ikonomika/voinata-v-ukraina/2024/01/30/4581615_sasht_davat_na_gurciia_do_40_iztrebitelia_f-35_v/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581632.jpg",
  "summary": 'Държавният секретар на САЩ Антъни Блинкен поиска от Гърция да изпрати свои излишни оръжия на Украйна, след като Вашингтон даде зелена светлина за сделка, в която Атина да придобие супермодерни стелт-изтребители от пето поколение F-35. В писмо до гръцкия премиер Кириакос Мицотакис Блинкен изрази интерес към отбранителните системи на Гърция, които са съветско производство и биха могли да бъдат полезни на Украйна, при условие че Киев прояви интерес и след това направи оценка на състоянието и прибли...',
  "published": "Tue, 30 Jan 2024 09:17"},
  {"title": 'Германският строителен сектор се очаква да се свие за първи път от финансовата криза',
  "link": "https://www.capital.bg/biznes/imoti/2024/01/30/4574270_germanskiiat_stroitelen_sektor_se_ochakva_da_se_svie/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4580798.jpg",
  "summary": 'Разходите за строителство в Германия ще намалеят през 2024 г. за първи път от финансовата криза насам, което е още един лош знак за сектора на недвижимите имоти, който преживява най-тежката криза от десетилетия насам. Проучване на икономическия институт DIW предвижда, че обемът на строителството ще се свие с 3.5% през тази година до 546 млрд. евро, преди да нарасне леко с 0.5% през 2025 г.  Германия се отказва от плановете за по-строги строителни стандарти  В продължение на години имотният секто...',
  "published": "Tue, 30 Jan 2024 08:57"},
  {"title": 'Човекът е в центъра на дейността ни не само като клиент и партньор, а и като колега',
  "link": "https://www.capital.bg/biznes/kompanii/2024/01/30/4581007_chovekut_e_v_centura_na_deinostta_ni_ne_samo_kato/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581011.jpg",
  "summary": '   Визитка Андрей Петров e председател на борда на управителите на "dm България" и е част от ръководния екип на компанията още от нейното основаване през 2008 година. Преминал е през различни позиции като регионален мениджър "Експанзия" и ръководител на сектор "Логистика". В момента отговаря за ресор "Експанзия" и "Регион Продажби". Андрей Петров е бакалавър по "Стопанско управление" от Русенския университет, а след това завършва MBA и Engineering в FHTW - Berlin. Преди dm е работил в сферата на...',
  "published": "Tue, 30 Jan 2024 08:00"},
  {"title": 'Наръчникът на Невена - малка победа за дърветата в градовете',
  "link": "https://www.capital.bg/politika_i_ikonomika/gradove/plovdiv/2024/01/29/4530074_naruchnikut_na_nevena_-_malka_pobeda_za_durvetata_v/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581449.jpg",
  "summary": '   "Наръчникът на Невена" е големият победител в "Градолюбители" през 2022 г. Вече издадената книга е с тираж от 900 бройки, 265 от които са предназначени за всички общини в България. Присъствалите на представянето ѝ смятат, че наръчникът ще е от голяма полза за промяна в градската среда в страната.     "Eдна мечта не се превръща в реалност с магия - изисква се много пот, решителност и усилена работа", казва покойният вече ген. Колин Пауъл, първият чернокож държавен секретар на САЩ и ръководител...',
  "published": "Mon, 29 Jan 2024 17:58"},
  {"title": 'Снимка на деня: Над 10 000 кукера взеха участие в 30-ото юбилейно издание на фестивала "Сурва"',
  "link": "https://www.capital.bg/politika_i_ikonomika/sedmicata/2024/01/29/4581634_snimka_na_denia_nad_6000_kukera_vzeha_uchastie_v/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581641.jpg",
  "summary": '',
  "published": "Mon, 29 Jan 2024 17:06"},
  {"title": 'Забавянето на икономиката извежда "Алкомет" на загуба през 2023 г.',
  "link": "https://www.capital.bg/biznes/promishlenost/2024/01/29/4581623_zabavianeto_na_ikonomikata_izvejda_alkomet_na_zaguba/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581626.jpg",
  "summary": 'Забавянето на икономиката и намаленото търсене стоят зад по-слабите резултати на шуменския производител на алуминиеви изделия "Алкомет". През 2023 г. продажбите са спаднали с близо 39% и компанията отчита загуба, показва предварителният отчет. Най-значително е понижението при валцовите изделия, докато картината при пресови продукти е по-пъстра. Трудна среда По-слабият икономически растеж, инфлацията, военните конфликти, икономическите войни и нестабилната политическа среда са се отразили на цели...',
  "published": "Mon, 29 Jan 2024 17:02"},
  {"title": 'Производители на олио: Държавата ни задушава под лобисткия натиск на земеделците',
  "link": "https://www.capital.bg/biznes/kompanii/2024/01/29/4581556_proizvoditeli_na_olio_durjavata_ni_zadushava_pod/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581570.jpg",
  "summary": 'Сблъсъкът в интересите на местните производители на слънчоглед и заводите за олио трае вече почти година, а вместо арбитър държавата трайно зае страната на зърнопроизводителите и на практика спря вноса от Украйна. В ситуацията няма много нови факти - преработващите мощности за растителни масла са големи и имат нужда и от вносна суровина, а собствениците на местната отказват да я продават на международни цени и по тази причина залежава. В тази ситуация заводите за олио вече трайно са зле и за пор...',
  "published": "Mon, 29 Jan 2024 16:20"},
  {"title": 'Нараства недоволството от Boeing в авиоиндустрията',
  "link": "https://www.capital.bg/biznes/kompanii/2024/01/29/4581004_narastva_nedovolstvoto_ot_boing_v_avioindustriiata/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4580996.jpg",
  "summary": '   Изпълнителни директори на американски авиокомпании описват случващото се като "неприемливо". Превозвачите очакват забавяния на вече договорените доставки през тази година. Напрежението върху изпълнителния директор на Boeing Дейв Калхун се увеличава.    Недоволството спрямо проблемите с качеството на самолетите Boeing 737 Max нараства сред индустриалните лидери в Америка. Изпълнителните директори на American Airlines и Alaska Airlines определиха случващото се като "неприемливо", като, общо взе...',
  "published": "Mon, 29 Jan 2024 14:57"},
  {"title": 'Съдът в Хонконг нареди китайският строителен гигант Evergrande да обяви ликвидация',
  "link": "https://www.capital.bg/biznes/imoti/2024/01/29/4581447_sudut_v_honkong_naredi_kitaiskiiat_stroitelen_gigant/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581448.jpg",
  "summary": 'Съдът в Хонконг разпореди ликвидацията на China Evergrande, с което започва нов и непредвидим етап от фалита на най-задлъжнелия строителен предприемач в света. Заповедта за ликвидация идва малко повече от две години след официалния фалит на компанията, който предизвика ликвидна криза за китайските строителни предприемачи и все още затруднява втората по големина икономика в света. Съдията от Върховния съд Линда Чан издаде заповедта в понеделник, след като строителният предприемач не успя да предл...',
  "published": "Mon, 29 Jan 2024 12:11"},
  {"title": 'Брюксел заплашва да саботира унгарската икономика, ако Орбан наложи вето върху помощта за Украйна',
  "link": "https://www.capital.bg/politika_i_ikonomika/sviat/2024/01/29/4581403_brjuksel_zaplashva_da_sabotira_ungarskata_ikonomika/?ref=rss",
  "image": "http://www.capital.bg/shimg/zx640_4581406.jpg",
  "summary": '   Орбан обеща да блокира използването на бюджета на ЕС за предоставяне на финансова помощ в размер на 50 млрд. евро на Украйна по време на извънредна лидерска среща в четвъртък. Стратегията ще бъде насочена изрично към икономическите слабости на Унгария, а целта е да застраши валутата ѝ и да доведе до срив в доверието на инвеститорите в опит да навреди на "работните места и растежа". Будапеща е изпратила ново предложение до Брюксел, в което се посочва, че сега е готова да разреши използването н...',
  "published": "Mon, 29 Jan 2024 11:27"},];
}