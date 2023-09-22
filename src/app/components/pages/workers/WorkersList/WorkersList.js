import {SimpleGrid} from "@chakra-ui/react";
import useSWR from "swr";
import WorkerListItem from "@/app/components/pages/workers/WorkersList/WorkerListItem";

const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const WorkersList = ({ date }) => {
    const { data, error } = useSWR(`https://growsystembackend-production.up.railway.app/api/workers?deviceId=64d9e87ec10062001c717531&date=${date}`, fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <SimpleGrid columns={5} spacing={5}>
            {data.map((item, index) => (
                <WorkerListItem key={index} item={item}/>
            ))}
        </SimpleGrid>
    );
};

export default WorkersList;