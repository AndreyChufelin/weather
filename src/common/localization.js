import { createI18n } from "vue-i18n";

const messages = {
  en: {
    search: "Select city...",
    january: "january",
    february: "february",
    march: "march",
    april: "april",
    may: "may",
    june: "june",
    july: "july",
    august: "august",
    september: "september",
    october: "October",
    november: "November",
    december: "December",
    monday: "monday",
    tuesday: "tuesday",
    wednesday: "wednesday",
    thursday: "thursday",
    friday: "friday",
    saturday: "saturday",
    sunday: "sunday",
  },
  ru: {
    search: "Найти город...",
    january: "январь",
    february: "февраль",
    march: "март",
    april: "апрель",
    may: "май",
    june: "июнь",
    july: "июль",
    august: "август",
    september: "сентябрь",
    october: "октябрь",
    november: "ноябрь",
    december: "декабрь",
    monday: "понедельник",
    tuesday: "вторник",
    wednesday: "среда",
    thursday: "четверг",
    friday: "пятница",
    saturday: "суббота",
    sunday: "воскресенье",
  },
};

// Create VueI18n instance with options
export const i18n = createI18n({
  legacy: false,
  locale: "en", // set locale
  fallbackLocale: "en",
  messages, // set locale messages
});
