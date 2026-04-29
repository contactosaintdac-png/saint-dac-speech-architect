const scripts = {
    es: {
        coldCall: {
            hasSite: `1. Apertura:
"[SALUDO], te hablo de imprevisto, soy [Speaker] de Saint DAC. Sé que no nos conocemos y seguro estás a mil, ¿me das 30 segundos y te digo exacto por qué te llamo? Si no hace sentido, te corto yo mismo."

2. El Gancho:
"Te llamo por lo siguiente: me crucé con tu perfil y le di un vistazo rápido a la página actual de [Marca]. A simple vista, detecté un par de cuellos de botella técnicos y de estructura que no están reflejando el nivel del trabajo que das. Básicamente, tu web hoy funciona como un folleto estático, pero a nivel de código y posicionamiento está perdiendo fuerza frente a competidores más actualizados."

3. La Propuesta de Valor:
"En mi estudio no hacemos 'páginas web' comunes; armamos ecosistemas digitales premium e inmersivos. Mi propuesta es esta: quiero correr una auditoría técnica profunda de [Marca] hoy, detectar exactamente dónde estás perdiendo tráfico, y armarte un prototipo funcional de cómo debería verse tu negocio con tecnología de punta para atraer clientes premium."

4. El Cierre:
"Todo esto te lo armo yo por mi cuenta sin costo. Lo único que te pido es que mañana nos conectemos 5 minutos en una llamada. Te comparto pantalla, te muestro los datos duros de la auditoría y el prototipo. Si te vuela la cabeza, charlamos. Si no, te llevás el diagnóstico técnico de regalo. ¿Te queda mejor mañana a la mañana o por la tarde?"`,
            noSite: `1. Apertura:
"[SALUDO], te hablo de imprevisto, soy [Speaker] de Saint DAC. Sé que no nos conocemos y seguro estás a mil, ¿me das 30 segundos y te digo exacto por qué te llamo? Si no hace sentido, te corto yo mismo."

2. El Gancho:
"Te llamo por lo siguiente: estuve investigando negocios de [Nicho] en la zona y vi que [Marca] tiene una reputación excelente, pero no encontré tu sitio web oficial. Hoy por hoy, eso significa que estás dejando que Google decida a quién enviarle tus clientes potenciales, y probablemente terminen en la competencia solo porque ellos sí tienen una ventana digital abierta."

3. La Propuesta de Valor:
"En Saint DAC creamos experiencias inmersivas que posicionan a negocios como el tuyo como líderes indiscutidos. Como ya estuve analizando tu rubro, me adelanté y ya te armé un prototipo funcional de cómo debería verse la presencia digital premium de [Marca] para captar esos clientes que hoy se te están escapando."

4. El Cierre:
"No te quiero vender nada por teléfono. Solo quiero que mañana nos conectemos 5 minutos en una llamada rápida. Te comparto pantalla, te muestro el prototipo que ya tengo listo para vos y ves el potencial. Si no te gusta, no lo usás y listo. ¿Te queda bien a las 10 o a las 11?"`
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
            noSite: `Globo 1: "Hola [Nombre]! ¿Todo bien? Aquí [Speaker]. Estaba en Google buscando [Nicho] y vi a [Marca]. Tu trabajo parece muy bueno, pero vi que no tienen un sitio web."

Globo 2: "¿Ya pensaron en armar uno para captar a los clientes que buscan en Google y llevarlos directo a tu WhatsApp?"

(Si responden):
Globo 3: "Entiendo. De hecho, fue por eso que te escribí. Como me dedico a hacer sitios para negocios de este nivel, me adelanté y ya te dejé un prototipo funcional listo para [Marca]."

Globo 4: "No tiene costo alguno echarle un vistazo. ¿Tenés 5 minutitos hoy o mañana para que te comparta pantalla rápido en una llamada y te lo muestre? Si no te gusta, no pasa nada."`,
            badSite: `Globo 1: "Hola [Nombre]! ¿Todo bien? Aquí [Speaker]. Estaba en Google mirando negocios de [Nicho] y entré al sitio de [Marca]. Siendo bien sincero, no está a la altura y no valora el nivel de trabajo que hacés."

Globo 2: "¿Cuándo fue la última vez que lo actualizaron? ¿Ya pensaron en darle un upgrade?"

(Si responden):
Globo 3: "Imaginé. Como creo sitios para negocios premium, me adelanté y ya monté una versión nueva y moderna para [Marca]."

Globo 4: "¿Tenés 5 minutitos esta semana para que te comparta pantalla en una llamada y te muestre cómo quedó? Si no te convence y querés mantener el anterior, sin problema."`
        },
        rebuttals: [
            { t: "Ocupado: 'Estoy a mil / No tengo tiempo'", q: "tiempo ocupado mil", a: "Justamente por eso te hablo, sé que como dueño de negocio estás a mil. Por eso no te pido reuniones de una hora ni que llenes formularios. Ya me adelanté e hice todo el laburo pesado yo. Son 5 minutos de reloj. Te muestro la solución visual y te dejo seguir laburando. ¿Te robo 5 minutos hoy a las 17 o mañana a la mañana?" },
            { t: "Blindado: 'Ya tenemos a alguien / Mi sobrino'", q: "sobrino agencia manejando alguien", a: "¡Qué bueno que ya tengan a alguien! Mejor, así no arrancan de cero. Igual, como ya me tomé el atrevimiento de armarles este prototipo premium para [Marca], conectate 5 minutos y miralo. Capaz ves algo en mi diseño que te vuela la cabeza y se lo podés pedir a la persona que les maneja la web ahora para que mejoren lo que tienen. Todo ganancia para vos." },
            { t: "Boca a boca: 'Sólo vivimos de indicação'", q: "boca boca recomendacion indicacao", a: "Pô, o trabalho de vocês debe ser muito bom mesmo então. Pero fijate esto: la persona que recibe esa recomendación va a ir a buscarte a Google para confirmar, y si ve un sitio que da mala impresión o no encuentra nada, desiste y es plata que dejás en la mesa. Dejame mostrarte en 5 minutos cómo agarrar a esos clientes." },
            { t: "Estafado: 'Me cobraron carisimo'", q: "caro estafado plata reales 3000", a: "Te entiendo, 3 mil reales es mucha plata. Y si te dijera que yo ya hice el sitio de [Marca], y si llega a gustarte, el costo es una fracción mínima de eso? No cuesta nada mirar la pantalla, si no te gusta, simplemente te vas." },
            { t: "Ya se está ocupando: 'Já tô vendo isso'", q: "viendo tratando ocupando massa", a: "Que massa! Pero como yo ya tengo el sitio de [Marca] prontinho, te propongo que le des una mirada gratuita de 5 minutos. Si el mío está mejor, directamente usás el mío y ahorrás tiempo. ¿Te parece?" },
            { t: "Es muy caro (Anclaje)", q: "caro precio presupuesto reales 10000", a: "No estamos hablando de precios ahora, pero para que te des una idea, agencias en São Paulo están cobrando 10 mil reales por un sitio inmersivo de este nivel. Yo ya te armé la maqueta gratis. Mirala 5 minutos, y si sentís que es lo que [Marca] necesita para no perder clientes, te vas a sorprender de lo accesible que es." },
            { t: "No me interesa", q: "no interesa gracias", a: "Te re entiendo, y hacés bien en decirme que no porque seguro te viven bombardeando agencias. No te quiero vender un plan. Literalmente te hablo porque vi que tu web actual te hace perder clientes y ya me adelanté a armarte la solución visual gratis. Dame 5 minutos para mostrártela. Si no te sirve, me cortás y listo." },
            { t: "Dejame pensarlo", q: "pensarlo aviso despues", a: "Obvio, pensalo tranquilo. Pero por mi experiencia con dueños de negocios, cuando me dicen 'dejame pensarlo' suele ser porque el diseño no te convenció o es un tema de presupuesto. Siendo 100% transparentes, ¿por dónde viene tu duda?" },
            { t: "Detalles técnicos ahora", q: "errores ahora cuales", a: "A simple vista vi problemas en la estructura de lectura para Google y detalles en la conversión móvil. Pero soy un profesional, no hablo al aire. Quiero meter a [Marca] en mis herramientas, sacar el reporte exacto y mostrártelo con datos duros. Por eso te pido 5 minutos mañana." },
            { t: "Mandame el PDF por WhatsApp", q: "pdf whatsapp mandame enviar", a: "Los reportes técnicos crudos son inentendibles si no sos desarrollador. Además, quiero mostrarte el prototipo de [Marca] en vivo con las animaciones. Un link suelto pierde el sentido. Son 5 minutos de pantalla, ves el problema y la solución. ¿Agendamos?" }
        ]
    },
    pt: {
        coldCall: {
            hasSite: `1. Abertura:
"[SALUDO], te ligo de improviso, sou [Speaker] da Saint DAC. Sei que não nos conhecemos e com certeza você está corrido, me dá 30 segundos e te digo exatamente por que estou ligando? Se não fizer sentido, eu mesmo desligo."

2. O Gancho:
"Ligo pelo seguinte: cruzei com seu perfil e dei uma olhada rápida no site atual da [Marca]. À primeira vista, detectei alguns gargalos técnicos e de estrutura que não estão refletindo o nível do trabalho que você entrega. Basicamente, sua presença digital hoje funciona como um folheto estático, mas em nível de código e posicionamento está perdendo força para competidores mais atualizados."

3. A Proposta de Valor:
"No meu estúdio não fazemos 'sites' comuns; montamos ecossistemas digitais premium e imersivos. Minha proposta é esta: quero rodar uma auditoria técnica profunda da [Marca] hoje, detectar exatamente onde você está perdendo tráfego, e montar um protótipo funcional de como deveria ser seu negócio com tecnologia de ponta para atrair clientes premium."

4. O Fechamento:
"Tudo isso eu monto por minha conta, sem custo. A única coisa que te peço é que amanhã nos conectemos 5 minutos em uma chamada. Te compartilho a tela, te mostro os dados reais da auditoria e o protótipo. Se você pirar na ideia, conversamos. Se não, você leva o diagnóstico técnico de presente. Fica melhor amanhã de manhã ou à tarde?"`,
            noSite: `1. Abertura:
"[SALUDO], te ligo de improviso, sou [Speaker] da Saint DAC. Sei que não nos conhecemos e com certeza você está corrido, me dá 30 segundos e te digo exatamente por que estou ligando? Se não fizer sentido, eu mesmo desligo."

2. O Gancho:
"Ligo pelo seguinte: estive pesquisando negócios de [Nicho] na região e vi que a [Marca] tem uma reputação excelente, mas não encontrei seu site oficial. Hoje em dia, isso significa que você está deixando o Google decidir para quem enviar seus clientes potenciais."

3. A Proposta de Valor:
"Na Saint DAC criamos experiências imersivas que posicionam negócios como o seu como líderes. Como já estive analisando seu setor, me adientei e já montei um protótipo funcional de como deveria ser a presença digital premium da [Marca] para captar esses clientes que hoje estão escapando."

4. O Fechamento:
"Não quero te vender nada por telefone. Só quero que amanhã nos conectemos 5 minutos em uma chamada rápida. Te compartilho a tela, te mostro o protótipo que já tenho pronto e você vê o potencial. Se não gostar, tá tudo certo. Fica bem às 10h ou 11h?"`
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
            noSite: `Globo 1: "Oi [Nombre]! Tudo bem? Aqui é [Speaker]. Eu tava no Google buscando [Nicho] e vi a [Marca]. O trabalho de vocês parece muito bom, mas vi que não têm um site."

Globo 2: "Vocês já pensaram em montar um pra pegar os clientes que buscam no Google e levar pro WhatsApp?"

(Se responderem):
Globo 3: "Entendi. Na verdade, foi por isso que eu te chamei. Como eu faço sites pra negócios desse nível, me adientei e já deixei um protótipo pronto pra [Marca]."

Globo 4: "Não tem custo nenhum pra dar uma olhada. Você tem 5 minutinhos hoje ou amanhã pra eu compartilhar minha tela rápido em uma chamada e te mostrar? Se não gostar, tá tudo certo."`,
            badSite: `Globo 1: "Oi [Nombre]! Tudo bem? Aqui é [Speaker]. Eu tava no Google dando uma olhada nos negócios de [Nicho] e acabei entrando no site da [Marca]. Sendo bem sincero, ele não tá legal e não valoriza o trabalho que vocês fazem."

Globo 2: "Quando foi a última vez que vocês atualizaram ele? Já pensaram em dar um upgrade?"

(Se responderem):
Globo 3: "Imaginei. Como eu crio sites pra negócios locais premium, me adientei e já montei uma versão nova e moderna para a [Marca]."

Globo 4: "Você tem 5 minutinhos essa semana pra eu compartilhar a tela em uma chamada e te mostrar como ficou? Se não curtir e quiser manter o antigo, sem problema nenhum."`
        },
        rebuttals: [
            { t: "Ocupado: 'Estou a mil / Não tenho tempo'", q: "tempo ocupado mil", a: "Justamente por isso te ligo, sei que como dono de negócio você está a mil. Por isso não te peço reuniões de uma hora. Já fiz todo o trabalho pesado. São 5 minutos. Te mostro a solução visual e te deixo trabalhar. Pode hoje às 17h ou amanhã cedo?" },
            { t: "Blindado: 'Já temos alguém / Sobrinho'", q: "sobrinho agencia alguem", a: "Que bom que já têm alguém! Melhor ainda. Mas como já montei este protótipo premium para a [Marca], conecte-se 5 minutos e veja. Talvez você veja algo no meu design que te surpreenda e você possa pedir para quem cuida do seu site hoje. Tudo ganho para você." },
            { t: "Boca a boca: 'Só vivemos de indicação'", q: "boca boca recomendação indicacao", a: "Pô, o trabalho de vocês deve ser muito bom mesmo então. Mas veja só: a pessoa que recebe essa indicação vai te buscar no Google para confirmar, e se vir um site ruim ou não encontrar nada, desiste. Deixe-me te mostrar em 5 minutos como segurar esses clientes." },
            { t: "Estafado: 'Me cobraron carisimo'", q: "caro estafado dinheiro reais 3000", a: "Eu te entendo, 3 mil reais é muito dinheiro. E se eu te dissesse que já fiz o site da [Marca] e, se você gostar, o custo é uma fração mínima disso? Não custa nada olhar a tela, se não gostar, você simplesmente vai embora." },
            { t: "Já está resolvendo: 'Já tô vendo isso'", q: "vendo tratando ocupando massa", a: "Que massa! Mas como eu já tenho o site da [Marca] prontinho, te proponho dar uma olhada gratuita de 5 minutos. Se o meu estiver melhor, você usa o meu e economiza tempo. Pode ser?" },
            { t: "É muito caro (Ancoragem)", q: "caro preço orçamento reais 10000", a: "Não estamos falando de preços agora, mas para você ter uma ideia, agências em São Paulo cobram 10 mil reais por um site imersivo deste nível. Eu já montei sua maquete grátis. Veja por 5 minutos, você vai se surpreender com o quão acessível é implementar isso hoje." },
            { t: "Não me interessa", q: "não interessa obrigado", a: "Eu te entendo, e você faz bem em dizer não, pois muitas agências vendem fumaça. Não quero te vender um plano. Só te ligo porque vi que seu site atual faz você perder clientes e já montei a solução visual grátis. Me dê 5 minutos. Se não servir, desligamos." },
            { t: "Deixe-me pensar", q: "pensar aviso depois", a: "Claro, pense tranquilo. Mas pela minha experiência, quando dizem 'vou pensar' é porque o design não convenceu ou é orçamento. Sendo 100% transparentes, por onde vem sua dúvida?" },
            { t: "Detalhes técnicos agora", q: "erros agora quais", a: "À primeira vista vi problemas na estrutura de leitura para o Google e detalhes na conversão mobile. Mas sou um profissional, não falo no ar. Quero colocar a [Marca] nas minhas ferramentas e te mostrar com dados reais. Por isso te peço 5 minutos amanhã." },
            { t: "Mande o PDF pelo WhatsApp", q: "pdf whatsapp mande enviar", a: "Os relatórios técnicos brutos são difíceis de entender. Além disso, quero te mostrar o protótipo da [Marca] ao vivo com as animações. Um link solto perde o sentido. São 5 minutos de tela. Agendamos?" }
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
        waTitle.innerText = currentLang === 'es' ? "WhatsApp: Sitio Malo/Viejo" : "WhatsApp: Site Ruim/Antigo";
        waOutput.innerHTML = replaceTags(scripts[currentLang].whatsapp.badSite);
    } else {
        waTitle.innerText = currentLang === 'es' ? "WhatsApp: Sin Sitio Web" : "WhatsApp: Sem Site";
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
    filteredList.forEach((item, index) => {
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
