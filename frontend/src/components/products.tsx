import React, { useEffect, useState } from "react";
import Product from "./product";
import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import Item from "./ItemInterface";

const products: Item[] = [
    {
        Id: 1,
        name: "Product 1",
        image: "",
        description: "Description of Product 1",
    },
    {
        Id: 2,
        name: "Product 2",
        image: "",
        description: "Description of Product 2",
    },
];

const Products: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={1} columnGap={1}>
            {isLoading && products.map((inventoryItems, idx) => (
                <VStack key={idx} alignItems={"flex-start"}>
                    <Skeleton w={"full"}>
                        <Box h={"300px"}>
                            <Product key={inventoryItems.Id.toString()} item={inventoryItems}/>
                        </Box>
                    </Skeleton>
                </VStack>
            ))}
        </Grid>
    )
}


export default Products;