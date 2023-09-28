"use client"
import {Button,HStack, Link, VStack} from "@chakra-ui/react";
import Dashboard from "@/app/components/Layout/Sidebar/Icons/Dashboard";
import Employees from "@/app/components/Layout/Sidebar/Icons/Employees";

export default function Menu() {
    return (
        <VStack spacing='3' align='stretch'>
            <Link _hover={{ textDecoration: "none" }} href='/'>
                <HStack>
                    <Dashboard/>
                    <Button _hover={{bg: "#41CBC4"}} fontSize="md" bg="#38B2AC" color="#ffffff" flexGrow="1">Dashboard</Button>
                </HStack>
            </Link>
            <Link _hover={{ textDecoration: "none" }} href='/workers'>
                <HStack>
                    <Employees/>
                    <Button _hover={{bg: "#41CBC4"}} fontSize="md" bg="#38B2AC" color="#ffffff" flexGrow="1">Employees</Button>
                </HStack>
            </Link>
        </VStack>
    );
}