import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
    .use(backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        defaultNS: 'common',
        supportedLngs: ['en', 'ua', 'es'],
        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: true,
        },
    });

export const i18n = i18next;
