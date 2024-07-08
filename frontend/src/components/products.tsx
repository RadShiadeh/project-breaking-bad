import React, { useEffect, useState } from "react";
import Product from "./product";
import { Grid, Skeleton } from "@chakra-ui/react";
import axiosInstance from "../api/axiosConfig";
import Item from "./ItemInterface";

const products: React.FC = () => {
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
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }} gap={10}>
            {isLoading ? (
                products.map((_, idx) => (
                    <Skeleton key={idx} height="400px">
                        <div style={{ width: "100%" }}></div>
                    </Skeleton>
                ))
            ) : (
                products.map((item) => (
                    <Product key={item.name} item={item} />
                ))
            )}
        </Grid>
    );
}

export default products;
