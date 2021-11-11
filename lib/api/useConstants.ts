import {useToast} from '@chakra-ui/react';
import useSWR from 'swr';
import {axiosFetcher} from '../axiosFetcher';

const useConstants = <Data = any, Result = any>(type: string, mapper?: (data: Data) => Result): {
    data?: Data | Result;
    isLoading: boolean;
} => {
    const toast = useToast();
    const {data, error} = useSWR<Data>(`/consts/${type}`, axiosFetcher);

    if (error) {
        toast({
            status: 'error',
            isClosable: true,
            title: `API Error: /consts/${type}`,
            description: error + '',
        });
    }

    return {
        data: (mapper && data) ? mapper(data) : data,
        isLoading: !error && !data,
    }
};

export default useConstants;