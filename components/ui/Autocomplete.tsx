import {
    Badge,
    Box,
    Flex,
    Input,
    InputProps,
    List,
    ListItem,
} from '@chakra-ui/react';
import { matchSorter } from 'match-sorter';
import { CheckCircleIcon, CloseIcon, SmallAddIcon } from '@chakra-ui/icons';
import { IOption } from '../../lib/model/IOption';

export interface AutocompleteProps extends InputProps {
    options: Array<IOption>;
}

const Autocomplete: React.FC<AutocompleteProps> = () => {
    return (
        <Box data-testid="simple-autocomplete">
            <Input
            />
            <List
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="md"
                boxShadow="6px 5px 8px rgba(0,50,30,0.02)"
                mt={2}
            >
                <ListItem
                    _hover={{ bg: 'gray.100' }}
                    my={1}
                    p={2}
                    cursor="pointer"
                >
                    <Flex align="center">
                        Label
                    </Flex>
                </ListItem>
                <ListItem
                    _hover={{ bg: 'gray.100' }}
                    my={1}
                    p={2}
                    cursor="pointer"
                >
                    <Flex align="center">
                        Label
                    </Flex>
                </ListItem>
                <ListItem
                    _hover={{ bg: 'gray.100' }}
                    my={1}
                    p={2}
                    cursor="pointer"
                >
                    <Flex align="center">
                        Label
                    </Flex>
                </ListItem>
                <ListItem
                    _hover={{ bg: 'gray.100' }}
                    my={1}
                    p={2}
                    cursor="pointer"
                >
                    <Flex align="center">
                        Label
                    </Flex>
                </ListItem>
                <ListItem
                    _hover={{ bg: 'gray.100' }}
                    my={1}
                    p={2}
                    cursor="pointer"
                >
                    <Flex align="center">
                        Label
                    </Flex>
                </ListItem>
                <ListItem
                    _hover={{ bg: 'gray.100' }}
                    my={1}
                    p={2}
                    cursor="pointer"
                >
                    <Flex align="center">
                        Label
                    </Flex>
                </ListItem>
                <ListItem
                    _hover={{ bg: 'gray.100' }}
                    my={1}
                    p={2}
                    cursor="pointer"
                >
                    <Flex align="center">
                        Label
                    </Flex>
                </ListItem>
                <ListItem
                    _hover={{ bg: 'gray.100' }}
                    my={1}
                    p={2}
                    cursor="pointer"
                >
                    <Flex align="center">
                        Label
                    </Flex>
                </ListItem>
                <ListItem my={1} p={2}>
                    <Flex align="center">Not Found</Flex>
                </ListItem>
            </List>
        </Box>
    );
};

export default Autocomplete;