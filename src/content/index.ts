import portraitBerezina from "@/assets/portrait-berezina.jpg";
import portraitKirilina from "@/assets/portrait-kirilina.jpg";
import portraitMiloslavskii from "@/assets/portrait-miloslavskii.jpg";
import portraitLavrinenko from "@/assets/portrait-lavrinenko.jpg";
import portraitChibis from "@/assets/portrait-chibis.jpg";
import portraitGomon from "@/assets/portrait-gomon.jpg";
import portraitChursin from "@/assets/portrait-chursin.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

import type { Artist, PressItem, Project, Publication, Work } from "./types";

export const IMAGES = { 
  portraitBerezina, portraitKirilina, portraitMiloslavskii, portraitLavrinenko, 
  portraitChibis, portraitGomon, portraitChursin,
  work1, work2, work3, work4 
};

const portraits = [portraitBerezina, portraitKirilina, portraitMiloslavskii, portraitLavrinenko, portraitChibis, portraitGomon, portraitChursin];
const works = [work1, work2, work3, work4];

type Seed = {
  id: string;
  name: string;
  birthYear: number;
  city: [string, string, string]; // es / en / ru
  practice: [string, string, string];
  media: [string, string, string];
};

const seeds: Seed[] = [
  {
    id: "anastasiia-berezina",
    name: "Anastasiia Berezina",
    birthYear: 1992,
    city: ["Buenos Aires / Rusia", "Buenos Aires / Russia", "Буэнос-Айрес / Россия"],
    practice: ["Pintura, instalación participativa", "Painting, participatory installation", "Живопись, участвующая инсталляция"],
    media: ["Acrílico sobre lienzo", "Acrylic on canvas", "Акрил на холсте"],
  },
  {
    id: "kristina-kirilina",
    name: "Kristina Kirilina",
    birthYear: 1989,
    city: ["Buenos Aires / Ucrania", "Buenos Aires / Ukraine", "Буэнос-Айрес / Украина"],
    practice: ["Pintura monumental, vidrio", "Monumental painting, glass", "Монументальная живопись, стекло"],
    media: ["Óleo sobre tela, vidrio, vitral", "Oil on canvas, glass, stained glass", "Масло на холсте, стекло, витраж"],
  },
  {
    id: "ksusha-miloslavskii",
    name: "Ksusha Miloslavskii",
    birthYear: 1987,
    city: ["Buenos Aires / Rusia", "Buenos Aires / Russia", "Буэнос-Айрес / Россия"],
    practice: ["Collage abstracto, objeto artístico", "Abstract collage, artistic object", "Абстрактный коллаж, арт-объект"],
    media: ["Collage, papel, óleo, acrílico, textil", "Collage, paper, oil, acrylic, textile", "Коллаж, бумага, масло, акрил, ткань"],
  },
  {
    id: "olesia-lavrinenko",
    name: "Olesia Lavrinenko",
    birthYear: 1986,
    city: ["Buenos Aires / Rusia", "Buenos Aires / Russia", "Буэнос-Айрес / Россия"],
    practice: ["Técnica mixta, pintura", "Mixed media, painting", "Смешанная техника, живопись"],
    media: ["Tinta, acuarela, acrílico, papel, lienzo", "Ink, watercolor, acrylic, paper, canvas", "Тушь, акварель, акрил, бумага, холст"],
  },
  {
    id: "pasha-chibis",
    name: "Pasha Chibis",
    birthYear: 1982,
    city: ["Buenos Aires / Rusia", "Buenos Aires / Russia", "Буэнос-Айрес / Россия"],
    practice: ["Pintura, diseño", "Painting, design", "Живопись, дизайн"],
    media: ["Acrílico sobre lienzo", "Acrylic on canvas", "Акрил на холсте"],
  },
  {
    id: "polina-gomon",
    name: "Polina Gomon",
    birthYear: 1991,
    city: ["Buenos Aires / Rusia", "Buenos Aires / Russia", "Буэнос-Айрес / Россия"],
    practice: ["Dibujo plein air, técnica gráfica", "Plein air drawing, graphic technique", "Рисунок пленэр, графическая техника"],
    media: ["Tinta, papel, pastel al óleo", "Ink, paper, oil pastel", "Тушь, бумага, масляная пастель"],
  },
  {
    id: "yuri-chursin",
    name: "Yuri Chursin",
    birthYear: 1963,
    city: ["Buenos Aires / Rusia", "Buenos Aires / Russia", "Буэнос-Айрес / Россия"],
    practice: ["Pintura, técnica mixta", "Painting, mixed media", "Живопись, смешанная техника"],
    media: ["Óleo, esmalte, tela vaquera, acrílico", "Oil, enamel, denim, acrylic", "Масло, эмаль, деним, акрил"],
  },
];

