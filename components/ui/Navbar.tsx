import React from 'react';
import {Box, Flex, HStack, IconButton, Icon, Link, Stack, useColorModeValue, useDisclosure,} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import {useRouter} from "next/router";
import {FaSatellite} from 'react-icons/fa';

const Links = [{
    label: 'Nové hledání',
    path: '/',
}];

interface NavLinkProps {
    path: string;
}

const NavLink: React.FC<NavLinkProps> = ({path, children}) => {
    const router = useRouter();

    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            onClick={() => router.push(path)}
        >
            {children}
        </Link>
    );
};

const Navbar: React.FC = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                    aria-label={'Open Menu'}
                    display={{md: 'none'}}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box><Icon as={FaSatellite} w={8} h={8}/></Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{base: 'none', md: 'flex'}}>
                        {Links.map((link, index) => (
                            <NavLink key={index} path={link.path}>{link.label}</NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>

                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{md: 'none'}}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link, index) => (
                            <NavLink key={index} path={link.path}>{link.label}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

export default Navbar;