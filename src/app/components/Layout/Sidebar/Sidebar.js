"use client"
import {Box, Center} from "@chakra-ui/react";
import Logo from "@/app/components/Layout/Sidebar/Icons/Logo";
import Menu from "@/app/components/Layout/Sidebar/Menu/Menu";

export default function Sidebar() {
    return (
        <Box p="4" w='280px' position="sticky" top="0" height="100vh" overflowY="auto" boxShadow={'xl'} mr={3}>
            <Center mb='4'>
                <Logo/>
            </Center>
            <Menu/>
        </Box>
    )
}
