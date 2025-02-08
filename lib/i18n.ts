import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'company.name': 'Super Select Glass & Aluminum',
      'gallery.categories': 'Categories',
    }
  },
  my: {
    translation: {
      'nav.home': 'ပင်မ',
      'nav.about': 'အကြောင်း',
      'nav.gallery': 'ဓာတ်ပုံများ',
      'nav.contact': 'ဆက်သွယ်ရန်',
      'company.name': 'စူပါစီလက် မှန်နှင့် အလူမီနီယံ',
      'gallery.categories': 'အမျိုးအစားများ',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;