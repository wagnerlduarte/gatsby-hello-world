import styled, { css } from "styled-components"

export const CardV2Wrapper = styled.div`
  background: ${props => (props.background ? props.background : "blue")};

  ${props =>
    props.primary &&
    css`
      background: #8a4baf;

      h5 {
        color: #f1defa;
      }

      p {
        color: #f1defa;
      }
    `};
`
