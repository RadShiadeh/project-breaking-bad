import { Box, Button, Card, CardBody, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Item from "./ItemInterface";

const Product: React.FC<{item: Item}> = ({item}) => {
    return(
        <Card variant={"outline"} maxW={'sm'} flexWrap={'wrap'}>
            <CardBody>
                <Box mx={"auto"} width="100%">
                    <Image src={item.imageURL} alt={item.description} borderRadius={"lg"} />
                </Box>
                <Stack mt={6} spacing={3}>
                    <Heading size={'md'}> {item.name} </Heading>
                    <Text> type: {item.type}</Text>
                    <Text> {item.description} </Text>
                </Stack>
            </CardBody>
            <Divider/>
            <Button variant={"solid"} colorScheme="blue" size={'sm'}> Show More </Button>
        </Card>
    )
}

export default Product;
