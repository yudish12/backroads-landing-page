import {
  FaSocks,
  FaTree,
  FaWallet,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

import tour1 from "./Images/tour-1.jpeg";
import tour2 from "./Images/tour-2.jpeg";
import tour3 from "./Images/tour-3.jpeg";
import tour4 from "./Images/tour-4.jpeg";

export const navLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 1, href: "#about", text: "About" },
  { id: 1, href: "#services", text: "Services" },
  { id: 1, href: "#tours", text: "Tours" },
];

export const Icons = [
  {
    id: 1,
    icon: (
      <FaTwitter style={{ color: "#00acee", height: "20px", width: "30px" }} />
    ),
  },
  {
    id: 2,
    icon: (
      <FaFacebook style={{ color: "#4267B2", height: "20px", width: "30px" }} />
    ),
  },
  {
    id: 3,
    icon: (
      <FaWhatsapp style={{ color: "#128C7E", height: "20px", width: "30px" }} />
    ),
  },
];

export const service = [
  {
    id: 1,
    icon: <FaWallet style={{ height: "20px", width: "30px" }} />,
    title: "Saving Money",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui asperiores! Debitis vitae qui repellendus voluptatem ratione eos omnis in.",
  },
  {
    id: 2,
    icon: <FaTree style={{ height: "20px", width: "30px" }} />,
    title: "Endless Hiking",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui asperiores! Debitis vitae qui repellendus voluptatem ratione eos omnis in.",
  },
  {
    id: 3,
    icon: <FaSocks style={{ height: "20px", width: "30px" }} />,
    title: "Amazing Comfort",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui asperiores! Debitis vitae qui repellendus voluptatem ratione eos omnis in.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
