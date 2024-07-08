import { Container } from "@chakra-ui/react";
import React from "react";
import Products from "../components/products";


const ProductsPage:React.FC = () => {
    return(
        <Container maxW={"full"} mt={2} marginRight={2} marginLeft={4}>
            <Products/>
        </Container>
    )
}

export default ProductsPage;