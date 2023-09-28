"use client"
import {Box, Text} from "@chakra-ui/react";

export default function PageTitle({ children }) {
    return (
        <Box mb={5} p={5} boxShadow='md' borderRadius={8}>
            <Text fontWeight={'bold'} color="#2A4365" fontSize={'xl'}>{children}</Text>
        </Box>
    );
}