const bioTemplates = {
  es: {
    "anastasiia-berezina": "Anastasia Berezina es una artista multidisciplinaria. En su práctica explora los temas de la identidad, la infancia y la búsqueda del propio lugar en el mundo. En sus obras aparecen con frecuencia el azul y el blanco — colores de libertad y profundidad, vinculados a la experiencia de la migración de Rusia a Argentina. Se convierten en un puente visual entre el pasado y el presente, entre la memoria y una nueva realidad. A través del arte urbano, la pintura y las instalaciones participativas, la artista busca involucrar al espectador en un diálogo y convertirlo de observador en participante del proceso artístico.",
    "kristina-kirilina": "La artista explora la percepción del tiempo y la naturaleza fragmentaria de la memoria. En sus obras, el pasado no se presenta como un hecho fijo, sino como reflejos transparentes y rastros de luz, en constante cambio y fuga. En su práctica, la artista trabaja con diversos medios —pintura, relieve, instalación y objetos lumínicos— explorando la interacción entre material, forma y luz. Utiliza vidrio y recurre a técnicas como el vitral y el bajorrelieve, creando obras donde cada medio se convierte en expresión de la idea.",
    "ksusha-miloslavskii": "Ksusḧa Miloslavskii es una artista interdisciplinaria que trabaja en el campo del arte contemporáneo. Su práctica se centra en la exploración de la identidad y las manifestaciones visibles del tiempo a través de collages abstractos, objetos artísticos y máscaras. Paralelamente, se desempeña como escenógrafa. Su obra forma parte de la colección del Museo de Arte Kovalenko (Rusia), así como de colecciones privadas en Rusia, Ucrania, Serbia, Letonia, Irlanda, Italia, España, Estados Unidos, México y Argentina.",
    "olesia-lavrinenko": "Los temas místicos e irracionales están en el núcleo de mi práctica artística. En mis obras creo situaciones donde se cruzan las impresiones de un pasado medio olvidado, mal recordado o imaginado, momentos que existen en el frágil límite entre la memoria y la nostalgia. En ellas se entrelazan ideas del folclore, lo desconocido, la ciencia ficción y lo sobrenatural. Mi práctica explora las formas en que nuestros cuerpos físicos están entrelazados con el mundo digital, especialmente en el contexto de las rápidas transformaciones tecnológicas y sociales.",
    "pasha-chibis": "Pasḧa Cḧibis creció en un entorno profundamente vinculado al arte. Desde temprana edad estuvo rodeado de artistas que eran amigos y colegas de su padre, cuyas experiencias e intercambios influyeron en su elección profesional y en la formación de su sensibilidad artística. Tras graduarse en 2006 como especialista en diseño de transporte, comenzó a desarrollar su carrera artística participando activamente en exposiciones en Moscú. Desde 2007 expuso regularmente en el Vernissage del Parque Gorky, uno de los espacios artísticos y turísticos más importantes de la ciudad.",
    "polina-gomon": "Soy una artista viajera y siempre llevo conmigo un cuaderno en la mochiḷa. El trabajo en plein air es mi manera de establecer contacto con el entorno y de sumergirme en un proceso meditativo de creación que me brinda alegría y calma. Quiero compartir este instante del estar con mis espectadores, invitarlos a explorar y contemplar el mundo conmigo. La mayoría de las obras son de pequeño o mediano formato y están realizadas en pastel al óleo o tinta, los medios más adecuados para el trabajo al aire libre.",
    "yuri-chursin": "Nació en Petropávlovsk-Kamcḧatski el 8 de diciembre de 1963. En 1986 se graduó de la Escuela de Arte de Krasnodar. Ha participado en exposiciones individuales y colectivas en Moscú, San Petersburgo y Alemania. Su obra 'El Baile de Matisse en Moscú' forma parte de la colección de la Galería de Arte Contemporáneo 'ERARTA' en San Petersburgo, y 'El Disparo' integra la colección de Kreissparkasse en Ludwigshḧafen, Alemania.",
  },
  en: {
    "anastasiia-berezina": "Anastasia Berezina is a multidisciplinary artist exploring themes of identity, childhood and the search for one's place in the world. Her works frequently feature blue and white—colours of freedom and depth, linked to the experience of migration from Russia to Argentina. They become a visual bridge between past and present, between memory and new reality. Through street art, painting and participatory installations, she seeks to involve the viewer in dialogue and transform them from observer into participant in the artistic process.",
    "kristina-kirilina": "The artist explores the perception of time and the fragmentary nature of memory. In her works, the past is presented not as a fixed fact but as transparent reflections and traces of light, in constant change and flight. In her practice, she works with diverse media—painting, relief, installation and luminous objects—exploring the interaction between material, form and light. She uses glass and techniques such as stained glass and bas-relief, creating works where each medium becomes an expression of the idea.",
    "ksusha-miloslavskii": "Ksusha Miloslavskii is an interdisciplinary artist working in the field of contemporary art. Her practice focuses on exploring identity and visible manifestations of time through abstract collages, artistic objects and masks. She also works as a set designer. Her work is part of the collection of the Kovalenko Art Museum (Russia), as well as private collections in Russia, Ukraine, Serbia, Latvia, Ireland, Italy, Spain, the United States, Mexico and Argentina.",
    "olesia-lavrinenko": "Mystical and irrational themes lie at the core of my artistic practice. In my works, I create situations where impressions of a half-forgotten, misremembered or imagined past intersect—moments existing on the fragile border between memory and nostalgia. In them, ideas of folklore, the unknown, science fiction and the supernatural intertwine. My practice explores the ways our physical bodies are interwoven with the digital world, especially in the context of rapid technological and social transformations.",
    "pasha-chibis": "Pasha Chibis grew up in an environment deeply connected to art. From an early age he was surrounded by artists who were friends and colleagues of his father, whose experiences and exchanges influenced his professional choice and the formation of his artistic sensibility. After graduating in 2006 as a specialist in transport design, he began to develop his artistic career by actively participating in exhibitions in Moscow. Since 2007 he has exhibited regularly at the Gorky Park Vernissage, one of the city's most important artistic and tourist spaces.",
    "polina-gomon": "I am a traveling artist and always carry a notebook in my backpack. Working en plein air is my way of establishing contact with the environment and immersing myself in a meditative creative process that brings me joy and calm. I want to share this moment of being with my viewers, invite them to explore and contemplate the world with me. Most works are small to medium format and realized in oil pastel or ink, the most suitable media for outdoor work.",
    "yuri-chursin": "Born in Petropavlovsk-Kamchatsky on December 8, 1963. Graduated from the Krasnodar School of Art in 1986. He has participated in solo and group exhibitions in Moscow, St. Petersburg and Germany. His work 'Matisse's Dance in Moscow' is part of the collection of the ERARTA Contemporary Art Gallery in St. Petersburg, and 'The Shot' is part of the Kreissparkasse collection in Ludwigshḧafen, Germany.",
  },
  ru: {
    "anastasiia-berezina": "Анастасия Березина — мультидисциплинарная художница. В своей практике она исследует темы идентичности, детства и поиска собственного места в мире. В её работах часто появляются синий и белый цвета — цвета свободы и глубины, связанные с опытом миграции из России в Аргентину. Они становятся визуальным мостом между прошлым и настоящим, между памятью и новой реальностью. Через уличное искусство, живопись и участвующие инсталляции художница стремится вовлечь зрителя в диалог и превратить его из наблюдателя в участника художественного процесса.",
    "kristina-kirilina": "Художница исследует восприятие времени и фрагментарную природу памяти. В её работах прошлое представлено не как фиксированный факт, а как прозрачные отражения и следы света, находящиеся в постоянном изменении и бегстве. В своей практике она работает с разными медиа — живопись, рельеф, инсталляция и светолюминесцентные объекты — исследуя взаимодействие материала, формы и света. Она использует стекло и техники вроде витража и барельефа, создавая работы, где каждый медиум становится выражением идеи.",
    "ksusha-miloslavskii": "Ксуша Милославская — интердисциплинарная художница, работающая в области современного искусства. Её практика сосредоточена на исследовании идентичности и видимых проявлений времени через абстрактные коллажи, художественные объекты и маски. Параллельно работает как сценографистка. Её произведения входят в собрание Музея искусства Коваленко (Россия), а также в частные коллекции в России, Украине, Сербии, Латвии, Ирландии, Италии, Испании, США, Мексике и Аргентине.",
    "olesia-lavrinenko": "Мистические и иррациональные темы лежат в ядре моей художественной практики. В моих работах я создаю ситуации, где пересекаются впечатления полузабытого, неправильно помняемого или воображаемого прошлого — моменты, существующие на хрупкой границе между памятью и ностальгией. В них переплетаются идеи фольклора, неизвестного, научной фантастики и сверхъестественного. Моя практика исследует способы, в которых наши физические тела переплетены с цифровым миром, особенно в контексте быстрых технологических и социальных трансформаций.",
    "pasha-chibis": "Паша Чибис вырос в среде, глубоко связанной с искусством. С раннего возраста он был окружён художниками, которые были друзьями и коллегами его отца, чьи опыт и обмены влияли на его профессиональный выбор и формирование его художественной чувствительности. После окончания в 2006 году специализации по дизайну транспорта он начал развивать свою художественную карьеру, активно участвуя в выставках в Москве. С 2007 года он регулярно выставляется на Ярмарке в парке Горького, одном из самых важных художественных и туристических пространств города.",
    "polina-gomon": "Я — путешествующая художница и всегда ношу с собой блокнот в рюкзаке. Работа пленэром — это мой способ установить контакт с окружением и погрузиться в медитативный творческий процесс, который дарует мне радость и спокойствие. Я хочу поделиться этим мгновением бытия со своими зрителями, пригласить их исследовать и созерцать мир вместе со мной. Большинство работ — малого или среднего формата, выполнены масляной пастелью или тушью, наиболее подходящими медиумами для работы на воздухе.",
    "yuri-chursin": "Родился в Петропавловске-Камчатском 8 декабря 1963 года. В 1986 году окончил Краснодарскую школу искусств. Участвовал в персональных и коллективных выставках в Москве, Санкт-Петербурге и Германии. Его работа 'Танец Матисса в Москве' входит в собрание Галереи современного искусства 'ERARTA' в Санкт-Петербурге, а 'Выстрел' — в собрание Kreissparkasse в Людвигсхḧафене, Германия.",
  },
};

