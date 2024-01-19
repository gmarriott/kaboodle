import {
    AccomodationType,
    Room,
    Facility,
    Image
} from "../../types/AccomodationTypes"
import { AccomodationItem } from '../AccomodationItem/AccomodationItem';

interface Accomodation {
    id: number;
    sort_order: number;
    name: string;
    type: AccomodationType;
    description: string;
    address_1: string;
    address_2: string;
    address_3: string;
    postcode: string;
    country: Country;
    resort: Resort;
    location: Location;
    images: Image[];
    rating: Rating;
    facilities: Facility[];
    rooms: Room[];
}

interface Country {
    id: number;
    name: string;
}

interface Resort {
    id: number;
    name: string;
}

interface Location {
    id: number;
    name: string;
    location_long: number;
    location_lat: number;
}

interface Rating {
    id: number;
    label: string;
}

interface AccomodationListProps {
    filter: string;
    accomodationItems: Accomodation[];
}

export const AccomodationList = ({
    filter,
    accomodationItems,
}: AccomodationListProps) => {
    //check if filter has been set
    if (filter !== "") {
        accomodationItems = accomodationItems.filter((item) => item.type.name === filter);
    }
    return (
        <div>
            <span data-testid="results-length">Results: {accomodationItems.length}</span>
            <ul className="accomodation-list">
                {accomodationItems.map((accomodation, index) => {
                    return (
                        <AccomodationItem
                            key={index}
                            name={accomodation.name}
                            details={accomodation.description}
                            type={accomodation.type}
                            facilities={accomodation.facilities}
                            rooms={accomodation.rooms}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
