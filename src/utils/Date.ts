import { format } from "date-fns";

export const DateFormated = (dateToFormat: string) => {
    const date = new Date(dateToFormat);
    const formattedDate = format(date, 'dd MMMM, yyyy');
    return formattedDate;
  };