const statementTemplates = {
  es: {
    "anastasiia-berezina": "A través de mis obras busco conectar con el espectador desde la infancia, invitarlos a recordar ese estado de inocencia y libertad. El arte es para mí un puente entre lo conocido y lo desconocido.",
    "kristina-kirilina": "La memoria no es una suma de hechos, sino una trama de luces y sombras. Busco capturar esos instantes efímeros donde el pasado y el presente convergen.",
    "ksusha-miloslavskii": "Mi práctica trata de cómo nos vemos y cómo somos vistos. La identidad es un collage, un tejido frágil de fragmentos que se recombinan constantemente.",
    "olesia-lavrinenko": "Trabajo en el espacio entre lo racional y lo irracional, entre lo que recordamos y lo que imaginamos. La vida contemporánea está saturada de datos; mis obras intentan recuperar lo que se pierde en esa saturación.",
    "pasha-chibis": "La pintura es mi forma de dialogar con el mundo. Cada color, cada gesto, es una conversación silenciosa sobre cómo habitamos los espacios.",
    "polina-gomon": "Dibujar al aire libre es un acto de intimidad con el lugar. No intento dominar el paisaje, sino escucharlo, permitir que hable a través de mi mano.",
    "yuri-chursin": "Mi trabajo explora la fricción entre la tradición y la experimentación. Cada obra es un ensayo sobre cómo la materia puede contener emoción.",
  },
  en: {
    "anastasiia-berezina": "Through my works I seek to connect with the viewer from childhood, inviting them to remember that state of innocence and freedom. Art is for me a bridge between the known and the unknown.",
    "kristina-kirilina": "Memory is not a sum of facts, but a web of lights and shadows. I seek to capture those fleeting moments where past and present converge.",
    "ksusha-miloslavskii": "My practice deals with how we see ourselves and how we are seen. Identity is a collage, a fragile fabric of fragments that constantly recombine.",
    "olesia-lavrinenko": "I work in the space between the rational and the irrational, between what we remember and what we imagine. Contemporary life is saturated with data; my works attempt to recover what is lost in that saturation.",
    "pasha-chibis": "Painting is my way of dialoguing with the world. Each color, each gesture, is a silent conversation about how we inhabit spaces.",
    "polina-gomon": "Drawing in the open air is an act of intimacy with place. I do not try to master the landscape, but to listen to it, to allow it to speak through my hand.",
    "yuri-chursin": "My work explores the friction between tradition and experimentation. Each work is an essay on how matter can contain emotion.",
  },
  ru: {
    "anastasiia-berezina": "Через мои работы я стремлюсь соединиться со зрителем из детства, приглашая их вспомнить то состояние невинности и свободы. Для меня искусство — это мост между известным и неизвестным.",
    "kristina-kirilina": "Память — это не сумма фактов, а сплетение света и теней. Я стремлюсь уловить те мимолётные моменты, где прошлое и настоящее сходятся.",
    "ksusha-miloslavskii": "Моя практика — о том, как мы видим себя и как нас видят другие. Идентичность — это коллаж, хрупкая ткань фрагментов, которые постоянно пересоединяются.",
    "olesia-lavrinenko": "Я работаю в пространстве между рациональным и иррациональным, между тем, что мы помним, и тем, что мы воображаем. Современная жизнь насыщена данными; мои работы пытаются восстановить то, что теряется в этой насыщенности.",
    "pasha-chibis": "Живопись — мой способ диалога с миром. Каждый цвет, каждый жест — это молчаливый разговор о том, как мы обитаем пространства.",
    "polina-gomon": "Рисовать на воздухе — это акт интимности с местом. Я не пытаюсь господствовать над пейзажем, а слушать его, позволяя ему говорить через мою руку.",
    "yuri-chursin": "Моя работа исследует трение между традицией и экспериментом. Каждая работа — это эссе о том, как материя может содержать эмоцию.",
  },
};

