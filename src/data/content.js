import banner from "../assets/images/5.jpg";
import logo from "../assets/logo-navy.svg";
import youtube from "../assets/icons/f24s_icon_wifi.svg";
import twitter from "../assets/icons/f24s_icon_globe.svg";
import instagram from "../assets/icons/f24s_icon_instagram.svg";
import linkedin from "../assets/icons/f24s_icon_linkedin.svg";
import ssr from "../assets/icons/f24s_icon_youtube.svg";
import facebook from "../assets/icons/f24s_icon_facebook.svg";
import Finland from "../assets/flags/fi.svg";
import Thailand from "../assets/flags/th.svg";
import Sweden from "../assets/flags/se.svg";
import Norway from "../assets/flags/no.svg";

export default {
  global: {
    logo: { logo: logo, alt: "Fitness24Seven Logo" },
    lang: { icon: twitter, alt: "Globe icon" },
    countries: [
      { lang: "Sweden", icon: Sweden },
      { lang: "Norway", icon: Norway },
      { lang: "Finland", icon: Finland },
      { lang: "Polska", icon: Sweden },
      { lang: "Colombia", icon: Norway },
      { lang: "Thailand", icon: Thailand },
    ],
  },

  hero: {
    text: {
      headline: "Min Stora Blogg titel",
      title:
        "At Fitness24Seven everything counts, even if you don't want to train everyday. Start your journey from blue to black membership today. Text about new goal!",
    },
    img: { img: banner },
  },
  blogHeader: {
    text: {
      headline: "Featured blogg inlägg",
      title:
        "At Fitness24Seven everything counts, even if you don't want to train everyday. Start your journey from blue to black membership today. Text about new goal!",
    },
  },
  blogHeader1: {
    text: {
      headline: "Latest blogg inlägg",
      title:
        "At Fitness24Seven everything counts, even if you don't want to train everyday. Start your journey from blue to black membership today. Text about new goal!",
    },
  },
  blogPosts: [
    {
      meta: {
        id: "001",
        featured: false,
        readTime: "10 min",
        date: "22 Dec",
        time: "14:30-15:45",
        category: "Styrkelyft",
        link: "",
      },
      content: {
        title: "Stora muskler på 10min",
        preamble:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      img: {
        src: banner,
        alt: "person working out",
      },
    },
    {
      meta: {
        id: "002",
        featured: false,
        readTime: "10 min",
        date: "22 Dec",
        time: "14:30-15:45",
        category: "Styrkelyft",
        link: "",
      },
      content: {
        title: "Veganism på lokal nivå",
        preamble:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      img: {
        src: banner,
        alt: "person working out",
      },
    },
    {
      meta: {
        id: "003",
        featured: false,
        readTime: "10 min",
        date: "22 Dec",
        time: "14:30-15:45",
        category: "Styrkelyft",
        link: "",
      },
      content: {
        title: "Min stora prestation",
        preamble:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      img: {
        src: banner,
        alt: "person working out",
      },
    },
    {
      meta: {
        id: "004",
        featured: false,
        readTime: "10 min",
        date: "22 Dec",
        time: "14:30-15:45",
        category: "Styrkelyft",
        link: "",
      },
      content: {
        title: "Min minimala prestation",
        preamble:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      img: {
        src: banner,
        alt: "person working out",
      },
    },
    {
      meta: {
        id: "005",
        featured: true,
        link: "",
      },
      content: {
        title: "Stora muskler på 10min",
        preamble:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      img: {
        src: banner,
        alt: "person working out",
      },
    },
    {
      meta: {
        id: "006",
        featured: true,
        link: "",
      },
      content: {
        title: "Större muskler på 10min",
        preamble:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      img: {
        src: banner,
        alt: "person working out",
      },
    },
    {
      meta: {
        id: "007",
        featured: true,
        link: "",
      },
      content: {
        title: "Lorem ipsum dolor sit",
        preamble:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      img: {
        src: banner,
        alt: "person working out",
      },
    },
  ],
  socialMedia: [
    { icon: twitter, sr: "twitter icon", link: "https://twitter.com/f24s_swe" },
    {
      icon: linkedin,
      sr: "linkedin icon",
      link: "https://www.linkedin.com/company/fitness24seven",
    },
    {
      icon: instagram,
      sr: "instagram",
      link: "https://www.instagram.com/fitness24seven/",
    },
    {
      icon: youtube,
      sr: "youtube",
      link: "https://www.youtube.com/user/Fitness24seven",
    },
    {
      icon: facebook,
      sr: "facebook",
      link: "https://www.facebook.com/Fitness24SevenSweden/",
    },
    { icon: ssr, sr: "ssr", link: "https://se.fitness24seven.com/" },
  ],
};
