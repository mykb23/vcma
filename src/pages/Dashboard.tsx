import { Box, Flex, Heading, Select, Text } from '@chakra-ui/react'
import React from 'react'
import Contents from '../components/tableComponents/Contents';
import CardComponent from '../components/card/CardComponent';
import { tableData, cardData } from '../service/data';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Box px="10" py={2}>
                <Heading fontSize="24px">Dashboard</Heading>
                <Text fontSize="14px" pt={1} pb={2}>Sed ut perspiciatis unde omnis iste natus error sit</Text>
                <hr color='#707070' />
                <Box as='div' overflowX='scroll'>
                    <CardComponent data={cardData} />
                </Box>
                <Box as="div" bg="white" shadow='xl' p={8} mt={12}>
                    <Flex flexDir={'row'} justify='space-between' align='center' mb={4}>
                        <Box as='div'>
                            <Heading as='h5' fontSize='16px'>Transaction history</Heading>
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
            </Box >
        </React.Fragment>
    )
}

export default Dashboard