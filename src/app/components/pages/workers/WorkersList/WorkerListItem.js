import {Box, Text} from "@chakra-ui/react";

export default function WorkerListItem({item}) {
    return (
        <Box boxShadow={'md'} borderRadius={4} p={3}>
            <Text color="#2A4365" fontSize={'md'}>{item.name}</Text>
            {item.visitType === 'entry' ? (
                <Text color="#38B2AC" fontSize='sm'>Came: {item.datetime}</Text>
            ) : (<Box><Text color="#2A4365" fontSize='sm'>Left: {item.datetime}</Text><Text color="#2A4365" fontSize='sm'>Total: {item.workDayLength}</Text></Box>)}
        </Box>
    )
}