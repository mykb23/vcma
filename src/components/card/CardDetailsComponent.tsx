import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const CardDetailsComponent = () => {
    return (
        <React.Fragment>
            <Box>
                <Flex flexDir='row' justify='space-between' py={5}>
                    <Text as='p' color='#373737' opacity='55%' fontWeight='13px'>CARD NAME:</Text>
                    <Text as='p' color='#373737' fontWeight='14px'>Chris Jombo</Text>
                </Flex>
                <Flex flexDir='row' justify='space-between' pb={5}>
                    <Text as='p' color='#373737' opacity='55%' fontWeight='13px'>CARD NO:</Text>
                    <Text as='p' color='#373737' fontWeight='14px'>4685885266465242</Text>
                </Flex>
                <Flex flexDir='row' justify='space-between' pb={5}>
                    <Text as='p' color='#373737' opacity='55%' fontWeight='13px'>CVV:</Text>
                    <Text as='p' color='#373737' fontWeight='14px'>133</Text>
                </Flex>
                <Flex flexDir='row' justify='space-between' pb={5}>
                    <Text as='p' color='#373737' opacity='55%' fontWeight='13px'>ZIPCODE:</Text>
                    <Text as='p' color='#373737' fontWeight='14px'>23401</Text>
                </Flex>
                <Flex flexDir='row' justify='space-between'>
                    <Text as='p' color='#373737' opacity='55%' fontWeight='13px'>ADDRESS:</Text>
                    <Text as='p' color='#373737' fontWeight='14px'>19, Olubunmi Rotimi, Lekki, Lagos</Text>
                </Flex>
            </Box>
        </React.Fragment>
    )
}

export default CardDetailsComponent
