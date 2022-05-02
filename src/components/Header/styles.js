import styled from 'styled-components';
import { MdLogout } from 'react-icons/md';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;

      &:hover {
        color: ${darken(0.2, '#7159c1')}; // 0.03 é o valor do darken
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    padding-right: 15px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  text-decoration: none;
  padding-left: 10px;
  position: absolute;
  top: 22px;
  right: 10px;
`;

export const IMdLogout = styled(MdLogout)`
  width: 20px;
  height: 20px;
  color: #7159c1;

  &:hover {
    color: ${darken(0.2, '#7159c1')}; // 0.03 é o valor do darken
    width: 22px;
    height: 22px;
  }
`;
