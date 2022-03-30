import { AiFillInstagram } from "react-icons/ai";
import { FaCalendar, FaFolder } from "react-icons/fa";
import { MdMail, MdMarkunreadMailbox } from "react-icons/md";
import { SocialProps } from "../components/social";

export type SocialKey =
  | "mailingList"
  | "calendar"
  | "googleDrive"
  | "instagram"
  | "email";

const socials: { [key in SocialKey]: SocialProps } = {
  mailingList: {
    name: "Mailing List",
    url: "https://groups.google.com/u/1/a/trinity.edu/g/coffee",
    icon: MdMarkunreadMailbox,
  },
  calendar: {
    name: "Calendar",
    url: "https://calendar.google.com/calendar/u/1?cid=Y19yMDJhOWhsdnJudW90NXNnM2xvcTFqc2tmb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
    icon: FaCalendar,
  },
  googleDrive: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/1/folders/0ALjCnMs_WNylUk9PVA",
    icon: FaFolder,
  },
  instagram: {
    name: "Instagram",
    identifier: "@tucoffeeclub",
    url: "https://www.instagram.com/tucoffeeclub/",
    icon: AiFillInstagram,
  },
  email: {
    name: "Email",
    identifier: "coffee@trinity.edu",
    url: "mailto:coffee@trinity.edu",
    icon: MdMail,
  },
};

export default socials;
