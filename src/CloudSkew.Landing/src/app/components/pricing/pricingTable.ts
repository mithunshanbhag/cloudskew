import { Features } from "./features";

export interface PricingTable {
    title: string;
    price: string;
    subtitle: string;
    features: Features[];
}