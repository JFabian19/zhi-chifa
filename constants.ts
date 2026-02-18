import { MenuData } from './types';

export const MENU_DATA: MenuData = {
  "negocio": {
    "nombre": "ZHI CHIFA ORIENTAL",
    "logo_text": "ZHI",
    "identidad": "Chifa Oriental"
  },
  "menu": [
    {
      "categoria": "Sopas (Soups)",
      "items": [
        { "nombre": "Sopa wantan especial", "precio": 15.00, "descripcion": "Caldo sustancioso con wantanes rellenos, carnes y verduras selectas." },
        { "nombre": "Sopa de casa", "precio": 18.00, "descripcion": "Sopa tradicional de la casa con una mezcla secreta de ingredientes orientales." },
        { "nombre": "Sopa sahofan especial", "precio": 18.00, "descripcion": "Sopa con fideos de arroz anchos (sahofan), carnes y verduras." },
        { "nombre": "Sopa de pollo con verduras", "precio": 14.00, "descripcion": "Sopa ligera de pollo fresco con variedad de verduras de temporada." },
        { "nombre": "Sopa siucau", "precio": 15.00, "descripcion": "Delicada sopa con dumplings de siu cau, verduras y caldo claro." },
        { "nombre": "Sopa de pollo con fideos chino", "precio": 16.00, "descripcion": "Sopa reconfortante de pollo con fideos chinos tradicionales." },
        { "nombre": "Sopa ramen", "precio": 23.00, "descripcion": "Sopa estilo oriental con fideos ramen, huevo, carnes y verduras." },
        { "nombre": "Sopa de esparrago con pollo", "precio": 18.00, "descripcion": "Crema suave de espárragos con trozos de pollo y clara de huevo." },
        { "nombre": "Sopa de pollo con hongo chino y kion", "precio": 17.00, "descripcion": "Sopa aromática de pollo con hongos chinos y un toque de kion." },
        { "nombre": "Sopa fuchifu", "precio": 16.00, "descripcion": "Sopa ligera con huevo batido, verduras picadas y pollo." },
        { "nombre": "Sopa pac pow", "precio": 16.00, "descripcion": "Sopa picante y ácida con verduras, huevo y pollo." },
        { "nombre": "Sopa de verdura especial", "precio": 22.00, "descripcion": "Selección especial de verduras frescas en un caldo ligero." },
        { "nombre": "Sopa wantan especial familiar", "precio": "00.00", "descripcion": "Porción familiar de nuestra sopa wantan especial." },
        { "nombre": "Sopa de la casa familiar", "precio": "00.00", "descripcion": "Porción familiar de la sopa de la casa." },
        { "nombre": "Sopa de pollo con verduras familiar", "precio": "00.00", "descripcion": "Porción familiar de la sopa de pollo con verduras." }
      ]
    },
    {
      "categoria": "Vegetariano (Vegetarian)",
      "items": [
        { "nombre": "Chaufa de verduras", "precio": 22.00, "descripcion": "Arroz frito al wok con una variedad de verduras frescas." },
        { "nombre": "Chaufa de champiñones", "precio": 20.00, "descripcion": "Arroz frito al wok con champiñones frescos y huevo." },
        { "nombre": "Saltado de verduras", "precio": 28.00, "descripcion": "Verduras de temporada salteadas al wok con salsa de soya." },
        { "nombre": "Fideo chino con verduras (fansy)", "precio": 30.00, "descripcion": "Fideos chinos salteados con verduras frescas estilo fansy." },
        { "nombre": "Tallarines con champiñones", "precio": 30.00, "descripcion": "Tallarines salteados con champiñones y verduras." },
        { "nombre": "Tallarin con tomate", "precio": 30.00, "descripcion": "Tallarines salteados con tomate, cebolla y un toque oriental." },
        { "nombre": "Tortilla de champiñones", "precio": 28.00, "descripcion": "Tortilla de huevo esponjosa con champiñones frescos." },
        { "nombre": "Tortilla de verduras", "precio": 28.00, "descripcion": "Tortilla de huevo con una mezcla de verduras picadas." }
      ]
    },
    {
      "categoria": "Menú 1",
      "descripcion": "Combos personales opción 1",
      "precio_general": 17.00,
      "items": [
        { "nombre": "Chaufa con wantan frito", "precio": 17.00, "descripcion": "Mini chaufa acompañado de wantanes fritos crujientes." },
        { "nombre": "Tallarin con pollo con verduras", "precio": 17.00, "descripcion": "Tallarín saltado con trozos de pollo y verduras frescas." },
        { "nombre": "Combinado (Tallarin con chaufa)", "precio": 17.00, "descripcion": "La mezcla perfecta de arroz chaufa y tallarín saltado." },
        { "nombre": "Combinado con verdura en trozo", "precio": 17.00, "descripcion": "Combinado de chaufa y tallarín con verduras en trozos grandes." },
        { "nombre": "Aeropuerto de pollo", "precio": 17.00, "descripcion": "Salteado de fideos y arroz con trozos de pollo." },
        { "nombre": "Aeropuerto de chancho", "precio": 17.00, "descripcion": "Salteado de fideos y arroz con trozos de chancho asado." },
        { "nombre": "Chijaukay con chaufa", "precio": 17.00, "descripcion": "Pollo chijaukay en salsa de ostión acompañado de chaufa." },
        { "nombre": "Pollo con verduras con chaufa", "precio": 17.00, "descripcion": "Pollo salteado con verduras servido con arroz chaufa." },
        { "nombre": "Chancho con verduras con chaufa", "precio": 17.00, "descripcion": "Chancho asado salteado con verduras y arroz chaufa." },
        { "nombre": "Carne con verduras con chaufa", "precio": 17.00, "descripcion": "Carne de res salteada con verduras y arroz chaufa." },
        { "nombre": "Alitas con verduras con chaufa", "precio": 17.00, "descripcion": "Alitas de pollo con verduras acompañadas de chaufa." },
        { "nombre": "Alitas con tausi con chaufa", "precio": 17.00, "descripcion": "Alitas en salsa de tausi servidas con arroz chaufa." },
        { "nombre": "Pollo con brocoli con chaufa", "precio": 17.00, "descripcion": "Pollo salteado con brócoli fresco y arroz chaufa." },
        { "nombre": "Kamlu wantan con chaufa", "precio": 17.00, "descripcion": "Wantanes, piña, verduras y carnes en salsa agridulce con chaufa." },
        { "nombre": "Pollo con tamarindo con chaufa", "precio": 17.00, "descripcion": "Pollo en salsa de tamarindo dulce acompañado de chaufa." },
        { "nombre": "Chancho con tamarindo con chaufa", "precio": 17.00, "descripcion": "Chancho en salsa de tamarindo dulce con chaufa." },
        { "nombre": "Alitas con tamarindo con chaufa", "precio": 17.00, "descripcion": "Alitas en salsa de tamarindo dulce con chaufa." },
        { "nombre": "Alitas con piña con chaufa", "precio": 17.00, "descripcion": "Alitas con trozos de piña en salsa dulce y chaufa." },
        { "nombre": "Tortilla de pollo con chaufa", "precio": 17.00, "descripcion": "Tortilla de huevo con pollo servida sobre chaufa." },
        { "nombre": "Alitas con brocoli con chaufa", "precio": 17.00, "descripcion": "Alitas salteadas con brócoli y arroz chaufa." },
        { "nombre": "Chancho con brocoli con chaufa", "precio": 17.00, "descripcion": "Chancho asado con brócoli y arroz chaufa." }
      ]
    },
    {
      "categoria": "Menú 2",
      "descripcion": "Combos personales opción 2",
      "precio_general": 18.00,
      "items": [
        { "nombre": "Chicharron de alitas con chaufa", "precio": 18.00, "descripcion": "Alitas de pollo fritas crujientes con chaufa." },
        { "nombre": "Bisteck de pollo con chaufa", "precio": 18.00, "descripcion": "Filete de pollo a la plancha con arroz chaufa." },
        { "nombre": "Lomo saltado de carne o pollo con chaufa", "precio": 18.00, "descripcion": "Clásico lomo saltado servido junto a arroz chaufa." },
        { "nombre": "Carne con pimenton y tausi con chaufa", "precio": 18.00, "descripcion": "Carne con pimentón en salsa tausi y chaufa." },
        { "nombre": "Chijaukay 4 cosas con chaufa", "precio": 18.00, "descripcion": "Pollo chijaukay y 3 acompañamientos variados con chaufa." },
        { "nombre": "Tortilla de langostino con chaufa", "precio": 18.00, "descripcion": "Tortilla de huevo con langostinos y chaufa." },
        { "nombre": "Tortilla con chancho con chaufa", "precio": 18.00, "descripcion": "Tortilla de huevo con chancho asado y chaufa." },
        { "nombre": "Plato taypa con chaufa", "precio": 18.00, "descripcion": "Saltado especial de varias carnes, verduras y chaufa." },
        { "nombre": "Tallarin taypa", "precio": 18.00, "descripcion": "Tallarines con saltado taypa de carnes y verduras." },
        { "nombre": "Tallarin de chancho con verduras", "precio": 18.00, "descripcion": "Tallarines salteados con chancho asado y verduras." },
        { "nombre": "Chancho con durazno con chaufa", "precio": 18.00, "descripcion": "Chancho con duraznos en salsa dulce y chaufa." },
        { "nombre": "Chancho al ajo con chaufa", "precio": 18.00, "descripcion": "Chancho asado en salsa de ajo con chaufa." },
        { "nombre": "Chancho con piña con chaufa", "precio": 18.00, "descripcion": "Chancho con piña en salsa agridulce y chaufa." },
        { "nombre": "Sahofan con pollo", "precio": 18.00, "descripcion": "Fideos anchos de arroz salteados con pollo." },
        { "nombre": "Sahofan con chancho", "precio": 18.00, "descripcion": "Fideos anchos de arroz salteados con chancho." },
        { "nombre": "Fideo chino con pollo con chaufa", "precio": 18.00, "descripcion": "Fideos chinos salteados con pollo y acompañados de chaufa." },
        { "nombre": "Fideo chino con chancho con chaufa", "precio": 18.00, "descripcion": "Fideos chinos salteados con chancho y acompañados de chaufa." },
        { "nombre": "Langostino con verduras con chaufa", "precio": 18.00, "descripcion": "Langostinos salteados con verduras frescas y chaufa." },
        { "nombre": "Langostino arrebozado con chaufa", "precio": 18.00, "descripcion": "Langostinos fritos arrebozados con chaufa." },
        { "nombre": "Langostino con piña con chaufa", "precio": 18.00, "descripcion": "Langostinos con piña en salsa dulce y chaufa." },
        { "nombre": "Langostino con durazno con chaufa", "precio": 18.00, "descripcion": "Langostinos con durazno en salsa dulce y chaufa." },
        { "nombre": "Chicharron de pollo con chaufa", "precio": 18.00, "descripcion": "Trozos de pollo frito crujiente con chaufa." },
        { "nombre": "Pollo limonkay con chaufa agridulce", "precio": 18.00, "descripcion": "Pollo arrebozado en salsa de limón con chaufa." },
        { "nombre": "Pollo al kión con chaufa", "precio": 18.00, "descripcion": "Pollo salteado con trozos de kion y chaufa." },
        { "nombre": "Pollo fonquinchonlong con chaufa", "precio": 18.00, "descripcion": "No estamos seguros." },
        { "nombre": "Pollo con pimenton y tausi con chaufa", "precio": 18.00, "descripcion": "Pollo con pimentón y salsa tausi servido con chaufa." },
        { "nombre": "Pollo enrollado con verduras con chaufa", "precio": 18.00, "descripcion": "Pollo enrollado salteado con verduras y chaufa." },
        { "nombre": "Pollo enrollado sin verduras", "precio": 18.00, "descripcion": "Pollo enrollado servido solo con chaufa." },
        { "nombre": "Pollo al curry con chaufa", "precio": 18.00, "descripcion": "Pollo en salsa de curry aromática con chaufa." },
        { "nombre": "Pollo con yuyo con chaufa", "precio": 18.00, "descripcion": "Pollo salteado con algas (yuyo) y chaufa." },
        { "nombre": "Pollo al ajo con chaufa", "precio": 18.00, "descripcion": "Pollo en salsa de ajo intenso con chaufa." },
        { "nombre": "Pollo al rocoto con chaufa", "precio": 18.00, "descripcion": "Pollo picante en salsa de rocoto con chaufa." },
        { "nombre": "Pollo en salsa de ostion con chaufa", "precio": 18.00, "descripcion": "Pollo bañado en salsa de ostión con chaufa." },
        { "nombre": "Pollo con champiñones con chaufa", "precio": 18.00, "descripcion": "Pollo salteado con champiñones y chaufa." },
        { "nombre": "Pollo con almendras con chaufa", "precio": 18.00, "descripcion": "Pollo salteado con almendras crujientes y chaufa." },
        { "nombre": "Pollo con piña con chaufa", "precio": 18.00, "descripcion": "Pollo con piña en salsa agridulce y chaufa." },
        { "nombre": "Pollo apanado con ajonjolí con chaufa dulce", "precio": 18.00, "descripcion": "Pollo apanado cubierto de ajonjolí con salsa dulce." },
        { "nombre": "Pollo tipakay con chaufa", "precio": 18.00, "descripcion": "Pollo arrebozado en salsa agridulce roja y chaufa." },
        { "nombre": "Pollo 5 sabores con chaufa", "precio": 18.00, "descripcion": "Pollo con mezcla de 5 especias orientales y chaufa." },
        { "nombre": "Pollo con durazno con chaufa", "precio": 18.00, "descripcion": "Pollo con durazno en salsa dulce y chaufa." },
        { "nombre": "Pollo enrollado dulce", "precio": 18.00, "descripcion": "Pollo enrollado bañado en una salsa dulce especial." },
        { "nombre": "Chijaukay con verduras cons chaufa", "precio": 18.00, "descripcion": "Pollo chijaukay salteado con verduras y chaufa." }
      ]
    },
    {
      "categoria": "Arroz (Rice)",
      "items": [
        { "nombre": "Chaufa salvaje", "precio": 23.00, "descripcion": "Arroz chaufa con carne de res, trozos de pollo y cerdo asado." },
        { "nombre": "Aeropuerto sansi", "precio": 27.00, "descripcion": "Mezcla de fideos y chaufa con carnes estilo Sansi." },
        { "nombre": "Arroz chaufa especial (san si)", "precio": 25.00, "descripcion": "Chaufa especial con variedad de carnes finamente picadas." },
        { "nombre": "Arroz chaufa especial", "precio": 23.00, "descripcion": "Nuestro chaufa clásico con más carnes y sabor." },
        { "nombre": "Arroz chaufa con pollo", "precio": 23.00, "descripcion": "Arroz frito con trozos de pollo y cebollita china." },
        { "nombre": "Arroz chaufa con chancho", "precio": 23.00, "descripcion": "Arroz frito con trozos de chancho asado." },
        { "nombre": "Arroz chaufa con carne", "precio": 23.00, "descripcion": "Arroz frito con trozos de carne de res." },
        { "nombre": "Arroz chaufa de pollo con champiño", "precio": 23.00, "descripcion": "Variante del chaufa de pollo con champiñones." },
        { "nombre": "Arroz chaufa con langostinos", "precio": 26.00, "descripcion": "Arroz frito salteado con langostinos frescos." },
        { "nombre": "Arroz chaufa Amazonico", "precio": 25.00, "descripcion": "Chaufa con ingredientes de la selva (cecina/chorizo)." },
        { "nombre": "Arroz chaufa especial familiar", "precio": "00.00", "descripcion": "Porción familiar de nuestro chaufa especial." },
        { "nombre": "Arroz chaufa de pollo familiar", "precio": "00.00", "descripcion": "Porción familiar del chaufa de pollo." },
        { "nombre": "Porción de arroz blanco", "precio": "00.00", "descripcion": "Porción extra de arroz blanco graneado." },
        { "nombre": "Porción de arroz chaufa con pollo", "precio": "00.00", "descripcion": "Porción adicional de chaufa de pollo." },
        { "nombre": "Porción de arroz chaufa con chancho", "precio": "00.00", "descripcion": "Porción adicional de chaufa de chancho." },
        { "nombre": "Porción de arroz chaufa especial", "precio": "00.00", "descripcion": "Porción adicional de chaufa especial." },
        { "nombre": "Porción de aeropuerto", "precio": "00.00", "descripcion": "Porción adicional de aeropuerto." }
      ]
    },
    {
      "categoria": "Platos Especiales (Special Dishes)",
      "items": [
        { "nombre": "Taypa a la plancha", "precio": 30.00, "descripcion": "Saltado mixto de carnes y verduras servido crepitando en plancha." },
        { "nombre": "Tipakay", "precio": 28.00, "descripcion": "Pollo arrebozado bañado en salsa dulce roja de tamarindo." },
        { "nombre": "Limónkay", "precio": 28.00, "descripcion": "Pollo arrebozado crujiente bañado en salsa de limón." },
        { "nombre": "Fonqui chonlong", "precio": 29.00, "descripcion": "No estamos seguros." },
        { "nombre": "Pollo enrollado en salsa blanca", "precio": 28.00, "descripcion": "Rodajas de pollo enrollado con salsa blanca cremosa." },
        { "nombre": "Langostino con tausi a la plancha", "precio": 32.00, "descripcion": "Langostinos al tausi servidos en plancha caliente." },
        { "nombre": "Bisctek de pollo", "precio": 26.00, "descripcion": "Bistec de pechuga de pollo con papas y arroz." },
        { "nombre": "Piqueo mixto especial", "precio": 28.00, "descripcion": "Surtido de bocaditos y carnes orientales para compartir." },
        { "nombre": "Lomo saltado de carne o pollo", "precio": 28.00, "descripcion": "Saltado peruano-oriental de lomo o pollo con papas fritas." },
        { "nombre": "Chijaukay", "precio": 28.00, "descripcion": "Pollo arrebozado bañado en salsa salada de ostión y sésamo." },
        { "nombre": "Chijaukay 4 cosas", "precio": 30.00, "descripcion": "Chijaukay acompañado de 4 guarniciones o variedades." },
        { "nombre": "Chicharrón de alitas", "precio": 28.00, "descripcion": "Alitas de pollo fritas muy crujientes." },
        { "nombre": "Frijolito chino con chancho y asado", "precio": 28.00, "descripcion": "Saltado de frejol chino con chancho asado." },
        { "nombre": "Frijolito con pollo (Chicken with chinese beans)", "precio": 26.00, "descripcion": "Saltado ligero de frejol chino con tiras de pollo." },
        { "nombre": "Frijolito con pollo (Lobster with chinese beans)", "precio": "00.00", "descripcion": "Saltado de frejol chino con langostinos." },
        { "nombre": "Frijolito con pollo (Meat with chinese beans)", "precio": "00.00", "descripcion": "Saltado de frejol chino con carne de res." }
      ]
    },
    {
      "categoria": "Tortillas (Omelettes)",
      "items": [
        { "nombre": "Tortilla de pollo con verduras", "precio": 26.00, "descripcion": "Tortilla de huevo rellena de pollo y verduras." },
        { "nombre": "Tortilla de langostinos con verduras", "precio": 30.00, "descripcion": "Tortilla de huevo especial con langostinos y verduras." },
        { "nombre": "Tortilla especial", "precio": 35.00, "descripcion": "Gran tortilla con combinación de carnes y mariscos." },
        { "nombre": "Tortilla de Chancho", "precio": 28.00, "descripcion": "Tortilla de huevo con trozos de chancho asado." },
        { "nombre": "Tortilla de Carne", "precio": 28.00, "descripcion": "Tortilla de huevo con trozos de carne de res." }
      ]
    },
    {
      "categoria": "Chancho Asado (Roasted Pork)",
      "items": [
        { "nombre": "Chancho con verduras", "precio": 28.00, "descripcion": "Chancho asado salteado con verduras frescas." },
        { "nombre": "Chancho al ajo", "precio": 28.00, "descripcion": "Chancho salteado en una aromática salsa de ajo." },
        { "nombre": "Chancho con tausi", "precio": 28.00, "descripcion": "Chancho asado en salsa de frijol negro (tausi)." },
        { "nombre": "Chancho con almendra", "precio": 30.00, "descripcion": "Chancho asado con almendras y verduras." },
        { "nombre": "Chancho con piña (dulce)", "precio": 28.00, "descripcion": "Chancho con piña en salsa agridulce." },
        { "nombre": "Chancho con tamarindo (dulce)", "precio": 28.00, "descripcion": "Chancho bañado en salsa dulce de tamarindo." },
        { "nombre": "Chancho con durazno (dulce)", "precio": 28.00, "descripcion": "Chancho con duraznos en salsa dulce." },
        { "nombre": "Chancho solo con nabo", "precio": 30.00, "descripcion": "Chancho asado acompañado de nabo encurtido." },
        { "nombre": "Chancho al rocoto", "precio": 28.00, "descripcion": "Chancho asado picante en salsa de rocoto." }
      ]
    },
    {
      "categoria": "Langostinos (Lobster)",
      "items": [
        { "nombre": "Langostino con verduras", "precio": 30.00, "descripcion": "Langostinos frescos salteados con verduras." },
        { "nombre": "Langostino al ajo", "precio": 30.00, "descripcion": "Langostinos salteados en salsa de ajo." },
        { "nombre": "Langostino arrebozado", "precio": 33.00, "descripcion": "Langostinos fritos con una capa crujiente." },
        { "nombre": "Langostino al rocoto", "precio": 30.00, "descripcion": "Langostinos picantes en salsa de rocoto." },
        { "nombre": "Langostino con piña (dulce)", "precio": 30.00, "descripcion": "Langostinos con piña en salsa agridulce." },
        { "nombre": "Langostino con durazno (dulce)", "precio": 30.00, "descripcion": "Langostinos con durazno en salsa dulce." }
      ]
    },
    {
      "categoria": "Carnes (Beef)",
      "items": [
        { "nombre": "Carne con verduras", "precio": 28.00, "descripcion": "Trozos de carne de res salteados con verduras." },
        { "nombre": "Carne con almendra", "precio": 28.00, "descripcion": "Carne de res con almendras y verduras." },
        { "nombre": "Carne con pimentón y tausi", "precio": 28.00, "descripcion": "Carne de res con pimentón en salsa tausi." }
      ]
    },
    {
      "categoria": "Alitas Fritas (Fried Chicken Wings)",
      "items": [
        { "nombre": "Alitas fritas con verduras", "precio": 28.00, "descripcion": "Alitas de pollo acompañadas de verduras salteadas." },
        { "nombre": "Alitas fritas con tausi", "precio": 28.00, "descripcion": "Alitas de pollo bañadas en salsa tausi." },
        { "nombre": "Alitas fritas al rocoto", "precio": 28.00, "descripcion": "Alitas de pollo picantes en salsa de rocoto." },
        { "nombre": "Alitas fritas con piña (dulce)", "precio": 28.00, "descripcion": "Alitas con piña en salsa agridulce." },
        { "nombre": "Alitas fritas con tamarindo (dulce)", "precio": 28.00, "descripcion": "Alitas bañadas en salsa de tamarindo." },
        { "nombre": "Alitas fritas con durazno (dulce)", "precio": 28.00, "descripcion": "Alitas con durazno en salsa dulce." }
      ]
    },
    {
      "categoria": "Pollo (Chicken)",
      "items": [
        { "nombre": "Pollo con verduras", "precio": 26.00, "descripcion": "Pollo en trozos salteado con verduras variadas." },
        { "nombre": "Pollo al vapor", "precio": 28.00, "descripcion": "Pollo cocido al vapor, ligero y saludable." },
        { "nombre": "Pollo al ajo", "precio": 28.00, "descripcion": "Pollo salteado en salsa intensa de ajo." },
        { "nombre": "Pollo con tausi", "precio": 28.00, "descripcion": "Pollo en trozos con salsa de frijol negro (tausi)." },
        { "nombre": "Pollo en salsa de ostión", "precio": 28.00, "descripcion": "Pollo bañado en salsa de ostión." },
        { "nombre": "Pollo con almendra", "precio": 28.00, "descripcion": "Pollo salteado con almendras y verduras." },
        { "nombre": "Pollo con champiñones", "precio": 28.00, "descripcion": "Pollo salteado con champiñones frescos." },
        { "nombre": "Pollo al curry", "precio": 28.00, "descripcion": "Pollo cocinado en salsa de curry oriental." },
        { "nombre": "Pollo enrollado con verduras", "precio": 28.00, "descripcion": "Pollo enrollado servido con verduras salteadas." },
        { "nombre": "Pollo con yuyo", "precio": 28.00, "descripcion": "Pollo salteado con yuyo (algas) y verduras." },
        { "nombre": "Pollo enrollado (dulce)", "precio": 26.00, "descripcion": "Pollo enrollado en salsa dulce." },
        { "nombre": "Pollo con piña (dulce)", "precio": 28.00, "descripcion": "Pollo con piña en salsa agridulce." },
        { "nombre": "Pollo apanado con ajonjolí (dulce)", "precio": 26.00, "descripcion": "Pollo empanizado con ajonjolí y salsa dulce." },
        { "nombre": "Pollo con durazno (dulce)", "precio": 28.00, "descripcion": "Pollo con durazno en salsa dulce." },
        { "nombre": "Pollo 5 sabores (dulce)", "precio": 28.00, "descripcion": "Pollo preparado con la tradicional mezcla de 5 sabores." },
        { "nombre": "Pollo con tamarindo (dulce)", "precio": 28.00, "descripcion": "Pollo en salsa de tamarindo agridulce." }
      ]
    },
    {
      "categoria": "Tallarines (Noodles)",
      "items": [
        { "nombre": "Tallarin taypa", "precio": 30.00, "descripcion": "Tallarines con el saltado especial Taypa." },
        { "nombre": "San si noodles", "precio": 28.00, "descripcion": "Tallarines finos estilo San Si con carnes." },
        { "nombre": "Tallarin de chancho con verduras", "precio": 28.00, "descripcion": "Tallarines salteados con chancho asado y verduras." },
        { "nombre": "Tallarin de carne con verduras", "precio": 28.00, "descripcion": "Tallarines salteados con carne de res y verduras." },
        { "nombre": "Tallarin de langostinos con verduras", "precio": 33.00, "descripcion": "Tallarines salteados con langostinos y verduras." },
        { "nombre": "Tallarin pollo en trozos con verdura", "precio": 30.00, "descripcion": "Tallarines con trozos grandes de pollo y verduras." },
        { "nombre": "Fideos chino con pollo y verduras", "precio": 28.00, "descripcion": "Fideos chinos tradicionales con pollo y verduras." },
        { "nombre": "Fideo chino con chancho y verdura", "precio": 29.00, "descripcion": "Fideos chinos tradicionales con chancho y verduras." },
        { "nombre": "Fideo chino con langostino y verdu", "precio": 30.00, "descripcion": "Fideos chinos con langostinos y verduras." },
        { "nombre": "Sahofan con pollo", "precio": 29.00, "descripcion": "Fideos anchos de arroz con pollo." },
        { "nombre": "Sahofan con carne y verduras", "precio": 28.00, "descripcion": "Fideos anchos de arroz con carne y verduras." },
        { "nombre": "Sahofan con langostino", "precio": 32.00, "descripcion": "Fideos anchos de arroz con langostinos." },
        { "nombre": "Sahofan de chancho", "precio": 28.00, "descripcion": "Fideos anchos de arroz con chancho asado." }
      ]
    }
  ]
};