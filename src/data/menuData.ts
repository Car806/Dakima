import { MenuCategory, OmakaseOption, QuickFilterId } from '../types/menu';

export const WHATSAPP_RESERVE_URL =
  'https://wa.me/523331132123?text=Hola%20DAKIMA,%20me%20gustar%C3%ADa%20reservar%20una%20mesa.';

export const PHONE_HREF = 'tel:+523331132123';
export const PHONE_DISPLAY = '33 3113 2123';
export const INSTAGRAM_HANDLE = '@dakima_nigiris';
export const INSTAGRAM_URL = 'https://instagram.com/dakima_nigiris';
export const ADDRESS_TEXT = 'Providencia #2802, Guadalajara, Jalisco.';
export const HOURS_PRIMARY = 'Lunes a Sábado: 1:30 PM a 11:00 PM';
export const HOURS_SUNDAY = 'Domingo: 1:30 PM a 10:00 PM';
export const LEGAL_RAW_NOTICE =
  '*EL CONSUMO DE ALIMENTOS CRUDOS ES RESPONSABILIDAD DE QUIEN LO CONSUMA.';

export const QUICK_FILTERS: { id: QuickFilterId; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'bluefin', label: 'Atún Bluefin' },
  { id: 'salmon', label: 'Salmón' },
  { id: 'hamachi', label: 'Hamachi' },
  { id: 'tempura', label: 'Opciones Tempura' },
];

