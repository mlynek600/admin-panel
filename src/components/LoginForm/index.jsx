import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const { register, errors, handleSubmit, formState } = useForm()

  const submitForm = values => {
    console.log('form values: ', values)
    return new Promise(resolve => setTimeout(() => resolve(), 3000))
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Stack spacing={3}>
        <FormControl isRequired isInvalid={Boolean(errors.email)}>
          <FormLabel>E-mail</FormLabel>

          <Input
            name="email"
            ref={register}
            placeholder="test@test.com"
            size="lg"
            disabled={formState.isSubmitting}
          />

          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={Boolean(errors.password)}>
          <FormLabel>Password</FormLabel>

          <Input
            name="password"
            type="password"
            ref={register}
            placeholder="**********"
            size="lg"
            disabled={formState.isSubmitting}
          />

          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          isLoading={formState.isSubmitting}
          colorScheme="facebook"
        >
          Login
        </Button>
      </Stack>
    </form>
  )
}

export default LoginForm
