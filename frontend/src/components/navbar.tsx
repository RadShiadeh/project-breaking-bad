import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
            <Flex w="100%" p={4} justifyContent="center" mb={4} backgroundColor={"#2D3748"}>
                <Flex gap={4} >
                    <Link to={"/"}>
                        <Button size={"sm"} fontWeight={"bold"}>
                            Home
                        </Button>
                    </Link>
                    <Link to={"/about"}>
                        <Button size={"sm"} fontWeight={"bold"}>
                            About Us
                        </Button>
                    </Link>
                    <Link to={"/products"}>
                        <Button size={"sm"} fontWeight={"bold"}>
                            Products
                        </Button>
                    </Link>
                </Flex>
            </Flex>
    )
}

export default Navbar;
