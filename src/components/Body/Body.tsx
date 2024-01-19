import { AccomodationList } from "../AccomodationList/AccomodationList";
import DATA from "../../api/api";
import { Select } from "../Select/Select";
import { useAccomodationContext } from "../../contexts/AccomodationContext";
import LABEL from "../../constants/Labels";

export const Body = () => {
    const { filter } = useAccomodationContext();
    const accomodations = DATA.ACCOMODATION;

    return (
        <div className="app__body">
            <div className="app__accomodations">
                <div className="app__filters">
                    <Select
                        label={LABEL.FILTER_BY_TYPE}
                    />
                </div>
                <AccomodationList
                    filter={filter}
                    accomodationItems={accomodations}
                />
            </div>
        </div>
    );
};
