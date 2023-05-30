import { Payer } from "./Payer";
import { BankAccount } from "./BankAccount";
import { BankTransfer } from "./BankTransfer";
import { CreditCard } from "./CreditCard";
import { Sepa } from "./Sepa";
import { ServiceProvider } from "./ServiceProvider";
import { $attributes130 } from "./$attributes130";

/**
 * Payment
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Payment {
    /** Payer */
    Payer?: Payer;
    /** BankAccount */
    BankAccount?: BankAccount;
    /** BankTransfer */
    BankTransfer?: BankTransfer;
    /** CreditCard */
    CreditCard?: CreditCard;
    /** SEPA */
    SEPA?: Sepa;
    /** ServiceProvider */
    ServiceProvider?: ServiceProvider;
    /** $attributes */
    $attributes?: $attributes130;
}
