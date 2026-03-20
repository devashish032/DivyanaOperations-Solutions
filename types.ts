
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export interface FeatureAccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}
