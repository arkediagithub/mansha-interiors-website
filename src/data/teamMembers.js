import { randomId } from "@mantine/hooks";
import DishaGargImage from "../assets/teams/Disha-Garg.jpg";
import RahulPaulImage from "../assets/teams/Rahul-Paul.jpg";
import PragyaGiyaImage from "../assets/teams/Pragya-Giya.jpg";
import MayuriAgarwalImage from "../assets/teams/Mayuri-agarwal.jpg";
import NikitaImage from "../assets/teams/Nikita.jpg";
import RavinYadavImage from "../assets/teams/Ravin-Yadav.jpg";
import RuchikaAgarwalImage from "../assets/teams/Ruchika-Agarwal.jpg";
import FounderImage from "../assets/teams/goutam-agarwal-founder.jpg";

export const founder = {
  name: "Gautam Agarwal",
  designation: "Co-founder",
  about: [
    "Gautam Agarwal is the Founder and Principle Designer at Mansha interiors. He is a B.Com graduate along with a diploma from INIFD in Interior Design. He started this firm 13 years ago with a zeal for designing spaces.",
    "Gautam's noble aim is create joy with his designs. He is stickler for details and is dedicated in making every project unique. His approach towards design is driven by an in- depth understanding of the users requirements, creative space planning and a careful study of volumes and forms.",
  ],
  image: FounderImage,
};

export const teamMembers = [
  {
    id: randomId(),
    name: "Disha Garg",
    designation: "",
    image: DishaGargImage,
  },
  {
    id: randomId(),
    name: "Rahul Paul",
    designation: "",
    image: RahulPaulImage,
  },
  {
    id: randomId(),
    name: "Pragya Giya",
    designation: "",
    image: PragyaGiyaImage,
  },
  {
    id: randomId(),
    name: "Mayuri Agarwal",
    designation: "",
    image: MayuriAgarwalImage,
  },
  {
    id: randomId(),
    name: "Nikita",
    designation: "",
    image: NikitaImage,
  },
  {
    id: randomId(),
    name: "Ravin Yadav",
    designation: "",
    image: RavinYadavImage,
  },
  {
    id: randomId(),
    name: "Ruchika Agarwal",
    designation: "",
    image: RuchikaAgarwalImage,
  },
];
