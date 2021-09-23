scheduleMeeting(..) should take a start time (in 24-hour format as a string “hh:mm”) and a meeting duration (number of minutes).
It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd);
return false if the meeting violates the work day bounds.
