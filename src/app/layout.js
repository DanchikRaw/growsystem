"use client"
import ThemeProvider from './theme-provider';
import Sidebar from "@/app/components/Layout/Sidebar/Sidebar";
import {Box, Flex} from "@chakra-ui/react";

export const metadata = {
    title: 'GROWSYSTEM - Automatic farm control system',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <ThemeProvider>
                    <Flex>
                        <Sidebar/>
                        <Box flexGrow='1'>
                            {children}
                        </Box>
                    </Flex>
                </ThemeProvider>
            </body>
        </html>
    );
}
