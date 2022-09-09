/* Velo dummy data list :-
- Navbar
- Banner
- Feature
- About
- Projects
- Team
- News
- Testimonial
- Gallery
- Newsletter
- Footer
  - menu widget
  - copyright
  - social links
*/
/* ------------------------------------ */
// Menu data
/* ------------------------------------ */
export const menuData = [
  {
    label: 'Nos Services',
    path: '#services',
    offset: '80',
  },
  {
    label: 'À propos',
    path: '#apropos',
    offset: '80',
  },
  {
    label: 'Boutique',
    path: 'https://shop.vcommevelo.fr/collections/all',
  },
  {
    label: 'Reprise',
    path: '/reprise-de-velo-partout-en-france',
    offset: '80',
  },
  {
    label: 'Entretien',
    path: '/entretien-et-reparation-velo-a-domicile-a-lyon',
    offset: '40',
  },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
export const bannerData = {
  title: 'Des vélos, mais pas que…',
  text: `
    Nous proposons de bons vélos d\'occasion, vintage ou récent, entièrement révisés par nos soins.
    Nous pouvons aussi entretenir ou reprendre votre vélo, directement chez vous,
    ou dans notre atelier à Lyon Part-Dieu.
  `,
  carousel: [
    {
      thumb_url: 'https://cdn.shopify.com/s/files/1/0508/5554/2943/products/IMG_1853_470x.jpg',
      title: 'Cyfac Altec Dura-ace',
      link: 'https://shop.vcommevelo.fr/collections/velo-de-route/products/cyfac-altec-dura-ace-t57',
    },
    {
      thumb_url: 'https://cdn.shopify.com/s/files/1/0508/5554/2943/products/IMG_1613_470x.jpg?',
      title: 'Cannondale CAAD3 Dura-ace',
      link: 'https://shop.vcommevelo.fr/collections/velo-de-route/products/cannondale-caad3-dura-ace-taille-s',
    },
    {
      thumb_url: 'https://cdn.shopify.com/s/files/1/0508/5554/2943/products/IMG_1594_470x.jpg',
      title: 'Backroads Titane Ultegra',
      link: 'https://shop.vcommevelo.fr/collections/velo-de-route/products/backroads-titane-ultegra-taille-m',
    },
    {
      thumb_url: 'https://cdn.shopify.com/s/files/1/0508/5554/2943/products/IMG_1621_470x.jpg',
      title: 'Decathlon 9.1 Dedacciai Dura-ace',
      link: 'https://shop.vcommevelo.fr/collections/velo-de-route/products/decathlon-9-1-dedacciai-dura-ace-taille-m',
    },
  ],
};

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import repriseIcon from 'common/src/assets/image/velo/service/reprise.png';
import venteIcon from 'common/src/assets/image/velo/service/vente.png';
import entretienIcon from 'common/src/assets/image/velo/service/entretien.png';

export const serviceData = {
  title: 'SERVICES',
  slogan: 'Nos services, en trois mots',
  services: [
    {
      icon: venteIcon,
      title: 'Boutique',
      description: `De bons vélos d'occasion, vintage distingués, ou récents taillés pour la route. Révisés et prêts à rouler !`,
      link: 'https://shop.vcommevelo.fr/collections/all'
      /*
        Que vous cherchiez un velo vintage pour vous déplacer dans la ville de manière distinguée,
        ou un vélo de course vous permettant aussi bien d\'attaquer les pentes de la Croix Rousse,
        de Fourvière que des Monts d\'Or, nous avons un vélo d'occasion pour vous.
        Nos vélos sont entièrement révisés (jeu et graissage des roulements, patins, pneus, chaîne et pignons),
        nettoyés et lubrifiés.
        Nous vous conseillons pour trouver un vélo adapté à votre taille, vos usages et votre budget.
        */
    },
    {
      icon: repriseIcon,
      title: 'Reprise',
      description:
        'Nous reprenons en cash ou en avoir votre vieux vélo inutilisé, nous pouvons même le récupérer chez vous¹.',
      link: '/reprise-de-velo-partout-en-france'
    },
    {
      icon: entretienIcon,
      title: 'Entretien',
      description:
        'Nous nous occupons de l\'entretien et petites réparations de votre vélo, chez vous ou dans notre atelier.',
      link: '/entretien-et-reparation-velo-a-domicile-a-lyon'
    },
  ],
};

/* ------------------------------------ */
// About section data
/* ------------------------------------ */
import parentImg from 'common/src/assets/image/velo/about_atelier.jpg';

export const aboutData = {
  thumb_alt: 'Le premier atelier confiné de V comme Vélo',
  thumb_url: parentImg,
  title: 'Hello, voici<br/>V comme Vélo',
  text: `
    V comme Vélo est un projet né pendant la confinement :
    nous avions du temps pour réfléchir et des envies de changement,
    notre esprit bricoleur et aventurier ne demandait qu'a s'exprimer,
    et plusieurs beaux vélos prenaient la poussière à la cave…
    Alors ce qui devait arriver arriva !
  `,
  text2: `
    Après avoir rénové un, puis deux vélo, puis rapidement dix vélos et maintenant une trentaine,
    il fallait se rendre à l'évidence : un autre virus s'était emparé de nous.
    V comme Vélo est l'occasion de partager cet amour des beaux vélos et du travail bien fait,
    tout en apportant notre petite pierre à l'édifice de la #vélorution !
  `,
  link_lbl: 'Sauvez une abeille, achetez un vélo',
  link: 'https://shop.vcommevelo.fr/collections/velo',
};

/* ------------------------------------ */
// Projects section data
/* ------------------------------------ */
import project1 from 'common/src/assets/image/velo/projects/1.png';

export const projectData = {
  title: 'WORK PROCEDURE',
  slogan: 'How We Do Our Projects',
  thumb_url: project1,
  projects: [
    {
      text:
        'Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.',
      text2:
        'When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.',
    },
    {
      text:
        'Schedule a brainstorming session in a quiet place with few distractions. If you are working on a project alone, you can use group discussions with friends or colleagues to gain a new perspective on the topic. When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.',
      text2:
        'Completing a successful project requires a significant amount of time and work, which means evaluating your priorities and planning your course of action.',
    },
    {
      text:
        'Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.',
      text2:
        'When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.',
    },
  ],
};

/* ------------------------------------ */
// Team section data
/* ------------------------------------ */
import { Icon } from 'react-icons-kit';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialInstagram } from 'react-icons-kit/ionicons/socialInstagram';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';

