export const LANGS = ["es", "en", "ru"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "es";

export type LocalizedText = Record<Lang, string>;

export function isLang(value: string | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

/** Fallback to Spanish when a translation is missing. */
export function t(text: LocalizedText | undefined, lang: Lang): string {
  if (!text) return "";
  return text[lang] || text[DEFAULT_LANG] || "";
}

export const LOCALE_TAG: Record<Lang, string> = {
  es: "es-AR",
  en: "en",
  ru: "ru",
};

type Dict = {
  nav: { about: string; artists: string; projects: string; publications: string; press: string; contact: string };
  common: {
    viewAllArtists: string;
    getInTouch: string;
    all: string;
    year: string;
    type: string;
    location: string;
    back: string;
    previous: string;
    next: string;
    menu: string;
    close: string;
    language: string;
    readMore: string;
    learnMore: string;
    externalLink: string;
    downloadCatalog: string;
    relatedProjects: string;
    selectedWorks: string;
    bio: string;
    statement: string;
    links: string;
    participants: string;
    curator: string;
    dates: string;
    pressAndPublications: string;
    visualArchive: string;
    filters: string;
    noResults: string;
  };
  projectTypes: Record<"exhibition" | "feria" | "event" | "research" | "collaboration", string>;
  contact: {
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    send: string;
    sending: string;
    success: string;
    errorRequired: string;
    errorEmail: string;
    collaboration: string;
  };
  meta: Record<
    "home" | "about" | "artists" | "projects" | "publications" | "press" | "contact",
    { title: string; description: string }
  >;
};

export const dict: Record<Lang, Dict> = {
  es: {
    nav: {
      about: "Sobre",
      artists: "Artistas",
      projects: "Proyectos",
      publications: "Publicaciones",
      press: "Prensa",
      contact: "Contacto",
    },
    common: {
      viewAllArtists: "Ver todos los artistas",
      getInTouch: "Escribinos",
      all: "Todos",
      year: "Año",
      type: "Tipo",
      location: "Lugar",
      back: "Volver",
      previous: "Anterior",
      next: "Siguiente",
      menu: "Menú",
      close: "Cerrar",
      language: "Idioma",
      readMore: "Leer más",
      learnMore: "Conocer más",
      externalLink: "Ver publicación",
      downloadCatalog: "Descargar catálogo",
      relatedProjects: "Proyectos relacionados",
      selectedWorks: "Obras seleccionadas",
      bio: "Biografía",
      statement: "Statement",
      links: "Enlaces",
      participants: "Participantes",
      curator: "Curaduría",
      dates: "Fechas",
      pressAndPublications: "Prensa y publicaciones",
      visualArchive: "Archivo visual",
      filters: "Filtros",
      noResults: "No hay resultados.",
    },
    projectTypes: {
      exhibition: "Exhibición",
      feria: "Feria",
      event: "Evento",
      research: "Investigación",
      collaboration: "Colaboración",
    },
    contact: {
      formName: "Nombre",
      formEmail: "Email",
      formSubject: "Asunto",
      formMessage: "Mensaje",
      send: "Enviar",
      sending: "Enviando…",
      success: "Gracias por su mensaje.",
      errorRequired: "Este campo es obligatorio.",
      errorEmail: "Ingresá un email válido.",
      collaboration:
        "Trabajamos con instituciones, curadores, editoriales y espacios independientes. Escribinos para proponer una colaboración, una residencia o un proyecto editorial.",
    },
    meta: {
      home: {
        title: "Foundation Bruma — arte contemporáneo y archivo vivo",
        description:
          "Bruma es una fundación de apoyo a artistas para quienes Argentina se ha convertido en un nuevo hogar y un espacio de transformación, creada por un colectivo de siete artistas eslavos.",
      },
      about: {
        title: "Sobre la fundación — Foundation Bruma",
        description:
          "Bruma es una fundación de apoyo a artistas para quienes Argentina se ha convertido en un nuevo hogar y un espacio de transformación.",
      },
      artists: {
        title: "Artistas — Foundation Bruma",
        description: "Archivo de artistas de Foundation Bruma: prácticas, ciudades y obras seleccionadas.",
      },
      projects: {
        title: "Proyectos — Foundation Bruma",
        description: "Exhibiciones, ferias, eventos, investigaciones y colaboraciones de Foundation Bruma.",
      },
      publications: {
        title: "Publicaciones — Foundation Bruma",
        description: "Textos, ensayos e investigaciones editados por Foundation Bruma.",
      },
      press: {
        title: "Prensa — Foundation Bruma",
        description: "Archivo de publicaciones externas sobre Foundation Bruma y sus artistas.",
      },
      contact: {
        title: "Contacto — Foundation Bruma",
        description: "Escribinos: colaboraciones, prensa, residencias y proyectos editoriales.",
      },
    },
  },
  en: {
    nav: {
      about: "About",
      artists: "Artists",
      projects: "Projects",
      publications: "Publications",
      press: "Press",
      contact: "Contact",
    },
    common: {
      viewAllArtists: "View all artists",
      getInTouch: "Get in touch",
      all: "All",
      year: "Year",
      type: "Type",
      location: "Location",
      back: "Back",
      previous: "Previous",
      next: "Next",
      menu: "Menu",
      close: "Close",
      language: "Language",
      readMore: "Read more",
      learnMore: "Learn more",
      externalLink: "Read the article",
      downloadCatalog: "Download catalogue",
      relatedProjects: "Related projects",
      selectedWorks: "Selected works",
      bio: "Bio",
      statement: "Statement",
      links: "Links",
      participants: "Participants",
      curator: "Curator",
      dates: "Dates",
      pressAndPublications: "Press and publications",
      visualArchive: "Visual archive",
      filters: "Filters",
      noResults: "No results.",
    },
    projectTypes: {
      exhibition: "Exhibition",
      feria: "Feria",
      event: "Event",
      research: "Research",
      collaboration: "Collaboration",
    },
    contact: {
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      send: "Send",
      sending: "Sending…",
      success: "Thank you for your message.",
      errorRequired: "This field is required.",
      errorEmail: "Please enter a valid email.",
      collaboration:
        "We work with institutions, curators, publishers and independent spaces. Write to us to propose a collaboration, a residency or an editorial project.",
    },
    meta: {
      home: {
        title: "Foundation Bruma — contemporary art and living archive",
        description:
          "Bruma is a foundation supporting artists for whom Argentina has become a new home and a space of transformation, created by a collective of seven artists from Eastern Europe.",
      },
      about: {
        title: "About — Foundation Bruma",
        description:
          "Bruma is a foundation supporting artists for whom Argentina has become a new home and a space of transformation.",
      },
      artists: {
        title: "Artists — Foundation Bruma",
        description: "The Foundation Bruma artist archive: practices, cities and selected works.",
      },
      projects: {
        title: "Projects — Foundation Bruma",
        description: "Exhibitions, ferias, events, research and collaborations by Foundation Bruma.",
      },
      publications: {
        title: "Publications — Foundation Bruma",
        description: "Texts, essays and research published by Foundation Bruma.",
      },
      press: {
        title: "Press — Foundation Bruma",
        description: "Archive of external coverage of Foundation Bruma and its artists.",
      },
      contact: {
        title: "Contact — Foundation Bruma",
        description: "Get in touch: collaborations, press, residencies and editorial projects.",
      },
    },
  },
  ru: {
    nav: {
      about: "О фонде",
      artists: "Художники",
      projects: "Проекты",
      publications: "Публикации",
      press: "Пресса",
      contact: "Контакты",
    },
    common: {
      viewAllArtists: "Все художники",
      getInTouch: "Написать нам",
      all: "Все",
      year: "Год",
      type: "Тип",
      location: "Место",
      back: "Назад",
      previous: "Предыдущий",
      next: "Следующий",
      menu: "Меню",
      close: "Закрыть",
      language: "Язык",
      readMore: "Читать",
      learnMore: "Узнать подробнее",
      externalLink: "Читать материал",
      downloadCatalog: "Скачать каталог",
      relatedProjects: "Связанные проекты",
      selectedWorks: "Избранные работы",
      bio: "Биография",
      statement: "Statement",
      links: "Ссылки",
      participants: "Участники",
      curator: "Куратор",
      dates: "Даты",
      pressAndPublications: "Пресса и публикации",
      visualArchive: "Визуальный архив",
      filters: "Фильтры",
      noResults: "Ничего не найдено.",
    },
    projectTypes: {
      exhibition: "Выставка",
      feria: "Ярмарка",
      event: "Событие",
      research: "Исследование",
      collaboration: "Коллаборация",
    },
    contact: {
      formName: "Имя",
      formEmail: "Email",
      formSubject: "Тема",
      formMessage: "Сообщение",
      send: "Отправить",
      sending: "Отправка…",
      success: "Спасибо за ваше сообщение.",
      errorRequired: "Обязательное поле.",
      errorEmail: "Введите корректный email.",
      collaboration:
        "Мы работаем с институциями, кураторами, издательствами и независимыми площадками. Напишите, если хотите предложить коллаборацию, резиденцию или издательский проект.",
    },
    meta: {
      home: {
        title: "Foundation Bruma — современное искусство и живой архив",
        description:
          "Bruma — фонд поддержки художников, для которых Аргентина стала новым домом и пространством трансформации, созданный объединением из семи художников из Восточной Европы.",
      },
      about: {
        title: "О фонде — Foundation Bruma",
        description:
          "Bruma — фонд поддержки художников, для которых Аргентина стала новым домом и пространством трансформации.",
      },
      artists: {
        title: "Художники — Foundation Bruma",
        description: "Архив художников Foundation Bruma: практики, города, избранные работы.",
      },
      projects: {
        title: "Проекты — Foundation Bruma",
        description: "Выставки, ярмарки, события, исследования и коллаборации Foundation Bruma.",
      },
      publications: {
        title: "Публикации — Foundation Bruma",
        description: "Тексты, эссе и исследования, издаваемые Foundation Bruma.",
      },
      press: {
        title: "Пресса — Foundation Bruma",
        description: "Архив внешних публикаций о Foundation Bruma и его художниках.",
      },
      contact: {
        title: "Контакты — Foundation Bruma",
        description: "Напишите нам: коллаборации, пресса, резиденции и издательские проекты.",
      },
    },
  },
};

export const CONTACT_INFO = {
  email: "brumafundacion@gmail.com",
  instagram: "@bruma_fundacion",
  instagramUrl: "https://www.instagram.com/bruma_fundacion/",
  location: {
    es: "Buenos Aires, Argentina",
    en: "Buenos Aires, Argentina",
    ru: "Буэнос-Айрес, Аргентина",
  } satisfies LocalizedText,
};
