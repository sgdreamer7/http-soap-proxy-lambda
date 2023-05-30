import { DataTrans } from "./DataTrans";

/**
 * ServiceProvider
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface ServiceProvider {
    /** DataTrans */
    DataTrans?: DataTrans;
}
