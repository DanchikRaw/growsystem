"use client"
import {Box, Button, FormControl, FormLabel, HStack, Input, Skeleton, SkeletonText, Text} from "@chakra-ui/react";
import {useState} from "react";
import {utcToZonedTime} from "date-fns-tz";
import useSWR from "swr";
import PageTitle from "@/app/components/Layout/PageTitle";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Chart from "@/app/components/pages/worker/Chart";
import WorkersList from "@/app/components/Layout/WorkersList/WorkersList";

const fetcher = async (url) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
    const data = await response.json();
    return data;
};
export default function Page({ params }) {
    const [startDate, setStartDate] = useState(getFormattedDate(7)); // Неделю назад
    const [endDate, setEndDate] = useState(getFormattedDate()); // Сегодня
    const [selectedDate, setSelectedDate] = useState(getFormattedDate());

    const setDates = (daysAgo) => {
        setStartDate(getFormattedDate(daysAgo));
        setEndDate(getFormattedDate());
    };

    const { data, error } = useSWR(`/api/worker/stats?deviceId=64d9e87ec10062001c717531&startDate=${startDate}&endDate=${endDate}&workerId=${params.id}`, fetcher);
    const { data: historyData, error: historyError } = useSWR(`/api/worker/stats/day?deviceId=64d9e87ec10062001c717531&date=${selectedDate}&workerId=${params.id}`, fetcher);

    const handleDateChange = event => {
        setSelectedDate(event.target.value);
    };

    if (error) return <div>Error loading data</div>;
    if (!data) return <Skeleton h={'300px'}></Skeleton>;

    return (
        <Box>
            <PageTitle>
                Statistic: {data.name} ({params.id})
            </PageTitle>
                <Box>
                        <FormControl>
                            <FormLabel>Start Date: </FormLabel>
                            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>End Date: </FormLabel>
                            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </FormControl>
                        <Box>
                            <Button onClick={() => setDates(7)}>Week</Button>
                            <Button onClick={() => setDates(30)}>Month</Button>
                            <Button onClick={() => setDates(180)}>Half year</Button>
                            <Button onClick={() => setDates(365)}>Year</Button>
                        </Box>

                    <Box>
                    <Box>
                        <Box>Work Data</Box>
                        <Text>Total Work Hours: {data.totalWorkHours}</Text>
                        <Text>Average Work Hours: {data.averageWorkHours}</Text>
                    </Box>
                </Box>
            </Box>
            <Chart data={data.dailyWorkHours}/>
            <Box p={4}>
                <Box p='5' boxShadow='md' borderRadius={8}>
                    <HStack mb='2' justifyContent={'space-between'}>
                        <Text color="#2A4365" fontWeight={'bold'} fontSize={'lg'}>History of the day</Text>
                        <Input maxW='200px' type="date" onChange={handleDateChange} value={selectedDate} />
                    </HStack>
                    <WorkersList data={historyData} error={historyError} />
                </Box>
            </Box>
        </Box>
    );
}

function getFormattedDate(daysAgo = 0) {
    const timeZone = 'Asia/Bangkok';
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - daysAgo); // subtracting days
    const zonedDate = utcToZonedTime(currentDate, timeZone);
    const year = zonedDate.getFullYear();
    const month = String(zonedDate.getMonth() + 1).padStart(2, '0');
    const day = String(zonedDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}