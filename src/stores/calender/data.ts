// data.ts
import type { Option, CalendarForm, ShiftTypeTimeRange } from "../../types/calender";

export const calendarCategoryOptions: Option[] = [
  { id: 1, name: "NON-OFFICE WORKING HOURS" },
  { id: 2, name: "OFFICE WORKING HOURS" },
  { id: 3, name: "OTHERS OFFICE WORKING HOURS" },
];

export const stateOptions: Option[] = [
  { id: 1, name: "Perlis" },
  { id: 2, name: "Kedah" },
  { id: 3, name: "Selangor" },
  { id: 4, name: "Melaka" },
  { id: 5, name: "Federal Territory" },
];

export const agencyOptions: Option[] = [
  { id: 1, name: "Agency 1" },
  { id: 2, name: "Agency 2" },
  { id: 3, name: "Agency 3" },
  { id: 4, name: "Agency 4" },
];

export const holidayList: Option[] = [
  { id: 101, name: "New Year" },
  { id: 102, name: "Chinese New Year" },
  { id: 103, name: "Eid al-Fitr" },
];

export const malaysianPublicHolidays: { name: string; date: string; dayName: string }[] = [
  { name: "New Year's Day", date: "2025-01-01", dayName: "Wednesday" },
  { name: "Federal Territory Day", date: "2025-02-01", dayName: "Saturday" },
  { name: "Chinese New Year", date: "2025-01-25", dayName: "Saturday" },
  { name: "Chinese New Year (Day 2)", date: "2025-01-26", dayName: "Sunday" },
  { name: "Thaipusam", date: "2025-02-05", dayName: "Wednesday" },
  { name: "Labour Day", date: "2025-05-01", dayName: "Thursday" },
  { name: "Wesak Day", date: "2025-05-12", dayName: "Monday" },
  { name: "Hari Raya Puasa", date: "2025-04-03", dayName: "Thursday" },
  { name: "Hari Raya Puasa (Day 2)", date: "2025-04-04", dayName: "Friday" },
  { name: "King's Birthday", date: "2025-06-07", dayName: "Saturday" },
  { name: "Hari Raya Haji", date: "2025-06-11", dayName: "Wednesday" },
  { name: "Awal Muharram", date: "2025-07-30", dayName: "Wednesday" },
  { name: "National Day", date: "2025-08-31", dayName: "Sunday" },
  { name: "Malaysia Day", date: "2025-09-16", dayName: "Tuesday" },
  { name: "Deepavali", date: "2025-11-12", dayName: "Wednesday" },
  { name: "Prophet Muhammad's Birthday", date: "2025-10-19", dayName: "Sunday" },
  { name: "Christmas Day", date: "2025-12-25", dayName: "Thursday" },
];

export const shiftTypeOptions: Option[] = [
  { id: 1, name: "4 WORK DAYS, 3 REST DAYS" },
  { id: 2, name: "5 WORK DAYS, 2 DAYS OFF" },
  { id: 3, name: "6 WORK DAYS, 1 DAY OFF" },
];

export const groupOptions: Option[] = [
  { id: 1, name: "GROUP A" },
  { id: 2, name: "GROUP B" },
];

export const weekDays: Option[] = [
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
  { id: 7, name: "Saturday" },
];

export const shiftTypeTimeRange: ShiftTypeTimeRange[] = [
  {
    id: 1,
    schedule: [
      { dayId: 1, dayName: "Sunday", start: null, end: null },
      { dayId: 2, dayName: "Monday", start: "09:00", end: "17:00" },
      { dayId: 3, dayName: "Tuesday", start: "09:00", end: "17:00" },
      { dayId: 4, dayName: "Wednesday", start: "09:00", end: "17:00" },
      { dayId: 5, dayName: "Thursday", start: null, end: null },
      { dayId: 6, dayName: "Friday", start: null, end: null },
      { dayId: 7, dayName: "Saturday", start: "09:00", end: "17:00" },
    ],
  },
  {
    id: 2,
    schedule: [
      { dayId: 1, dayName: "Sunday", start: null, end: null },
      { dayId: 2, dayName: "Monday", start: "08:30", end: "16:30" },
      { dayId: 3, dayName: "Tuesday", start: "08:30", end: "16:30" },
      { dayId: 4, dayName: "Wednesday", start: "08:30", end: "16:30" },
      { dayId: 5, dayName: "Thursday", start: "08:30", end: "16:30" },
      { dayId: 6, dayName: "Friday", start: "08:30", end: "16:30" },
      { dayId: 7, dayName: "Saturday", start: null, end: null },
    ],
  },
  {
    id: 3,
    schedule: [
      { dayId: 1, dayName: "Sunday", start: null, end: null },
      { dayId: 2, dayName: "Monday", start: "08:00", end: "14:00" },
      { dayId: 3, dayName: "Tuesday", start: "08:00", end: "14:00" },
      { dayId: 4, dayName: "Wednesday", start: "08:00", end: "14:00" },
      { dayId: 5, dayName: "Thursday", start: "08:00", end: "14:00" },
      { dayId: 6, dayName: "Friday", start: "08:00", end: "14:00" },
      { dayId: 7, dayName: "Saturday", start: "08:00", end: "14:00" },
    ],
  },
];

