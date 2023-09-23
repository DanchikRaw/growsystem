import {SimpleGrid, Skeleton} from "@chakra-ui/react";
import WorkerListItem from "@/app/components/pages/workers/WorkersList/WorkerListItem";
import useSWR from "swr";

const fetcher = async (url) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
    const data = await response.json();
    return data;
};

const WorkersList = ({ date }) => {
    const { data, error } = useSWR(`/api/workers?deviceId=64d9e87ec10062001c717531&date=${date}`, fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <Skeleton height='70px' />;

    return (

        <SimpleGrid columns={5} spacing={5}>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <WorkerListItem key={index} item={item}/>
                ))
            ) : (
                <p>No data available.</p>
            )}
        </SimpleGrid>
    );
};

export default WorkersList;