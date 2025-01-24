import { randomId } from "@mantine/hooks";

import VastuOfficeImg from "../assets/projects/vastu-office.png";
import ShivJiImg from "../assets/projects/shiv-ji.png";
import UdayAgarwalImg from "../assets/projects/uday-agarwal.png";
import DrAmitImg from "../assets/projects/dr-amit.png";
import BinitJiImg from "../assets/projects/binit-ji.png";
import BimalJiImg from "../assets/projects/bimal-ji.png";
import BikeTriImg from "../assets/projects/bike-and-tri.png";
import AshokMardaImg from "../assets/projects/ashok-marda.png";
import AnupJiImg from "../assets/projects/anup-ji.jpg";
import SanjayAgarwalImg from "../assets/projects/sanjay-agarwal.png";

export const projects = [
  {
    id: randomId(),
    name: "Vastu Office",
    image: VastuOfficeImg,
    tags: ["commercial"],
    link: "",
  },
  //  ARCHITECTURAL .   COMMERCIAL  .  RESIDENTIAL
  {
    id: randomId(),
    name: "Shiv Ji",
    image: ShivJiImg,
    tags: ["residential"],
    link: "",
  },
  {
    id: randomId(),
    name: "Uday Agarwal",
    image: UdayAgarwalImg,
    tags: ["residential"],
    link: "",
  },
  {
    id: randomId(),
    name: "Sanjay Agarwal",
    image: SanjayAgarwalImg,
    tags: ["residential"],
    link: "",
  },
  {
    id: randomId(),
    name: "Binit Ji",
    image: BinitJiImg,
    tags: ["residential"],
    link: "",
  },
  {
    id: randomId(),
    name: "Bike and Tri",
    image: BikeTriImg,
    tags: ["commercial", "architectural"],
    link: "",
  },
  {
    id: randomId(),
    name: "Dr. Amit",
    image: DrAmitImg,
    tags: ["residential"],
    link: "",
  },
  {
    id: randomId(),
    name: "Bimal Ji",
    image: BimalJiImg,
    tags: ["residential"],
    link: "",
  },
  {
    id: randomId(),
    name: "Ashok Marda",
    image: AshokMardaImg,
    tags: ["residential"],
    link: "",
  },
  {
    id: randomId(),
    name: "Anup Ji",
    image: AnupJiImg,
    tags: ["residential"],
    link: "",
  },
];
