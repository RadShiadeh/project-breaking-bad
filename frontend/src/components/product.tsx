import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Item from "./ItemInterface";
import '../styles/styles.css'

const Product:React.FC<{item: Item}> = ({item}) => {
    return(
        <VStack>
            <Image className={"fixed-size-image"} src={item.imageURL} alt={item.imageURL}/>
            <Text>{item.name}</Text>
        </VStack>
    )
}

export default Product;