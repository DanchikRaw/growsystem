"use client"
import {SimpleGrid, Skeleton} from "@chakra-ui/react";
import WorkerListItem from "@/app/components/Layout/WorkersList/WorkerListItem";

const WorkersList = ({ data, error }) => {

    if (error) return <div>Error loading data</div>;
    if (!data) return <Skeleton height='70px' />;

    return (

        <SimpleGrid mt={5} columns={5} spacing={5}>
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