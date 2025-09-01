 // Database
        const bibleVerses = [
             {
                text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna.",
                reference: "Juan 3:16"
            },
            {
                text: "El Señor es mi pastor, nada me faltará.",
                reference: "Salmos 23:1"
            },
            {
                text: "Todo lo puedo en Cristo que me fortalece.",
                reference: "Filipenses 4:13"
            },
            {
                text: "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
                reference: "1 Pedro 5:7"
            },
            {
                text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
                reference: "Isaías 41:10"
            },
            {
                text: "La palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón.",
                reference: "Hebreos 4:12"
            },
            {
                text: "Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas.",
                reference: "Proverbios 3:5-6"
            },
            {
                text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
                reference: "Isaías 40:31"
            },
            {
                text: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.",
                reference: "Juan 14:6"
            },
            {
                text: "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",
                reference: "1 Corintios 13:4"
            },
            {
                text: "Porque yo sé los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de maldad, a fin de darles un futuro y una esperanza.",
                reference: "Jeremías 29:11"
            },
            {
                text: "Encomienda al Señor tus obras, y tus proyectos se cumplirán.",
                reference: "Proverbios 16:3"
            },
            {
                text: "El fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio.",
                reference: "Gálatas 5:22-23"
            },
            {
                text: "Amén; la bendición y la gloria y la sabiduría y la acción de gracias y la honra y el poder y la fortaleza, sean a nuestro Dios por los siglos de los siglos.",
                reference: "Apocalipsis 7:12"
            },
            {
                text: "Porque nada hay imposible para Dios.",
                reference: "Lucas 1:37"
            },
            {
                text: "El principio de la sabiduría es el temor de Jehová; buen entendimiento tienen todos los que practican sus mandamientos; su loor permanece para siempre.",
                reference: "Salmos 111:10"
            },
            {
                text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
                reference: "Romanos 8:28"
            },
            {
                text: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.",
                reference: "2 Timoteo 1:7"
            },
            {
                text: "Fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar.",
                reference: "1 Corintios 10:13"
            },
            {
                text: "Pero buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
                reference: "Mateo 6:33"
            },
            {
                text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
                reference: "Mateo 11:28"
            },
            {
                text: "En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo.",
                reference: "Juan 16:33"
            },
            {
                text: "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",
                reference: "Mateo 18:20"
            },
            {
                text: "El que no ama no ha conocido a Dios; porque Dios es amor.",
                reference: "1 Juan 4:8"
            },
            {
                text: "Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye.",
                reference: "1 Juan 5:14"
            },
            {
                text: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?",
                reference: "Salmos 27:1"
            },
            {
                text: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",
                reference: "Hebreos 11:1"
            },
            {
                text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",
                reference: "Efesios 2:8"
            },
            {
                text: "Antes bien, como aquel que os llamó es santo, sed también vosotros santos en toda vuestra manera de vivir.",
                reference: "1 Pedro 1:15"
            },
            {
                text: "El que encubre sus pecados no prosperará; mas el que los confiesa y se aparta alcanzará misericordia.",
                reference: "Proverbios 28:13"
            },
            {
                text: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.",
                reference: "Romanos 6:23"
            },
            {
                text: "Examíname, oh Dios, y conoce mi corazón; pruébame y conoce mis pensamientos.",
                reference: "Salmos 139:23"
            },
            {
                text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",
                reference: "Salmos 91:1"
            },
            {
                text: "Más bienaventurado es dar que recibir.",
                reference: "Hechos 20:35"
            },
            {
                text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.",
                reference: "Romanos 12:2"
            },
            {
                text: "El amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado.",
                reference: "Romanos 5:5"
            },
            {
                text: "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él.",
                reference: "1 Juan 4:16"
            },
            {
                text: "Por tanto, no os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal.",
                reference: "Mateo 6:34"
            },
            {
                text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.",
                reference: "Mateo 28:19"
            },
            {
                text: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.",
                reference: "Santiago 1:5"
            },
            {
                text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna.",
                reference: "Juan 3:16"
            },
            {
                text: "El Señor es mi pastor, nada me faltará.",
                reference: "Salmos 23:1"
            },
            {
                text: "Todo lo puedo en Cristo que me fortalece.",
                reference: "Filipenses 4:13"
            },
            {
                text: "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
                reference: "1 Pedro 5:7"
            },
            {
                text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
                reference: "Isaías 41:10"
            },
            {
                text: "La palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón.",
                reference: "Hebreos 4:12"
            },
            {
                text: "Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas.",
                reference: "Proverbios 3:5-6"
            },
            {
                text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
                reference: "Isaías 40:31"
            },
            {
                text: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.",
                reference: "Juan 14:6"
            },
            {
                text: "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",
                reference: "1 Corintios 13:4"
            },
            {
                text: "Porque yo sé los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de maldad, a fin de darles un futuro y una esperanza.",
                reference: "Jeremías 29:11"
            },
            {
                text: "Encomienda al Señor tus obras, y tus proyectos se cumplirán.",
                reference: "Proverbios 16:3"
            },
            {
                text: "El fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio.",
                reference: "Gálatas 5:22-23"
            },
            {
                text: "Amén; la bendición y la gloria y la sabiduría y la acción de gracias y la honra y el poder y la fortaleza, sean a nuestro Dios por los siglos de los siglos.",
                reference: "Apocalipsis 7:12"
            },
            {
                text: "Porque nada hay imposible para Dios.",
                reference: "Lucas 1:37"
            },
            {
                text: "El principio de la sabiduría es el temor de Jehová; buen entendimiento tienen todos los que practican sus mandamientos; su loor permanece para siempre.",
                reference: "Salmos 111:10"
            },
            {
                text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
                reference: "Romanos 8:28"
            },
            {
                text: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.",
                reference: "2 Timoteo 1:7"
            },
            {
                text: "Fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar.",
                reference: "1 Corintios 10:13"
            },
            {
                text: "Pero buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
                reference: "Mateo 6:33"
            },
            {
                text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
                reference: "Mateo 11:28"
            },
            {
                text: "En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo.",
                reference: "Juan 16:33"
            },
            {
                text: "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",
                reference: "Mateo 18:20"
            },
            {
                text: "El que no ama no ha conocido a Dios; porque Dios es amor.",
                reference: "1 Juan 4:8"
            },
            {
                text: "Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye.",
                reference: "1 Juan 5:14"
            },
            {
                text: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?",
                reference: "Salmos 27:1"
            },
            {
                text: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",
                reference: "Hebreos 11:1"
            },
            {
                text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",
                reference: "Efesios 2:8"
            },
            {
                text: "Antes bien, como aquel que os llamó es santo, sed también vosotros santos en toda vuestra manera de vivir.",
                reference: "1 Pedro 1:15"
            },
            {
                text: "El que encubre sus pecados no prosperará; mas el que los confiesa y se aparta alcanzará misericordia.",
                reference: "Proverbios 28:13"
            },
            {
                text: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.",
                reference: "Romanos 6:23"
            },
            {
                text: "Examíname, oh Dios, y conoce mi corazón; pruébame y conoce mis pensamientos.",
                reference: "Salmos 139:23"
            },
            {
                text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",
                reference: "Salmos 91:1"
            },
            {
                text: "Más bienaventurado es dar que recibir.",
                reference: "Hechos 20:35"
            },
            {
                text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.",
                reference: "Romanos 12:2"
            },
            {
                text: "El amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado.",
                reference: "Romanos 5:5"
            },
            {
                text: "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él.",
                reference: "1 Juan 4:16"
            },
            {
                text: "Por tanto, no os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal.",
                reference: "Mateo 6:34"
            },
            {
                text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.",
                reference: "Mateo 28:19"
            },
            {
                text: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.",
                reference: "Santiago 1:5"
            },
            {
                text: "El que da al pobre no tendrá pobreza; el que aparta sus ojos tendrá muchas maldiciones.",
                reference: "Proverbios 28:27"
            },
            {
                text: "El corazón alegre constituye buen remedio; mas el espíritu triste seca los huesos.",
                reference: "Proverbios 17:22"
            },
            {
                text: "Mejor es el poco con el temor de Jehová, que el gran tesoro donde hay turbación.",
                reference: "Proverbios 15:16"
            },
            {
                text: "El que con sabiduría enseña, encamina a los demás por sendas de bendición.",
                reference: "Proverbios 12:26"
            },
            {
                text: "El que tiene misericordia del pobre, a Jehová da prestado, y él le pagará su buena obra.",
                reference: "Proverbios 19:17"
            },
            {
                text: "El que sigue la justicia y la misericordia hallará la vida, la justicia y la honra.",
                reference: "Proverbios 21:21"
            },
            {
                text: "El que guarda su boca y su lengua, su alma guarda de angustias.",
                reference: "Proverbios 21:23"
            },
            {
                text: "El que confía en su propio corazón es necio; mas el que camina en sabiduría será librado.",
                reference: "Proverbios 28:26"
            },
            {
                text: "El que cubre la falta busca amistad; mas el que la divulga, aparta al amigo.",
                reference: "Proverbios 17:9"
            },
            {
                text: "El que anda en integridad anda confiado; mas el que pervierte sus caminos será quebrantado.",
                reference: "Proverbios 10:9"
            },
            {
                text: "El que guarda el mandamiento guarda su alma; mas el que menosprecia sus caminos morirá.",
                reference: "Proverbios 19:16"
            },
            {
                text: "El que con cepo guarda la higuera comerá su fruto; y el que guarda a su señor será honrado.",
                reference: "Proverbios 27:18"
            },
            {
                text: "El que siembra iniquidad, miseria segará; y la vara de su insolencia se quebrará.",
                reference: "Proverbios 22:8"
            },
            {
                text: "El que escoge la sabiduría tiene el camino de la vida; el que abraza la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que tiene entendimiento ama su alma; el que guarda la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que con sabiduría enseña, encamina a los demás por sendas de bendición.",
                reference: "Proverbios 12:26"
            },
            {
                text: "El que tiene misericordia del pobre, a Jehová da prestado, y él le pagará su buena obra.",
                reference: "Proverbios 19:17"
            },
            {
                text: "El que sigue la justicia y la misericordia hallará la vida, la justicia y la honra.",
                reference: "Proverbios 21:21"
            },
            {
                text: "El que guarda su boca y su lengua, su alma guarda de angustias.",
                reference: "Proverbios 21:23"
            },
            {
                text: "El que confía en su propio corazón es necio; mas el que camina en sabiduría será librado.",
                reference: "Proverbios 28:26"
            },
            {
                text: "El que cubre la falta busca amistad; mas el que la divulga, aparta al amigo.",
                reference: "Proverbios 17:9"
            },
            {
                text: "El que anda en integridad anda confiado; mas el que pervierte sus caminos será quebrantado.",
                reference: "Proverbios 10:9"
            },
            {
                text: "El que guarda el mandamiento guarda su alma; mas el que menosprecia sus caminos morirá.",
                reference: "Proverbios 19:16"
            },
            {
                text: "El que con cepo guarda la higuera comerá su fruto; y el que guarda a su señor será honrado.",
                reference: "Proverbios 27:18"
            },
            {
                text: "El que siembra iniquidad, miseria segará; y la vara de su insolencia se quebrará.",
                reference: "Proverbios 22:8"
            },
            {
                text: "El que escoge la sabiduría tiene el camino de la vida; el que abraza la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que tiene entendimiento ama su alma; el que guarda la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que con sabiduría enseña, encamina a los demás por sendas de bendición.",
                reference: "Proverbios 12:26"
            },
            {
                text: "El que tiene misericordia del pobre, a Jehová da prestado, y él le pagará su buena obra.",
                reference: "Proverbios 19:17"
            },
            {
                text: "El que sigue la justicia y la misericordia hallará la vida, la justicia y la honra.",
                reference: "Proverbios 21:21"
            },
            {
                text: "El que guarda su boca y su lengua, su alma guarda de angustias.",
                reference: "Proverbios 21:23"
            },
            {
                text: "El que confía en su propio corazón es necio; mas el que camina en sabiduría será librado.",
                reference: "Proverbios 28:26"
            },
            {
                text: "El que cubre la falta busca amistad; mas el que la divulga, aparta al amigo.",
                reference: "Proverbios 17:9"
            },
            {
                text: "El que anda en integridad anda confiado; mas el que pervierte sus caminos será quebrantado.",
                reference: "Proverbios 10:9"
            },
            {
                text: "El que guarda el mandamiento guarda su alma; mas el que menosprecia sus caminos morirá.",
                reference: "Proverbios 19:16"
            },
            {
                text: "El que con cepo guarda la higuera comerá su fruto; y el que guarda a su señor será honrado.",
                reference: "Proverbios 27:18"
            },
            {
                text: "El que siembra iniquidad, miseria segará; y la vara de su insolencia se quebrará.",
                reference: "Proverbios 22:8"
            },
            {
                text: "El que escoge la sabiduría tiene el camino de la vida; el que abraza la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que tiene entendimiento ama su alma; el que guarda la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que con sabiduría enseña, encamina a los demás por sendas de bendición.",
                reference: "Proverbios 12:26"
            },
            {
                text: "El que tiene misericordia del pobre, a Jehová da prestado, y él le pagará su buena obra.",
                reference: "Proverbios 19:17"
            },
            {
                text: "El que sigue la justicia y la misericordia hallará la vida, la justicia y la honra.",
                reference: "Proverbios 21:21"
            },
            {
                text: "El que guarda su boca y su lengua, su alma guarda de angustias.",
                reference: "Proverbios 21:23"
            },
            {
                text: "El que confía en su propio corazón es necio; mas el que camina en sabiduría será librado.",
                reference: "Proverbios 28:26"
            },
            {
                text: "El que cubre la falta busca amistad; mas el que la divulga, aparta al amigo.",
                reference: "Proverbios 17:9"
            },
            {
                text: "El que anda en integridad anda confiado; mas el que pervierte sus caminos será quebrantado.",
                reference: "Proverbios 10:9"
            },
            {
                text: "El que guarda el mandamiento guarda su alma; mas el que menosprecia sus caminos morirá.",
                reference: "Proverbios 19:16"
            },
            {
                text: "El que con cepo guarda la higuera comerá su fruto; y el que guarda a su señor será honrado.",
                reference: "Proverbios 27:18"
            },
            {
                text: "El que siembra iniquidad, miseria segará; y la vara de su insolencia se quebrará.",
                reference: "Proverbios 22:8"
            },
            {
                text: "El que escoge la sabiduría tiene el camino de la vida; el que abraza la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que tiene entendimiento ama su alma; el que guarda la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que con sabiduría enseña, encamina a los demás por sendas de bendición.",
                reference: "Proverbios 12:26"
            },
            {
                text: "El que tiene misericordia del pobre, a Jehová da prestado, y él le pagará su buena obra.",
                reference: "Proverbios 19:17"
            },
            {
                text: "El que sigue la justicia y la misericordia hallará la vida, la justicia y la honra.",
                reference: "Proverbios 21:21"
            },
            {
                text: "El que guarda su boca y su lengua, su alma guarda de angustias.",
                reference: "Proverbios 21:23"
            },
            {
                text: "El que confía en su propio corazón es necio; mas el que camina en sabiduría será librado.",
                reference: "Proverbios 28:26"
            },
            {
                text: "El que cubre la falta busca amistad; mas el que la divulga, aparta al amigo.",
                reference: "Proverbios 17:9"
            },
            {
                text: "El que anda en integridad anda confiado; mas el que pervierte sus caminos será quebrantado.",
                reference: "Proverbios 10:9"
            },
            {
                text: "El que guarda el mandamiento guarda su alma; mas el que menosprecia sus caminos morirá.",
                reference: "Proverbios 19:16"
            },
            {
                text: "El que con cepo guarda la higuera comerá su fruto; y el que guarda a su señor será honrado.",
                reference: "Proverbios 27:18"
            },
            {
                text: "El que siembra iniquidad, miseria segará; y la vara de su insolencia se quebrará.",
                reference: "Proverbios 22:8"
            },
            {
                text: "El que escoge la sabiduría tiene el camino de la vida; el que abraza la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que tiene entendimiento ama su alma; el que guarda la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que con sabiduría enseña, encamina a los demás por sendas de bendición.",
                reference: "Proverbios 12:26"
            },
            {
                text: "El que tiene misericordia del pobre, a Jehová da prestado, y él le pagará su buena obra.",
                reference: "Proverbios 19:17"
            },
            {
                text: "El que sigue la justicia y la misericordia hallará la vida, la justicia y la honra.",
                reference: "Proverbios 21:21"
            },
            {
                text: "El que guarda su boca y su lengua, su alma guarda de angustias.",
                reference: "Proverbios 21:23"
            },
            {
                text: "El que confía en su propio corazón es necio; mas el que camina en sabiduría será librado.",
                reference: "Proverbios 28:26"
            },
            {
                text: "El que cubre la falta busca amistad; mas el que la divulga, aparta al amigo.",
                reference: "Proverbios 17:9"
            },
            {
                text: "El que anda en integridad anda confiado; mas el que pervierte sus caminos será quebrantado.",
                reference: "Proverbios 10:9"
            },
            {
                text: "El que guarda el mandamiento guarda su alma; mas el que menosprecia sus caminos morirá.",
                reference: "Proverbios 19:16"
            },
            {
                text: "El que con cepo guarda la higuera comerá su fruto; y el que guarda a su señor será honrado.",
                reference: "Proverbios 27:18"
            },
            {
                text: "El que siembra iniquidad, miseria segará; y la vara de su insolencia se quebrará.",
                reference: "Proverbios 22:8"
            },
            {
                text: "El que escoge la sabiduría tiene el camino de la vida; el que abraza la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            },
            {
                text: "El que tiene entendimiento ama su alma; el que guarda la inteligencia hallará el bien.",
                reference: "Proverbios 19:8"
            }
        ];

        // Elementos DOM
        const verseText = document.getElementById('verseText');
        const verseReference = document.getElementById('verseReference');
        const verseDate = document.getElementById('verseDate');
        const shareVerseBtn = document.getElementById('shareVerseBtn');
        const newVerseBtn = document.getElementById('newVerseBtn');
        const notification = document.getElementById('notification');

        // Show current date
        function showCurrentDate() {
            const today = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            verseDate.textContent = today.toLocaleDateString('es-ES', options);
        }

        // Obtain daily date
        function getDailyVerse() {
            const today = new Date();
            const startOfYear = new Date(today.getFullYear(), 0, 0);
            const diff = today - startOfYear;
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);
            
            const verseIndex = dayOfYear % bibleVerses.length;
            return bibleVerses[verseIndex];
        }

        // Show verse
        function displayVerse(verse) {
            verseText.textContent = `"${verse.text}"`;
            verseReference.textContent = verse.reference;
        }

        // Show notification
        function showNotification(message) {
            notification.textContent = message;
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        }

        // Share verse
        function shareVerse() {
            const verseToShare = `"${verseText.textContent}" - ${verseReference.textContent}`;

            // Check if the browser supports the share API
            if (navigator.share) {
                navigator.share({
                    title: 'Versículo del Día',
                    text: verseToShare,
                    url: window.location.href
                })
                .catch(error => {
                    console.log('Error al compartir:', error);
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(verseToShare)
                    .then(() => {
                        showNotification('Versículo copiado al portapapeles');
                    })
                    .catch(error => {
                        console.error('Error al copiar:', error);
                    });
            }
        }

        // Obtain random verse
        function getRandomVerse() {
            const randomIndex = Math.floor(Math.random() * bibleVerses.length);
            return bibleVerses[randomIndex];
        }

        // Initialize
        function init() {
            showCurrentDate();

            // Load daily verse
            const dailyVerse = getDailyVerse();
            displayVerse(dailyVerse);
            
            // Event Listeners
            shareVerseBtn.addEventListener('click', shareVerse);
            
            newVerseBtn.addEventListener('click', () => {
                const randomVerse = getRandomVerse();
                displayVerse(randomVerse);
                showNotification('Versículo aleatorio cargado');
            });
        }

        // Execute when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', init);
