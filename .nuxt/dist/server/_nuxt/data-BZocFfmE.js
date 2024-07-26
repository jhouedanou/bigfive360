const logo = "/images/logo.png";
const navbar = {
  numero: "+225 27 21 59 42 28"
};
const hero = {
  title: "BigFive360",
  subtitle: "Accélérez vos ventes et\nlocations immobilières\ngrâce aux contenus 360°",
  txtBtn: "Découvrir",
  logo: "/images/logo.svg"
};
const avantages = {
  headline: "Augmentez l’audience\nde vos annonces immobilières",
  listes: {
    "1": "Démarquez-vous de la concurrence en offrant une expérience plus immersive",
    "2": "Mettez en valeur vos biens immobiliers",
    "3": "Faites visiter sans vous déplacer",
    "4": "Orientez vos clients efficacement vers les biens qui leur correspondent",
    "5": "Optimisez votre temps en concluant plus rapidement vos transactions",
    "6": "Augmentez le trafic sur votre site et touchez un public plus large"
  }
};
const notreOffre = "Notre offre";
const visites = [
  {
    type: "Visite Virtuelle HD",
    description: "Vos biens présentés de façon immersive et en haute définition, grâce à des panoramas de haute qualité.",
    action: "DÉCOUVRIR",
    icone: "/images/visite-virtuelle-icone-hd.svg",
    preview: "/images/visite-virtuelle-hd-preview.webp",
    lien: "https://webobook.com/public/6303a154e0d3ec3be1676652,en"
  },
  {
    type: "Visite Virtuelle 3D",
    description: "Vos prospects se déplacent d’une pièce à l’autre de votre bien, avec une impression de liberté inégalée.",
    action: "DÉCOUVRIR",
    icone: "/images/visite-virtuelle-icone-3d.svg",
    preview: "/images/visite-virtuelle-3d-preview.webp",
    lien: "https://my.matterport.com/show/?m=vRHA4sXLfNS"
  },
  {
    type: "Retouche panoramas",
    description: "Confiez nous vos fichiers RAW,\nDNG, GPR et tout autre type\nde panoramas et laissez nous\nles sublimer.",
    action: "DÉCOUVRIR",
    icone: "/images/retouche.svg",
    preview: "/images/retouche-preview.webp",
    lien: "https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=afb81d5a-4a99-11ef-9396-d93975fe8866"
  }
];
const technologie = {
  title: "La technologie",
  content: "Nous utilisons la technologie Matterport qui permet un scan 3D de votre bien, permettant d’en créer des visites virtuelles réalistes et immersives, facilement partageables sur n’importe quel appareil IOS ou Android.",
  content2: "Vous pourrez obtenir un avantage concurrentiel à nul autre égal. C’est le moyen approprié pour présenter un bien en ligne et faire visiter vos propriétés aux futurs clients.",
  logo: "/images/logo-matterport.svg"
};
const services = {
  title: "Big Five 360 propose un service de captation visuelle en 3 dimensions pour tout type d’espace",
  content: "Orientez efficacement vos clients vers les biens qui leur correspondent en évitant les déplacements inutiles.",
  txtBtn: "Comment ça marche",
  service: [
    {
      titre: "Hôtels",
      image: "/images/slick/hotel.webp",
      icone: "/images/slick/hotel-picto.svg"
    },
    {
      titre: "Immobilier",
      image: "/images/slick/immobilier.webp",
      icone: "/images/slick/immobilier-picto.svg"
    },
    {
      titre: "Musées",
      image: "/images/slick/musees.webp",
      icone: "/images/slick/musees-picto.svg"
    },
    {
      titre: "Restaurants",
      image: "/images/slick/restaurant.webp",
      icone: "/images/slick/restaurant-picto.svg"
    },
    {
      titre: "Terrains",
      image: "/images/slick/terrain.webp",
      icone: "/images/slick/terrain-picto.svg"
    },
    {
      titre: "Usines",
      image: "/images/slick/usines.webp",
      icone: "/images/slick/usines-picto.svg"
    },
    {
      titre: "Bars",
      image: "/images/slick/bar.webp",
      icone: "/images/slick/bar-picto.svg"
    },
    {
      titre: "Bureaux",
      image: "/images/slick/bureaux.webp",
      icone: "/images/slick/bureaux-picto.svg"
    },
    {
      titre: "Commerces",
      image: "/images/slick/commerces.webp",
      icone: "/images/slick/commerces-picto.svg"
    },
    {
      titre: "Discothèques",
      image: "/images/slick/discotheques.webp",
      icone: "/images/slick/discotheques-picto.svg"
    },
    {
      titre: "Ecoles",
      image: "/images/slick/ecoles.webp",
      icone: "/images/slick/ecoles-picto.svg"
    },
    {
      titre: "Entrepôts",
      image: "/images/slick/entrepot.webp",
      icone: "/images/slick/entrepot-picto.svg"
    }
  ]
};
const options = {
  titre: "Options & Services complémentaires",
  services_principaux: {
    "1": "Extraction des plans 3D pour projeter de futurs travaux",
    "2": "Ajout de Matter Tags pour détailler vos produits ou ajouter des liens directs",
    "3": "Création des plans d'étage détaillés afin de proposer une vue d'ensemble"
  },
  sous_options: [
    {
      titre: "STREAM SHOPPING",
      description: "Convertissez une visite virtuelle en expérience E-commerce"
    },
    {
      titre: "RÉNOVATION DES ESPACES",
      description: "Découvrez notre savoir-faire en terme de rénovation des espaces"
    },
    {
      titre: "CONCEPTUALISATION DES ESPACES",
      description: "Découvrez notre savoir-faire en conception 3D pour projeter l'aménagement de votre futur commerce ou bureau."
    }
  ]
};
const ccm = {
  titre: "COMMENT ÇA MARCHE ?",
  etapes: [
    {
      image: {
        webp: "/images/etape1.webp",
        png: "/images/etape1.png"
      },
      titre: "Prise de Contact et Pré-visite",
      description: "Nous vous rencontrons afin d'évaluer la superficie de votre espace et le nombre de prises de vues nécessaires à la réalisation des visites virtuelles.",
      bouton: "On vous rappelle ?"
    },
    {
      image: {
        webp: "/images/etape2.webp",
        png: "/images/etape2.png"
      },
      titre: "Prises de vue",
      description: "Nos techniciens se rendent sur place afin de prendre les photos de vos locaux. Captation de l'espace (entre 2h et 5h)"
    },
    {
      image: {
        webp: "/images/etape3.webp",
        png: "/images/etape3.png"
      },
      titre: "Lien de la visite virtuelle",
      description: "Nous vous envoyons un lien présentant soit la visite 3D, soit la visite HD de votre espace dans un délai ne dépassant pas les 48 heures après signature du bon de commande. Traitement de l'image pour encapsulage et déploiement sur le net ( 24H)."
    }
  ]
};
const demo = {
  text: "Vous souhaitez une demo ? Un devis personnalisé ?",
  btn: "Contactez-nous",
  introForm: "Demandez une démo GRATUITE\net voyez par vous-même!"
};
const form_section = {
  title: "Contactez-nous",
  form_fields: {
    name: "Nom",
    email: "Email",
    message: "Message",
    submit: "Envoyer"
  }
};
const images_captions = [
  "Exemple de visite virtuelle réalisée avec Matterport",
  "Technologie de scan 3D en action"
];
const footer = {
  text: "© 2023 BigFive360. Tous droits réservés."
};
const data = {
  logo,
  navbar,
  hero,
  avantages,
  notreOffre,
  visites,
  technologie,
  services,
  options,
  ccm,
  demo,
  form_section,
  images_captions,
  footer
};
export {
  avantages,
  ccm,
  data as default,
  demo,
  footer,
  form_section,
  hero,
  images_captions,
  logo,
  navbar,
  notreOffre,
  options,
  services,
  technologie,
  visites
};
//# sourceMappingURL=data-BZocFfmE.js.map
