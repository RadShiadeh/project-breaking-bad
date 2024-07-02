import { Button, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


const Navbar:React.FC = () => {
    return (
        <ChakraProvider>
            <Flex gap={3} alignItems='center' justifyContent={"center"}>
                <Link to={"/"}>
                    <Button colorScheme={"blue"} size={"sm"} fontWeight={"bold"}>
                        Home
                    </Button>
                </Link> 
                <Link to={"/about"}>
                    <Button colorScheme={"blue"} size={"sm"} fontWeight={"bold"}>
                        About us
                    </Button>
                </Link>
                <Link to={"/products"}>
                    <Button colorScheme={"blue"} size={"sm"} fontWeight={"bold"}>
                        Products
                    </Button>
                </Link>
            </Flex>
        </ChakraProvider>
    )
}

export default Navbar;