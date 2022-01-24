import { Box, BoxProps, CloseButton, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// import React from 'react'
import NavItem from './NavItem';
import {
    FiHome,
} from 'react-icons/fi';
import { RiLoginBoxFill } from "react-icons/ri";
// import { IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import { AiFillCreditCard } from 'react-icons/ai';


interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    let location = useLocation()
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Link to="/dashboard">
                    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                        {/* Logo{userRole} */}
                    </Text>
                </Link>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Flex flexDir={'column'} justify='space-between' px={4} py={8}>
                <Flex flexDir={'column'} mb={300} justifySelf="space-between">
                    <NavItem
                        active={location.pathname.includes('dashboard') ? true : false}
                        url={'dashboard'}
                        icon={FiHome}
                        mb={4}
                    >
                        Dashboard
                    </NavItem>
                    <NavItem
                        active={location.pathname.includes('cards') ? true : false}
                        url={'cards'}
                        icon={AiFillCreditCard} >
                        My Cards
                    </NavItem>
                </Flex>
                <Flex mt={150}>
                    <Link to={'sign-up'} style={{ textDecoration: 'none' }}>
                        <Flex
                            align="center"
                            p="4"
                            mx="4"
                            borderRadius="lg"
                            cursor="pointer"
                        >
                            <Icon
                                mr="4"
                                fontSize="xl"
                                _groupHover={{
                                    color: 'white',
                                }}
                                as={RiLoginBoxFill}
                                color="red.600"
                            />
                            Logout
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
        </Box >
    )
}

export default SidebarContent
