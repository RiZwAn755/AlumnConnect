import { Feature, NavLink, Statistic, Testimonial } from "../types";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Events", href: "#" },
  { name: "Contact", href: "#" },
];

export const FEATURES: Feature[] = [
  {
    title: "Global Networking",
    description: "Connect with alumni across industries and geographies to expand your professional network.",
    icon: "users",
  },
  {
    title: "Exclusive Events",
    description: "Access member-only reunions, workshops, and networking events both online and in-person.",
    icon: "calendar",
  },
  {
    title: "Mentorship Programs",
    description: "Give back by mentoring current students or find a mentor to guide your career journey.",
    icon: "award",
  },
  {
    title: "Job Opportunities",
    description: "Discover career opportunities shared exclusively within our alumni community.",
    icon: "briefcase",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content: "The alumni platform helped me land my dream job through a connection I made at a virtual networking event. The community has been incredibly supportive throughout my career journey.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    content: "I've mentored three graduates through the alumni network, and it's been one of the most rewarding experiences of my career. The platform makes connecting with the right mentees effortless.",
    name: "Michael Chen",
    role: "Senior Software Engineer",
    company: "InnovateTech",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    content: "After relocating to a new city, the local alumni chapter welcomed me with open arms. The events and connections made my transition seamless, both professionally and personally.",
    name: "Priya Patel",
    role: "Financial Analyst",
    company: "Global Investments",
    image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const STATISTICS: Statistic[] = [
  { value: "50k+", label: "Alumni Worldwide" },
  { value: "2,500+", label: "Events Hosted" },
  { value: "10k+", label: "Job Opportunities" },
  { value: "95%", label: "Success Rate" },
];