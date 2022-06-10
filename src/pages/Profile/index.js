/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import Input from '~/components/Input';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

function Profile() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const error = useSelector((state) => state.user.erro);

  const [erroName, setErroName] = useState('');
  const [erroEmail, setErroEmail] = useState(error.email);
  const [erroOldPassword, setErroOldPassword] = useState(error.oldPassword);
  const [erroPassword, setErroPassword] = useState(error.password);
  const [erroConfirmPassword, setErroConfirmPassword] = useState(
    error.confirmPassword
  );

  useEffect(() => {
    setErroName(error.name);
    setErroEmail(error.email);
    setErroOldPassword(error.oldPassword);
    setErroPassword(error.password);
    setErroConfirmPassword(error.confirmPassword);
  }, [profile, error]);

  useEffect(() => {
    setErroName('');
    setErroEmail('');
    setErroOldPassword('');
    setErroPassword('');
    setErroConfirmPassword('');
  }, [profile]);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
    console.tron.log(data);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} ref={formRef}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" erro={erroName} />

        <Input
          name="email"
          type="email"
          placeholder="Seu endereço de e-mail"
          erro={erroEmail}
        />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
          autoComplete="off"
          erro={erroOldPassword}
        />

        <Input name="password" type="password" placeholder="Nova senha" />
        {erroPassword ? <span>{erroPassword}</span> : null}
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
          erro={erroConfirmPassword}
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        {' '}
        Sair do Gobarber{' '}
      </button>
    </Container>
  );
}

export default Profile;
