import { render, screen } from '@testing-library/react';
import { AccomodationItem } from './AccomodationItem';

test('renders learn react link', () => {

    const mockType = { id: 1, name: 'Hotel' };

    const mockPrice = {
        value: 52400,
        currency_id: 98,
        currency_iso_code: "GBP",
        currency_exponent: 2,
        price: "£524.00"
    };

    const mockFacilities = [{
        id: 1,
        label: "Hot showers"
    },
    {
        id: 2,
        label: "WiFi"
    }];

    const mockRoom = [{
        id: 1,
        sort_order: 1,
        type_id: 1,
        max_occupancy: 1,
        min_occupancy: 1,
        number_of_nights: 1,
        type: "linen",
        name: 'Queen',
        price: mockPrice,
        available: 1,
        total: 2,
        facilities: [mockFacilities]
    }];

    render(<AccomodationItem name="Mock Hotel" details='A nice hotel' type={mockType} rooms={mockRoom} facilities={mockFacilities} />);
    const detailsElement = screen.getByText("Total: 2 Available: 1");
    const numberOfFacilities = screen.getByText("Number of Facilities: 2")
    expect(numberOfFacilities).toBeInTheDocument();
    expect(detailsElement).toBeInTheDocument();
});
