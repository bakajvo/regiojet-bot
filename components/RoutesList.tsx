import React from "react";
import {
    Badge,
    Button,
    Checkbox,
    Flex,
    Heading,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import {IRoutes} from "../lib/model/IRoutes";

interface RoutesListProps {
    routes?: IRoutes;
    fromLocationId: string;
    toLocationId: string;
    departureDate: string;
}

const RoutesList: React.FC<RoutesListProps> = (props) => {
    const {routes, fromLocationId, toLocationId, departureDate} = props;

    if (!routes) {
        return null;
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{base: '2xl', md: '3xl'}} textAlign={'center'}>
                    {`${fromLocationId} -> ${toLocationId}`}
                </Heading>
                <Text textAlign={'center'}
                      fontSize={{base: 'sm', sm: 'md'}}
                      color={useColorModeValue('gray.800', 'gray.400')}>
                    {routes.routesMessage}
                </Text>
                <Text textAlign={'center'}
                      fontSize={{base: 'sm', sm: 'md'}}
                      color={useColorModeValue('gray.800', 'gray.400')}>
                    {new Date(routes.routes[0].departureTime).toLocaleDateString()}
                </Text>
                <Table variant={"unstyled"}>
                    <Tbody>
                        {routes.routes.map((route, index) =>
                            <Tr key={index}>
                                <Td>
                                    <Badge ml="1" fontSize="0.8em" colorScheme="green">
                                        {`${(new Date(route.departureTime)).toLocaleTimeString().slice(0, -3)} - ${(new Date(route.arrivalTime)).toLocaleTimeString().slice(0, -3)}`}
                                    </Badge>
                                </Td>
                                <Td>
                                    <Badge ml="1" fontSize="0.8em" colorScheme="green">
                                        {route.freeSeatsCount}
                                    </Badge>
                                </Td>
                                <Td>
                                    <Badge ml="1" fontSize="0.8em" colorScheme="green">
                                        {route.creditPriceFrom}
                                    </Badge>
                                </Td>
                                <Td>
                                    <Checkbox/>
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Hlídat
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}

export default RoutesList;