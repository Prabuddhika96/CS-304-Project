import { Dayjs } from "dayjs";

export default interface Event {
    event_id : number,
    event_date : Dayjs,
    event_name : string,
    user_id : number,
}