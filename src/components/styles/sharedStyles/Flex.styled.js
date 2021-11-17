import styled from "styled-components";

export const FlexSpaceBetween = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => (props.alignItemsCenter ? "center" : "flex-start")};
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
