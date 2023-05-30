import { ReservationKey } from "./ReservationKey";
import { ReservationFeeSpecial } from "./ReservationFeeSpecial";
import { ReservationFeeFree } from "./ReservationFeeFree";
import { SellingTax } from "./SellingTax";
import { ParentReservationRef } from "./ParentReservationRef";
import { Reason } from "./Reason";
import { PromotionGroup } from "./PromotionGroup";
import { Promotion } from "./Promotion";
import { AdditionalCurrency } from "./AdditionalCurrency";
import { Owner } from "./Owner";
import { IncentiveCards } from "./IncentiveCards";
import { Agent } from "./Agent";
import { Services } from "./Services";
import { PassengerList } from "./PassengerList";
import { Payment } from "./Payment";
import { MessageThreads } from "./MessageThreads";
import { Attributes13 } from "./Attributes13";
import { Memos12 } from "./Memos12";
import { Erratas12 } from "./Erratas12";
import { Discount2 } from "./Discount2";
import { TravelDirective } from "./TravelDirective";
import { Fulfilment } from "./Fulfilment";
import { ControllingReservationAttributes } from "./ControllingReservationAttributes";
import { $attributes137 } from "./$attributes137";

/**
 * Reservation
 * @targetNSAlias `ns6`
 * @targetNamespace `http://namespace.tui.de/bw-lib/service.api.common/schemas/reservation-types.xsd`
 */
export interface Reservation {
    /** ReservationKey */
    ReservationKey?: ReservationKey;
    /** ReservationFeeSpecial */
    ReservationFeeSpecial?: ReservationFeeSpecial;
    /** ReservationFeeFree */
    ReservationFeeFree?: ReservationFeeFree;
    /** SellingTax */
    SellingTax?: SellingTax;
    /** ParentReservationRef */
    ParentReservationRef?: ParentReservationRef;
    /** Product */
    Product?: Reason;
    /** PromotionGroup */
    PromotionGroup?: PromotionGroup;
    /** SearchPromotionGroup */
    SearchPromotionGroup?: PromotionGroup;
    /** Promotion */
    Promotion?: Promotion;
    /** Market */
    Market?: Reason;
    /** MarketCountryCode */
    MarketCountryCode?: PromotionGroup;
    /** MarketCategory */
    MarketCategory?: Reason;
    /** FinancialSupplier */
    FinancialSupplier?: Reason;
    /** Terms */
    Terms?: Reason;
    /** SellingCurrency */
    SellingCurrency?: Reason;
    /** AdditionalCurrency */
    AdditionalCurrency?: AdditionalCurrency;
    /** Owner */
    Owner?: Owner;
    /** IncentiveCards */
    IncentiveCards?: IncentiveCards;
    /** Agent */
    Agent?: Agent;
    /** Services */
    Services?: Services;
    /** PassengerList */
    PassengerList?: PassengerList;
    /** Payment */
    Payment?: Payment;
    /** MessageThreads */
    MessageThreads?: MessageThreads;
    /** Attributes */
    Attributes?: Attributes13;
    /** Memos */
    Memos?: Memos12;
    /** Erratas */
    Erratas?: Erratas12;
    /** Discount */
    Discount?: Discount2;
    /** TravelDirective */
    TravelDirective?: TravelDirective;
    /** Fulfilment */
    Fulfilment?: Fulfilment;
    /** ControllingReservationAttributes */
    ControllingReservationAttributes?: ControllingReservationAttributes;
    /** $attributes */
    $attributes?: $attributes137;
}
