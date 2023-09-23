"use client"
import {Skeleton} from "@chakra-ui/react";
import {useState} from "react";
import {utcToZonedTime} from "date-fns-tz";
import useSWR from "swr";

const fetcher = async (url) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
    const data = await response.json();
    return data;
};
export default function Page({ params }) {
    const [startDate, setStartDate] = useState(getFormattedDate()); // Использование getFormattedDate для инициализации
    const [endDate, setEndDate] = useState(getFormattedDate());

    const { data, error } = useSWR(`/api/worker?deviceId=64d9e87ec10062001c717531&startDate=${startDate}&endDate=${endDate}&workerId=${params.id}`, fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <Skeleton height='70px' />;

    console.log(data)
    return (
        <div>
            <h1>Work History for User ID: {params.id} {data.name}</h1>
            <div>
                <label>Start Date: </label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
                <label>End Date: </label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div>
                <div>
                    <h2>Work Data</h2>
                    <p>Total Work Hours: {data.totalWorkHours}</p>
                    <p>Average Work Hours: {data.averageWorkHours}</p>
                </div>
            </div>
        </div>
    );
}

function getFormattedDate() {
    const timeZone = 'Asia/Bangkok';
    const zonedDate = utcToZonedTime(new Date(), timeZone);
    const year = zonedDate.getFullYear();
    const month = String(zonedDate.getMonth() + 1).padStart(2, '0');
    const day = String(zonedDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}