import { Dayjs } from "dayjs";

export type Event = {
  eventId: number;
  eventName: string;
  eventDate: string;
  eventTime: string;
  userId: number;
  isPlaced: boolean;
  placedDate: string;
  placedTime: string;
};
