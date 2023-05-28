import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function MaxSliderFilter() {

    const marks = [
        {
            value: 5000,
            label: "R$5000",
        },
        {
            value: 10000,
            label: "R$10000",
        },
        {
            value: 15000,
            label: "R$15000",
        },
        {
            value: 20000,
            label: "R$20000",
        },
    ];

    function valuetext(value) {
        return `${value}`;
    }

    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }


    return (
        <Box sx={{ width: 250 }}>
            <Slider
                aria-label="Restricted values"
                defaultValue={20000}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={5000}
                valueLabelDisplay="auto"
                marks={marks}
                min={5000}
                max={20000}
            />
        </Box>
    );
}