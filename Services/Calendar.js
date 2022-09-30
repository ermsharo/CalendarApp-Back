const Reminders = require("../models/Reminders");


module.exports = class Calendar {

    constructor() {

    }

    getMonthString(monthIndex) {
        let monthsOfYear = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro",
          ];
          return monthsOfYear[monthIndex-1]

    }

    updateOurStates(referenceMonth, referenceYear) {

        const firstDayOfMonth = new Date(referenceMonth, referenceMonth, 1);

        const daysInMonth = new Date(referenceYear, referenceYear + 1, 0).getDate();

        const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });

        const weekdays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);


        return {
            paddingDays: paddingDays,
            daysInMonth: daysInMonth,
        };
    };



    getMonthData(year, month) {
        //this function create the structure used in frontend to cretate the calendar
        let monthInfo = this.updateOurStates(year, month);
        console.log(monthInfo);
        let numberOfDays = monthInfo.daysInMonth;
        let firstDayIndex = monthInfo.paddingDays;
        let j = 1;
        const ourData = [];
        for (let i = 0; i < 42; i++) {
            if (i < firstDayIndex || i > numberOfDays + firstDayIndex) {
                ourData.push({
                    isValideDay: false,
                });
            } else {
                ourData.push({
                    isValideDay: true,
                    day: j,
                    month: 1,
                    year: 1,
                    date: null,
                    eventsOfDay: [],
                });
                j++;
            }
        }
        return ourData;
    };




    addNewReminder() {
        //Add a new reminder for us structrue

    }

    deleteReminder() {
        //delete our structure reminder
    }

    getHolydaysMonth() {

    }





}
