export interface NavigationItem {
  name: string;
  href: string;
}

export interface HeroButton {
  text: string;
  href: string;
  primary: boolean;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Job {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  logo: string;
  titles: string[];
  description: string;
  profileImage: string;
  email: string;
}

export interface About {
  title: string;
  description: string;
}

export interface Skills {
  title: string;
  list: Skill[];
}

export interface Experience {
  title: string;
  jobs: Job[];
}

export interface Portfolio {
  title: string;
  projects: Project[];
}

export interface Contact {
  title: string;
  description: string;
  buttonText: string;
}

export interface Footer {
  text: string;
  socials: Social[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  navigation: NavigationItem[];
  heroButtons: HeroButton[];
  about: About;
  skills: Skills;
  experience: Experience;
  portfolio: Portfolio;
  contact: Contact;
  footer: Footer;
}