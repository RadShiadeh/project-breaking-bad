import React from "react";
import Product from "./product";
import { Flex } from "@chakra-ui/react";
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
    return (
        <Flex>
            {products.map((inventoryItems) => (
                <Product key={inventoryItems.Id.toString()} item={inventoryItems}/>
            ))}
        </Flex>
    )
}


export default Products;