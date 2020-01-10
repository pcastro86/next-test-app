import Context from "../../config/Context";
import styled from 'styled-components';

 function Home() {
  const context = React.useContext(Context);

const Heading = styled.h1`
  color: red;
`
const SubHeading = styled.h3`
  color: green;
`

const Text = styled.p`
  color: violet;
`

  return (
    <React.Fragment>
      <Heading>Eventos</Heading>
      <SubHeading>{context.events.title}</SubHeading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus vestibulum augue eu suscipit. In hac habitasse platea dictumst. Cras elementum enim purus, eu molestie justo sollicitudin euismod. Nam dapibus pharetra dapibus. Nulla vestibulum et magna eget interdum. Aliquam feugiat tellus ac tellus porta bibendum. Cras at elit vulputate, condimentum ante eu, dignissim sem. Pellentesque malesuada lorem ut justo feugiat, a aliquam lacus posuere. Quisque tellus orci, rhoncus ut nibh non, tincidunt dictum ante. Mauris laoreet sodales enim eget congue. Nulla sit amet lectus ac justo sodales interdum id et dolor. Nullam ipsum arcu, pellentesque et lectus bibendum, ultrices mattis ligula. Suspendisse ullamcorper, dolor non fermentum auctor, quam leo aliquam mi, vitae pulvinar nibh risus id odio. Ut tristique massa elit, eget luctus dolor blandit eget. Suspendisse faucibus urna vitae purus suscipit condimentum.</Text>
    </React.Fragment>
  );
}

export default Home