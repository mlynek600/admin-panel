import React from 'react'
import { Flex, Stack, Box, Heading } from '@chakra-ui/react'

import LoginForm from '../../components/LoginForm'

const LoginPage = () => (
  <Flex minHeight="100vh" align="center" justify="center" bg="gray.200">
    <Stack spacing={8} mx="auto" width="full" py={12} px={6} maxW="md">
      <Heading fontSize="3xl" textAlign="center">
        Sign up
      </Heading>

      <Box rounded="lg" bg="white" boxShadow="lg" p={{ base: 4, md: 8 }}>
        <LoginForm />
      </Box>
    </Stack>
  </Flex>
)

export default LoginPage
