import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function MinSliderFilter() {

    const marks = [
        {
            value: 2500,
            label: "R$2500",
        },
        {
            value: 3000,
            label: "R$3000",
        },
        {
            value: 3500,
            label: "R$3500",
        },
        {
            value: 4000,
            label: "R$4000",
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
                defaultValue={2500}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={500}
                valueLabelDisplay="auto"
                marks={marks}
                min={2500}
                max={4000}
            />
        </Box>
    );
}