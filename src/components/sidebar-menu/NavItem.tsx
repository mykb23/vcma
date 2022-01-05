import { Flex, FlexProps, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {
    Link,
    // LinkProps, 
    // useLocation 
} from "react-router-dom";

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    url: any;
    active: boolean;
}
const NavItem = ({ url, active, icon, children, ...rest }: NavItemProps) => {
    return (
        <Link to={url} style={{ textDecoration: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                color={active ? 'white' : ''}
                backgroundColor={active ? '#2994FF' : ''}
                _hover={{
                    bg: '#2994FF',
                    color: 'white',
                }}

                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    )
}

export default NavItem
