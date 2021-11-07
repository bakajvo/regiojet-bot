import {
    Box, Button, Select, Flex, FormControl,
    FormLabel, Heading, Input, Link, Stack, useColorModeValue,
    useToast, Spinner
} from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import useConstants from '../lib/api/useConstants';
import { ICountry } from '../lib/model/ICountry';
import { ITariff } from '../lib/model/ITariff';
import { IOption } from '../lib/model/IOption';

const Home: React.FC = () => {
    const tariffs = useConstants<Array<ITariff>>('tariffs');
    const locations = useConstants<Array<ICountry>>('locations');

    console.log('Tariffs', tariffs)
    console.log('Locations', locations)

    const convertLocationsToOptions = useMemo<Array<IOption>>(() => {
        if (locations.data) {
            const czCountry = locations.data.find(country => country.code === 'CZ');
            return czCountry.cities.map<IOption>(city => {
                return {
                    label: city.name,
                    value: city.id.toString()
                }
            })
        }
        return [];
    }, [locations.data]);

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Hledat spojení</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="from">
                            <FormLabel>Odkud</FormLabel>
                            <Select>
                                {convertLocationsToOptions.map((location, index) => <option key={index} value={location.value}>{location.label}</option>)}
                            </Select>
                        </FormControl>
                        <FormControl id="to">
                            <FormLabel>Kam</FormLabel>
                            <Select>
                                {convertLocationsToOptions.map((location, index) => <option key={index} value={location.value}>{location.label}</option>)}
                            </Select>
                        </FormControl>
                        <FormControl id="tariff">
                            <FormLabel>Tarif</FormLabel>
                            <Select>
                                {(tariffs.data || []).map((tariff, index) => <option key={index} value={tariff.key}>{tariff.value}</option>)}
                            </Select>
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Hledat
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Home;