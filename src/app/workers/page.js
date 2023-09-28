"use client"
import React, { useState } from 'react';
import {Box, Text, Input, HStack, Button, ButtonGroup, Link} from '@chakra-ui/react'; // Подключите необходимые компоненты из вашей библиотеки
import PageTitle from "@/app/components/Layout/PageTitle";
import WorkersList from "@/app/components/Layout/WorkersList/WorkersList";
import { utcToZonedTime, format } from 'date-fns-tz';
import useSWR from "swr";

const fetcher = async (url) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
    const data = await response.json();
    return data;
};

export default function Workers() {
    const [selectedDate, setSelectedDate] = useState(getFormattedDate(new Date()));
    const { data, error } = useSWR(`/api/workers?deviceId=64d9e87ec10062001c717531&date=${selectedDate}`, fetcher);
    const handleDateChange = event => {
        setSelectedDate(event.target.value);
    };

    return (
        <Box p={4}>
            <PageTitle mb={5}>Employees</PageTitle>
            <ButtonGroup mb={5} variant='outline' spacing='6'>
                <Link href='/workers'><Button>Day history</Button></Link>
                <Link href='/workers/list'><Button>All workers</Button></Link>
            </ButtonGroup>
            <Box p='5' boxShadow='md' borderRadius={8}>
                <HStack justifyContent={'space-between'}>
                    <Text color="#2A4365" fontWeight={'bold'} fontSize={'lg'}>History of the day</Text>
                    <Input maxW='200px' type="date" onChange={handleDateChange} value={selectedDate} />
                </HStack>
                <WorkersList data={data} error={error} />
            </Box>
        </Box>
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