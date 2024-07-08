import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";


const PageLayout:React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <VStack width={"100%"}>
            <Navbar/>
            <Box width={"100%"}>
                {children}
            </Box>
        </VStack>
    )
}

export default PageLayout;