export default class DateUtil {
  // initialize date object and date data
  constructor() {
      this.initDate = new Date();
      this.today = this.initDate.getDate();
      this.calYear = this.initDate.getFullYear();
      this.monthIndex = this.initDate.getMonth();
      this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.getMonthDays = (year, month) => new Date(year, month + 1, 0).getDate();
    }


}
