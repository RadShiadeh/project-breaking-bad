import React, { useEffect, useState } from "react";
import Product from "./product";
import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import axiosInstance from "../api/axiosConfig";
import Item from "./ItemInterface";

const Products: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Item[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('/items');
                setProducts(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    
    return (
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
            {isLoading ? (
                products.map((_, idx) => (
                    <VStack key={idx} alignItems={"flex-start"}>
                        <Skeleton w={"full"}>
                            <Box h={"300px"}></Box>
                        </Skeleton>
                    </VStack>
                ))
            ) : (
                products.map((item) => (
                    <Product key={item.name} item={item}/>
                ))
            )}
        </Grid>
    )
}

export default Products;