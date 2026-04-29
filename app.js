const scripts = {
    es: {
        coldCall: {
            hasSite: `"[SALUDO]. Te soy directo: no te llamo para comprarte nada.

Estaba viendo [Nicho] en la zona y di con ustedes. El nivel que manejan es muy bueno… pero la web que tienen hoy no refleja eso ni de cerca.

Cuando alguien entra ahí, no percibe el valor real y termina comparándote con opciones más baratas o más “modernas”.

Decime algo… ¿vos sentís que hoy tu web te ayuda a cerrar mejores clientes o que simplemente está ahí y no mueve la aguja?"

*(PAUSA – que responda)*

"Claro, es lo que suelo ver.

Mirá, soy [Speaker]. Me dedico justamente a resolver ese punto.

Viendo eso, me adelanté y armé un borrador de cómo debería verse tu negocio para que transmita el nivel que realmente tenés y te traiga clientes más calificados.

No estoy seguro si esto encaja con lo que ustedes buscan ahora, pero verlo no tiene costo.

Son 5 minutos, te comparto pantalla y vos decidís si tiene sentido o no.

Mañana tengo la agenda bastante cargada, pero te hago un hueco rápido… ¿te queda mejor a las 10 o a las 11?"`,
            noSite: `"[SALUDO]. Te soy sincero: no te llamo para contratarte ni venderte algo ahora.

Estaba buscando [Nicho] por la zona y vi que tienen muy buena reputación… pero me llamó la atención que no encontré una web oficial.

Hoy eso significa algo simple: cuando alguien te busca, Google decide mandarlo a la competencia que sí está mejor posicionada.

Decime… ¿vos sos consciente de cuántos posibles clientes se te están yendo por no tener esa presencia?"

*(PAUSA – que responda)*

"Entiendo.

Mirá, soy [Speaker]. Trabajo con negocios como el tuyo en eso puntual.

Como vi el potencial que tienen, me adelanté y armé un borrador de cómo debería verse tu negocio online para captar esos clientes que hoy se están perdiendo.

No sé si esto es prioridad para ustedes ahora, pero verlo no tiene costo.

Son 5 minutos, te muestro en pantalla y vos decidís.

Mañana estoy bastante justo de tiempo, pero te hago un hueco… ¿10 o 11 te sirve mejor?"`
        },
        stage2: {
            title: "Fase 2: El Cierre (Durante la Llamada)",
            content: `1. Encuadre (Cero presión):
"Gracias por los 5 minutos, [Nombre]. Como te dije, mi objetivo es mostrarte la radiografía técnica de [Marca] y la solución que ya preparé. Miralo sin compromiso, si al final sentís que no es para vos, te llevás la información y listo."

2. Mostrar el Problema (Datos duros):
"Acá podés ver que tu sitio actual tarda X segundos en cargar y no está optimizado para móviles. Eso, en lenguaje de ventas, es una fuga de dinero constante."

3. El 'Wow' (Mostrar Prototipo):
"Ahora, mirá esto. Esta es la experiencia inmersiva que diseñamos para vos. Fijate la fluidez de las animaciones y cómo el diseño guía al cliente directo al botón de WhatsApp. Esto no es una plantilla, es código de vanguardia diseñado para convertir."

4. El Cierre Nick:
"Mi sistema es simple: el trabajo pesado ya está hecho. Si te gusta lo que ves y querés que lo lancemos oficialmente para [Marca], el costo es de [Precio], llave en mano. Si preferís quedarte como estás, no hay problema. ¿Qué te pareció el diseño?"`
        },
        whatsapp: {
            hasSite: `**Mensaje 1 (gancho):**
"[SALUDO]. Te escribo directo: no soy cliente ni te voy a vender nada ahora.
Estuve viendo tu negocio y la verdad, el nivel que tenés es bueno… pero la web que estás usando hoy no lo refleja.
Eso hace que gente que podría pagarte bien termine yéndose con otros que “parecen” más profesionales online.

Decime algo, siendo honesto:
¿alguna vez pensaste cuántos clientes estás perdiendo por esa diferencia entre lo que sos y lo que mostrás?"

*(PAUSA. NO MANDES MÁS HASTA QUE RESPONDA)*

---
**Mensaje 2 (propuesta + cierre):**
"Te entiendo. Mirá, perdón que no me presenté bien: soy [Speaker]. Me dedico a justamente corregir eso en negocios como el tuyo.

Como vi potencial, ya me adelanté y armé un diseño de cómo debería verse tu negocio para atraer mejores clientes.

Verlo no tiene costo.
Son 5 minutos, te comparto pantalla y vos decidís si tiene sentido o no.

Mañana tengo agenda cargada, pero te hago un hueco.
¿10:00 o 11:00 te queda mejor?"

---
**Si pide link / PDF:**
"Me encantaría mandártelo, pero por acá pierde todo el sentido y no vas a ver el valor real.
Por eso te lo muestro yo en 5 minutos y listo.
¿10 o 11?"

---
**Si tira “no me interesa”:**
"Perfecto, entonces entiendo que ya estás cubriendo todo el flujo de clientes que necesitás y no hay fuga.
Si en algún momento querés validar eso, lo vemos.
Sino, seguimos así y listo."`,
            noSite: `**Mensaje 1 (gancho):**
"[SALUDO]. Te escribo directo: no soy cliente ni te quiero vender nada ahora.

Estuve buscando [Nicho] en la zona y vi que tu negocio tiene muy buena reputación…
pero me llamó la atención que no tenés web.

Hoy eso significa que Google está mandando clientes tuyos directo a la competencia.

Decime algo:
¿tenés idea cuántas oportunidades estás perdiendo por no estar ahí?"

*(PAUSA. ESPERAR RESPUESTA)*

---
**Mensaje 2 (propuesta + cierre):**
"Entiendo. Mirá, soy [Speaker]. Me dedico a ayudar negocios como el tuyo a capturar esos clientes que hoy se escapan.

Como ya analicé tu caso, me adelanté y armé un diseño de cómo debería verse tu negocio online para atraer ese tipo de clientes.

Verlo es gratis.
Son 5 minutos, te comparto pantalla y vos mismo decidís si sirve o no.

Mañana estoy a full, pero te hago un hueco rápido.
¿10:00 o 11:00?"

---
**Si pide que se lo mandes:**
"Me gustaría pasártelo, pero por acá no se entiende nada y pierde todo el impacto.
Por eso lo vemos juntos 5 minutos y listo.
¿10 o 11?"

---
**Si responde hostil:**
"Te entiendo, si ya estás cubierto y no necesitás más clientes, entonces no tiene sentido.

Retiro la propuesta y te dejo tranquilo.
Si en algún momento querés validar eso, lo vemos."`
        },
        rebuttals: [
            // Frente 1
            { c: "Frente 1: Resistencia General", t: "No me interesa", q: "no interesa gracias", a: "Te re entiendo, y hacés bien en decirme que no porque seguro te viven bombardeando agencias. No te quiero vender un plan. Literalmente te hablo porque vi que tu web actual te hace perder clientes y ya me adelanté a armarte la solución visual gratis. Dame 5 minutos para mostrártela. Si no te sirve, me cortás y listo." },
            { c: "Frente 1: Resistencia General", t: "Ocupado: 'Estoy a mil / No tengo tiempo'", q: "tiempo ocupado mil", a: "Justamente por eso te hablo, sé que como dueño de negocio estás a mil. Por eso no te pido reuniones de una hora ni que llenes formularios. Ya me adelanté e hice todo el laburo pesado yo. Son 5 minutos de reloj. Te muestro la solución visual y te dejo seguir laburando. ¿Te robo 5 minutos hoy a las 17 o mañana a la mañana?" },
            { c: "Frente 1: Resistencia General", t: "Boca a boca: 'Sólo vivimos de indicação'", q: "boca boca recomendacion indicacao", a: "Pô, o trabalho de vocês debe ser muito bom mismo entonces. Pero fijate esto: la persona que recibe esa recomendación va a ir a buscarte a Google para confirmar, y si ve un sitio que da mala impresión o no encuentra nada, desiste y es plata que dejás en la mesa. Dejame mostrarte en 5 minutos cómo agarrar a esos clientes." },
            { c: "Frente 1: Resistencia General", t: "Blindado: 'Ya tenemos a alguien / Mi sobrino'", q: "sobrino agencia manejando alguien", a: "¡Qué bueno que ya tengan a alguien! Mejor, así no arrancan de cero. Igual, como ya me tomé el atrevimiento de armarles este prototipo premium para [Marca], conectate 5 minutos y miralo. Capaz ves algo en mi diseño que te vuela la cabeza y se lo podés pedir a la persona que les maneja la web ahora para que mejoren lo que tienen. Todo ganancia para vos." },
            { c: "Frente 1: Resistencia General", t: "Ya se está ocupando: 'Já tô vendo isso'", q: "viendo tratando ocupando massa", a: "Que massa! Pero como yo ya tengo el sitio de [Marca] prontinho, te propongo que le des una mirada gratuita de 5 minutos. Si el mío está mejor, directamente usás el mío y ahorrás tiempo. ¿Te parece?" },

            // Frente 2
            { c: "Frente 2: Pantallas de Humo", t: "Dejame pensarlo", q: "pensarlo aviso despues", a: "Obvio, pensalo tranquilo. Pero por mi experiencia con dueños de negocios, cuando me dicen 'dejame pensarlo' suele ser porque el diseño no te convenció o es un tema de presupuesto. Siendo 100% transparentes, ¿por dónde viene tu duda?" },
            { c: "Frente 2: Pantallas de Humo", t: "El Fantasma: 'Después te aviso / Me pongo en contacto'", q: "despues fantasma contacto luego mentira", a: "Mirá [Nombre], siendo 100% honesto, cuando me dicen 'después te aviso', casi nunca vuelven a aparecer. Vamos al grano para no perder tiempo ninguno de los dos: ¿qué sentís que está faltando realmente para que avancemos con esto hoy? ¿Es el diseño, es la plata, o dije algo mal?" },
            { c: "Frente 2: Pantallas de Humo", t: "Mandame el PDF por WhatsApp", q: "pdf whatsapp mandame enviar", a: "Los reportes técnicos crudos son inentendibles si no sos desarrollador. Además, quiero mostrarte el prototipo de [Marca] en vivo con las animaciones. Un link suelto pierde el sentido. Son 5 minutos de pantalla, ves el problema y la solución. ¿Agendamos?" },
            { c: "Frente 2: Pantallas de Humo", t: "El 'Sí a todo' (No compra pero no dice por qué)", q: "si a todo falso picaporte", a: "(Hacé que te vas/terminás la llamada). Bueno [Nombre], gracias por tu tiempo. Ah, antes de cortar, haceme un favor: fuera de libreto, ¿cuál fue la razón real por la que esto no te cerró hoy? (Esperás). Qué bueno que me decís eso, se ve que no te lo expliqué bien. Dame un minuto más y te muestro cómo resolvemos exactamente eso." },

            // Frente 3
            { c: "Frente 3: Heridas del Pasado", t: "Miedo a Estafas: 'Ya contraté a alguien y me cagaron'", q: "estafa agencia humo cagaron", a: "Te re entiendo. Hay mucha gente vendiendo humo. Pensando en esa vez que te fue mal... ¿qué sentís que le faltó a esa agencia? (Esperás). Exacto. Ahora decime vos... viendo el prototipo que ya te armé para [Marca] y cómo funciona, ¿por qué creés que esto es distinto a lo que probaste antes? (Que se venda solo)." },
            { c: "Frente 3: Heridas del Pasado", t: "Estafado 2: 'Me quisieron cobrar carisimo'", q: "caro estafado plata reales 3000", a: "Te entiendo, 3 mil reales es mucha plata. Y si te dijera que yo ya hice el sitio de [Marca], y si llega a gustarte, el costo es una fracción mínima de eso? No cuesta nada mirar la pantalla, si no te gusta, simplemente te vas." },
            { c: "Frente 3: Heridas del Pasado", t: "El Cazador de Garantías: '¿Qué garantía me das?'", q: "garantia asegurar funcionar", a: "Mirá [Nombre], te doy dos garantías concretas. La primera: te garantizo que si seguís con la web que [Marca] tiene hoy, vas a seguir perdiendo los mismos clientes que perdés ahora. La segunda: te garantizo que si probamos este nuevo ecosistema, los resultados van a cambiar drásticamente. Vos decidís con cuál de las dos garantías te querés quedar." },

            // Frente 4
            { c: "Frente 4: Poder y Ego", t: "El Sabelotodo: 'Presume que sabe más'", q: "sabelotodo sabe marketing experto ego", a: "(No discutas. Alimentá el ego). ¡Qué locura, se nota que la tenés clarísima con esto! Con razón [Marca] está donde está. Justamente por eso, como entendés de retención y conversión mejor que el promedio, este ecosistema inmersivo te va a hacer mucho sentido. Fijate cómo la estructura de navegación hace exactamente lo que vos decís..." },
            { c: "Frente 4: Poder y Ego", t: "Detalles técnicos ahora", q: "errores ahora cuales", a: "A simple vista vi problemas en la estructura de lectura para Google y detalles en la conversión móvil. Pero soy un profesional, no hablo al aire. Quiero meter a [Marca] en mis herramientas, sacar el reporte exacto y mostrártelo con datos duros. Por eso te pido 5 minutos mañana." },

            // Frente 5
            { c: "Frente 5: Logística y Financiero", t: "Es muy caro (Anclaje)", q: "caro precio presupuesto reales 10000", a: "No estamos hablando de precios ahora, pero para que te des una idea, agencias en São Paulo están cobrando 10 mil reales por un sitio inmersivo de este nivel. Yo ya te armé la maqueta gratis. Mirala 5 minutos, y si sentís que es lo que [Marca] necesita para no perder clientes, te vas a sorprender de lo accesible que es." },
            { c: "Frente 5: Logística y Financiero", t: "El Escudo del Tercero: 'Tengo que hablarlo con mi socio'", q: "socio pareja escudo tercero hablarlo", a: "Entiendo perfecto. Pero sacando a tu socio de la ecuación por un segundo, ¿a vos te convence al 100%? (Si dice sí): Supongamos que hablás con tu socio y te dice que NO. ¿Qué hacés? ¿Dejás la web de [Marca] como está perdiendo clientes, o le peleás la decisión porque sabés que esto es lo que necesitan?" }
        ]andame enviar", a: "Los reportes técnicos crudos son inentendibles si no sos desarrollador. Además, quiero mostrarte el prototipo de [Marca] en vivo con las animaciones. Un link suelto pierde el sentido. Son 5 minutos de pantalla, ves el problema y la solución. ¿Agendamos?" }
        ]
    },
    pt: {
        coldCall: {
            hasSite: `"[SALUDO]. Vou ser direto: não te ligo para comprar nada.

Estava vendo [Nicho] na região e encontrei vocês. O nível que entregam é muito bom… mas o site que têm hoje não reflete isso nem de perto.

Quando alguém entra lá, não percebe o valor real e acaba te comparando com opções mais baratas ou mais 'modernas'.

Me diz uma coisa… você sente que hoje seu site te ajuda a fechar com melhores clientes ou simplesmente está lá e não faz diferença?"

*(PAUSA – que responda)*

"Claro, é o que costumo ver.

Olha, sou [Speaker]. Me dedico justamente a resolver esse ponto.

Vendo isso, me adientei e montei um rascunho de como deveria ser o seu negócio para que transmita o nível que você realmente tem e te traga clientes mais qualificados.

Não tenho certeza se isso se encaixa com o que vocês buscam agora, mas ver não custa nada.

São 5 minutos, te compartilho a tela e você decide se faz sentido ou não.

Amanhã tenho a agenda bem cheia, mas abro um espaço rápido… fica melhor às 10 ou às 11?"`,
            noSite: `"[SALUDO]. Sou sincero: não te ligo para contratar nem te vender algo agora.

Estava buscando [Nicho] pela região e vi que têm uma reputação muito boa… mas me chamou a atenção que não encontrei um site oficial.

Hoje isso significa algo simples: quando alguém te busca, o Google decide mandá-lo para a concorrência que sim está melhor posicionada.

Me diz… você tem noção de quantos possíveis clientes estão indo embora por não ter essa presença?"

*(PAUSA – que responda)*

"Entendo.

Olha, sou [Speaker]. Trabalho com negócios como o seu nisso pontualmente.

Como vi o potencial que têm, me adientei e montei um rascunho de como deveria ser a sua presença online para captar esses clientes que hoje estão se perdendo.

Não sei se isso é prioridade para vocês agora, mas ver não custa nada.

São 5 minutos, te mostro na tela e você decide.

Amanhã estou com o tempo bem apertado, mas abro um espaço… 10 ou 11 fica melhor?"`
        },
        stage2: {
            title: "Fase 2: O Fechamento (Durante a Chamada)",
            content: `1. Enquadramento:
"Obrigado pelos 5 minutos, [Nombre]. Como eu disse, meu objetivo é mostrar a radiografia técnica da [Marca] e a solução que já preparei. Veja sem compromisso, se no final sentir que não é para você, você leva a informação e pronto."

2. Mostrar o Problema:
"Aqui você pode ver que seu site atual demora X segundos para carregar. Isso é perda de dinheiro constante."

3. O 'Wow' (Mostrar Protótipo):
"Agora, olha isso. Esta é a experiência imersiva que desenhamos para você. Veja a fluidez das animações. Isso é tecnologia de ponta desenhada para converter."

4. O Fechamento Nick:
"Meu sistema é simples: o trabalho pesado já está pronto. Se você gostou e quer que lancemos oficialmente para a [Marca], o custo é de [Precio]. Se preferir continuar como está, sem problemas. O que achou do design?"`
        },
        whatsapp: {
            hasSite: `**Mensagem 1 (gancho):**
"[SALUDO]. Te escrevo direto: não sou cliente nem vou te vender nada agora.
Estive vendo o seu negócio e a verdade é que o nível que vocês têm é bom… mas o site que estão usando hoje não reflete isso.
Isso faz com que pessoas que poderiam te pagar bem acabem indo com outros que 'parecem' mais profissionais online.

Me diz uma coisa, sendo honesto:
você já parou pra pensar quantos clientes está perdendo por essa diferença entre o que você é e o que mostra?"

*(PAUSA. NÃO MANDE MAIS ATÉ QUE RESPONDA)*

---
**Mensagem 2 (proposta + fechamento):**
"Te entendo. Olha, desculpe não me apresentar direito: sou [Speaker]. Me dedico justamente a corrigir isso em negócios como o seu.

Como vi potencial, já me adientei e montei um design de como deveria ser o seu negócio para atrair melhores clientes.

Ver não tem custo.
São 5 minutos, te compartilho a tela e você decide se faz sentido ou não.

Amanhã tenho a agenda cheia, mas abro um espaço.
10:00 ou 11:00 fica melhor para você?"

---
**Se pedir link / PDF:**
"Adoraria te mandar, mas por aqui perde todo o sentido e você não vai ver o valor real.
Por isso te mostro em 5 minutos e pronto.
10 ou 11?"

---
**Se disser "não me interessa":**
"Perfeito, então entendo que já estão cobrindo todo o fluxo de clientes que precisam e não há fuga.
Se em algum momento quiser validar isso, a gente vê.
Senão, seguimos assim e tudo certo."`,
            noSite: `**Mensagem 1 (gancho):**
"[SALUDO]. Te escrevo direto: não sou cliente nem quero te vender nada agora.

Estive buscando [Nicho] na região e vi que o seu negócio tem uma reputação muito boa…
mas me chamou a atenção que não têm site.

Hoje isso significa que o Google está mandando seus clientes direto para a concorrência.

Me diz uma coisa:
você tem ideia de quantas oportunidades está perdendo por não estar lá?"

*(PAUSA. ESPERAR RESPOSTA)*

---
**Mensagem 2 (proposta + fechamento):**
"Entendo. Olha, sou [Speaker]. Me dedico a ajudar negócios como o seu a capturar esses clientes que hoje escapam.

Como já analisei seu caso, me adientei e montei um design de como deveria ser o seu negócio online para atrair esse tipo de clientes.

Ver é grátis.
São 5 minutos, te compartilho a tela e você mesmo decide se serve ou não.

Amanhã estou corrido, mas abro um espaço rápido.
10:00 ou 11:00?"

---
**Se pedir para mandar:**
"Gostaria de passar, mas por aqui não dá pra entender nada e perde todo o impacto.
Por isso vemos juntos em 5 minutos e pronto.
10 ou 11?"

---
**Se responder hostil:**
"Te entendo, se já estão cobertos e não precisam de mais clientes, então não faz sentido.

Retiro a proposta e te deixo tranquilo.
Se em algum momento quiser validar isso, a gente vê."`
        },
        rebuttals: [
            // Frente 1
            { c: "Frente 1: Resistência Geral", t: "Não me interessa", q: "não interessa obrigado", a: "Eu te entendo, e você faz bem em dizer não, pois muitas agências vendem fumaça. Não quero te vender um plano. Só te ligo porque vi que seu site atual faz você perder clientes e já montei a solução visual grátis. Me dê 5 minutos. Se não servir, desligamos." },
            { c: "Frente 1: Resistência Geral", t: "Ocupado: 'Estou a mil / Não tenho tempo'", q: "tempo ocupado mil", a: "Justamente por isso te ligo, sei que como dono de negócio você está a mil. Por isso não te peço reuniões de uma hora. Já fiz todo o trabalho pesado. São 5 minutos. Te mostro a solução visual e te deixo trabalhar. Pode hoje às 17h ou amanhã cedo?" },
            { c: "Frente 1: Resistência Geral", t: "Boca a boca: 'Só vivemos de indicação'", q: "boca boca recomendação indicacao", a: "Pô, o trabalho de vocês deve ser muito bom mesmo então. Mas veja só: a pessoa que recebe essa indicação vai te buscar no Google para confirmar, e se vir um site ruim ou não encontrar nada, desiste. Deixe-me te mostrar em 5 minutos como segurar esses clientes." },
            { c: "Frente 1: Resistência Geral", t: "Blindado: 'Já temos alguém / Sobrinho'", q: "sobrinho agencia alguem", a: "Que bom que já têm alguém! Melhor ainda. Mas como já montei este protótipo premium para a [Marca], conecte-se 5 minutos e veja. Talvez você veja algo no meu design que te surpreenda e você possa pedir para quem cuida do seu site hoje. Tudo ganho para você." },
            { c: "Frente 1: Resistência Geral", t: "Já está resolvendo: 'Já tô vendo isso'", q: "vendo tratando ocupando massa", a: "Que massa! Mas como eu já tenho o site da [Marca] prontinho, te proponho dar uma olhada gratuita de 5 minutos. Se o meu estiver melhor, você usa o meu e economiza tempo. Pode ser?" },

            // Frente 2
            { c: "Frente 2: Cortinas de Fumaça", t: "Deixe-me pensar", q: "pensar aviso depois", a: "Claro, pense tranquilo. Mas pela minha experiência, quando dizem 'vou pensar' é porque o design não convenceu ou é orçamento. Sendo 100% transparentes, por onde vem sua dúvida?" },
            { c: "Frente 2: Cortinas de Fumaça", t: "O Fantasma: 'Depois eu te ligo / Entro em contato'", q: "depois fantasma contato ligo mentira", a: "Olha [Nombre], sendo 100% honesto, quando me dizem 'depois eu te aviso', quase nunca voltam a aparecer. Vamos direto ao ponto para não perdermos tempo: o que você sente que está faltando realmente para avançarmos hoje? É o design, é o valor, ou eu falei algo errado?" },
            { c: "Frente 2: Cortinas de Fumaça", t: "Mande o PDF pelo WhatsApp", q: "pdf whatsapp mande enviar", a: "Os relatórios técnicos brutos são difíceis de entender. Além disso, quero te mostrar o protótipo da [Marca] ao vivo com as animações. Um link solto perde o sentido. São 5 minutos de tela. Agendamos?" },
            { c: "Frente 2: Cortinas de Fumaça", t: "O 'Sim pra tudo' (Não compra, mas não diz o porquê)", q: "sim pra tudo falso maçaneta", a: "(Finja que vai encerrar a chamada). Bom [Nombre], obrigado pelo seu tempo. Ah, antes de desligar, me faz um favor: sendo bem sincero, qual foi a razão real por trás de não fecharmos hoje? (Espere). Que bom que me disse isso, pelo visto eu não te expliquei direito. Me dá mais um minuto e te mostro como resolvemos exatamente isso." },

            // Frente 3
            { c: "Frente 3: Feridas do Passado", t: "Medo de Golpes: 'Já contratei uma agência e me enrolaram'", q: "golpe agência fumaça enrolaram", a: "Eu super te entendo. Tem muita gente vendendo fumaça. Pensando nessa vez que deu errado... o que você sente que faltou naquela agência? (Espere). Exato. Agora me diz você... vendo o protótipo que já montei para a [Marca] e como funciona, por que você acha que isso é diferente do que você testou antes? (Deixe que ele se venda)." },
            { c: "Frente 3: Feridas do Passado", t: "Estafado 2: 'Me cobraram caríssimo'", q: "caro estafado dinheiro reais 3000", a: "Eu te entendo, 3 mil reais é muito dinheiro. E se eu te dissesse que já fiz o site da [Marca] e, se você gostar, o custo é uma fração mínima disso? Não custa nada olhar a tela, se não gostar, você simplesmente vai embora." },
            { c: "Frente 3: Feridas do Passado", t: "O Caçador de Garantias: 'Qual a garantia?'", q: "garantia assegurar funcionar", a: "Olha [Nombre], te dou duas garantias concretas. A primeira: garanto que se você continuar com o site que a [Marca] tem hoje, vai continuar perdendo exatamente os mesmos clientes de agora. A segunda: garanto que se testarmos esse novo ecossistema, os resultados vão mudar drasticamente. Você decide com qual das duas garantias quer ficar." },

            // Frente 4
            { c: "Frente 4: Poder e Ego", t: "O Sabe-tudo: 'Acha que sabe mais'", q: "sabetudo sabe marketing especialista ego", a: "(Não discuta. Alimente o ego). Que legal, dá pra ver que você entende muito disso! Com razão a [Marca] está onde está. Justamente por isso, como você entende de retenção e conversão melhor que a média, esse ecossistema imersivo vai fazer muito sentido para você. Olha como a estrutura de navegação faz exatamente o que você disse..." },
            { c: "Frente 4: Poder e Ego", t: "Detalhes técnicos agora", q: "erros agora quais", a: "À primeira vista vi problemas na estrutura de leitura para o Google e detalhes na conversão mobile. Mas sou um profissional, não falo no ar. Quero colocar a [Marca] nas minhas ferramentas e te mostrar com dados reais. Por isso te peço 5 minutos amanhã." },

            // Frente 5
            { c: "Frente 5: Logística e Financeiro", t: "É muito caro (Ancoragem)", q: "caro preço orçamento reais 10000", a: "Não estamos falando de preços agora, mas para você ter uma ideia, agências em São Paulo cobram 10 mil reais por um site imersivo deste nível. Eu já montei sua maquete grátis. Veja por 5 minutos, você vai se surpreender com o quão acessível é implementar isso hoje." },
            { c: "Frente 5: Logística e Financeiro", t: "O Escudo do Terceiro: 'Tenho que falar com meu sócio'", q: "socio esposa escudo terceiro falar", a: "Entendo perfeitamente. Mas tirando seu sócio da equação por um segundo, você está 100% convencido? (Se disser sim): Suponhamos que você fale com seu sócio e ele diga NÃO. O que você faz? Deixa o site da [Marca] como está, perdendo clientes, ou briga pela decisão porque sabe que é isso que precisam?" }
        ]
    }
};

