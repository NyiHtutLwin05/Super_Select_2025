'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <Button
      variant="ghost"
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'my' : 'en')}
    >
      {i18n.language === 'en' ? 'မြန်မာ' : 'ENG'}
    </Button>
  );
}