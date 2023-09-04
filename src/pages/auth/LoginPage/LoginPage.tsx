import React, { FC, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { authService } from '../../../graphql/auth/auth.service';
import { LoginResult } from '../../../graphql/auth/auth.types';
import { LOGIN } from '../../../graphql/auth/index';
import { schema } from '../SignupPage/validationSchema';
import { RoutesPath } from '../../../constants/routes.constants';

import Header from '../../../components/Header/Header';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { IFormInput } from './types'
import theme from '../../../themes/themes';
import {
    FormAuth,
    PaperAuth,
    StyledGrid,
    StyledInputAdornment,
    StyledLoadingButton,
    StyledTextField,
    StyledTypography
} from './Login.styles';

const LoginPage: FC = () => {
    const [login, { loading }] = useLazyQuery<LoginResult>(LOGIN);
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const showPassword = () => {
        setHiddenPassword((el) => !el);
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>({
        defaultValues: { email: '', password: '' },
        resolver: yupResolver(schema)
    });

    const onSubmit = async (input: IFormInput) => {
    const { data } = await login({ variables: input });
    if (data) {
      authService.login(data.login.user, data.login.access_token);
    }
  };

    return (
        <>
            < Header />
            <Box paddingTop={35}>
                <PaperAuth elevation={24}>
                    <StyledGrid container direction="column">
                        <StyledTypography variant="h4">Welcome back!</StyledTypography>
                        <Typography>Hello again! Sign in to continue</Typography>
                        <FormAuth onSubmit={handleSubmit(onSubmit)}>
                            <StyledTextField
                                fullWidth
                                label="Email"
                                placeholder="Enter email"
                                variant="outlined"
                                color="secondary"
                                type="email"
                                {...register('email')}
                                helperText={errors.email?.message}
                                error={!!errors.email}
                            />

                            <StyledTextField
                                fullWidth
                                label="Password"
                                placeholder="Enter password"
                                color="secondary"
                                variant="outlined"
                                type={hiddenPassword ? 'password' : 'text'}
                                {...register('password')}
                                helperText={errors.password?.message}
                                error={!!errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <StyledInputAdornment position="end" onClick={showPassword}>
                                            {hiddenPassword ? <Visibility /> : <VisibilityOff />}
                                        </StyledInputAdornment>
                                    )
                                }}
                            />

                            <StyledLoadingButton
                                size="large"
                                fullWidth
                                type="submit"
                                variant="contained"
                                loading={loading}
                            >
                                Login
                            </StyledLoadingButton>

                            <Button
                                sx={{ mt: 1, color: theme.palette.secondary.main }}
                                fullWidth
                                type="submit"
                                variant="text"
                                component={NavLink}
                                to={RoutesPath.SIGNUP}
                            >
                                I don`t have an account
                            </Button>
                        </FormAuth>
                    </StyledGrid>
                </PaperAuth>
            </Box>
        </>

    );
};

export default LoginPage;