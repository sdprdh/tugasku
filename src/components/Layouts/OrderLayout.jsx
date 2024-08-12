import {VStack} from "@chakra-ui/react";
import {OrderHeader} from "../Elements/Order/OrderHeader.jsx";
import {OrderForm} from "../Elements/Order/OrderForm.jsx";

export const OrderLayout = () => {
    return (
        <VStack
            as='section'
            w='100%'
            minH={{lg: '100vh'}}
            p={{base: '6rem 1.4rem 2rem', lg: '6rem 4rem'}}
        >
            <OrderHeader/>
            <OrderForm/>
        </VStack>
    )
}