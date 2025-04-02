import i18n from 'i18next'
import { initReactI18next  } from 'react-i18next'
i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
        GREET: "Good Morning"
        }
  
      },
      de: {
        translation: {
        GREET: "Guten Morgen"
        }
      }
    },
    debug:true,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

  export default i18n