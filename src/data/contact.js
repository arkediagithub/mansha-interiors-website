import { randomId } from "@mantine/hooks";
import {
  IconClockHour4,
  IconMapPin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export const contactInfo = [
  {
    title: "Timing",
    description: "Monday-Friday: 10AM-7PM",
    icon: IconClockHour4,
    id: randomId(),
  },
  {
    title: "Location",
    description: "Shop 33, 2nd Floor, The Planet Mall Sevoke Road, Siliguri",
    icon: IconMapPin,
    id: randomId(),
  },
  {
    title: "Email",
    description: "mi@manshainteriors.com",
    icon: IconMail,
    id: randomId(),
  },
  {
    title: "Phone",
    description: "+91-9609930991 / 9832049481",
    icon: IconPhone,
    id: randomId(),
  },
];
