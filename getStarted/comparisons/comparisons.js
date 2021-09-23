const dayStart = "07:30";
const dayEnd = "17:45";

function convertMinutes(time) {
  time = time.split(":");
  const hourInMinutes = Number(time[0]) * 60;
  const minutes = Number(time[1]);
  const timeInMinutes = hourInMinutes + minutes;
  return timeInMinutes;
}

const dayStartInMinutes = convertMinutes(dayStart);
const dayEndInMinutes = convertMinutes(dayEnd);

function scheduleMeeting(startTime, durationMinutes) {
  const startTimeInMinutes = convertMinutes(startTime);
  const endTimeInMinutes = startTimeInMinutes + durationMinutes;
  if (startTimeInMinutes < dayStartInMinutes) {
    return false;
  }
  if (endTimeInMinutes > dayEndInMinutes) {
    return false;
  }
  return true;
}

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false
