/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logoPurple.svg';
import Notifications from '../Notifications';

import { Container, Content, Profile, Badge, IMdLogout } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch({ type: '@auth/SIGN_OUT' });
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                !profile.avatar
                  ? `https://robohash.org/${profile.name}?set=set3&size=50x50`
                  : profile.avatar.url
              }
              alt="Henrique Vazquez"
            />
          </Profile>
        </aside>
      </Content>
      <Badge onClick={handleSignOut}>
        <IMdLogout />
      </Badge>
    </Container>
  );
}
