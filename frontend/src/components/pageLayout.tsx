import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";


const PageLayout:React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <Flex flexDirection={"column"}>
            <Navbar/>
            <Box mt={4}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout;