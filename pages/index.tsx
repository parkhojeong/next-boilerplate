import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  font-style: italic
`;

const index: NextPage = () => {
  return <Container>hello Styled-components</Container>;
};

export default index;