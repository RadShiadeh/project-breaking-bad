import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";


const PageLayout:React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <VStack>
            <Navbar/>
            <Box>
                {children}
            </Box>
        </VStack>
    )
}

export default PageLayout;