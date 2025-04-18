export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export interface Statistic {
  value: string;
  label: string;
}