let currentLang = 'es';
let currentSpeaker = 'Brian';
let hasSite = true;

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    const tabs = document.querySelectorAll('.tab-btn');
    if(lang === 'es') {
        tabs[0].innerText = "Fase 1: Llamada Frío";
        tabs[1].innerText = "Fase 2: El Cierre";
        tabs[2].innerText = "WhatsApp";
        tabs[3].innerText = "Objeciones";
    } else {
        tabs[0].innerText = "Fase 1: Prospecção";
        tabs[1].innerText = "Fase 2: O Fechamento";
        tabs[2].innerText = "WhatsApp";
        tabs[3].innerText = "Objeções";
    }

    generateAll();
}

function setSpeaker(speaker) {
    currentSpeaker = speaker;
    document.querySelectorAll('.speaker-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${speaker.toLowerCase()}`).classList.add('active');
    generateAll();
}

function setHasSite(status) {
    hasSite = status;
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(status ? 'btn-site-yes' : 'btn-site-no').classList.add('active');
    generateAll();
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

function generateAll() {
    const person = document.getElementById('prospect-person').value.trim();
    const brand = document.getElementById('prospect-brand').value.trim() || (currentLang === 'es' ? '[Marca]' : '[Marca]');
    const niche = document.getElementById('prospect-niche').value.trim() || (currentLang === 'es' ? '[Nicho]' : '[Nicho]');

    let saludo, personaLabel;
    if (person) {
        saludo = currentLang === 'es' ? `Hola ${person}` : `Olá ${person}`;
        personaLabel = person;
    } else {
        if (currentLang === 'es') {
            saludo = `Hola, ¿cómo estás? Disculpá, ¿hablo con el dueño o el encargado de ${brand}?`;
        } else {
            saludo = `Olá, tudo bem? Desculpe, falo com o dono ou o responsável pela ${brand}?`;
        }
        personaLabel = currentLang === 'es' ? "[Nombre]" : "[Nome]";
    }

    const replaceTags = (text) => {
        return text
            .replace(/\[SALUDO\]/g, `<span class="placeholder">${saludo}</span>`)
            .replace(/\[Speaker\]/g, `<span class="placeholder">${currentSpeaker}</span>`)
            .replace(/\[Marca\]/g, `<span class="placeholder">${brand}</span>`)
            .replace(/\[Nicho\]/g, `<span class="placeholder">${niche}</span>`)
            .replace(/\[Nombre\]/g, `<span class="placeholder">${personaLabel}</span>`);
    };

    // Stage 1 rendering
    const ccOutput = document.getElementById('cc-output');
    const ccTitle = document.getElementById('cc-title');
    if (hasSite) {
        ccTitle.innerText = currentLang === 'es' ? "Escenario: SÍ TIENE SITIO" : "Cenário: JÁ TEM SITE";
        ccOutput.innerHTML = replaceTags(scripts[currentLang].coldCall.hasSite);
    } else {
        ccTitle.innerText = currentLang === 'es' ? "Escenario: NO TIENE SITIO" : "Cenário: NÃO TEM SITE";
        ccOutput.innerHTML = replaceTags(scripts[currentLang].coldCall.noSite);
    }

    // Stage 2
    document.getElementById('stage-2-output').innerHTML = replaceTags(scripts[currentLang].stage2.content);

    // WhatsApp rendering
    const waOutput = document.getElementById('wa-output');
    const waTitle = document.getElementById('wa-title');
    if (hasSite) {
        waTitle.innerText = currentLang === 'es' ? "WhatsApp: SÍ TIENE SITIO" : "WhatsApp: JÁ TEM SITE";
        waOutput.innerHTML = replaceTags(scripts[currentLang].whatsapp.hasSite);
    } else {
        waTitle.innerText = currentLang === 'es' ? "WhatsApp: NO TIENE SITIO" : "WhatsApp: NÃO TEM SITE";
        waOutput.innerHTML = replaceTags(scripts[currentLang].whatsapp.noSite);
    }

    renderObjections();
}

function renderObjections(filter = "") {
    const container = document.getElementById('rebuttals-container');
    const brand = document.getElementById('prospect-brand').value.trim() || (currentLang === 'es' ? '[Marca]' : '[Marca]');
    const person = document.getElementById('prospect-person').value.trim() || (currentLang === 'es' ? '[Nombre]' : '[Nome]');
    container.innerHTML = '';
    const filteredList = scripts[currentLang].rebuttals.filter(item => 
        item.t.toLowerCase().includes(filter.toLowerCase()) || 
        item.q.toLowerCase().includes(filter.toLowerCase()) ||
        item.a.toLowerCase().includes(filter.toLowerCase())
    );
    let currentCategory = "";

    filteredList.forEach((item, index) => {
        // Add Category Header if it changes
        if (item.c && item.c !== currentCategory) {
            const catHeader = document.createElement('h4');
            catHeader.style.color = "var(--primary-neon)";
            catHeader.style.marginTop = "1.5rem";
            catHeader.style.marginBottom = "0.5rem";
            catHeader.style.fontSize = "0.75rem";
            catHeader.style.textTransform = "uppercase";
            catHeader.style.letterSpacing = "1px";
            catHeader.innerText = item.c;
            container.appendChild(catHeader);
            currentCategory = item.c;
        }

        const itemDiv = document.createElement('div');
        itemDiv.className = 'accordion-item glass';
        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.innerText = item.t;
        header.onclick = () => itemDiv.classList.toggle('active');
        const content = document.createElement('div');
        content.className = 'accordion-content';
        const ans = document.createElement('p');
        ans.className = 'rebuttal-ans';
        ans.innerText = item.a.replace(/\[Marca\]/g, brand).replace(/\[Nombre\]/g, person);
        content.appendChild(ans);
        itemDiv.appendChild(header);
        itemDiv.appendChild(content);
        container.appendChild(itemDiv);
    });
}

function filterObjections() {
    renderObjections(document.getElementById('objection-search').value);
}

function copyText(elementId) {
    const el = document.getElementById(elementId);
    navigator.clipboard.writeText(el.innerText).then(() => {
        const btn = event.currentTarget;
        const originalText = btn.innerText;
        btn.innerText = currentLang === 'es' ? '¡Copiado!' : 'Copiado!';
        btn.style.background = '#8b5cf6';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '#10b981';
        }, 2000);
    });
}

// Init
setLanguage('es');
