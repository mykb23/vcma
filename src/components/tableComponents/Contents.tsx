import React from 'react'
import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

const Contents = (props: any) => {
    return (
        <React.Fragment>
            {props.data.map((item: any, key: any) => {
                return (
                    <Flex flexDir='row' justify='space-between' key={key} py={2}>
                        <Flex flexDir='row'>
                            <Image src={item.image} />
                            <Flex flexDir='column' ps={3}>
                                <Heading fontSize='14px'>{item.heading} <Link color='#019FBC'>{item.link}</Link></Heading>
                                <Flex flexDir='row' fontSize='14px' color='#999999' justify='space-between'>
                                    <Text>{item.text1}</Text>
                                    <Text ml={5}>{item.text2}</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Text as='p' fontSize='25px' ml='auto'>
                            {item.sign}
                            {item.amount === 6000 ?
                                <Text as='span' fontSize='20px' pl={2} fontWeight='bold' color='#39B54A'>
                                    {item.amount}
                                    <Text as='span' fontSize='12px' color='#999999' px={3}>
                                        {item.currency}
                                    </Text>
                                </Text>
                                :
                                <Text as='span' fontSize='20px' pl={2} >
                                    {item.amount}
                                    <Text as='span' fontSize='12px' color='#999999' px={3}>
                                        {item.currency}
                                    </Text>
                                </Text>
                            }
                        </Text>
                    </Flex>
                )
            })
            }
        </React.Fragment >
    )
}

export default Contents
