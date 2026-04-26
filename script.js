const translations = {
  de: {
    heroEyebrow: "Green Construction GmbH | Eschborn",
    heroTitle: "Bauen mit Struktur. Entwickeln mit Verantwortung.",
    heroLead:
      "Ihr Partner fuer Hoch- und Tiefbau, schluesselfertige Bauprojekte, Sportplatzbau sowie Recycling, Entsorgung und Sekundaerrohstoffe.",
    ctaProject: "Projekt anfragen",
    ctaAreas: "Geschaeftsbereich auswaehlen",
    areasEyebrow: "Vier klare Leistungssaeulen",
    areasTitle: "Waehlen Sie den Bereich, der zu Ihrem Projekt passt."
  },
  en: {
    heroEyebrow: "Green Construction GmbH | Eschborn",
    heroTitle: "Structured construction. Responsible development.",
    heroLead:
      "Your partner for building construction, civil engineering, turnkey projects, sports facilities, recycling, disposal and secondary raw materials.",
    ctaProject: "Request a project",
    ctaAreas: "Choose business area",
    areasEyebrow: "Four clear service pillars",
    areasTitle: "Choose the area that matches your project."
  },
  fr: {
    heroEyebrow: "Green Construction GmbH | Eschborn",
    heroTitle: "Construire avec methode. Developper avec responsabilite.",
    heroLead:
      "Votre partenaire pour le batiment, le genie civil, la construction cle en main, les terrains de sport, le recyclage et la gestion des dechets.",
    ctaProject: "Demander un projet",
    ctaAreas: "Choisir un domaine",
    areasEyebrow: "Quatre piliers de services",
    areasTitle: "Choisissez le domaine adapte a votre projet."
  },
  es: {
    heroEyebrow: "Green Construction GmbH | Eschborn",
    heroTitle: "Construccion con estructura. Desarrollo responsable.",
    heroLead:
      "Su socio para edificacion, obra civil, proyectos llave en mano, instalaciones deportivas, reciclaje, residuos y materias primas secundarias.",
    ctaProject: "Solicitar proyecto",
    ctaAreas: "Elegir area",
    areasEyebrow: "Cuatro pilares de servicio",
    areasTitle: "Elija el area adecuada para su proyecto."
  },
  pt: {
    heroEyebrow: "Green Construction GmbH | Eschborn",
    heroTitle: "Construir com estrutura. Desenvolver com responsabilidade.",
    heroLead:
      "O seu parceiro para construcao, engenharia civil, projetos chave na mao, instalacoes desportivas, reciclagem e gestao de residuos.",
    ctaProject: "Solicitar projeto",
    ctaAreas: "Escolher area",
    areasEyebrow: "Quatro pilares de servico",
    areasTitle: "Escolha a area certa para o seu projeto."
  },
  it: {
    heroEyebrow: "Green Construction GmbH | Eschborn",
    heroTitle: "Costruire con metodo. Sviluppare con responsabilita.",
    heroLead:
      "Il vostro partner per edilizia, opere civili, progetti chiavi in mano, impianti sportivi, riciclo e smaltimento.",
    ctaProject: "Richiedi progetto",
    ctaAreas: "Scegli area",
    areasEyebrow: "Quattro pilastri di servizio",
    areasTitle: "Scegliete l'area adatta al vostro progetto."
  },
  pl: {
    heroEyebrow: "Green Construction GmbH | Eschborn",
    heroTitle: "Budownictwo z jasna struktura. Rozwoj z odpowiedzialnoscia.",
    heroLead:
      "Partner w zakresie budownictwa, infrastruktury, realizacji pod klucz, obiektow sportowych, recyklingu i gospodarki odpadami.",
    ctaProject: "Zapytaj o projekt",
    ctaAreas: "Wybierz obszar",
    areasEyebrow: "Cztery filary uslug",
    areasTitle: "Wybierz obszar pasujacy do projektu."
  },
  ro: {
    heroEyebrow: "Green Construction GmbH | Eschborn",
    heroTitle: "Constructie cu structura. Dezvoltare cu responsabilitate.",
    heroLead:
      "Partenerul dumneavoastra pentru constructii, infrastructura, proiecte la cheie, terenuri sportive, reciclare si deseuri.",
    ctaProject: "Solicitati proiect",
    ctaAreas: "Alegeti domeniul",
    areasEyebrow: "Patru piloni de servicii",
    areasTitle: "Alegeti domeniul potrivit pentru proiectul dvs."
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.de;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
  localStorage.setItem("gc-language", language);
}

document.getElementById("year").textContent = new Date().getFullYear();

const languageSelect = document.getElementById("language");
const savedLanguage = localStorage.getItem("gc-language") || "de";
languageSelect.value = savedLanguage;
setLanguage(savedLanguage);

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");

if (!localStorage.getItem("gc-cookie-ok")) {
  cookieBanner.classList.add("is-visible");
}

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("gc-cookie-ok", "1");
  cookieBanner.classList.remove("is-visible");
});
