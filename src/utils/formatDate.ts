const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(dateObj: string) {
  const date = new Date(dateObj);

  const currentDate = new Date();

  let displayDate = "";

  if (
    `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}` ==
    `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
  ) {
    displayDate = `${date.getHours()}h:${date.getMinutes()}`;
  } else if (
    `${currentDate.getMonth()}-${currentDate.getFullYear()}` ==
    `${date.getMonth()}-${date.getFullYear()}`
  ) {
    displayDate = `${
      days[date.getDay()]
    } at ${date.getHours()}h:${date.getMinutes()}`;
  } else if (`${currentDate.getFullYear()}` == `${date.getFullYear()}`) {
    displayDate = `${date.getDay()} ${
      months[date.getMonth()]
    } at ${date.getHours()}h:${date.getMinutes()}`;
  } else if (+`${currentDate.getFullYear()}` - 1 == +`${date.getFullYear()}`) {
    displayDate = `Last year, ${date.getDate()} ${
      months[date.getMonth()]
    } at ${date.getHours()}h:${date.getMinutes()}`;
  } else {
    displayDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} at ${date.getHours()}h:${date.getMinutes()}`;
  }

  return displayDate;
}
