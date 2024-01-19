import { useAccomodationContext } from '../../contexts/AccomodationContext';
import CONSTANTS from '../../constants/Config';

interface SelectProps {
    label: string;
}

export const Select = ({
    label,
}: SelectProps) => {
    const { setFilter, filter } = useAccomodationContext();

    //set value from select in context method
    return (
        <select
            name={label}
            onChange={(event) => {
                setFilter(event.target.value);
            }}
            value={filter}
        >
            <option value="">{label}</option>
            {CONSTANTS.FILTER_OPTIONS.map((x, y) => (
                <option key={y} data-testid={"select-option-"+ y}>{x}</option>
            ))}
        </select>
    );
};
