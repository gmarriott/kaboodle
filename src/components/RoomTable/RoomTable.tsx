import DATA from '../../api/api';
import {
    Room,
} from "../../types/AccomodationTypes";

interface RoomTableProps {
    rooms: Room[];
}

export const RoomTable = ({ rooms }: RoomTableProps) => {
    let availability = DATA.ACCOMODATION_AVAILABILITY;

    //append availability and total values from json to room object
    rooms.forEach((room: Room) => {
        const roomAvailability = availability.find(availble => availble.id === room.id)

        if (roomAvailability) {
            room.available = roomAvailability.available;
            room.total = roomAvailability.total;
        }
    });

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Min Occupancy</th>
                    <th>Max Occupancy</th>
                    <th>Price</th>
                    <th>Number Available</th>
                    <th>Number Sold</th>
                </tr>
                {rooms.map((room, index) => {
                    return (
                        <tr key={index}>
                            <td>{room.name}</td>
                            <td>{room.type}</td>
                            <td>{room.min_occupancy}</td>
                            <td>{room.max_occupancy}</td>
                            <td>{room.price ? room.price.price : 'No prices available'}</td>
                            <td>Total: {room.total ? room.total : '-'} Available: {room.available ? room.available : '-'}</td>
                            <td>Sold: {room.total && room.available ? room.total - room.available : 'None sold'}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};