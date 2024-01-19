import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import {
    AccomodationType,
    Room,
    Facility,
    Image,
} from "../../types/AccomodationTypes";
import { RoomTable } from '../RoomTable/RoomTable';
import { BsArrowDown } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillHouseHeartFill } from "react-icons/bs";
import CONSTANTS from '../../constants/Config';

interface AccomodationItemProps {
    name: string;
    type: AccomodationType;
    details: string;
    rooms: Room[];
    facilities: Facility[];
}

export const AccomodationItem = ({
    name,
    details,
    type,
    rooms,
    facilities,
}: AccomodationItemProps) => {
    //get facility count for mobile view
    let facilityCount = facilities.length;
    //strip markup from string
    details = details.replace(/<\/?[^>]+(>|$)/g, "");

    return (
        <Accordion className="accomodation-item">
            <AccordionSummary
                expandIcon={<BsArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div>
                    <img
                        src={CONSTANTS.DEFAULT_IMG}
                        className="accomodation_item_img"
                        alt=""
                    />
                </div>
                <div className="end-container">
                    <span className="accomodation-details">
                        <span className="accomodation-name">{name}</span>
                        <span className="accomodation-type">{type.name} <BsFillHouseHeartFill className='icon-type' /> </span>
                        <span className="facility-count">Number of Facilities: {facilityCount} </span>
                        <div className='extra-details'>
                            {facilities.map((facility, index) => {
                                return (
                                    <span key={index} className='facility child'>{facility.label} <BsCheckCircleFill className='facility-check' /> </span>
                                );
                            })}
                        </div>
                    </span>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <h3 className='info-title'>Description</h3>
                    <span className='accomodation-details'>{details}</span>
                    <h3 className='info-title'>Rooms</h3>
                    <RoomTable rooms={rooms} />
                </div>
            </AccordionDetails>
        </Accordion>
    );
};
