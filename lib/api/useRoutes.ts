import { useToast } from '@chakra-ui/react';
import useSWR from 'swr';
import { axiosFetcher } from '../axiosFetcher';
import { ISearchRoutes } from '../model/ISearchRoutes';

const useRoutes = (searchRoutes: ISearchRoutes) => {
    console.log('searchRoutes', searchRoutes);
    const toast = useToast();
    const { data, error } = useSWR(`/routes/search/simple`, url => axiosFetcher(url, {
        params: searchRoutes
    }));

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