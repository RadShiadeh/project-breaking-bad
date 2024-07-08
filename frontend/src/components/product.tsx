import { Box, Button, Card, CardBody, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Item from "./ItemInterface";
import "../styles/styles.css"
import { Link } from "react-router-dom";

const Product: React.FC<{item: Item}> = ({item}) => {
    return(
        <Card variant={"outline"} maxW={'sm'} flexWrap={'wrap'} gap={1}>
            <CardBody>
                <Box>
                    <Image src={item.imageURL} alt={item.description} borderRadius={"lg"} h={300} w={600}/>
                </Box>
                <Stack mt={5} spacing={3}>
                    <Heading size={'md'}> {item.name} </Heading>
                    <Text> type: {item.type}</Text>
                    <Text> {item.description} </Text>
                </Stack>
            </CardBody>
            <Divider/>
            <Button as={Link} to={`/products/${item.name}`} variant={"ghost"} colorScheme="blue" size={'sm'} mb={4} fontSize={18}> Show More </Button>
        </Card>
    )
}

export default Product;
