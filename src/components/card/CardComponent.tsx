import { Box, Button, ButtonGroup, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'

const CardComponent = (props: any) => {
    return (
        <React.Fragment>
            <Flex mt={3} justify={props.page === 'card' ? '' : 'space-between'} maxW='full'>
                {props.data.map((card: any, index: any) => {
                    return (
                        <Link href={'cards/' + index} textDecoration='none' _hover={{ textDecoration: 'none' }} key={index}>
                            <Box bgGradient={card.isCard ? 'linear(to-tr,#2C2C2C,#373737)' : 'linear(to-tr,#2994FF,#373737)'} color='white' px={6} py={4} rounded='2xl' shadow='lg' key={index} mr={props.page === 'card' ? 5 : 0}>
                                <Flex justify='space-between'>
                                    <Flex align='center'>
                                        <Text fontSize={card.isCard ? '17px' : '9px'} mr={2}>{card.headText1}</Text>
                                        <Text fontSize='11px'>{card.headText2}</Text>
                                    </Flex>
                                    <Box opacity={0.2}>
                                        {card.isCard &&
                                            <Icon as={card.icon} mb={0} />
                                        }
                                        <hr style={{ marginTop: 0 }} />
                                    </Box>
                                </Flex>
                                {
                                    card.isCard === false ?
                                        <Heading fontSize='31px' pt={5} pb={4}>{card.heading}</Heading>
                                        :
                                        <Text fontSize='12px' pt={7} color={card.isCard ? '#979797' : 'white'} letterSpacing={4.5}>{card.heading}</Text>
                                }
                                {
                                    card.isCard ?
                                        <Flex justify='space-between' align='center' pt={6}>
                                            <Text fontSize='11px' color='#979797'>{card.buttonText1}</Text>
                                            <Icon as={card.buttonText2} mb={0} color={card.b2Color} fontSize='2xl' />
                                        </Flex>
                                        :
                                        <ButtonGroup variant='outline' spacing='6' size={'sm'}>
                                            <Button bg='white' color='black' variant='solid' fontSize='10px' shadow='lg'>{card.buttonText1}</Button>
                                            <Button colorScheme='white' fontSize='10px' shadow='lg'>{card.buttonText2}</Button>
                                        </ButtonGroup>
                                }
                            </Box>
                        </Link>
                    )
                })}
            </Flex>
        </React.Fragment >
    )
}

export default CardComponent
