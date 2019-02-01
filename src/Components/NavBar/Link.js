import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  margin: 0.5 em;
  color: white;
  :hover {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
`;

export default LinkStyled;
