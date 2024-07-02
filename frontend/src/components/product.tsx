import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Item from "./ItemInterface";
import '../styles/styles.css'

const Product:React.FC<{item: Item}> = ({item}) => {
    return(
        <VStack>
            <Image className={"fixed-size-image"} src={item.imageURL} alt={item.imageURL} _hover={{ transform: 'scale(1.5)', transition: '0.6s', transformOrigin: 'center' }} cursor={'pointer'}/>
            <Text _hover={{ transform: 'scale(1.05)', transition: '0.3s' }} cursor={'pointer'}>{item.name}</Text>
        </VStack>
    )
}

export default Product;