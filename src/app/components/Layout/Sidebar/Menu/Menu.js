"use client"
import {Box, Button, Flex, HStack, Link, VStack} from "@chakra-ui/react";
import Dashboard from "@/app/components/Layout/Sidebar/Icons/Dashboard";
import Employees from "@/app/components/Layout/Sidebar/Icons/Employees";
import { useRouter } from 'next/navigation';

export default function Menu() {
    const router = useRouter()
    return (
        <VStack spacing='3' align='stretch'>
            <HStack onClick={() => router.push('/')}>
                <Dashboard/>
                <Button _hover={{bg: "#41CBC4"}} fontSize="md" bg="#38B2AC" color="#ffffff" flexGrow="1">Dashboard</Button>
            </HStack>
            <HStack onClick={() => router.push('/workers')}>
                <Employees/>
                <Button _hover={{bg: "#41CBC4"}} fontSize="md" bg="#38B2AC" color="#ffffff" flexGrow="1">Employees</Button>
            </HStack>
        </VStack>
    );
}