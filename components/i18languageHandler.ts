import { useTranslation } from "next-i18next";
import { useEffect } from "react";

const I18nLanguageHandler = (): null => {
  const { i18n } = useTranslation("common");
  const locale = i18n.language;

  useEffect(() => {
    // bail early when i18n = {}

    console.log("i18n.language", i18n.language);

    // if locale is ready and the i18n.language does != locale - changeLanguage
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
    // set dir="rtl|ltr"
    document.dir = i18n.dir();
    document.documentElement.setAttribute("lang", locale);
  }, [locale, i18n]);

  return null;
};

export default I18nLanguageHandler;