const shortTemplates = {
  es: {
    "anastasiia-berezina": "Artista multidisciplinaria explorando identidad e infancia.",
    "kristina-kirilina": "Investigando la percepción del tiempo y fragmentos de memoria.",
    "ksusha-miloslavskii": "Collages abstractos y exploración de identidad y tiempo.",
    "olesia-lavrinenko": "Temas místicos entre pasado, memoria y mundo digital.",
    "pasha-chibis": "Pintor que explora el diálogo entre color y espacio.",
    "polina-gomon": "Artista de plein air trabajando con tinta y observación directa.",
    "yuri-chursin": "Pintor experimentando con tradición y nuevos materiales.",
  },
  en: {
    "anastasiia-berezina": "Multidisciplinary artist exploring identity and childhood.",
    "kristina-kirilina": "Investigating time perception and fragments of memory.",
    "ksusha-miloslavskii": "Abstract collages exploring identity and the passage of time.",
    "olesia-lavrinenko": "Mystical themes between past, memory and the digital world.",
    "pasha-chibis": "Painter exploring dialogue between color and space.",
    "polina-gomon": "Plein air artist working with ink and direct observation.",
    "yuri-chursin": "Painter experimenting with tradition and new materials.",
  },
  ru: {
    "anastasiia-berezina": "Мультидисциплинарная художница, исследующая идентичность и детство.",
    "kristina-kirilina": "Исследует восприятие времени и фрагменты памяти.",
    "ksusha-miloslavskii": "Абстрактные коллажи, исследование идентичности и времени.",
    "olesia-lavrinenko": "Мистические темы между прошлым, памятью и цифровым миром.",
    "pasha-chibis": "Художник, исследующий диалог между цветом и пространством.",
    "polina-gomon": "Художница пленэра, работает с тушью и прямым наблюдением.",
    "yuri-chursin": "Художник, экспериментирующий с традицией и новыми материалами.",
  },
};

