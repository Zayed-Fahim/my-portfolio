import { format, parseISO } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const formatDate = (
  date: string,
  dateFormat: string = "MMMM dd, yyyy"
) => format(toZonedTime(parseISO(date), "Asia/Dhaka"), dateFormat);
