export interface Room {
    id: number;
    sort_order: number;
    type_id: number;
    max_occupancy: number;
    min_occupancy: number;
    number_of_nights: number;
    type: string;
    name: string;
    price?: Price;
    available?: number;
    total?: number;
}

export interface Price {
    value: number,
    currency_id: number,
    currency_iso_code: string,
    currency_exponent: number,
    price: string
}

export interface Facility {
    id: number;
    label: string;
}

export interface Image {
    alt: string;
    title: string;
    filename: string;
}

export interface AccomodationType {
    id: number;
    name: string;
}

export interface RoomAvailability {
    id: number;
    available: number;
    total: number;
}