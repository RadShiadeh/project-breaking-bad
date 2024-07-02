import { Box, Heading, Skeleton, Stack, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosConfig";
import Item from "../components/ItemInterface";

const IndividualProductsPage: React.FC = () => {const { id } = useParams<{ id: string }>();
const [product, setProduct] = useState<Item | null>(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await axiosInstance.get(`/items}`);
            setProduct(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching product:', error);
            setIsLoading(false);
        }
    };

    fetchProduct();
}, [id]);

return (
    <Box p={5}>
        {isLoading ? (
            <Skeleton height="500px" />
        ) : (
            product && (
                <Stack spacing={8}>
                    <Image src={product.imageURL} alt={product.name} />
                    <Heading>{product.name}</Heading>
                    <Text>{product.description}</Text>
                </Stack>
            )
        )}
    </Box>
);
};

export default IndividualProductsPage;