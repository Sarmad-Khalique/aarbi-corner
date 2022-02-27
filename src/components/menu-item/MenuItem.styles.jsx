import styled from "styled-components";
import { device } from "../../utils/devices/devices.styles";

export const MenuItemContainer = styled.div`
  overflow: hidden;
  min-width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  cursor: pointer;
  border: 1px solid black;

  @media ${device.tablet} {
    min-width: 30%;
  }
`;

export const MenuItemBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-size: cover;
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  height: 5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
  background-color: #fff;
  opacity: 0.7;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`;

export const ContentTitle = styled.h1`
  font-size: 20px;
  line-height: 1rem;
  margin-bottom: 0.25rem;
`;

export const ContentSubtitle = styled.p`
  font-weight: 300;
  font-size: 18px;
`;
