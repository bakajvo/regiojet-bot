import {useToast} from '@chakra-ui/react';
import useSWR from 'swr';
import {axiosFetcher} from '../axiosFetcher';
import isEmpty from 'lodash/isEmpty';
import {IRoutes} from "../model/IRoutes";

const useRoutes = (searchRoutes: Record<string, string>) => {
    const toast = useToast();
    const usp = new URLSearchParams(searchRoutes);
    const {
        data,
        error
    } = useSWR<IRoutes>(!isEmpty(searchRoutes) ? `/routes/search/simple?${usp}` : null, axiosFetcher,
        {
            refreshInterval: 10000,
            refreshWhenHidden: true,
        });

    if (error) {
        toast({
            status: 'error',
            isClosable: true,
            title: `API Error: /routes/search/simple`,
            description: error + '',
        });
    }

    return {
        data,
        isLoading: !error && !data,
    }
};

export default useRoutes;