function bajarDato(dato){
    let dt=localStorage.getItem(dato)
    let bajada=JSON.parse(dt)
    let info=bajada
    return info
}
const nombre=bajarDato('Nombre')
const apellido=bajarDato('Apellido')
const apodo=bajarDato('Apodo')

const libro=[
    {
        id: 13,
        img:"../recursos/img/Ole1.jpg",
        alt:"imagen",
        texto: `Desde la AFA, y con la cantidad de compromisos asumidos y el hambre de billetes extranjeros que caracteriza a la gente de la calle Viamonte, nombraron a ${nombre} ${apellido} como DT de la mayor. Una medalla de oro en algun campeonato y chiquicientosmil fracasos en la espalda fueron suficientes para darle una de las selecciones mas poderosas del planeta.
        La Copa America 2011 se disputara en Argentina. Todos, menos los argentinos, ven al equipo de ${apellido} como gran favorito para quedarse, luego de 18 años, con el ansiado trofeo continental. No es que desconfien del juego de Messi, Aguero, Tevez y compañia, pero a ${apellido} no le creen ni que su nombre sea de el. Tampoco llega con los mejores números: decenas de convocados, cuatro selecciones de diferente nivel y juego (la mayor, la local, la local sin jugadores que disputen copas intemacionales y la sub-25 compuesta por suplentones que juegan en Europa) y un sinfin de declaraciones cruzadas. 
        Primera con Tevez -para colmo convocado-, con Maradona y ahora con don Julio. ${apellido} llega golpeado para disputar la Copa America luego de dos derrotas dolorosas ambas ante Nigeria y Polonia con un rejunte sub-25. Desde la AFA lo acusaron de no tener consideración por el prestigio de la selección argentina y que no puede pedir jugar este tipo de partidos. Desde la AFA le pusieron los puntos: basta de pachangas internacionales, aunque el ${apodo} (como apodaban al DT) cree que necesita mas partidos para evaluar a los jugadores.
        `,
        op1: 23,
        op2: 34,
        btn1: "Creo que necesito mas partidos para evaluar a los jugadores",
        btn2: "Si preferís jugar contra Albania en el Monumental ya con el equipo que disputara la Copa America"
    },
    {
        id: 14,
        img:"../recursos/img/Scaloni2.webp",
        alt:"imagen",
        texto: `${apellido} tenia que probar a su nuevo equipo -compuesto por jugadores de la 'B' Nacional- antes de disputar la Copa America y sacar sus primeras conclusiones acerca del funcionamiento de este selectivo particular.
        En busca de un rival de jerarquia, se dispuso que el equipo a enfrentar no sea otro que Arsenal de Sarandí. Aprovecharon la oportunidad para jugar el partido en plena Patagonia y de paso inaugurar unos molinos de viento de esos que generan electricidad. La fiesta fue total, hasta el pitido final del arbitro (1-3 en contra).
        El severo correctivo por parte del equipo de los Grondona no logró quitarle a ${apellido} la satisfacción de haber disputado otro amistoso y de poder analizar lo que segun sus palabras "es un equipo que no tiene techo". A lo que muchos agregaron: "no tiene techo, ni paredes, ni cimientos, ni nada".
        En contra del fervor popular, que clamaba por la vuelta de Messi y los otros, el ${apodo} sorprendió al anunciar que disputaria la Copa America con el combinado nacional formado por jugadores que el ultimo torneo lo jugaron con la camiseta de River Plate, y que hoy forman parte del ascenso argentino.
        `,
        op1: 35,
        op2: 25,
        btn1: "Si crees que la situacion no da para mas y queres ir a prender fuego la AFA, segui por aca...",
        btn2: "Si ya todo te da igual y queres que de una buena vez arranque la Copa America, segui por aca..."
    },
    {
        id: 15,
        img:"../recursos/img/Scaloni.webp",
        alt:"imagen",
        texto: `${apellido} plantea el partido inaugural con una línea de cinco en el fondo, con cuatro mediocampistas y un delantero, retrasado. Aterrado por el poderío aereo de Bolivia (le hablaron mucho de la altura) entrenó toda la semana contra un equipo de basquet.
        Bolivia llega casi sin expectativas ya sabiendas de que el arbitro tratara de quedar bien y poder pasar por la ferretería mas cercana para hacerse sin cargo de clavos y tornillos para los arreglos de su hogar.
        La prensa descubre que el ${apodo}, luego de una charla con el entrenador del equipo de baloncesto, decide dejar a la estrella de la Selección Argentina en el banco:
        -Quiero que sea como el sexto hombre del basquet, alguien que entra cuando el juego esta espeso y revoluciona todo.
        `,
        op1: 29,
        op2: 31,
        btn1: "Si crees que Argentina perdera el partido y que tenes que renunciar...",
        btn2: "Si crees que Argentina ganara este partido y ya hay que pensar en el segundo encuentro del grupo, ante Colombia..."
    },
    {
        id: 16,
        img:"../recursos/img/Scaloni3.jpg",
        alt:"imagen",
        texto: `Cansado de las críticas ${apellido} entra a la sala de prensa con cara de pocos amigos, que en realidad no son ni mas ni menos que el Tata Brown, Chirola, Perazzo y algun otro.
        -Buenas tardes a todos. Antes que nada, hoy no aceptare preguntas. Solo dare mi punto de vista del partido, de la injusta derrota ante Albania. Es por eso que quiero empezar recalcando la union de este grupo que en las buenas y las malas nunca existio. Pero eso no es culpa nuestra, aunque algunos de ustedes piensen que es tarea del cuerpo tecnico que los jugadores se lleven bien. No se conocen,  muy  pocos  compartieron  equipos  y  apenas
        intercambian palabra alguna. Lo de hoy fue injusto, pero así es el futbol. Por eso, no leere los diarios de mañana porque no me interesa lo que ustedes puedan decir o escribir desde la platea. Esto es todo. Chau.
        `,
        op1: 18,
        op2: 25,
        btn1: "Si realmente no crees que te puedas contener de leer la prensa deportiva",
        btn2: "Si ya todo te da igual y queres que de una buena vez arranque la Copa America"
    },
    {
        id: 17,
        img:"../recursos/img/Scaloni.webp",
        alt:"imagen",
        texto: `Por esas cosas de la vida -y de los arbitrajes localistas-, la Argentina del ${apodo} ${apellido} logró hacerse con los seis puntos en los dos partidos ya jugados, aunque con una diferencia de gol corta.
        ${apellido}, ni lento ni perezoso, agarró el fixture y cruzó flechas, resultados y tiró de futurologia barata. Buscó el camino para llegar a la final de la mejor manera - la mas facil - y asi planteó el partido contra Costa Rica, aunque durante toda la semana se la pasó mirando videos de Japón.
        `,
        op1: 29,
        op2: 33,
        btn1: "Si crees que Argentina perdera el partido por goleada y de una buena vez tenes que renunciar, segui por aca...",
        btn2: "Si crees que Argentina no tiene que tenerle miedo a ningun otro equipo, y por eso hay que ganar, para ser primero de grupo, segui por aca..."
    },
    {
        id: 18,
        img:"../recursos/img/Ole1.jpg",
        alt:"imagen",
        texto: `Luego del bochornoso resultado, el Ole salió con los tapones de punta: "Horrible ${apellido}". Cancha Llena no se quedó atras, y tituló con un contundente "Chau ${apodo}". Explotaron los blogs, Twitter, los cafes y hasta el vestuario del equipo contrario, que no lograba entender cómo no solo no salieron goleados, 
        sino que contaron con las mejores oportunidades para ponerse en ventaja. Y como pasa siempre en estos casos, los periodistas tratan de hacerse con las mejores entrevistas para lograr generar información de calidad y en exclusiva, fue el caso de una radio de Coronel Vidal (provincia de Buenos Aires) que por equivocación llamó a Caruso Lombardi, 
        quien aprovechó los micrófonos para tirar alguna bombita: -Lo de Argentina es un desastre. Esto no es de ahora. Yo no se que pasa conmigo, si estoy prohibido, si tengo mala prensa muchachos... Nunca me llamaron para dirigir a la selección con las buenas campañas que he hecho en el futbol de ascenso y en algun que otro equipo de Primera. 
        Lo de ${apellido} no tiene nombre. O sí tiene: ${nombre} Mamarracho. El equipo no juega a nada, muchachos. A nada. Yo a esos muertos les gano con un equipo de barrio. Es mas, la Copa America la gano con una selección formada solo con jugadores de la 'B' Nacional.
        `,
        op1: 27,
        op2: 25,
        btn1: "Si pensas que tendrias que afrontar el reto de Caruso y convocar jugadores del ascenso, segui por aca...",
        btn2: "Si crees que ya te estan pegando por pegar, y queres que de una buena vez arranque Copa America, segui por aca..."
    },
    {
        id: 19,
        img:"../recursos/img/ScaloniCampeon.webp",
        alt:"imagen",
        texto: `¡Argentina campeón! No lo puede creer nadie, y mucho menos ${apellido}. Impresionante demostración de futbol. El mundo entero habla de este equipo que... bueno, tampoco es para tanto. Se ganó y posiblemente haya sido por penales.
        Mientras los jugadores dan la vuelta olímpica en el estadio de River Plate, el ${apodo} esta con la mirada perdida, con la cabeza en otro lado. A Grondona le pasa lo mismo. Seguro que el primero estaria haciendo cuentas para ver cómo quedaron con esta victoria en la tabla del descenso; 
        el otro estaria calculado los intereses de su cuenta bancaria, y si puede, de una vez por todas, jubilarse.
        No, todavia no.
        En la sala de prensa un ${apellido} desaforado entra y al apenas sentarse dice:
        -Este triunfo se lo dedico a los que siempre estuvieron apoyando este proyecto. Pero sobre todo a los que criticaron con mala leche, como el pelotudo que escribió este libro.
        `,
        op1: 35,
        op2: 37,
        btn1: `Si crees que ${apellido} es un loquito que tiene que hacerse ver por un profesional de la medicina psiquiatrica, el autor de este libro no merecia una dedicatoria de esa índole, segui por aca...`,
        btn2: `Si crees que el ${apodo} estaba caliente, no pensó lo que dijo, pero pedira disculpas, segui por aca...`
    },
    {
        id: 20,
        img:"../recursos/img/Scaloni2.webp",
        alt:"imagen",
        texto: `Argentina nuevamente llega a una final. Como tantas otras veces, es una buena ocasión para no quedar segundos. Como tantas otras veces, tambien.
        En este punto, la magia del fixture digitado le permite al equipo del ${apodo}, con todo siguiendo el curso de la lógica, y los arbitros cumpliendo con su trabajo, llegar a esta instancia sin cruzarse con los pesos pesados del continente: Brasil o Uruguay.
        Es por eso que en este punto elegiremos a quien enfrentarnos: Brasil o Uruguay. Al que mas bronca le tengas, pero tambien el que mas te puede embromar si ${apellido} y sus muchachos pierden.
        `,
        op1: 36,
        op2: 28,
        btn1: `Si te sentis con suerte para jugarle a Brasil, segui por aca...`,
        btn2: `Si crees que Argentina tiene una excelente oportunidad de vengarse por la final que perdió ante Uruguay en el año 1916, segui por aca...`
    },
    {
        id: 21,
        img:"../recursos/img/monumental.jpg",
        alt:"imagen",
        texto: `Cuando el speaker del Monumental anunció la entrada al campo de juego de Andres Ciro (y su armónica) el deja vu que causó en algunos fue tan grande al verlo en el estadio de River Plate que durante el himno empezaron a pedirle que cantara alguna canción de Los Piojos, lo que causó la ira del cantautor. -Esto es una falta de respeto, hacia mi persona y hacia Vicente Lopez y Planes y Blas Parera. Así estamos, así está esta sociedad podrida, dijo Ciro.
        El enojo por parte de la afición no tardó en llegar. Pasados apenas minutos, revoleaban desde lo alto del estadio varias butacas y el choque con la fuerza policial fue inevitable.
        `,
        op1: 35,
        op2: 26,
        btn1: `Si el partido se suspendió, crees que la policía abusó de su poder, y encima tenes ganas de pelear, segui por aca...`,
        btn2: `Si lo que pasó no fue para tanto y queres que de una buena vez empiece el partido de futbol, segui por aca...`
    },
    {
        id: 22,
        img:"../recursos/img/Scaloni3.jpg",
        alt:"imagen",
        texto: `Meses despues de la consagración de Argentina como nuevo campeón de la Copa America, en su primera conferencia de prensa, ${apellido} dejó en claro que ahora sera el quien ponga las condiciones de trabajo.
        Como primera medida, formara una selección de jugadores del ambito local, que participara como si fuese un equipo mas en el Torneo Apertura próximo a iniciarse. Los sueldos seguiran a cargo del dub al que pertenezca cada uno de los convocados.
        Como segunda medida, pide que Fantino reemplace a Cherquis Bialo como vocero de la AFA.
        Y como tercera y ultima medida, pide incorporar a Ruggeri al cuerpo tecnico.
        La primera y la segunda, Fantino en su flamante rol de vocero, anuncia que la AFA las acepta. La tercera no, y que revisaran el contrato de ${apellido}, a pesar de que Grondona en el vestuario, durante el ultimo partido le habia dado la palabra de que automaticamente le renovarian el vinculo con la AFA.
        `,
        op1: 35,
        op2: 32,
        btn1: `Si esta historia ya la viviste, y te violenta al punto de querer ir a romper toda la AFA a patadas, segui por aca...`,
        btn2: `Si realmente crees que el ${apodo} merece otro trato, y queres que le renueven el contrato y a Ruggeri como ayudante tecnico, segui por aca...`
    },
    {
        id: 23,
        img:"../recursos/img/Scaloni2.webp",
        alt:"imagen",
        texto: `No satisfecho con haber hecho el ridiculo ante Nigeria y Polonia, ahora ${apellido} decide que es hora de probar a la selección mayor ante un rival de jerarquia antes de afrontar el ultimo partido amistoso previo a la Copa America.
        El rival elegido en esta ocasión fue el poderoso equipo de Fiji, perteneciente a la tambien poderosa Confederación de Oceania. El encuentro se disputó en la ciudad de Dolores, donde el equipo ademas fue parte de los actos de inauguración de un velódromo.
        El 0-0 final mostró lo injusto de este deporte, ya que por lo hecho en el campo de juego, la selección de Fiji mereció mejor suerte de cara al arco contrario.
        ${apellido} se retiró al vestuario con la sonrisa amarga de aquel que considera que el amistoso es de gran importancia para el equipo, como tambien que la prensa deportiva no tendra piedad a la hora de criticar el planteo ante los oceanicos.
        `,
        op1: 18,
        op2: 34,
        btn1: `Si queres leer las criticas de la prensa, segui por aca...`,
        btn2: `Si preferis jugar contra Albania en el Monumental con el equipo que disputara la Copa America y no darle bola a la prensa deportiva, segui por aca...`
    },
    {
        id: 24,
        img:"../recursos/img/Scaloni2.webp",
        alt:"imagen",
        texto: `Prueba de fuego para la Argentina de ${apellido}. Luego de tirar el equipo para atras para eludir un posible rival de mayor dificultad, el ${apodo} se jugara el devenir del equipo en esta Copa America frente al segundo del Grupo C.
        No contento con haber concretado su plan de perder para ganar (sí, como lo leen), Argentina se juega mucho mas que un simple partido eliminatorio. Argentina se esta jugando los 18 años haciendo el ridiculo en el continente, se juega las telarañas de las vitrinas de la AFA y 
        ${apellido} el puesto. Aunque luego de leer esto, muchos querran que la selección argentina pierda, ahí esta el ${apodo}, silbato en boca, practicando penales...
        `,
        op1: 29,
        op2: 30,
        btn1: `Si crees que Argentina no la emboca ni en los penales, segui por aca...`,
        btn2: `Si pensas que Argentina tiene que ser finalista por mandato de la CONMEBOL y gana este partido, segui por aca...`
    },
    {
        id: 25,
        img:"../recursos/img/monumental.jpg",
        alt:"imagen",
        texto: `Ya esta todo preparado. Argentina construyó nuevos estadios, remodelaron otros y con el material sobrante varios dirigentes ampliaron sus hogares. Casi todos felices.
        En lo deportivo, ${apellido} llega golpeado por las criticas y con un equipo que es una verdadera incógnita. La prensa internacional posa sus ojos sobre la selección argentina y su juego, los fanaticos del futbol llaman a sus operadores de cable para asegurarse que no se perderan ningun partido, 
        y los vendedores de Coca-Cola estan terminando de aguar la bebida que sera vendida en el estadio. Mejor, imposible.
        Hoy se presenta oficialmente la Copa America en el Estadio Unico de La Plata, sede del partido inaugural entre los locales y sus pares bolivianos. Justamente sus entrenadores estan en el acto, y ${apellido}, al ser consultado ante las posibilidades de su equipo comentó:
        -No se si estamos para campeones, pero esperemos estar a la altura de este magnifico evento. Y si en la clasificación final logramos estar entre los puestos que otorgan una plaza para el Mundial 2014, genial.
        `,
        op1: 35,
        op2: 15,
        btn1: `Si lo de ${apellido} se pasa de castaño oscuro y te dan ganas de preparar una bomba molotov y tirarla contra la AFA, segui por aca...`,
        btn2: `Si crees que esto no es mas que una anecdota graciosa culpa de los nervios del debut y queres vibrar con el primer partido de la Copa America ante Bolivia, segui por aca...`
    },
    {
        id: 26,
        img:"../recursos/img/monumental.jpg",
        alt:"imagen",
        texto: `Albania no era un rival a temer, pero con este equipo ya nadie apostaba por una victoria segura del equipo de ${apellido}. El encuentro se disputó ante la atenta mirada de periodistas de todo el mundo y de los futuros rivales en la Copa America 2011.
        Albania se llevó un valioso triunfo (0-1) y dejó a ${apellido} en entredicho. Mas que nunca, el puesto de entrenador fue lo mas parecido a una silla electrica.
        La gente se retiró en silencio, salvo uno que entre la muchedumbre gritó: "A este ${apellido} no lo saca ni fidel". Risas varias, entre los que entendieron el chiste.
        `,
        op1: 16,
        op2: 25,
        btn1: `Si todavia te quedan ganas de dar una conferencia de prensa, segui por aca...`,
        btn2: `Si lo unico que le pedís a DlOS es que empiece la Copa America de una buena vez, segui por aca...`
    },
    {
        id: 27,
        img:"../recursos/img/Scaloni3.jpg",
        alt:"imagen",
        texto: `Harto de que duden de su capacidad como entrenador, y de escuchar que el puesto de DT nacional de Argentina le queda enorme, ${apellido} decidió afrontar el reto que le propuso Caruso Lombardi. 
        Lo primero que hizo fue desafectar a todos los jugadores que tenia convocados para la Copa America, como Messi, Aguero, Tevez y los otros. Lo segundo fue ponerse a revisar la web y buscar paginas de ascenso. Realizó una nueva lista con los nombres que pretendia que formasen esta nueva version de la albiceleste. 
        La nómina estaba compuesta en su mayoría por jugadores que habían disputado el ultimo Torneo Clausura para River Plate. No satisfecho, ${apellido} pidió jugar un nuevo amistoso antes de enfrentar a Albania en lo que seria el ultimo partido previo al debut en la Copa America 2011.`,
        op1: 14,
        op2: 35,
        btn1: `Si estas de acuerdo en disputar un nuevo amistoso, segui por aca...`,
        btn2: `Si no podes entender cómo en el futbol de tu país pasan este tipo de cosas, y preferís ir a protestar a la AFA, segui por aca...`
    },
    {
        id: 28,
        img:"../recursos/img/monumental.jpg",
        alt:"imagen",
        texto: `Gran final gran. Como para alquilar balcones, aunque sea en la reventa. Argentina, con ${apellido} a la cabeza, se enfrenta a su clasico rival rioplatense. Uruguay con toda la garra, y con Forlán como capitán, querra hacerle sentir al ${apodo} que hoy por hoy son mejores que los argentinos (aunque ese es un sentimiento sin fecha de caducidad).
        ${apellido}, vivo como pocos, empapeló el vestuario con fotos de Zaira Nara. Se propuso no abrir la boca hasta justo antes del choque decisivo. Fue por eso que los jugadores no supieron que ejercicios hacer, que tactica probar o quienes serian los titulares.
        Llegados al Monumental, por fin -para sus jugadores- el ${apodo} habló:
        -Chicos, estos uruguayos nos estan robando las mujeres. Parece que Forlan le propuso matrimonio a Zaira Nara. Solo les digo esto: nos estan robando las minas.
        -Pero ${apodo}, al final se pelearon y no se van a casar,
        respondió uno de los jugadores.
        - Le compra una casita en Jose Ignacio y vuelue con Zaira. ¡Nos roban las mujeres!, cerró ${apellido}
        `,
        op1: 29,
        op2: 19,
        btn1: `Si crees que la tactica del 'mudo Bernardo' llevada a cabo por ${apellido} fue un nuevo mamarracho y Argentina perdió la final, segui por aca...`,
        btn2: `Si Argentina recuperó la Copa America, a Zaira Nara y se consagró campeón del torneo, segui por aca...`
    },
    {
        id: 29,
        img:"../recursos/img/Scaloni3.jpg",
        alt:"imagen",
        texto: `El partido no salió de acuerdo a lo planeado. No creo que sea el unico responsable, pero entiendo que la prensa necesite un cadaver que descuartizar. Por eso, yo y mi inseparable cuerpo tecnico, el cual me sigue a todos lados y en las malas sobre todo me respaldan como entrenador y como persona, anunciamos nuestra renuncia a la conducción del seleccionado de Argentina.
        Asi se despedia ${apellido} de la sala de prensa del estadio. Minutos despues, Chirola Rodriguez, ayudante de  ${apellido} y victima de una camara oculta en el programa de Marcelo Tinelli, anunciaba que no sabia quien era "ese tal ${apodo} ${apellido} del que todos hablan".
        Ante semejante gesto de deslealtad, la AFA en un sencillo pero emotivo acto, nombra a Chirola Rodriguez como flamante entrenador de la selección Argentina.
        `,
        op1: 35,
        op2: 13,
        btn1: `Si lo que te genera la AFA es un sentimiento mezcla de odio y destrucción, dale por aca...`,
        btn2: `Si te morís por ver la camara oculta que le hicieron a Chirola, metete en Youtube y busca 'el peor día de tu vida Alberto. FIN`
    },
    {
        id: 30,
        img:"../recursos/img/Scaloni.webp",
        alt:"imagen",
        texto: `ACA es donde se le complicó a ${apellido} el tema de las flechas y la futurologia. Se mareó. Ya no sabe ni contra quien debe jugar. Y cuando le dicen que quizas el rival sea Colombia, se le nubla la vista y se desmaya.
        Luego de que los medicos lo atendieran y le explicaran que por esas cosas del destino -y del fixture caprichoso- un cruce con los colombianos es posible, y no es un error, ${apellido} peguntó: "Cuantos quedaron en pie despues del ultimo partido en el que les partimos las piernas?". Todos entendieron el mensaje.
        Argentina saldria a jugarle a Colombia a lo Colombia. Pero a lo Colombia de estos ultimos años: la nada misma. A la selección de ${apellido} mucho no le costó entender el mensaje.
        Ellos tambien hace mucho tiempo que no jugaban a nada...
        `,
        op1: 29,
        op2: 20,
        btn1: `${apellido} y sus esquemas son mas feos que pegarle a tu vieja con la correa del perro que el veterinario acaba de sacrificar, y encima crees que Argentina pierde?, dale por aca...`,
        btn2: `Si no hay nada que pueda detenera la ${apodo}neta hasta la final, segui por aca...`
    },
    {
        id: 31,
        img:"../recursos/img/monumental.jpg",
        alt:"imagen",
        texto: `Desde las eliminatorias de 1993, cuando en el Monumental de Nunez, Colombia le propinó una paliza histórica a la selección argentina, el pueblo argentino y futbolero no piensa en otra cosa que no sea la destrucción de los cafeteros en base a goles. De cabeza, con la rodilla, con la pera, con la espalda, con el codo, con la mano... 
        con lo que sea quieren meterles cinco goles y espantar ese fantasma que para muchos fue el principio del fin. Goles y mas goles. Y si no se puede, patadas.
        ${apellido} lo sabe, lo tiene claro. Si uno le pregunta se encontrara con la respuesta justa y popular de "ningun cafetero saldra con vida". Fueron dias de entrenamiento a puertas cerradas, aunque siempre hay alguien que cuenta lo que ocurre, o periodistas que inventando son geniales. De cualquier manera, es lo que hay y vende.
        Segun se supo, ${apellido} no entrenó con el objetivo de convertir goles, sino se lesionar colombianos. Formara con un esquema 3-7-0. Ese mediocampo sera una trituradora de piernas, muy propio del futbol argentino...
        `,
        op1: 29,
        op2: 17,
        btn1: `Si crees que Argentina perdera el partido y ${apellido} tiene que renunciar, dale por aca...`,
        btn2: `Si crees que Argentina ganara este partido y hay que ir pensando en el ultimo encuentro del grupo, segui por aca...`
    },
    {
        id: 32,
        img:"../recursos/img/Scaloni3.jpg",
        alt:"imagen",
        texto: `Miercoles, 7 de la tarde, puerta de la AFA. Los periodistas esperan por Fantino, nuevo vocero de Grondona, para que aclare que sucedera con ${apellido} y su contrato.
        -Señores, buenas tardes. Quiero aclarar que sere breve. Mi discurso sera mortifero, directo a la yugular. Y no durara mas de un minuto, que es lo que tardaba un guerrero mongol en matar una momia con cuchillos. 
        Desde las montanas nos espían los francotiradores de la mentira, y tenemos el punto rojo entre los ojos. No importa. Me morire diciendo la verdad. Vieron la película Rescatando al Soldado Ryan? Bueno, esto es lo mismo. Desembarcamos y no hay vuelta atras. Y lo lamento por ${apellido}, que es uno de los que me estan apuntando en este momenta. 
        Hemos revisado el contrato y no solo no hemos encontrado una clausula en donde se obliga a la AFA a renovarle el vínculo por haber sido campeón de la Copa America, sino que por razones contractuales, para nada ajenas con esta Asociación, Maradona vuelve a ser el entrenador de la Selección Argentina. Sin nada mas que agregar, desaparezco como Batman por Ciudad Gótica bajo la atenta mirada del Pinguino, que poco puede hacer.
        `,
        op1: 35,
        op2: 35,
        btn1: `Si crees que todo esto es un gran circo y que del que se ríen es de vos, y te dan ganas de ir a decirle a Fantino y a Grondona las cosas en la cara, segui por aca...`,
        btn2: `Si pensas que te estan caminando con el tema del contrato y se aprovechan porque quizas parezcas un poco mas lento, y esto amerita que vayas a romper todo y tratar de incendiar la AFA, segui por aca...`
    },
    {
        id: 33,
        img:"../recursos/img/Scaloni.webp",
        alt:"imagen",
        texto: `Luego de derrotar a Costa Rica, Argentina va por mas. Ya esta en Cuartos de final donde, al haber sido primero de su grupo, lo espera el mejor tercero. ${apellido} sabe que ahora es a ganar o morir, por eso, sin ser matematico, estudió todas posibilidades y sus probabilidades. Practicó todos los dias penales.`,
        op1: 29,
        op2: 30,
        btn1: `Si crees que hasta aca llegó la Argentina de ${apellido}, dale por aca...`,
        btn2: `Si crees que Argentina pasara aunque sea por penales, a semifinales, segui por aca...`
    },
    {
        id: 34,
        img:"../recursos/img/Scaloni.webp",
        alt:"imagen",
        texto: `Albania sera el ultimo rival de la Selección Argentina antes de afrontar su participación en la Copa America 2011. Aunque nadie entienda la convocatoria de ${apellido}, ni su sistema de juego, el Monumental de Nuñez, el estadio mas grande de Argentina, esta abarrotado de gente: directivos de la AFA, familiares de los jugadores, miembros de las Hinchadas Unidas Argentinas, y algun que otro aficionado al futbol.
        La AFA quiso que este partido sea una fiesta, tal cual lo fue el encuentro ante Canada antes de partir hacia Sudafrica para disputar el Mundial 2010. Por eso la receta es la misma:
        rival debil + recaudación = goleada y buenos ingresos. Todos felices. Bueno, no	todos: ${apellido} hubiese	querido jugar algunos amistosos mas antes de disputar la Copa America
        `,
        op1: 21,
        op2: 26,
        btn1: `Si queres escuchar el Himno antes de jugar el partido, dale por aca...`,
        btn2: `Si preferís dejar la formalidad de los himnos de lado y pasar al futbol, segui por aca...`
    },
    {
        id: 35,
        img:"../recursos/img/julio.webp",
        alt:"imagen",
        texto: `Cuando llegaste a la AFA te diste cuenta que no eras el unico que sentía verguenza ajena por la selección nacional, su entrenador y todo lo que lo rodea. Habia miles de personas manifestandose y exigiendo un cambio. 
        Se podia notar que no todos estaban enojados: habia algunos tan furiosos que podrian haber protagonizado un documental de Animal Planet.
        Todo fueron gritos, insultos y alguna que otra piedra que impactó en la fachada del edificio ubicado en la calle Viamonte. Todo fue barullo hasta el momento que de una ventana se asomó ante la muchedumbre Julio Humberto Grondona.
        El presidente de la AFA no dijo una sola palabra. Alzó su mano, estiró el puño al mejor estilo Mazinger, y mostró su anillo: TODO PASA.
        Nadie dijo nada. De a poco la revuelta se fue desvaneciendo, la manifestación ya no fue tal. La gente volvió a su casa y frente a la television cada uno se entretuvo con el primer partido de futbol que encontró. Habían aprendido una valiosa lección: TODO PASA.
        FIN.
        `,
        op1: 13,
        op2: 13,
        btn1: `Que final eh ${apellido}!`,
        btn2: `Para para para, vos me estas queriendo decir que aca se acaba la historia? Si!`
    },
    {
        id: 36,
        img:"../recursos/img/Scaloni2.webp",
        alt:"imagen",
        texto: `Brasil le ganó a Argentina (y el primer equipo), con el seleccionado 'B', con los juveniles, en categorias sub-18 meses, futbol playa y hasta en los paraolimpicos. Menos Los Dogos -la Selección Argentina de futbol Gay- todos los demas perdieron sometiendose al futbol brasilero.
        ${apellido} lo tiene claro, por eso le pidió a los jugadores un ultimos esfuerzo. Tiene claro que Grondona no apoya a Los Dogos, por eso, este match es de vital importancia para seguir sintiendo los mimos de don Julio a la hora de contar con el en el armado del cuerpo tecnico de Argentina.
        Estudioso como pocos, el ${apodo} se dispuso a encontrar el punto debil del scratch, y lo encontró: marcar a Ronaldo. Por lo poco que vio del ultimo amistoso disputado en San Pablo frente a Rumania, todo pasa por Ronaldo. En esos quince minutes que logró ver, quedó en evidencia el juego que hace Brasil, que no es ni mas ni menos que una constante busqueda del redondeado delantero. "Cualquiera
        que vio el partido podria decir que hasta parecia un poco obvio que todos lo buscaban a Ronaldo. Parecia un homenaje..." concluyó el enigmatico entrenador.
        `,
        op1: 29,
        op2: 19,
        btn1: `Si Argentina perdió y ${apellido} todavia esta esperando que entre Ronaldo a la cancha, dale por aca...`,
        btn2: `Si los jugadores ignoraron por completo a ${apellido} y Argentina se quedó con la Copa America, segui por aca...`
    },
    {
        id: 37,
        img:"../recursos/img/Scaloni3.jpg",
        alt:"imagen",
        texto: `-Quiero pedirles disculpas por mi comportamiento el domingo pasado. No quise lastimar a nadie, pero sepan entender que estamos siempre expuestos a las críticas de la prensa, quienes no nos conocen. No saben realmente quien soy yo, el ${apodo}, quienes mis ayudantes. Le pido perdón al autor de este libro, quien a pesar de todo, se que es un hincha mas, y que desea que Argentina sea campeón en todo lo que juegue. 
        A Los Dogos por inspirarnos, a Grondona por su apoyo y a este equipo, por el que nadie daba dos pesos, pero que despues de 18 años, pudo reconquistar la Copa America. Ahora, vamos por el mundial...
        `,
        op1: 35,
        op2: 22,
        btn1: `Si esta faceta de ${apellido} haciendose el bueno te genera mas odio, veni por aca...`,
        btn2: `Si el ${apodo} se ganó la continuidad hasta el Mundial 2014 en Brasil, segui por aca...`
    },
]

