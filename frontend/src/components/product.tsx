import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Item from "./ItemInterface";

const Product:React.FC<{item: Item}> = ({item}) => {
    return(
        <VStack>
            <Image src={item.image} alt={item.Id.toString()}/>
            <Text>{item.name}</Text>
        </VStack>
    )
}

export default Product;