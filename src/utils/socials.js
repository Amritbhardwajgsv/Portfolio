import { Linkedin, Twitter, Github, Mail, FileDown } from 'lucide-react';

export const SOCIAL_DATA = [
  {
    name: 'GitHub',
    href: 'https://github.com/Amritbhardwajgsv',
    icon: Github
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/amrit-bhardwaj-50836528a/',
    icon: Linkedin
  },
  {
    name: 'twitter',
    href: 'https://x.com/print_amrit',
    icon: Twitter
  },
  {
    name: 'Email',
    href: 'mailto:amritbharadwaj4@gmail.com',
    icon: Mail,
    isEmail: true
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: FileDown
  }
];
