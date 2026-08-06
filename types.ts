export interface FeatureAccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}
