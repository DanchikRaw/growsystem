// components/MyLineChart.tsx
"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {Box} from "@chakra-ui/react";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

ChartJS.register(CategoryScale, /* ... */)
// ...
const Chart = ({data}) => {
    return (
        <Box>
            <Line
                width={400}
                height={200}
                options={{ maintainAspectRatio: false, scales: {
                        y: {
                            min: 0,
                            max: 24,
                        }
                    } }}
                data={data}
            />
        </Box>
    );
};
export default Chart;