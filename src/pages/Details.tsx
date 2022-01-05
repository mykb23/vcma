import { Box, Button, Flex, Heading, Icon, Select, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { BiPencil } from 'react-icons/bi'
import { FaTrashAlt } from 'react-icons/fa'
import Contents from '../components/tableComponents/Contents'
import { useParams } from 'react-router-dom'
import { tableData, cardData } from '../service/data'
import CardDetailsComponent from '../components/card/CardDetailsComponent'

const Details = () => {
    let urlParams = useParams();
    let card = cardData.filter((c) => c.isCard === true)
    let index: number = Number(urlParams?.index);
    const currentCard = card[index];
    const icon: any = currentCard.buttonText2

    return (
        <React.Fragment>
            <Box px="10" py={2}>
                <Flex flexDir={'row'} align="center" justify='space-between'>
                    <Box>
                        <Heading fontSize="24px">Debit card</Heading>
                        <Text fontSize="14px" pt={1} pb={2}>Sed ut perspiciatis unde omnis iste natus error sit</Text>
                    </Box>
                    <Button fontSize="12px" leftIcon={<FaTrashAlt fontSize="20px" />} bg='#FF6C6C' color='#FFFFFF' _hover={{ bg: 'tomato.500', color: 'white' }} variant='solid'>Delete card</Button>
                </Flex>
                <hr color='#707070' />
                <Box as='div' overflowX='scroll'>
                    {/* <CardComponent data={currentCard} /> */}
                    <Flex mt={3} maxW='full'>
                        <Link href='cards/details'>
                            <Box bgGradient='linear(to-tr,#2C2C2C,#373737)' color='white' px={6} py={4} rounded='2xl' shadow='lg' >
                                <Flex justify='space-between'>
                                    <Flex align='center'>
                                        <Text fontSize='17px' mr={2}>{currentCard.headText1}</Text>
                                        <Text fontSize='11px'>{currentCard.headText2}</Text>
                                    </Flex>
                                    <Box opacity={0.2}>
                                        <Icon as={BiPencil} mb={0} />
                                        <hr style={{ marginTop: 0 }} />
                                    </Box>
                                </Flex>
                                <Text fontSize='12px' pt={7} color='#979797' letterSpacing={4.5}>{currentCard.heading}</Text>
                                <Flex justify='space-between' align='center' pt={6}>
                                    <Text fontSize='11px' color='#979797'>{currentCard.buttonText1}</Text>
                                    <Icon as={icon} mb={0} color='red.600' fontSize='2xl' />
                                </Flex>
                            </Box>
                        </Link>
                    </Flex>
                </Box>
                <Flex flexDir='row' >
                    <Box as="div" bg="white" shadow='xl' p={8} mt={12} w='xl'>
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
                    <Box as='div' bg='white' shadow='xl' p={8} mt={12} ml='auto' w='md'>
                        <Flex flexDir={'row'} justify='space-between' align='center' mb={7}>
                            <Box as='div'>
                                <Heading as='h5' fontSize='16px' >Card Info</Heading>
                            </Box>
                        </Flex>
                        <hr color='#F2F2F2' />
                        <CardDetailsComponent />
                    </Box>
                </Flex>
            </Box>
        </React.Fragment>
    )
}

export default Details