export const OMAKASE_DATA = {
  bannerImage: '/src/assets/images/omakase_hero_banner_1795047711409.jpg',
  bannerAlt: 'Barra de Omakase DAKIMA Nigiris con nigiri de otoro sobre cerámica negra y madera hinoki',
  japaneseTitle: '(お任せ)',
  concept:
    'Palabra japonesa que significa "confiar" o "ponerse en las manos del chef", dejar que el chef guíe la comida.',
  sequence: [
    'ENSALADA DEL DÍA',
    'ENTRADA',
    'SASHIMI',
    'NIGIRIS',
    'TEMAKI',
    'SOPA',
    'POSTRE',
  ],
  options: [
    {
      id: 'omakase-corto',
      name: 'OMAKASE CORTO',
      price: 1200,
      timesLabel: '8 TIEMPOS',
      subtitle: '8 TIEMPOS + BEBIDA',
    },
    {
      id: 'omakase-largo',
      name: 'OMAKASE LARGO',
      price: 1600,
      timesLabel: '15 TIEMPOS',
      subtitle: '15 TIEMPOS + BEBIDA',
    },
  ] as OmakaseOption[],
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'entradas',
    number: '01',
    title: 'ENTRADAS',
    japaneseLabel: '前菜',
    bannerImage: '/src/assets/images/cat_entradas_banner_1795047711875.jpg',
    bannerAlt: 'Gyozas doradas, shishito peppers con katsuobushi y ramen tonkotsu sobre pizarra negra',
    layout: 'list',
    items: [
      {
        id: 'sopa-miso',
        name: 'SOPA MISO',
        price: 90,
        description: 'Base de miso rojo, fideos harusame, tofu suave, alga wakame y cebollín.',
        tags: [],
      },
      {
        id: 'ensalada-temporada',
        name: 'ENSALADA DE TEMPORADA',
        price: 100,
        description:
          'Mix de lechugas, jitomate cherry, pepino encurtido, aguacate aliñada con vinagreta de la casa. Coronada con lajas de atún y ajonjolí.',
        tags: ['bluefin'],
      },
      {
        id: 'oshizushi',
        name: 'OSHIZUSHI',
        price: 115,
        description:
          'Cuadritos de arroz crujiente. Coronados con atún o salmón spicy. Hongo shiitake y cebollín.',
        choices: ['Atún', 'Salmón'],
        tags: ['bluefin', 'salmon'],
      },
      {
        id: 'ramen-tonkotsu',
        name: 'RAMEN TONKOTSU',
        price: 180,
        description:
          'Fondo de la casa. Panceta de cerdo, huevo. Topping de alga wakame, hiyashi, naruto y nori troceada.',
        tags: [],
      },
      {
        id: 'edamames-spicy',
        name: 'EDAMAMES SPICY',
        price: 115,
        description: 'Salteados en mantequilla con nuestra receta spicy.',
        tags: [],
      },
      {
        id: 'edamames',
        name: 'EDAMAMES',
        price: 105,
        description: 'Edamames al vapor.',
        tags: [],
      },
      {
        id: 'gyozas',
        name: 'GYOZAS',
        price: 115,
        description:
          'Rellenas de salmón preparado con un toque umami. Acompañadas de nikiri. (Elegir: Salmón o Cerdo).',
        choices: ['Salmón', 'Cerdo'],
        tags: ['salmon'],
      },
      {
        id: 'bao',
        name: 'BAO',
        description: 'Esponjoso pan al vapor, con pepinillo encurtido, salsa de anguila y cebollín.',
        variants: [
          { id: 'cerdo', label: 'Cerdo', price: 100 },
          { id: 'pato', label: 'Pato', price: 110 },
          { id: 'jaiba', label: 'Jaiba', price: 115 },
        ],
        tags: [],
      },
      {
        id: 'shishito-pepper',
        name: 'SHISHITO PEPPER',
        price: 120,
        description: 'Salteados en mantequilla ajo. Con un toque de ponzu, ajonjolí y bonito flakes.',
        tags: [],
      },
      {
        id: 'ensalada-algas',
        name: 'ENSALADA ALGAS',
        price: 90,
        description: 'Ensalada tradicional de algas selectas. Hiyashi, wakame, kizame nori y norico.',
        tags: [],
      },
      {
        id: 'ostion',
        name: 'OSTIÓN',
        price: 135,
        description:
          'Ostión aliñado con nikiri. Coronado con ikura, tobiko, atún graso y huevo de codorniz.',
        tags: ['bluefin'],
      },
    ],
  },
  {
    id: 'nigiris',
    number: '02',
    title: 'NIGIRIS',
    japaneseLabel: '握り',
    bannerImage: '/src/assets/images/cat_nigiris_banner_1795047711826.jpg',
    bannerAlt: 'Selección de nigiris de akami, otoro, erizo uni y unagui sobre tabla de madera hinoki',
    chefNote: 'BASE ARROZ 20 GRAMOS APROX. NUESTRO ATÚN: ATÚN ALETA AZUL CALIDAD BLUEFINA.',
    layout: 'nigiri-grid',
    items: [
      { id: 'nigiri-akami', name: 'AKAMI', price: 90, tags: ['bluefin'] },
      { id: 'nigiri-chu-toro', name: 'CHU-TORO', price: 100, tags: ['bluefin'] },
      { id: 'nigiri-o-toro', name: 'O-TORO', price: 120, tags: ['bluefin'] },
      { id: 'nigiri-kama-toro', name: 'KAMA-TORO', price: 155, tags: ['bluefin'] },
      { id: 'nigiri-hono-niku', name: 'HONO NIKU', price: 110, tags: ['bluefin'] },
      { id: 'nigiri-noten', name: 'NOTEN', price: 110, tags: ['bluefin'] },
      { id: 'nigiri-hamachi', name: 'HAMACHI', price: 90, tags: ['hamachi'] },
      { id: 'nigiri-salmon', name: 'SALMÓN', price: 85, tags: ['salmon'] },
      { id: 'nigiri-salmon-nz', name: 'SALMÓN NZ', price: 120, tags: ['salmon'] },
      { id: 'nigiri-robalo', name: 'ROBALO', price: 70, tags: [] },
      { id: 'nigiri-hotate', name: 'HOTATE', price: 80, tags: [] },
      { id: 'nigiri-ikura', name: 'IKURA', price: 120, tags: ['salmon'] },
      { id: 'nigiri-unagui', name: 'UNAGUI', price: 100, tags: [] },
      { id: 'nigiri-unagui-especial', name: 'UNAGUI ESPECIAL', price: 155, tags: [] },
      { id: 'nigiri-erizo', name: 'ERIZO', price: 205, tags: [] },
      { id: 'nigiri-kampachi', name: 'KAMPACHI', price: 80, tags: [] },
      { id: 'nigiri-erizo-japones', name: 'ERIZO JAPONÉS', price: 305, tags: [] },
      { id: 'nigiri-pulpa-thia', name: 'PULPA THIA', price: 130, tags: [] },
      { id: 'nigiri-black-cod', name: 'BLACK COD', price: 100, tags: [] },
    ],
  },
  {
    id: 'makis',
    number: '03',
    title: 'MAKIS',
    japaneseLabel: '巻き物',
    bannerImage: '/src/assets/images/cat_makis_banner_1795047712431.jpg',
    bannerAlt: 'Maki especial cubierto de salmón flameado e ikura sobre cerámica artesanal negra',
    layout: 'list',
    items: [
      {
        id: 'hosomaki',
        name: 'HOSOMAKI',
        price: 150,
        description: 'Rollo delgado. Alga por fuera, arroz, wasabi y proteína: Atún, salmón o hamachi.',
        choices: ['Atún', 'Salmón', 'Hamachi'],
        tags: ['bluefin', 'salmon', 'hamachi'],
      },
      {
        id: 'spicy-maki',
        name: 'SPICY MAKI',
        price: 185,
        description:
          'Arroz por fuera relleno de pepino, aguacate, espárrago y proteína con aderezo spicy. Atún, salmón o hamachi.',
        choices: ['Atún', 'Salmón', 'Hamachi'],
        tags: ['bluefin', 'salmon', 'hamachi'],
      },
      {
        id: 'softshell-maki',
        name: 'SOFTSHELL MAKI',
        price: 250,
        description:
          'Arroz por fuera relleno de jaiba de concha suave tempura, espárrago. Coronado con salmón spicy, cebollín y salsa de anguila.',
        tags: ['tempura', 'salmon'],
      },
      {
        id: 'matsumaki',
        name: 'MATSUMAKI',
        price: 260,
        description:
          'Arroz por fuera relleno de camarón tempura coronado con atún spicy y salsa de anguila.',
        tags: ['tempura', 'bluefin'],
      },
      {
        id: 'maki-especial',
        name: 'MAKI ESPECIAL',
        price: 290,
        description:
          'Arroz por fuera relleno de jaiba coronado con salmón flameado con aceite de ajonjolí, ikura y cebollín.',
        tags: ['salmon'],
      },
      {
        id: 'unagui-maki',
        name: 'UNAGUI MAKI',
        price: 285,
        description:
          'Kanikama y pepino al centro, cubierto de anguila y aguacate. Coronado con salsa de anguila y ajonjolí.',
        tags: [],
      },
      {
        id: 'maguro-especial',
        name: 'MAGURO ESPECIAL',
        price: 285,
        description:
          'Kani y pepino al centro. Cubierto de Akami y aguacate. Coronado con aderezo spicy, cebollín y ajonjolí.',
        tags: ['bluefin'],
      },
      {
        id: '3-atunes',
        name: '3 ATUNES',
        price: 280,
        description:
          'Futomaki (rollo gordo). Alga por fuera, relleno de las tres principales partes del atún: Akami, Chutoro y Otoro.',
        tags: ['bluefin'],
      },
      {
        id: 'hamachi-maki',
        name: 'HAMACHI MAKI',
        price: 290,
        description:
          'Arroz por fuera, aguacate, espárrago y pepino al centro. Forrado en hamachi, coronado con ralladura de limón.',
        tags: ['hamachi'],
      },
    ],
  },
  {
    id: 'temakis',
    number: '04',
    title: 'TEMAKIS',
    japaneseLabel: '手巻き',
    bannerImage: '/src/assets/images/cat_temakis_banner_1795047713008.jpg',
    bannerAlt: 'Temakis de alga nori tostada con tartar de atún Bluefin e ikura sobre madera hinoki',
    layout: 'list',
    items: [
      {
        id: 'spicy-temaki',
        name: 'SPICY TEMAKI',
        price: 130,
        description: 'Alga por fuera, arroz, proteína y aderezo spicy. Atún, Salmón, Hamachi.',
        choices: ['Atún', 'Salmón', 'Hamachi'],
        tags: ['bluefin', 'salmon', 'hamachi'],
      },
      {
        id: 'negi-temaki',
        name: 'NEGI TEMAKI',
        price: 125,
        description: 'Preparación a base de proteína y cebollín. Atún, Salmón, Hamachi.',
        choices: ['Atún', 'Salmón', 'Hamachi'],
        tags: ['bluefin', 'salmon', 'hamachi'],
      },
      {
        id: 'temaki-especial',
        name: 'TEMAKI ESPECIAL',
        price: 150,
        description:
          'Camarón o softshell tempura. Con atún o salmón spicy, cebollín y salsa de anguila.',
        choices: ['Camarón · Atún', 'Camarón · Salmón', 'Softshell · Atún', 'Softshell · Salmón'],
        tags: ['tempura', 'bluefin', 'salmon'],
      },
    ],
  },
  {
    id: 'sashimis',
    number: '05',
    title: 'SASHIMIS',
    japaneseLabel: '刺身',
    bannerImage: '/src/assets/images/cat_sashimis_banner_1795047711270.jpg',
    bannerAlt: 'Sashimi moriwase de chutoro, salmón y hamachi sobre hielo frappé y wasabi fresco',
    chefNote:
      'TODOS NUESTROS SASHIMIS SE ACOMPAÑAN DE WASABI Y JENGIBRE. DECORADOS CON ZUMA DE VEGETALES.',
    layout: 'list',
    items: [
      {
        id: 'sashimi-maguro',
        name: 'MAGURO',
        price: 360,
        description: '3 partes principales del atún: Akami, Chutoro y Otoro.',
        tags: ['bluefin'],
      },
      {
        id: 'sashimi-salmon-canadiense',
        name: 'SALMÓN CANADIENSE',
        price: 280,
        tags: ['salmon'],
      },
      {
        id: 'sashimi-salmon-nz',
        name: 'SALMÓN NUEVA ZELANDA',
        price: 300,
        tags: ['salmon'],
      },
      {
        id: 'sashimi-hamachi',
        name: 'HAMACHI',
        price: 300,
        tags: ['hamachi'],
      },
      {
        id: 'sashimi-pescado-blanco',
        name: 'SASHIMI',
        price: 200,
        description: 'Pescado blanco.',
        tags: [],
      },
      {
        id: 'sashimi-moriwase',
        name: 'MORIWASE',
        price: 350,
        description: 'Atún, Salmón y Hamachi.',
        tags: ['bluefin', 'salmon', 'hamachi'],
      },
      {
        id: 'sashimi-moriwase-especial',
        name: 'MORIWASE ESPECIAL',
        price: 600,
        description: 'Variedad de pescas del día a elección del chef.',
        tags: ['bluefin', 'salmon', 'hamachi'],
      },
    ],
  },
  {
    id: 'donburi',
    number: '06',
    title: 'DONBURI',
    japaneseLabel: '丼物',
    bannerImage: '/src/assets/images/cat_donburi_banner_1795047713577.jpg',
    bannerAlt: 'Cuenco de laca negra con tekkadon de atún fresco, ikura y alga nori',
    layout: 'list',
    items: [
      {
        id: 'spicy-don',
        name: 'SPICY DON',
        price: 310,
        description:
          'Base de arroz (atún, salmón o hamachi) y aderezo spicy. Coronado con alga hiyashi, nori y aguacate.',
        choices: ['Atún', 'Salmón', 'Hamachi'],
        tags: ['bluefin', 'salmon', 'hamachi'],
      },
      {
        id: 'tekkadon',
        name: 'TEKKADON',
        price: 350,
        description: 'Base de arroz con lajas de atún fresco, coronado con hiyashi y nori.',
        tags: ['bluefin'],
      },
      {
        id: 'double-crab-don',
        name: 'DOUBLE CRAB DON',
        price: 330,
        description:
          'Base de arroz y kanikama, aderezo spicy con jaiba tempura. Coronado con wakame y hiyashi.',
        tags: ['tempura'],
      },
      {
        id: 'shirashi-sushi-don',
        name: 'SHIRASHI SUSHI DON',
        price: 400,
        description: 'Base de arroz. 6 pescas del día a elección del chef. Coronado con ikura y huevo.',
        tags: ['bluefin', 'salmon', 'hamachi'],
      },
    ],
  },
  {
    id: 'bebidas',
    number: '07',
    title: 'BEBIDAS',
    japaneseLabel: 'お飲み物',
    bannerImage: '/src/assets/images/cat_bebidas_banner_1795047713756.jpg',
    bannerAlt: 'Tetera japonesa tetsubin sirviendo té oolong junto a cerveza japonesa artesanal',
    layout: 'beverages',
    items: [
      // Cerveza Nacional
      { id: 'beb-miller', name: 'Miller', price: 60, subGroup: 'Cerveza Nacional', tags: [] },
      { id: 'beb-ultra', name: 'Ultra', price: 60, subGroup: 'Cerveza Nacional', tags: [] },
      { id: 'beb-heineken', name: 'Heineken', price: 60, subGroup: 'Cerveza Nacional', tags: [] },
      { id: 'beb-corona', name: 'Corona', price: 60, subGroup: 'Cerveza Nacional', tags: [] },
      { id: 'beb-victoria', name: 'Victoria', price: 60, subGroup: 'Cerveza Nacional', tags: [] },
      { id: 'beb-pacifico', name: 'Pacífico', price: 60, subGroup: 'Cerveza Nacional', tags: [] },
      {
        id: 'beb-modelo-especial',
        name: 'Modelo Especial',
        price: 70,
        subGroup: 'Cerveza Nacional',
        tags: [],
      },
      {
        id: 'beb-negra-modelo',
        name: 'Negra Modelo',
        price: 70,
        subGroup: 'Cerveza Nacional',
        tags: [],
      },
      // Cerveza Importada
      { id: 'beb-sapporo', name: 'Sapporo', price: 130, subGroup: 'Cerveza Importada', tags: [] },
      { id: 'beb-asahi', name: 'Asahi', price: 100, subGroup: 'Cerveza Importada', tags: [] },
      { id: 'beb-orion', name: 'Orion', price: 185, subGroup: 'Cerveza Importada', tags: [] },
      {
        id: 'beb-kirin-ichiban',
        name: 'Kirin Ichiban',
        price: 100,
        subGroup: 'Cerveza Importada',
        tags: [],
      },
      // Tés (200 ml)
      { id: 'beb-te-verde', name: 'Té Verde', price: 75, subGroup: 'Tés (200 ml)', tags: [] },
      { id: 'beb-te-jazmin', name: 'Té Jazmín', price: 75, subGroup: 'Tés (200 ml)', tags: [] },
      { id: 'beb-te-oolong', name: 'Té Oolong', price: 75, subGroup: 'Tés (200 ml)', tags: [] },
      // Sin Alcohol
      { id: 'beb-jaztea', name: 'Jaztea', price: 45, subGroup: 'Sin Alcohol', tags: [] },
      { id: 'beb-te-frio-casa', name: 'Té Frío Casa', price: 45, subGroup: 'Sin Alcohol', tags: [] },
      {
        id: 'beb-limonada-naranjada',
        name: 'Limonada / Naranjada',
        price: 45,
        subGroup: 'Sin Alcohol',
        choices: ['Limonada', 'Naranjada'],
        tags: [],
      },
      { id: 'beb-calpico', name: 'Calpico', price: 45, subGroup: 'Sin Alcohol', tags: [] },
      { id: 'beb-refresco', name: 'Refresco', price: 45, subGroup: 'Sin Alcohol', tags: [] },
      {
        id: 'beb-agua-embotellada',
        name: 'Agua Embotellada',
        price: 40,
        subGroup: 'Sin Alcohol',
        tags: [],
      },
      {
        id: 'beb-agua-mineral-ch',
        name: 'Agua Mineral Ch',
        price: 45,
        subGroup: 'Sin Alcohol',
        tags: [],
      },
      {
        id: 'beb-agua-mineral-gde',
        name: 'Agua Mineral Gde',
        price: 85,
        subGroup: 'Sin Alcohol',
        tags: [],
      },
      { id: 'beb-cafe', name: 'Café', price: 55, subGroup: 'Sin Alcohol', tags: [] },
    ],
  },
  {
    id: 'postres',
    number: '08',
    title: 'POSTRES',
    japaneseLabel: '甘味',
    bannerImage: '/src/assets/images/cat_postres_banner_1795047714029.jpg',
    bannerAlt: 'Mochi de matcha y ajonjolí negro con cheesecake japonés y helado frito sobre cerámica oscura',
    layout: 'list',
    items: [
      { id: 'postre-helado-frito', name: 'HELADO FRITO', price: 115, tags: [] },
      { id: 'postre-cheesecake', name: 'CHEESECAKE', price: 115, tags: [] },
      { id: 'postre-mochi', name: 'MOCHI', price: 75, tags: [] },
      { id: 'postre-extra-helado', name: 'EXTRA HELADO', price: 70, tags: [] },
    ],
  },
];
