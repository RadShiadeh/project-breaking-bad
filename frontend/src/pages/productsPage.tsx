import { Container } from "@chakra-ui/react";
import React from "react";
import Products from "../components/products";


const ProductsPage:React.FC = () => {
    return(
        <Container>
            <Products/>
        </Container>
    )
}

export default ProductsPage;