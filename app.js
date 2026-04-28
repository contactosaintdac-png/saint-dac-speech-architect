const scripts = {
    es: {
        coldCall: {
            title: "Script: Apertura Clínica",
            content: `1. Apertura:
"Hola [Nombre], te hablo de imprevisto, soy Brian de Saint DAC. Sé que no nos conocemos y seguro estás a mil, ¿me das 30 segundos y te digo exacto por qué te llamo? Si no hace sentido, te corto yo mismo."

2. El Gancho:
"Te llamo por lo siguiente: me crucé con tu perfil y le di un vistazo rápido a tu negocio de [Nicho]. A simple vista, detecté un par de cuellos de botella técnicos y de estructura que no están reflejando el nivel del trabajo que das. Básicamente, tu presencia digital hoy funciona como un folleto estático, pero a nivel de código y posicionamiento está perdiendo fuerza frente a competidores más actualizados."

3. La Propuesta de Valor:
"En mi estudio no hacemos 'páginas web' comunes; armamos ecosistemas digitales premium e inmersivos. Mi propuesta es esta: quiero correr una auditoría técnica profunda de tu marca hoy, detectar exactamente dónde estás perdiendo tráfico, y armarte un prototipo funcional de cómo debería verse [Nombre] con tecnología de punta para atraer clientes high-ticket."

4. El Cierre:
"Todo esto te lo armo yo por mi cuenta sin costo. Lo único que te pido es que mañana nos conectemos 5 minutos por Meet. Te comparto pantalla, te muestro los datos duros de la auditoría y el prototipo. Si te vuela la cabeza, charlamos. Si no, te llevás el diagnóstico técnico de regalo. ¿Te queda mejor mañana a la mañana o por la tarde?"`
        },
        whatsapp: {
            noSite: {
                title: "Escenario: Sin Sitio Web",
                content: `Globo 1: "Hola [Nombre]! ¿Todo bien? Aquí Brian. Estaba en Google buscando [Nicho] y te vi. Tu trabajo parece muy bueno, pero vi que no tienen un sitio web."

Globo 2: "¿Ya pensaron en armar uno para captar a los clientes que buscan en Google y llevarlos directo a tu WhatsApp?"

(Si responden con interés o excusas):

Globo 3: "Entiendo. De hecho, fue por eso que te escribí. Como me dedico a hacer sitios para negocios de este nivel, me adelanté y ya te dejé un prototipo funcional listo."

Globo 4: "No tiene costo alguno echarle un vistazo. ¿Tenés 5 minutitos hoy o mañana para que te comparta pantalla rápido y te lo muestre? Si no te gusta, no pasa nada."`
            },
            badSite: {
                title: "Escenario: Sitio Malo/Viejo",
                content: `Globo 1: "Hola [Nombre]! ¿Todo bien? Aquí Brian. Estaba en Google mirando negocios de [Nicho] y entré a tu sitio web. Siendo bien sincero, no está a la altura y no valora el nivel de trabajo que hacés."

Globo 2: "¿Cuándo fue la última vez que lo actualizaron? ¿Ya pensaron en darle un upgrade?"

(Si responden):

Globo 3: "Imaginé. Como creo sitios para negocios premium, me adelanté y ya monté una versión nueva y moderna para [Nombre]."

Globo 4: "¿Tenés 5 minutitos esta semana para que te comparta pantalla y te muestre cómo quedó? Si no te convence y querés mantener el anterior, sin problema."`
            }
        },
        rebuttals: [
            { q: "Decime ahora cuáles son los errores que viste.", a: "A simple vista vi problemas en la estructura de lectura para Google y detalles en la conversión móvil. Pero soy un profesional, no me gusta hablar al aire. Quiero meter tu sitio en mis herramientas hoy, sacar el reporte exacto y mostrártelo con datos duros en la pantalla. Por eso te pido 5 minutos mañana. ¿A las 10 o a las 11?" },
            { q: "Mandame la auditoría por WhatsApp y la miro.", a: "Los reportes técnicos crudos son inentendibles si no sos desarrollador, [Nombre]. Y además, te quiero mostrar el prototipo en vivo con las animaciones funcionando. Si te mando un PDF o un link suelto, pierde todo el sentido. Son solo 5 minutos de pantalla, te muestro el problema y la solución. ¿Agendamos?" },
            { q: "Ya nos manejamos todo por Instagram/WhatsApp.", a: "Instagram es excelente para ganar visibilidad, pero es terreno alquilado y tu cliente está a un scroll de irse a la competencia. Lo que yo te construí es un ecosistema premium diseñado para sacar a ese prospecto de Instagram y meterlo en una experiencia inmersiva sin distracciones. Dejame mostrártelo 5 minutos." },
            { q: "Me pasaron un presupuesto por la mitad.", a: "Si buscás una plantilla básica o algo para salir del paso, mi estudio no es el indicado. En Saint DAC desarrollamos aplicaciones ultra rápidas con interacciones que la competencia no tiene. Miralo 5 minutos; si sentís que es lo mismo que lo barato, no te molesto más." },
            { q: "Tengo que consultarlo con mi socio.", a: "Excelente, las decisiones estratégicas se toman en equipo. Hagamos algo eficiente: armo un Meet de 5 minutos mañana con los dos. Les comparto pantalla, ven el ecosistema funcionando en vivo, y después lo debaten tranquilos. ¿A qué hora pueden?" }
        ]
    },
    pt: {
        coldCall: {
            title: "Script: Abertura Clínica",
            content: `1. Abertura:
"Olá [Nombre], te ligo de improviso, sou Brian da Saint DAC. Sei que não nos conhecemos e com certeza você está corrido, me dá 30 segundos e te digo exatamente por que estou ligando? Se não fizer sentido, eu mesmo desligo."

2. O Gancho:
"Ligo pelo seguinte: cruzei com seu perfil e dei uma olhada rápida no seu negócio de [Nicho]. À primeira vista, detectei alguns gargalos técnicos e de estrutura que não estão refletindo o nível do trabalho que você entrega. Basicamente, sua presença digital hoje funciona como um folheto estático, mas em nível de código e posicionamento está perdendo força para competidores mais atualizados."

3. A Proposta de Valor:
"No meu estúdio não fazemos 'sites' comuns; montamos ecossistemas digitais premium e imersivos. Minha proposta é esta: quero rodar uma auditoria técnica profunda da sua marca hoje, detectar exatamente onde você está perdendo tráfego, e montar um protótipo funcional de como deveria ser a [Nombre] com tecnologia de ponta para atrair clientes high-ticket."

4. O Fechamento:
"Tudo isso eu monto por minha conta, sem custo. A única coisa que te peço é que amanhã nos conectemos 5 minutos pelo Meet. Te compartilho a tela, te mostro os dados reais da auditoria e o protótipo. Se você pirar na ideia, conversamos. Se não, você leva o diagnóstico técnico de presente. Fica melhor amanhã de manhã ou à tarde?"`
        },
        whatsapp: {
            noSite: {
                title: "Cenário: Sem Site",
                content: `Globo 1: "Oi [Nombre]! Tudo bem? Aqui é o Brian. Eu tava no Google buscando [Nicho] e vi vocês. O trabalho de vocês parece muito bom, mas vi que não têm um site."

Globo 2: "Vocês já pensaram em montar um pra pegar os clientes que buscam no Google e levar pro WhatsApp?"

(Se responderem):

Globo 3: "Entendi. Na verdade, foi por isso que eu te chamei. Como eu faço sites pra negócios desse nível, eu me adientei e já deixei um protótipo pronto pra vocês."

Globo 4: "Não tem custo nenhum pra dar uma olhada. Você tem 5 minutinhos hoje ou amanhã pra eu compartilhar minha tela rápido e te mostrar? Se não gostar, tá tudo certo."`
            },
            badSite: {
                title: "Cenário: Site Ruim/Antigo",
                content: `Globo 1: "Oi [Nombre]! Tudo bem? Aqui é o Brian. Eu tava no Google dando uma olhada nos negócios de [Nicho] e acabei entrando no site de vocês. Sendo bem sincero, ele não tá legal e não valoriza o trabalho que vocês fazem."

Globo 2: "Quando foi a última vez que vocês atualizaram ele? Já pensaram em dar um upgrade?"

(Se responderem):

Globo 3: "Imaginei. Como eu crio sites pra negócios locais premium, eu me adientei e já montei uma versão nova e moderna pro negócio de vocês."

Globo 4: "Você tem 5 minutinhos essa semana pra eu compartilhar a tela e te mostrar como ficou? Se não curtir e quiser manter o antigo, sem problema nenhum."`
            }
        },
        rebuttals: [
            { q: "Me diga agora quais são os erros que você viu.", a: "À primeira vista vi problemas na estrutura de leitura para o Google e detalhes na conversão mobile. Mas sou um profissional, não gosto de falar no ar. Quero colocar seu site nas minhas ferramentas hoje, tirar o relatório exato e te mostrar com dados reais na tela. Por isso te peço 5 minutos amanhã. Às 10h ou 11h?" },
            { q: "Me mande a auditoria pelo WhatsApp.", a: "Os relatórios técnicos brutos são difíceis de entender se você não for desenvolvedor, [Nombre]. Além disso, quero te mostrar o protótipo ao vivo com as animações funcionando. Se eu mandar um link solto, perde o sentido. São só 5 minutos de tela. Agendamos?" },
            { q: "Já resolvemos tudo pelo Instagram/WhatsApp.", a: "O Instagram é excelente para visibilidade, mas é terreno alugado. O que eu construí é um ecossistema premium desenhado para tirar o prospecto do Instagram e colocá-lo em uma experiência imersiva sem distrações. Deixe-me te mostrar por 5 minutos." },
            { q: "Me passaram um orçamento pela metade.", a: "Se você busca um template básico ou algo 'barato', meu estúdio não é o lugar certo. Na Saint DAC desenvolvemos aplicações ultra rápidas com interações que a concorrência não tem. Veja por 5 minutos; se achar que é a mesma coisa que o barato, não te incomodo mais." },
            { q: "Tenho que consultar meu sócio.", a: "Excelente, decisões estratégicas são tomadas em equipe. Vamos fazer algo eficiente: marco um Meet de 5 minutos amanhã com os dois. Compartilho a tela, vocês veem o ecossistema funcionando e depois debatem tranquilos. Que horas podem?" }
        ]
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    // Update tab titles
    const tabs = document.querySelectorAll('.tab-btn');
    if(lang === 'es') {
        tabs[0].innerText = "Llamada en Frío";
        tabs[1].innerText = "WhatsApp / Contacto";
        tabs[2].innerText = "Manejo de Objeciones";
    } else {
        tabs[0].innerText = "Prospecção por Telefone";
        tabs[1].innerText = "WhatsApp / Contato";
        tabs[2].innerText = "Manejo de Objeções";
    }

    generateAll();
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(`tab-${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

function generateAll() {
    const name = document.getElementById('prospect-name').value || (currentLang === 'es' ? '[Nombre]' : '[Nome]');
    const niche = document.getElementById('prospect-niche').value || (currentLang === 'es' ? '[Nicho]' : '[Nicho]');

    // Cold Call
    const coldCallContent = scripts[currentLang].coldCall.content
        .replace(/\[Nombre\]/g, `<span class="placeholder">${name}</span>`)
        .replace(/\[Nicho\]/g, `<span class="placeholder">${niche}</span>`);
    document.getElementById('cold-call-output').innerHTML = coldCallContent;

    // WhatsApp
    const waNoSite = scripts[currentLang].whatsapp.noSite.content
        .replace(/\[Nombre\]/g, `<span class="placeholder">${name}</span>`)
        .replace(/\[Nicho\]/g, `<span class="placeholder">${niche}</span>`);
    document.getElementById('wa-no-site').innerHTML = waNoSite;

    const waBadSite = scripts[currentLang].whatsapp.badSite.content
        .replace(/\[Nombre\]/g, `<span class="placeholder">${name}</span>`)
        .replace(/\[Nicho\]/g, `<span class="placeholder">${niche}</span>`);
    document.getElementById('wa-bad-site').innerHTML = waBadSite;

    // Rebuttals
    const rebuttalsContainer = document.getElementById('rebuttals-container');
    rebuttalsContainer.innerHTML = '';
    scripts[currentLang].rebuttals.forEach(item => {
        const div = document.createElement('div');
        div.className = 'rebuttal-item glass';
        div.innerHTML = `
            <span class="rebuttal-q">Objeción: "${item.q.replace('[Nombre]', name)}"</span>
            <p class="rebuttal-a">${item.a.replace(/\[Nombre\]/g, name)}</p>
        `;
        rebuttalsContainer.appendChild(div);
    });
}

function copyText(elementId) {
    const el = document.getElementById(elementId);
    // Use innerText but remove the HTML tags for placeholders
    const textToCopy = el.innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
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
generateAll();
setLanguage('es');
