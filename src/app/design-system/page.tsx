import { DesignSystemDemo } from '@/components/ui/design-system-demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design System | ThinkHome',
  description: 'Centralizovaný design systém pro ThinkHome - barvy, typografie, komponenty a spacing.',
};

export default function DesignSystemPage() {
  return <DesignSystemDemo />;
}