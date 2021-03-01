import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import api from '../../api'

const LoginForm = () => {
  const { register, errors, handleSubmit, formState } = useForm()

  const submitForm = values => {
    return api
      .login(values.email, values.password)
      .then(result => sessionStorage.setItem('isAuthenticated', 1))
  }

  const validateEmail = value => {
    if (!value) {
      return 'You should enter email address'
    }
    if (value.length < 4) {
      return 'E-mail address is shorter than expected'
    }
    return true
  }

  const validatePassword = value => {
    if (!value) {
      return 'You should enter password'
    }
    return true
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Stack spacing={3}>
        <FormControl isRequired isInvalid={Boolean(errors.email)}>
          <FormLabel>E-mail</FormLabel>

          <Input
            type="email"
            name="email"
            ref={register({ validate: validateEmail })}
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
            ref={register({ validate: validatePassword })}
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