import member1 from 'common/src/assets/image/velo/team/member1.jpg';
import member2 from 'common/src/assets/image/velo/team/member2.jpg';
import member3 from 'common/src/assets/image/velo/team/member3.jpg';

export const teamData = {
  title: 'OUR TEAM MEMBER',
  slogan: 'Meet Our Perfectionist',
  members: [
    {
      avatar: member1,
      name: 'Roman Ul Oman',
      designation: 'Project Manager',
      social_links: [
        {
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          icon: <Icon icon={socialInstagram} />,
          url: '#1',
        },
        {
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      avatar: member2,
      name: 'Jeny Doe',
      designation: 'Lead Designer',
      social_links: [
        {
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          icon: <Icon icon={socialInstagram} />,
          url: '#1',
        },
        {
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      avatar: member3,
      name: 'Naina Cooper',
      designation: 'Marketing Manager',
      social_links: [
        {
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          icon: <Icon icon={socialInstagram} />,
          url: '#1',
        },
        {
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// News section data
/* ------------------------------------ */
export const newsData = [
  {
    title: 'Corporate design is a crucial part of your brand.',
    excerpt:
      'Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us',
    link_text: 'Read',
    link_url: '#',
  },
  {
    title: 'Learn more about landscape plans, how to design them.',
    excerpt:
      'Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best',
    link_text: 'Read',
    link_url: '#',
  },
  {
    title: 'Discover our design ideas, beautiful photos for interior design.',
    excerpt:
      'Discover our design ideas, beautiful photos and how-to projects to create Interior Design. We try to reflect your personality on our design',
    link_text: 'Read',
    link_url: '#',
  },
  {
    title: 'Interior design is an art and we are trying to paint monalisa.',
    excerpt:
      'With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary',
    link_text: 'Read',
    link_url: '#',
  },
];

/* ------------------------------------ */
// Testimonial data
/* ------------------------------------ */
export const testimonialData = {
  title: 'TESTIMONIAL',
  slogan: 'What Our Clients Say',
  reviews: [
    {
      name: 'Parker Joe',
      designation: 'Co-Founder & CEO',
      username: '@amader craft',
      account_url: '#',
      comment:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
    },
    {
      name: 'Britney havana',
      designation: 'Co-Founder & CEO',
      username: '@Light’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
    {
      name: 'June Spears',
      designation: 'Co-Founder & CEO',
      username: '@Eagle’s craft',
      account_url: '#',
      comment:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Jessica Parker',
      designation: 'Co-Founder & CEO',
      username: '@Earth’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work !',
      avatar:
        'https://pbs.twimg.com/profile_images/1049383024306081792/cQkGbpRO.jpg',
    },
    {
      name: 'Django Dsuja',
      designation: 'Co-Founder & CEO',
      username: '@Moon’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
    },
  ],
};

/* ------------------------------------ */
// Gallery data
/* ------------------------------------ */
import galleryImg1 from 'common/src/assets/image/velo/gallery/1.jpg';
import galleryImg2 from 'common/src/assets/image/velo/gallery/2.jpg';
import galleryImg3 from 'common/src/assets/image/velo/gallery/3.jpg';
import galleryImg4 from 'common/src/assets/image/velo/gallery/4.jpg';
import galleryImg5 from 'common/src/assets/image/velo/gallery/5.jpg';

export const galleryData = [
  {
    thumb_url: galleryImg1,
    name: 'Eco friendly',
    link: '#',
  },
  {
    thumb_url: galleryImg2,
    name: 'Living',
    link: '#',
  },
  {
    thumb_url: galleryImg3,
    name: 'Corner',
    link: '#',
  },
  {
    thumb_url: galleryImg4,
    name: 'Wall decor',
    link: '#',
  },
  {
    thumb_url: galleryImg5,
    name: 'Restroom',
    link: '#',
  },
];

/* ------------------------------------ */
// Products data
/* ------------------------------------ */
import IconOne from '../../assets/image/hosting/icon1.svg';
import IconTwo from '../../assets/image/hosting/icon2.svg';
import IconThree from '../../assets/image/hosting/icon3.svg';
import IconFour from '../../assets/image/hosting/icon4.svg';
import IconFive from '../../assets/image/hosting/icon5.svg';
import IconSix from '../../assets/image/hosting/icon6.svg';

export const productsData = [
  {
    title: 'Development Server ',
    description:
      'Get Lightspeed Development Server for your website and fly in the web',
    icon: `${IconOne}`,
  },
  {
    title: 'Web Protection',
    description:
      'Best Protection and some tools are provided with our Web servers .',
    icon: `${IconTwo}`,
  },
  {
    title: 'E-commerce Shop',
    description:
      'You can build any kind of E-commerce Shop with payment security tools',
    icon: `${IconThree}`,
  },
  {
    title: 'Money Back Guarantee',
    description:
      'We have provided 30 days money back guarantee for our customer',
    icon: `${IconFour}`,
  },
  {
    title: 'Client Satisfaction',
    description:
      'Client Satisfaction is our first priority and We are best at it',
    icon: `${IconFive}`,
  },
  {
    title: '24/7 Online Support',
    description:
      'A Dedicated support team is always ready to provide best support ',
    icon: `${IconSix}`,
  },
];

/* ------------------------------------ */
// Social data
/* ------------------------------------ */
import { facebook } from 'react-icons-kit/fa/facebook';
import { instagram } from 'react-icons-kit/fa/instagram';
import { twitter } from 'react-icons-kit/fa/twitter';

export const socialData = [
  {
    icon: <Icon icon={facebook} />,
    name: 'facebook',
    link: 'https://www.facebook.com/vcommevelo',
  },
  {
    icon: <Icon icon={instagram} />,
    name: 'instagram',
    link: 'https://www.instagram.com/vcommevelo_lyon',
  },
  {
    icon: <Icon icon={twitter} />,
    name: 'twitter',
    link: 'https://www.twitter.com/vcommevelo',
  },
];

/* ------------------------------------ */
// Newsletter data
/* ------------------------------------ */
export const newsletterData = {
  title: 'Suivez notre aventure par email',
  follow: 'Ou suivez nous sur les réseaux sociaux',
  confirmation: 'Une demande de confirmation de votre inscription vous a été envoyée !'
};

/* ------------------------------------ */
// Footer data
/* ------------------------------------ */

import logo from 'common/src/assets/image/velo/logo.png';

export const footerData = {
  logo: logo,
  email: 'PLUS EN ACTIVITÉ',
  phone: 'PLUS EN ACTIVITÉ',
  menuWidgets: [
    {
      title: 'Boutique',
      menu: [
        {
          text: 'Vélos vintages',
          link: 'https://shop.vcommevelo.fr/collections/velo-vintage',
        },
        {
          text: 'Vélos de route récents',
          link: 'https://shop.vcommevelo.fr/collections/velo-route',
        },
        {
          text: 'Les pièces détachées',
          link: 'https://shop.vcommevelo.fr/collections/pieces-detachees',
        },
      ],
    },
    {
      title: 'Reprise',
      menu: [
        {
          text: 'Reprise de vélo à domicile',
          link: '/reprise-de-velo-partout-en-france',
        },
        {
          text: '¹Conditions de reprise',
          link: '/reprise-de-velo-partout-en-france#conditions',
        },
      ],
    },
    {
      title: 'Entretien',
      menu: [
        {
          text: 'Pneu à plat, pneu crevé ou pneu usé',
          link: '/entretien#pneumatique',
        },
        {
          text: 'Freins usés, freins qui freinent mal ou freins qui font du bruit',
          link: '/entretien#pneumatique',
        },
        {
          text: 'Roue voilée ou rayon cassé',
          link: '/entretien#roue',
        },
        {
          text: 'Vitesses qui passent mal, câble de dérailleur cassé ou usé',
          link: '/entretien#transmission',
        },
        {
          text: 'Besoin d\'une révision',
          link: '/entretien#revision',
        },
        {
          text: 'Clef d\'antivol perdue',
          link: '/entretien#antivol',
        },
      ],
    },
  ],
};
