import { Container, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Item from "../components/ItemInterface";
import axiosInstance from "../api/axiosConfig";
import { useParams } from "react-router-dom";

const SingleItem: React.FC = () => {
    const [item, setItem] = useState<Item | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { itemId } = useParams<{ itemId: string }>();
    
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axiosInstance.get(`http://localhost:8080/api/items/${itemId}`);
                setItem(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching item:', error);
                setIsLoading(false);
            }
        };

        fetchItem();
    }, [itemId]);

    if (!item || isLoading) {
        return <Text>Loading...</Text>;
    }

    console.log(item.imageURL)

    return (
        <Container maxW={"full"}>
            <Heading> {item.name} </Heading>
            <Image src={item.imageURL} alt={item.description}></Image>
            <Text>{item.type}</Text>
            <Text>{item.description}</Text>
        </Container>
    );
}

export default SingleItem;
