/* eslint-disable import/named */
import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Conteiner } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Conteiner>{children}</Conteiner>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