const artistLinks: Partial<Record<string, { website?: string; instagram?: string }>> = {
  "anastasiia-berezina": {
    website: "https://publdobr.lovable.app/",
    instagram: "@anastas.berezina",
  },
};

export const artists: Artist[] = seeds.map((s, i) => ({
  id: s.id,
  name: s.name,
  birthYear: s.birthYear,
  city: { es: s.city[0], en: s.city[1], ru: s.city[2] },
  practice: { es: s.practice[0], en: s.practice[1], ru: s.practice[2] },
  media: { es: s.media[0], en: s.media[1], ru: s.media[2] },
  website: artistLinks[s.id]?.website,
  instagram: artistLinks[s.id]?.instagram,
  portrait: portraits[i % portraits.length]!,
  short: { 
    es: shortTemplates.es[s.id as keyof typeof shortTemplates.es], 
    en: shortTemplates.en[s.id as keyof typeof shortTemplates.en], 
    ru: shortTemplates.ru[s.id as keyof typeof shortTemplates.ru] 
  },
  bio: { 
    es: bioTemplates.es[s.id as keyof typeof bioTemplates.es], 
    en: bioTemplates.en[s.id as keyof typeof bioTemplates.en], 
    ru: bioTemplates.ru[s.id as keyof typeof bioTemplates.ru] 
  },
  statement: { 
    es: statementTemplates.es[s.id as keyof typeof statementTemplates.es], 
    en: statementTemplates.en[s.id as keyof typeof statementTemplates.en], 
    ru: statementTemplates.ru[s.id as keyof typeof statementTemplates.ru] 
  },
}));

const workTitles = [
  "Niebla I",
  "Tránsito",
  "Documento перевод",
  "Umbral",
  "Vaso de frontera",
  "Cartas sin destino",
  "Segunda lengua",
  "Retorno imposible",
];

export const worksList: Work[] = artists.flatMap((a, ai) =>
  [0, 1, 2].map((k) => {
    const idx = (ai + k) % works.length;
    return {
      id: `${a.id}-w${k + 1}`,
      artistId: a.id,
      title: workTitles[(ai * 3 + k) % workTitles.length]!,
      year: 2026 - ((ai + k) % 3),
      technique: {
        es: a.media.es,
        en: a.media.en,
        ru: a.media.ru,
      },
      dimensions: [`120 × 90 cm`, `200 × 150 cm`, `48 × 32 cm`, `70 × 50 cm`][(ai + k) % 4]!,
      image: works[idx]!,
      caption: {
        es: "Vista de la obra en el archivo de la fundación.",
        en: "View of the work in the foundation archive.",
        ru: "Вид работы в архиве фонда.",
      },
    } satisfies Work;
  }),
);

