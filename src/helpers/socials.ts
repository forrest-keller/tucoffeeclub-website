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
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf0TQf2LS5CiicxndaGTV-q8K7UsYhF1oZXDuT5nYnmCVq4ug/viewform?usp=sf_link",
    icon: MdMarkunreadMailbox,
  },
  instagram: {
    name: "Instagram",
    identifier: "@tucoffeeclub",
    url: "https://www.instagram.com/tucoffeeclub/",
    icon: AiFillInstagram,
  },
  email: {
    name: "Email",
    identifier: "fkeller@trinity.edu",
    url: "mailto:fkeller@trinity.edu",
    icon: MdMail,
  },
};

export default socials;
