import { DataItem } from "./types";

export const mockData: DataItem[] = [
  {
    id: 0,
    title: "Наука",
    dateFrom: "2015",
    dateTill: "2022",
    content: [
      {
        date: "2015",
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        date: "2016",
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        date: "2017",
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        date: "2019",
        description:
          "10 апреля — впервые опубликовано изображение черной дыры в центре галактики M87, сделанное с помощью телескопа Event Horizon Telescope",
      },
      {
        date: "2022",
        description:
          "NASA успешно завершило миссию DART, столкнув космический аппарат с астероидом Диморф для проверки технологии защиты Земли от потенциально опасных астероидов",
      },
    ],
  },
  {
    id: 1,
    title: "Кино",
    dateFrom: "1987",
    dateTill: "1997",
    content: [
      {
        date: "1987",
        description:
          "Вышел культовый фильм «Хищник» с Арнольдом Шварценеггером в главной роли.",
      },
      {
        date: "1988",
        description:
          "Премьера фильма «Кто подставил кролика Роджера», совмещающего анимацию и реальных актеров.",
      },
      {
        date: "1989",
        description:
          "Выход фильма «Назад в будущее 2», продолжения популярного научно-фантастического фильма.",
      },
      {
        date: "1990",
        description:
          "Выпуск фильма «Один дома», ставшего одним из самых успешных рождественских фильмов.",
      },
    ],
  },
  {
    id: 2,
    title: "Литература",
    dateFrom: "1975",
    dateTill: "1982",
    content: [
      {
        date: "1975",
        description:
          "Публикация романа «Шалтай-Болтай» Кьюберта Фридмана, сатиры на современную политику и массовую культуру.",
      },
      {
        date: "1976",
        description:
          "Выход романа Стивена Кинга «Сияние», ставшего классикой в жанре хоррор и психологического триллера.",
      },
      {
        date: "1977",
        description:
          "Публикация романа «Равелштейн» Сола Беллоу, за который он получил Нобелевскую премию по литературе.",
      },
      {
        date: "1979",
        description:
          "Издание книги Дугласа Адамса «Автостопом по Галактике», ставшей культовой в жанре научной фантастики и комедии.",
      },
      {
        date: "1982",
        description:
          "Выход романа Уильяма Гибсона «Нейромант», который считается основополагающим произведением в жанре киберпанк.",
      },
    ],
  },
];