export const projects: Project[] = [
  {
    id: "bruma-cero",
    title: "BRUMA CERO",
    year: 2026,
    type: "exhibition",
    location: { es: "Villa Crespo, Buenos Aires", en: "Villa Crespo, Buenos Aires", ru: "Вилья-Креспо, Буэнос-Айрес" },
    dates: { es: "12.03 — 28.05.2026", en: "12.03 — 28.05.2026", ru: "12.03 — 28.05.2026" },
    curator: "Marina Delgado",
    cover: work1,
    intro: {
      es: "Primera exhibición colectiva del fondo: doce artistas frente al umbral.",
      en: "The foundation's first group exhibition: twelve artists facing the threshold.",
      ru: "Первая групповая выставка фонда: двенадцать художников перед порогом.",
    },
    description: {
      es: "BRUMA CERO reúne pinturas, esculturas y documentos producidos durante los primeros dieciocho meses del fondo. La muestra se organiza como un archivo abierto: las obras no se ordenan por autor sino por grado de opacidad, desde el documento legible hasta la imagen completamente disuelta.",
      en: "BRUMA CERO brings together paintings, sculptures and documents produced during the foundation's first eighteen months. The show is organised as an open archive: works are ordered not by author but by degree of opacity, from the legible document to the fully dissolved image.",
      ru: "BRUMA CERO объединяет живопись, скульптуру и документы, созданные за первые восемнадцать месяцев работы фонда. Экспозиция построена как открытый архив: работы выстроены не по авторам, а по степени непрозрачности — от читаемого документа до полностью растворённого изображения.",
    },
    artistIds: ["irina-molotova", "pavel-arsen", "nadia-verjova", "milena-sorokin", "artem-lys"],
    workIds: ["irina-molotova-w1", "pavel-arsen-w2", "nadia-verjova-w1", "milena-sorokin-w3"],
    catalog: true,
  },
  {
    id: "arteba-2025",
    title: "arteBA — Sección Utopía",
    year: 2025,
    type: "feria",
    location: { es: "La Rural, Buenos Aires", en: "La Rural, Buenos Aires", ru: "La Rural, Буэнос-Айрес" },
    dates: { es: "04.09 — 07.09.2025", en: "04.09 — 07.09.2025", ru: "04.09 — 07.09.2025" },
    cover: work3,
    intro: {
      es: "Primer stand de la fundación en una feria internacional.",
      en: "The foundation's first booth at an international fair.",
      ru: "Первый стенд фонда на международной ярмарке.",
    },
    description: {
      es: "Un stand construido como sala de espera: bancos, documentos plastificados y cinco esculturas de frontera. La presentación fue acompañada por un programa de conversaciones sobre residencia y estatus migratorio en el arte contemporáneo.",
      en: "A booth built as a waiting room: benches, laminated documents and five border sculptures. The presentation was accompanied by a programme of conversations on residency and migratory status in contemporary art.",
      ru: "Стенд, построенный как зал ожидания: скамьи, заламинированные документы и пять «пограничных» скульптур. Презентацию сопровождала программа разговоров о резиденциях и миграционном статусе в современном искусстве.",
    },
    artistIds: ["pavel-arsen", "lena-brik", "sasha-gart"],
    workIds: ["pavel-arsen-w1", "lena-brik-w2", "sasha-gart-w3"],
  },
  {
    id: "segunda-lengua",
    title: "Segunda Lengua",
    year: 2025,
    type: "research",
    location: { es: "Programa en línea y Buenos Aires", en: "Online programme and Buenos Aires", ru: "Онлайн-программа и Буэнос-Айрес" },
    dates: { es: "03.2025 — 12.2025", en: "03.2025 — 12.2025", ru: "03.2025 — 12.2025" },
    cover: work4,
    intro: {
      es: "Investigación de un año sobre pérdida y reconstrucción del idioma.",
      en: "A year-long research project on language loss and reconstruction.",
      ru: "Годовое исследование об утрате и восстановлении языка.",
    },
    description: {
      es: "Seis artistas y dos investigadoras registraron durante un año sus errores de traducción. El material derivó en un archivo sonoro, una serie de impresiones y un cuaderno publicado por la fundación.",
      en: "Six artists and two researchers recorded their translation errors over the course of a year. The material became a sound archive, a print series and a notebook published by the foundation.",
      ru: "Шесть художников и две исследовательницы в течение года фиксировали свои ошибки перевода. Материал стал звуковым архивом, серией отпечатков и тетрадью, изданной фондом.",
    },
    artistIds: ["milena-sorokin", "danil-orlov", "eugenia-tut", "polina-ruk"],
    workIds: ["milena-sorokin-w1", "danil-orlov-w2", "eugenia-tut-w1"],
    catalog: true,
  },
  {
    id: "umbral-nocturno",
    title: "Umbral Nocturno",
    year: 2024,
    type: "event",
    location: { es: "Centro Cultural Recoleta, Buenos Aires", en: "Centro Cultural Recoleta, Buenos Aires", ru: "Centro Cultural Recoleta, Буэнос-Айрес" },
    dates: { es: "19.10.2024", en: "19.10.2024", ru: "19.10.2024" },
    cover: work2,
    intro: {
      es: "Una noche de performance, sonido y lectura.",
      en: "One night of performance, sound and reading.",
      ru: "Одна ночь перформанса, звука и чтения.",
    },
    description: {
      es: "Programa público de cinco horas en el que las obras se activaron una sola vez. No se documentó en video por decisión colectiva: sólo quedan notas, una grabación de sala y la memoria de quienes estuvieron.",
      en: "A five-hour public programme in which the works were activated only once. By collective decision it was not filmed: only notes, a room recording and the memory of those present remain.",
      ru: "Пятичасовая публичная программа, в которой работы были активированы лишь однажды. По общему решению видеосъёмки не было: остались только заметки, запись зала и память присутствовавших.",
    },
    artistIds: ["vera-kandel", "iván-shelo", "danil-orlov"],
    workIds: ["vera-kandel-w1", "iván-shelo-w2"],
  },
  {
    id: "casa-comun",
    title: "Casa Común",
    year: 2024,
    type: "collaboration",
    location: { es: "Rosario, Santa Fe", en: "Rosario, Santa Fe", ru: "Росарио, Санта-Фе" },
    dates: { es: "05.2024 — 08.2024", en: "05.2024 — 08.2024", ru: "05.2024 — 08.2024" },
    curator: "Tomás Ferreyra",
    cover: work1,
    intro: {
      es: "Colaboración con un espacio autogestionado del centro de Rosario.",
      en: "A collaboration with a self-organised space in central Rosario.",
      ru: "Коллаборация с самоорганизованной площадкой в центре Росарио.",
    },
    description: {
      es: "Tres meses de trabajo compartido entre artistas locales y artistas del fondo, sin exhibición final obligatoria. El resultado fue un taller abierto, una biblioteca de préstamo y dos publicaciones en riso.",
      en: "Three months of shared work between local artists and foundation artists, with no obligatory final exhibition. The outcome was an open workshop, a lending library and two riso publications.",
      ru: "Три месяца совместной работы местных художников и художников фонда без обязательной итоговой выставки. Результат — открытая мастерская, библиотека выдачи и две ризо-публикации.",
    },
    artistIds: ["artem-lys", "grisha-ostrov", "semion-galin"],
    workIds: ["artem-lys-w1", "grisha-ostrov-w2", "semion-galin-w3"],
  },
  {
    id: "archivo-provisorio",
    title: "Archivo Provisorio",
    year: 2026,
    type: "research",
    location: { es: "Sede del fondo, Buenos Aires", en: "Foundation premises, Buenos Aires", ru: "Помещение фонда, Буэнос-Айрес" },
    dates: { es: "01.2026 — en curso", en: "01.2026 — ongoing", ru: "01.2026 — продолжается" },
    cover: work4,
    intro: {
      es: "Un archivo que se corrige a sí mismo cada seis meses.",
      en: "An archive that corrects itself every six months.",
      ru: "Архив, который переписывает себя каждые полгода.",
    },
    description: {
      es: "Catalogación abierta de todo el material del fondo: fotografías, cartas, permisos, listas de embalaje. Cada entrada admite versiones contradictorias; ninguna se elimina.",
      en: "An open cataloguing of all foundation material: photographs, letters, permits, packing lists. Each entry allows contradictory versions; nothing is deleted.",
      ru: "Открытая каталогизация всех материалов фонда: фотографии, письма, разрешения, упаковочные листы. Каждая запись допускает противоречивые версии; ничего не удаляется.",
    },
    artistIds: ["sasha-gart", "nadia-verjova", "eugenia-tut"],
    workIds: ["sasha-gart-w1", "nadia-verjova-w2"],
  },
];

