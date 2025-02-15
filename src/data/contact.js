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
    title: "Email",
    description: "work@manshainteriors.com",
    icon: IconMail,
    type: "email",
    to: "work@manshainteriors.com",
  },
  {
    id: randomId(),
    title: "Phone",
    description: "9609930991/9832049481/9749405567",
    icon: IconPhone,
    type: "phone",
    to: "tel:919609930991",
  },
  {
    id: randomId(),
    title: "Location",
    description: "Shop No.9, 2nd Floor, Time Square Building, Siliguri",
    icon: IconMapPin,
    type: "location",
    to: "https://maps.app.goo.gl/zYyLB4avcZh4VaAz7",
  },
  {
    id: randomId(),
    title: "Timing",
    description: "Monday-Saturday: 10AM-7PM",
    icon: IconClockHour4,
    type: "text",
    to: "",
  },
];
