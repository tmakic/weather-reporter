import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import ja from 'dayjs/locale/ja';

dayjs.locale(ja);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export const formatDate = (unixtime: number, format?: string) =>
  dayjs.unix(unixtime).tz().format(format);
