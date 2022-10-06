const Reminders = require("../models/Reminders");
const crypto = require("crypto");

module.exports = class Calendar {
  firstDayOfMonthIndex = (year, month) => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
    });

    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let index = daysOfWeek.indexOf(dateString);
    console.log(dateString, index + 1);
    return index + 1;
  };

  getnumberOfDaysInMonth = (year, month) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return daysInMonth;
  };

  getDayOfWeek(day, month, year) {
    const d = new Date(`${month}-${day}-${year}`);
    let dayinWeek = d.getDay();
    return dayinWeek;
  }
  verifyIsWeekend(day, month, year) {
    if (
      this.getDayOfWeek(day, month, year) === 0 ||
      this.getDayOfWeek(day, month, year) === 6
    )
      return true;
  }

  async getReminderByDate(date) {
    //get all reminders of this date in or db
    //The date come on this format dd-mm-yyyy
    const { count, rows } = await Reminders.findAndCountAll({
      where: {
        date: date,
      },
    });
    console.log("rows", rows);

    if (count > 0)
      return {
        reminders: rows,
        count: count,
      };
    return false;
  }

  formatMonthString(day, month, year) {
    return `${("0" + day).slice(-2)}-${("0" + month).slice(-2)}-${year}`;
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
    return monthsOfYear[monthIndex - 1];
  }

  async getMonthData(year, month) {
    //this function create the structure used in frontend to cretate the calendar

    let numberOfDays = this.getnumberOfDaysInMonth(year, month);
    let firstDayIndex = this.firstDayOfMonthIndex(year, month);
    let j = 1;
    const ourData = [];
    let formatString;
    let eventsOfDay;
    let isWeekend;
    for (let i = 1; i <= 42; i++) {
      if (i < firstDayIndex || i > numberOfDays + firstDayIndex - 1) {
        ourData.push({
          isValideDay: false,
        });
      } else {
        formatString = this.formatMonthString(j, month, year);
        eventsOfDay = await this.getReminderByDate(formatString);
        isWeekend = this.verifyIsWeekend(j, month, year);
        ourData.push({
          isValideDay: true,
          day: j,
          month: month,
          year: year,
          date: formatString,
          eventsOfDay: eventsOfDay,
          isToday: false,
          isWeekend: isWeekend,
        });
        j++;
      }
    }
    return ourData;
  }

  async addNewReminder(title, description, color, start, end, date) {
    //Add a new reminder

    const id = crypto.randomBytes(20).toString("hex");
    const [row, created] = await Reminders.findOrCreate({
      where: {
        id: id,
        user_id: "GENERIC_USE_ID",
        title: title,
        description: description,
        color: color,
        date: date,
        start: start,
        end: end,
      },
    });
  }

  async deleteReminder(id) {
    //delete a reminder
    await Reminders.destroy({
      where: {
        id: id,
      },
    });
  }


  async editReminder(id, body) {
  //edit reminder

    let reminder = await Reminders.findOne({ where: { id: id } });
    const { title, description, color, start, end, date } = body;

    reminder.set({
      user_id: "GENERIC_USE_ID",
      title: title,
      description: description,
      color: color,
      date: date,
      start: start,
      end: end,
    });

    reminder = await reminder.save();



  }
};
