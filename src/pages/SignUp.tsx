import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Stack, Box, Text, Select, Heading } from '@chakra-ui/react'
import React from 'react'
import OnboardingComponent from "../components/onboarding/OnboardingComponent";

const SignUp = () => {
    return (
        <>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <form>
                        <Stack spacing={4} w={'xl'} maxW={'xl'} shadow='2xl' px={16} py={14} rounded={20}>
                            <Box textAlign='center' pt={2}>
                                <Heading fontSize={'2xl'} >Create an account</Heading>
                                <Text pt={2}>Create an account to continue</Text>
                            </Box>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="Example@example.com" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="*********" autoComplete="off" />
                            </FormControl>
                            <FormControl id="confirm-password">
                                <FormLabel>Confirm Password</FormLabel>
                                <Input type="password" placeholder="*********" autoComplete="off" />
                            </FormControl>
                            <FormControl id="currency">
                                <FormLabel>Select Currency</FormLabel>
                                <Select placeholder='United States Dollar (USD)'>
                                    <option value='option1'>United States Dollar (USD)</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </FormControl>
                            <Stack spacing={6}>
                                <Checkbox pt={6} colorScheme='blue' defaultIsChecked>I accept these terms and conditions</Checkbox>

                                <Button colorScheme={'blue'} variant={'solid'} size={'lg'}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Flex>
                <Flex flex={1} bgGradient='linear(to-b,blue.100,blue)' pt={8}>
                    <OnboardingComponent />
                </Flex>
            </Stack>
        </ >
    )
}

export default SignUp