export const calendars: CalendarForm[] = [
  {
    id: 1,
    calendarName: "SHIFT CALENDAR 1",
    calendarCategoryId: 1,
    calendarGroupId: 2,
    shiftTypeId: 2,
    restBreak: { startDate: "2025-05-01", endDate: "2025-05-07" },
    generalHolidays: [101, 102],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Friday",
    weeklyHoliday: "Saturday",
    selectedStateIds: [1, 3, 4],
    selectedAgencyIds: [2, 4],
    isSpecialHoliday: true,
    specialHolidayAgencyIds: [2],
  },
  {
    id: 2,
    calendarName: "SHIFT CALENDAR 2",
    calendarCategoryId: 2,
    calendarGroupId: 1,
    shiftTypeId: 3,
    restBreak: { startDate: "2025-07-01", endDate: "2025-07-10" },
    generalHolidays: [101, 103],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Sunday",
    weeklyHoliday: "Saturday",
    selectedStateIds: [2, 5],
    selectedAgencyIds: [1, 3],
    isSpecialHoliday: false,
  },
  {
    id: 3,
    calendarName: "KEDAH CENTRAL OFFICE",
    calendarCategoryId: 2,
    calendarGroupId: 1,
    shiftTypeId: 2,
    restBreak: { startDate: "2025-02-10", endDate: "2025-02-17" },
    generalHolidays: [101, 102, 103],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Friday",
    weeklyHoliday: "Sunday",
    selectedStateIds: [2],
    selectedAgencyIds: [1, 4],
    isSpecialHoliday: true,
    specialHolidayAgencyIds: [1],
  },
  {
    id: 4,
    calendarName: "SELANGOR REGIONAL OFFICE",
    calendarCategoryId: 2,
    calendarGroupId: 2,
    shiftTypeId: 2,
    restBreak: { startDate: "2025-04-15", endDate: "2025-04-22" },
    generalHolidays: [102, 103],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Sunday",
    weeklyHoliday: "Saturday",
    selectedStateIds: [3],
    selectedAgencyIds: [2, 3],
    isSpecialHoliday: false,
  },
  {
    id: 5,
    calendarName: "HOSPITAL SHIFT CALENDAR",
    calendarCategoryId: 1,
    calendarGroupId: 1,
    shiftTypeId: 1,
    restBreak: { startDate: "2025-01-20", endDate: "2025-01-26" },
    generalHolidays: [101],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Wednesday",
    weeklyHoliday: "Thursday",
    selectedStateIds: [1, 2, 3, 4, 5],
    selectedAgencyIds: [3],
    isSpecialHoliday: false,
  },
  {
    id: 6,
    calendarName: "EMERGENCY SERVICES CALENDAR",
    calendarCategoryId: 1,
    calendarGroupId: 2,
    shiftTypeId: 1,
    restBreak: { startDate: "2025-09-10", endDate: "2025-09-17" },
    generalHolidays: [],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Monday",
    weeklyHoliday: "Tuesday",
    selectedStateIds: [3, 5],
    selectedAgencyIds: [1, 2],
    isSpecialHoliday: false,
  },
  {
    id: 7,
    calendarName: "PERLIS ADMINISTRATIVE OFFICE",
    calendarCategoryId: 2,
    calendarGroupId: 1,
    shiftTypeId: 2,
    restBreak: { startDate: "2025-10-01", endDate: "2025-10-08" },
    generalHolidays: [101, 102],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Sunday",
    weeklyHoliday: "Saturday",
    selectedStateIds: [1],
    selectedAgencyIds: [2, 4],
    isSpecialHoliday: true,
    specialHolidayAgencyIds: [4],
  },
  {
    id: 8,
    calendarName: "MELAKA TOURIST OFFICE",
    calendarCategoryId: 3,
    calendarGroupId: 2,
    shiftTypeId: 3,
    restBreak: { startDate: "2025-06-20", endDate: "2025-06-27" },
    generalHolidays: [101, 103],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Monday",
    weeklyHoliday: "Sunday",
    selectedStateIds: [4],
    selectedAgencyIds: [1, 3],
    isSpecialHoliday: true,
    specialHolidayAgencyIds: [3],
  },
  {
    id: 9,
    calendarName: "FEDERAL TERRITORY MAIN OFFICE",
    calendarCategoryId: 2,
    calendarGroupId: 1,
    shiftTypeId: 2,
    restBreak: { startDate: "2025-03-10", endDate: "2025-03-17" },
    generalHolidays: [101, 102, 103],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Sunday",
    weeklyHoliday: "Saturday",
    selectedStateIds: [5],
    selectedAgencyIds: [2, 4],
    isSpecialHoliday: false,
  },
  {
    id: 10,
    calendarName: "CUSTOMS DEPARTMENT SHIFTS",
    calendarCategoryId: 1,
    calendarGroupId: 2,
    shiftTypeId: 1,
    restBreak: { startDate: "2025-08-15", endDate: "2025-08-22" },
    generalHolidays: [101],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Thursday",
    weeklyHoliday: "Friday",
    selectedStateIds: [2, 3, 5],
    selectedAgencyIds: [1],
    isSpecialHoliday: false,
  },
  {
    id: 11,
    calendarName: "AGRICULTURAL DEPARTMENT",
    calendarCategoryId: 3,
    calendarGroupId: 1,
    shiftTypeId: 2,
    restBreak: { startDate: "2025-07-15", endDate: "2025-07-22" },
    generalHolidays: [101, 102],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Sunday",
    weeklyHoliday: "Saturday",
    selectedStateIds: [1, 2, 3, 4],
    selectedAgencyIds: [3],
    isSpecialHoliday: true,
    specialHolidayAgencyIds: [3],
  },
  {
    id: 12,
    calendarName: "TOURISM OFFICE SHIFTS",
    calendarCategoryId: 3,
    calendarGroupId: 2,
    shiftTypeId: 3,
    restBreak: { startDate: "2025-11-15", endDate: "2025-11-22" },
    generalHolidays: [101, 103],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Tuesday",
    weeklyHoliday: "Wednesday",
    selectedStateIds: [3, 4, 5],
    selectedAgencyIds: [2, 4],
    isSpecialHoliday: false,
  },
  {
    id: 13,
    calendarName: "FINANCE DEPARTMENT",
    calendarCategoryId: 2,
    calendarGroupId: 1,
    shiftTypeId: 2,
    restBreak: { startDate: "2025-12-20", endDate: "2025-12-31" },
    generalHolidays: [101, 102, 103],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Sunday",
    weeklyHoliday: "Saturday",
    selectedStateIds: [5],
    selectedAgencyIds: [1, 2, 3, 4],
    isSpecialHoliday: true,
    specialHolidayAgencyIds: [1, 2],
  },
  {
    id: 14,
    calendarName: "EDUCATION DEPARTMENT",
    calendarCategoryId: 2,
    calendarGroupId: 1,
    shiftTypeId: 2,
    restBreak: { startDate: "2025-06-01", endDate: "2025-06-30" },
    generalHolidays: [101, 102],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Sunday",
    weeklyHoliday: "Saturday",
    selectedStateIds: [1, 2, 3, 4, 5],
    selectedAgencyIds: [2],
    isSpecialHoliday: false,
  },
  {
    id: 15,
    calendarName: "TRANSPORTATION DEPARTMENT",
    calendarCategoryId: 1,
    calendarGroupId: 2,
    shiftTypeId: 1,
    restBreak: { startDate: "2025-05-15", endDate: "2025-05-22" },
    generalHolidays: [101],
    termBreaks: [
      { title: "Term 1", startDate: "2025-06-01", endDate: "2025-06-15" },
      { title: "Term 2", startDate: "2025-11-01", endDate: "2025-11-10" },
    ],
    holidayEvents: [
      { title: "National Day", date: "2025-08-31" },
      { title: "Labour Day", date: "2025-05-01" },
    ],
    weeklyRestDay: "Sunday",
    weeklyHoliday: "Monday",
    selectedStateIds: [3, 5],
    selectedAgencyIds: [3, 4],
    isSpecialHoliday: true,
    specialHolidayAgencyIds: [4],
  },
];
