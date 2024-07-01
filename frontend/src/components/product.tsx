import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Item from "./ItemInterface";

const Product:React.FC<{item: Item}> = ({item}) => {
    return(
        <VStack>
            <Image src={item.imageURL} alt={item.imageURL}/>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
        </VStack>
    )
}

export default Product;