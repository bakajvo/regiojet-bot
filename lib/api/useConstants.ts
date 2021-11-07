import { useToast } from '@chakra-ui/react';
import useSWR from 'swr';
import { axiosFetcher } from '../axiosFetcher';

const useConstants = <Data = any, Error = any>(type: string) => {
    const toast = useToast();
    const { data, error } = useSWR<Data, Error>(`/consts/${type}`, axiosFetcher);

    if (error) {
        toast({
            status: 'error',
            isClosable: true,
            title: `API Error: /consts/${type}`,
            description: error + '',
        });
    }

    return {
        data,
        isLoading: !error && !data,
    }
};

export default useConstants;