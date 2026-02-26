export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ClubEvent {
  date: string;
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
}

export interface Member {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials: SocialLink[];
}

export interface Project {
  icon: string;
  tag: string;
  title: string;
  description: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface FooterContact {
  email: string;
  phone: string;
  location: string;
}
