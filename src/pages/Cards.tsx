import { Box, Button, Flex, Heading, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Contents from '../components/tableComponents/Contents'
import CardComponent from '../components/card/CardComponent'
import { tableData, cardData } from '../service/data'

const Cards = () => {
    let card = cardData.filter((c) => c.isCard === true)
    console.log(card)
    return (
        <React.Fragment>
            <Box px="10" py={2}>
                <Flex flexDir={'row'} align="center" justify='space-between'>
                    <Box>
                        <Heading fontSize="24px">My cards</Heading>
                        <Text fontSize="14px" pt={1} pb={2}>Sed ut perspiciatis unde omnis iste natus error sit</Text>
                    </Box>
                    <Button fontSize="12px" leftIcon={<AiOutlinePlusCircle fontSize="22px" />} bg='#2994FF' color='#FFFFFF' _hover={{ bg: 'blue.500', color: 'white' }} variant='solid'>Add new card</Button>
                </Flex>
                <hr color='#707070' />
                <Box as='div' overflowX='scroll'>
                    <CardComponent data={card} page={'card'} />
                </Box>
                <Box as="div" bg="white" shadow='xl' p={8} mt={12}>
                    <Flex flexDir={'row'} justify='space-between' align='center' mb={4}>
                        <Box as='div'>
                            <Heading as='h5' fontSize='16px'>Activity</Heading>
                        </Box>
                        <Box ml='auto'>
                            <Select placeholder='All categories' size='sm' variant='ghost'>
                                <option value='option1'>United States Dollar (USD)</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                    </Flex>
                    <hr color='#F2F2F2' />
                    <Heading py={5} color='#CCCCCC' fontSize='14px'>December 31</Heading>
                    <Contents data={tableData} />
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Cards
