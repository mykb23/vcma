import { Box, useInterval, Image, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { arr, fadeIn } from '../../service/data'

const OnboardingComponent = () => {
    const [value, setValue] = React.useState(0)
    const [delay, setDelay] = React.useState(5000)

    useInterval(() => {
        console.log(value)
        value === 2 ? setValue(0) : setValue(value + 1);
        arr.map(i => {
            return (i.show = "none");
        });
        arr[value].show = "block";
    }, delay)
    return (
        <>
            {arr.map((item: any, key: any) => {
                return (
                    <Box
                        key={key}
                        display={item.show}
                        animation={`${fadeIn} ease 3s`}
                        alignSelf="center"
                        align='center'
                        justify='center'
                    >
                        <Image
                            alt={`${item.heading}`}
                            objectFit={'cover'}
                            src={
                                item.icon
                            }
                            boxSize={'100px'}
                        />
                        <Box color={'white'}>
                            <Heading pt={4} pb={2} fontSize="20px">{item.heading}</Heading>
                            <Text px={'180px'} fontSize={'14px'}>{item.text}</Text>
                        </Box>
                    </Box>
                )

            })}
        </>
    )
}

export default OnboardingComponent
