"use client"
import React, { useState, useEffect } from 'react';
import { Box, Text, Input } from '@chakra-ui/react'; // Подключите необходимые компоненты из вашей библиотеки
import useSWR from 'swr';

const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export default function Workers() {
    const [selectedDate, setSelectedDate] = useState(getFormattedDate(new Date()));

    const { data, error } = useSWR(`http:///localhost:5000/api/workers?deviceId=64d9e87ec10062001c717531&date=${selectedDate}`, fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    const handleDateChange = event => {
        setSelectedDate(event.target.value);
    };

    return (
        <Box p={4}>
            <Text fontWeight={'bold'} fontSize={'xl'}>Активность сотрудников</Text>
            <Box maxW={'250px'}>
                <Text fontSize={'m'}>Фильтры</Text>
                <Text fontSize={'s'}>Дата: </Text>
                <Input type="date" onChange={handleDateChange} value={selectedDate} />
            </Box>
            {data.map((item, index) => (
                <Box key={index}>
                    <Text>Date and Time: {item.datetime}</Text>
                    <Text>Name: {item.name}</Text>
                </Box>
            ))}
        </Box>
    );
}

function getFormattedDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}