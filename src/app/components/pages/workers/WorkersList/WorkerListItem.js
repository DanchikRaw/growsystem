import {Box, HStack, Link, Text} from "@chakra-ui/react";
import Arrow from "@/app/components/pages/workers/WorkersList/Arrow";

export default function WorkerListItem({item}) {
    return (
        <Box boxShadow={'md'} borderRadius={4} p={3}>
            <Link href={"/worker/" + item.worker_id} fontWeight={'600'} _hover={{ textDecoration: "none" }}><HStack justifyContent="space-between">
                <Text mb={1} color="#2A4365" fontSize={'md'}>{item.name}</Text>
                <Arrow/>
            </HStack></Link>
            {item.visitType === 'entry' ? (
                <Text color="#38B2AC" fontSize='sm'>Came: {item.datetime}</Text>
            ) : (<Box><Text color="#2A4365" fontSize='sm'>Left: {item.datetime}</Text><Text color="#2A4365" fontSize='sm'>Total: {item.workDayLength}</Text></Box>)}
        </Box>
    )
}