"use client"
import React, { useState } from 'react';
import {Box, Text, Input, HStack} from '@chakra-ui/react'; // Подключите необходимые компоненты из вашей библиотеки
import PageTitle from "@/app/components/Layout/PageTitle";
import WorkersList from "@/app/components/pages/workers/WorkersList/WorkersList";
import { utcToZonedTime, format } from 'date-fns-tz';


export default function Workers() {

    const [selectedDate, setSelectedDate] = useState(getFormattedDate(new Date()));

    const handleDateChange = event => {
        setSelectedDate(event.target.value);
    };

    return (
        <Box p={4}>
            <PageTitle>Employees</PageTitle>
            <Box p='5' boxShadow='md' borderRadius={8}>
                <HStack mb='2' justifyContent={'space-between'}>
                    <Text color="#2A4365" fontWeight={'bold'} fontSize={'lg'}>History of the day</Text>
                    <Input maxW='200px' type="date" onChange={handleDateChange} value={selectedDate} />
                </HStack>
                <WorkersList date={selectedDate} />
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