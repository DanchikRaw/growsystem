import Sidebar from "@/app/components/Layout/Sidebar/Sidebar";
import {Box, Flex} from "@chakra-ui/react";

export default function Layout({ children }) {
    return (
        <Flex>
            <Sidebar/>
            <Box flexGrow='1'>
                {children}
            </Box>
        </Flex>
    );
}