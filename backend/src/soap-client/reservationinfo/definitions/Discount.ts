import { Top } from "./Top";
import { TotalSave } from "./TotalSave";

/** Discount */
export interface Discount {
    /** Top */
    Top?: Top;
    /** YouSave */
    YouSave?: Top;
    /** TotalSave */
    TotalSave?: TotalSave;
}
