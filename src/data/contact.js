import { randomId } from "@mantine/hooks";
import {
  IconClockHour4,
  IconMapPin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export const contactInfo = [
  {
    id: randomId(),
    title: "Location",
    description: "Shop No.9, 2nd Floor, Time Square Building, Siliguri",
    icon: IconMapPin,
    type: "text",
    linkTo: "",
  },
  {
    id: randomId(),
    title: "Timing",
    description: "Monday-Friday: 10AM-7PM",
    icon: IconClockHour4,
    type: "text",
    linkTo: "",
  },
  {
    id: randomId(),
    title: "Email",
    description: "work@manshainteriors.com",
    icon: IconMail,
    type: "link",
    linkTo: "mailto:work@manshainteriors.com",
  },
  {
    id: randomId(),
    title: "Phone",
    description: "+91-9609930991/9832049481",
    icon: IconPhone,
    type: "link",
    linkTo: "tel:919609930991",
  },
];
