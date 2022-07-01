import { format } from 'date-fns';

// format: date/month/year hours-minutes-seconds
const formatDate = (date, dateSeparator, timeSeparator) => {
  const formatted = format(date, `d${dateSeparator}L${dateSeparator}y H${timeSeparator}m${timeSeparator}s`);
  return formatted;
}

export default formatDate;