export const publications: Publication[] = [
  {
    id: "cuaderno-bruma-01",
    title: {
      es: "Cuaderno Bruma 01: Umbral",
      en: "Bruma Notebook 01: Threshold",
      ru: "Тетрадь Bruma 01: Порог",
    },
    year: 2026,
    author: "Marina Delgado",
    kind: { es: "Ensayo", en: "Essay", ru: "Эссе" },
    cover: work2,
    excerpt: {
      es: "Sobre la niebla como método de trabajo y no como metáfora.",
      en: "On fog as a working method rather than a metaphor.",
      ru: "О тумане как методе работы, а не как метафоре.",
    },
    body: {
      es: "El umbral no es un lugar de paso sino una condición de trabajo prolongada. Este cuaderno reúne notas de taller, transcripciones y documentos de tránsito recopilados durante la preparación de BRUMA CERO. Ninguno de los textos pretende cerrar una definición: la niebla es aquí un procedimiento, una manera de sostener la indeterminación el tiempo suficiente como para que aparezca una forma.",
      en: "The threshold is not a place of passage but a prolonged working condition. This notebook gathers studio notes, transcriptions and transit documents collected while preparing BRUMA CERO. None of the texts attempts to close a definition: fog is here a procedure, a way of holding indeterminacy long enough for a form to appear.",
      ru: "Порог — не место перехода, а длящееся рабочее состояние. Эта тетрадь собирает заметки из мастерских, расшифровки и транзитные документы, накопленные при подготовке BRUMA CERO. Ни один из текстов не стремится закрыть определение: туман здесь — процедура, способ удерживать неопределённость достаточно долго, чтобы возникла форма.",
    },
    projectId: "bruma-cero",
  },
  {
    id: "errores-de-traduccion",
    title: {
      es: "Errores de traducción",
      en: "Translation Errors",
      ru: "Ошибки перевода",
    },
    year: 2025,
    author: "Milena Sorokin",
    kind: { es: "Investigación", en: "Research", ru: "Исследование" },
    cover: work4,
    excerpt: {
      es: "Doce meses de malentendidos registrados como material de obra.",
      en: "Twelve months of misunderstandings recorded as working material.",
      ru: "Двенадцать месяцев недопониманий, зафиксированных как материал работы.",
    },
    body: {
      es: "Cada error de traducción deja una huella doble: la palabra que no llegó y la palabra que apareció en su lugar. Durante un año registramos esas huellas en cuadernos, mensajes de voz y formularios oficiales. El texto propone leer el error no como falla sino como una forma temprana de un idioma propio.",
      en: "Every translation error leaves a double trace: the word that did not arrive and the word that appeared in its place. For a year we recorded those traces in notebooks, voice messages and official forms. The text proposes reading error not as failure but as an early form of a language of one's own.",
      ru: "Каждая ошибка перевода оставляет двойной след: слово, которое не дошло, и слово, возникшее на его месте. В течение года мы фиксировали эти следы в тетрадях, голосовых сообщениях и официальных бланках. Текст предлагает читать ошибку не как сбой, а как раннюю форму собственного языка.",
    },
    projectId: "segunda-lengua",
  },
  {
    id: "materiales-de-frontera",
    title: {
      es: "Materiales de frontera",
      en: "Border Materials",
      ru: "Пограничные материалы",
    },
    year: 2024,
    author: "Pavel Arsen",
    kind: { es: "Texto de artista", en: "Artist text", ru: "Текст художника" },
    cover: work3,
    excerpt: {
      es: "Notas sobre cerámica, peso y el equipaje permitido.",
      en: "Notes on ceramics, weight and permitted luggage.",
      ru: "Заметки о керамике, весе и разрешённом багаже.",
    },
    body: {
      es: "Trabajo con cerámica porque es el material que peor viaja. Cada pieza está pensada desde su posible rotura: el embalaje forma parte de la obra, y la lista de embalaje forma parte del archivo. Este texto recorre cinco piezas producidas entre Minsk y Buenos Aires.",
      en: "I work with ceramics because it is the material that travels worst. Every piece is conceived from its possible breakage: the packing is part of the work, and the packing list is part of the archive. This text follows five pieces produced between Minsk and Buenos Aires.",
      ru: "Я работаю с керамикой, потому что это материал, который хуже всего переносит дорогу. Каждая вещь придумана исходя из возможной поломки: упаковка — часть работы, а упаковочный лист — часть архива. Текст прослеживает пять вещей, сделанных между Минском и Буэнос-Айресом.",
    },
    projectId: "arteba-2025",
  },
  {
    id: "archivo-que-no-cierra",
    title: {
      es: "Un archivo que no cierra",
      en: "An Archive That Does Not Close",
      ru: "Архив, который не закрывается",
    },
    year: 2026,
    author: "Nadia Verjova",
    kind: { es: "Ensayo", en: "Essay", ru: "Эссе" },
    cover: work1,
    excerpt: {
      es: "Contra la versión única de los hechos.",
      en: "Against a single version of events.",
      ru: "Против единственной версии событий.",
    },
    body: {
      es: "Un archivo institucional supone que existe una versión correcta. Archivo Provisorio parte de la hipótesis contraria: cada documento admite dos o tres relatos incompatibles y todos permanecen. El ensayo describe el sistema de catalogación desarrollado por el fondo y sus consecuencias prácticas.",
      en: "An institutional archive assumes a correct version exists. Archivo Provisorio starts from the opposite hypothesis: each document admits two or three incompatible accounts and all of them remain. The essay describes the cataloguing system developed by the foundation and its practical consequences.",
      ru: "Институциональный архив предполагает, что существует верная версия. Archivo Provisorio исходит из обратной гипотезы: каждый документ допускает две-три несовместимые версии, и все они сохраняются. Эссе описывает систему каталогизации фонда и её практические следствия.",
    },
    projectId: "archivo-provisorio",
  },
];

