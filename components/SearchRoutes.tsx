import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading, Select, Stack, useColorModeValue
} from '@chakra-ui/react';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import React, {useMemo} from 'react';
import useConstants from '../lib/api/useConstants';
import {ICountry} from '../lib/model/ICountry';
import {IOption} from '../lib/model/IOption';
import {ISearchRoutes} from '../lib/model/ISearchRoutes';
import {ITariff} from '../lib/model/ITariff';
import DatePicker from "./ui/datepicker/DatePicker";
import cs from "date-fns/locale/cs";

const SearchRoutes: React.FC = () => {
    const router = useRouter();
    const {data: tariffs} = useConstants<Array<ITariff>, Array<ITariff>>('tariffs');
    const {data: locations} = useConstants<Array<ICountry>, Array<ICountry>>('locations');

    const formik = useFormik<ISearchRoutes>({
        initialValues: {
            departureDate: new Date(),
            fromLocationId: '17554000',
            fromLocationType: 'CITY',
            toLocationId: '10202003',
            toLocationType: 'CITY',
            tariffs: 'REGULAR',
        },
        onSubmit: values => {
            router.push({
                pathname: '/routes',
                query: {
                    'departureDate': values.departureDate.toISOString(),
                    'fromLocationId': values.fromLocationId,
                    'fromLocationType': values.fromLocationType,
                    'toLocationId': values.toLocationId,
                    'toLocationType': values.toLocationType,
                    'tariffs': values.tariffs,

                },
            });
        },
    });

    const convertLocationsToOptions = useMemo<Array<IOption>>(() => {
        if (locations) {
            const czCountry = locations.find(country => country.code === 'CZ');
            return czCountry.cities.map<IOption>(city => {
                return {
                    label: city.name,
                    value: city.id.toString()
                }
            })
        }
        return [];
    }, [locations]);

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
                        <FormControl id="departureDate">
                            <FormLabel>Kdy</FormLabel>
                            <DatePicker locale={cs} dateFormat={'dd. MM. yyyy'} selected={formik.values.departureDate}
                                        onChange={date => formik.setFieldValue('departureDate', date)}/>
                        </FormControl>
                        <FormControl id="fromLocationId">
                            <FormLabel>Odkud</FormLabel>
                            <Select id="fromLocationId"
                                    name="fromLocationId"
                                    onChange={formik.handleChange}
                                    value={formik.values.fromLocationId}>
                                {convertLocationsToOptions.map((location, index) => <option key={index}
                                                                                            value={location.value}>{location.label}</option>)}
                            </Select>
                        </FormControl>
                        <FormControl id="toLocationId">
                            <FormLabel>Kam</FormLabel>
                            <Select id="toLocationId"
                                    name="toLocationId"
                                    onChange={formik.handleChange}
                                    value={formik.values.toLocationId}>
                                {convertLocationsToOptions.map((location, index) => <option key={index}
                                                                                            value={location.value}>{location.label}</option>)}
                            </Select>
                        </FormControl>
                        <FormControl id="tariffs">
                            <FormLabel>Tarif</FormLabel>
                            <Select id="tariffs"
                                    name="tariffs"
                                    onChange={formik.handleChange}
                                    value={formik.values.tariffs}>
                                {(tariffs || []).map((tariff, index) => <option key={index}
                                                                                     value={tariff.key}>{tariff.value}</option>)}
                            </Select>
                        </FormControl>
                        <Stack spacing={10}>
                            <Button onClick={formik.submitForm}
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
};

export default SearchRoutes;