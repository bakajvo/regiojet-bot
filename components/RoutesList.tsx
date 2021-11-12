import React, {useEffect, useState} from "react";
import {
    Icon,
    VStack,
    Checkbox,
    Switch,
    HStack,
    Tag,
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
import {ArrowForwardIcon} from '@chakra-ui/icons'
import {IRoutes} from "../lib/model/IRoutes";
import useAudio from "../lib/hooks/useAudio";
import useConstants from "../lib/api/useConstants";
import {ICountry} from "../lib/model/ICountry";
import {FaUserTie, FaUsers, FaCoffee, FaBus, FaTrain, FaArrowRight} from 'react-icons/fa';

interface RoutesListProps {
    routes: IRoutes;
    fromLocationId: string;
    toLocationId: string;
    departureDate: string;
}

const RoutesList: React.FC<RoutesListProps> = (props) => {
    const {routes, fromLocationId, toLocationId} = props;
    const {playing, toggle} = useAudio('Hallelujah.mp3');

    const mapper = (data: Array<ICountry>): Record<string, string> => {
        return data
            .map(country => country.cities)
            .flat()
            .map(city => [[{id: city.id, name: city.name}], city.stations
                .map(station => {
                    return {
                        id: station.id,
                        name: station.name,
                    }
                })]
                .flat())
            .flat()
            .reduce<Record<string, string>>((previousValue, currentValue) => {
                previousValue[currentValue.id] = currentValue.name;
                return previousValue;
            }, {});
    }

    const {data: locations} = useConstants<Array<ICountry>, Record<string, string>>('locations', mapper);

    const [checking, setChecking] = useState<Array<boolean>>(new Array(routes.routes.length).fill(false));

    useEffect(() => {
        routes.routes.forEach((route, index) => {
            if (checking[index] && route.freeSeatsCount > 0 && !playing) {
                toggle();
            }
        });
    }, [routes, checking]);

    if (!locations) {
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
                maxW={'xl'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{base: '2xl', md: '3xl'}} textAlign={'center'}>
                    {locations[fromLocationId]}
                    <ArrowForwardIcon/>
                    {locations[toLocationId]}
                </Heading>
                <Text textAlign={'center'}
                      fontSize={{base: 'sm', sm: 'md'}}
                      color={useColorModeValue('gray.800', 'gray.400')}>
                    {routes.routesMessage}
                </Text>
                <Text textAlign={'center'}
                      fontSize={{base: 'md', sm: 'xl'}}
                      color={useColorModeValue('gray.800', 'gray.400')}>
                    {new Date(routes.routes[0].departureTime).toLocaleDateString()}
                </Text>
                <Table variant={"unstyled"}>
                    <Tbody>
                        {routes.routes.map((route, index) =>
                            <Tr key={index}>
                                <Td>
                                    <VStack>
                                        <HStack spacing={4}>
                                            <Tag size={'md'} variant="solid" colorScheme="gray">
                                                {(new Date(route.departureTime)).toLocaleTimeString().slice(0, -3)}
                                            </Tag>
                                            <Icon as={FaArrowRight} color={'gray'}/>
                                            <Tag size={'md'} variant="solid" colorScheme="gray">
                                                {(new Date(route.arrivalTime)).toLocaleTimeString().slice(0, -3)}
                                            </Tag>
                                        </HStack>
                                        <Tag size={'sm'} variant="solid" colorScheme="blackAlpha">
                                            {route.travelTime}
                                        </Tag>
                                    </VStack>
                                </Td>
                                <Td>
                                    <HStack>
                                        <Icon as={FaUsers} color={route.freeSeatsCount > 0 ? 'green.500' : 'red.500'}/>
                                        <Text>{route.freeSeatsCount}</Text>
                                    </HStack>
                                </Td>
                                <Td>
                                    <HStack>
                                        {route.vehicleStandardKey === "FUN_RELAX_SELF_SERVICE" && <Icon as={FaCoffee}/>}
                                        {route.vehicleStandardKey === "DEUTSCHE_BAHN" && <Icon as={FaCoffee}/>}
                                        {route.vehicleStandardKey === "YELLOW" && <Icon as={FaUserTie}/>}
                                        {route.vehicleTypes.includes('BUS') && <Icon as={FaBus}/>}
                                        {route.vehicleTypes.includes('TRAIN') && <Icon as={FaTrain}/>}
                                    </HStack>
                                </Td>
                                <Td>
                                    <Switch defaultChecked={checking[index]}
                                            onChange={(e) => setChecking(prevState => prevState
                                                .map((elem, i) => i === index ? e.target.checked : elem))}
                                            id="email-alerts"/>
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Stack>
        </Flex>
    );
}

export default RoutesList;