import styled from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { device } from "../../utils/devices/devices.styles";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 2.5rem;
  @media ${device.tablet} {
    height: 12rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media ${device.tablet} {
    width: 12rem;
  }
`;

export const LogoImage = styled(Logo)`
  width: 7rem;
  height: 7rem;

  @media ${device.tablet} {
    width: 8rem;
    height: 8rem;
  }
`;

export const HamContainer = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
  flex-direction: column;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const LinkOption = styled(Link)`
  padding: 1rem 0.75rem;
  text-decoration: none;
  color: #000;
`;
