import { Dayjs } from "dayjs";

export default interface Event {
    id : number,
    date : string,
    time : string,
    name : string,
    user_id : number,
}