export const press: PressItem[] = [
  {
    id: "clarin-bruma-cero",
    title: {
      es: "Una fundación que hace del desconcierto un método",
      en: "A foundation that turns bewilderment into a method",
      ru: "Фонд, превративший растерянность в метод",
    },
    outlet: "Clarín Cultura",
    date: "2026-03-20",
    url: "https://example.org/press/clarin",
    image: work1,
    projectId: "bruma-cero",
  },
  {
    id: "artishock-arteba",
    title: {
      es: "Bruma en arteBA: la sala de espera como obra",
      en: "Bruma at arteBA: the waiting room as artwork",
      ru: "Bruma на arteBA: зал ожидания как произведение",
    },
    outlet: "Artishock",
    date: "2025-09-09",
    url: "https://example.org/press/artishock",
    image: work3,
    projectId: "arteba-2025",
  },
  {
    id: "eflux-segunda-lengua",
    title: {
      es: "Segunda Lengua: investigar desde el error",
      en: "Segunda Lengua: researching through error",
      ru: "Segunda Lengua: исследование через ошибку",
    },
    outlet: "e-flux Announcements",
    date: "2025-05-14",
    url: "https://example.org/press/eflux",
    image: work4,
    projectId: "segunda-lengua",
  },
  {
    id: "lanacion-umbral",
    title: {
      es: "Cinco horas sin cámaras en Recoleta",
      en: "Five hours without cameras at Recoleta",
      ru: "Пять часов без камер в Реколете",
    },
    outlet: "La Nación",
    date: "2024-10-22",
    url: "https://example.org/press/lanacion",
    image: work2,
    projectId: "umbral-nocturno",
  },
  {
    id: "colta-casa-comun",
    title: {
      es: "Rosario: trabajar sin exhibición final",
      en: "Rosario: working without a final exhibition",
      ru: "Росарио: работа без финальной выставки",
    },
    outlet: "Colta",
    date: "2024-08-30",
    url: "https://example.org/press/colta",
    image: work1,
    projectId: "casa-comun",
  },
];

export const getArtist = (id: string) => artists.find((a) => a.id === id);
export const getProject = (id: string) => projects.find((p) => p.id === id);
export const getPublication = (id: string) => publications.find((p) => p.id === id);
export const worksByArtist = (artistId: string) => worksList.filter((w) => w.artistId === artistId);
export const worksByIds = (ids: string[]) => ids.map((id) => worksList.find((w) => w.id === id)).filter(Boolean) as Work[];
export const projectsByArtist = (artistId: string) => projects.filter((p) => p.artistIds.includes(artistId));
export const pressByProject = (projectId: string) => press.filter((p) => p.projectId === projectId);
export const publicationsByProject = (projectId: string) => publications.filter((p) => p.projectId === projectId);
