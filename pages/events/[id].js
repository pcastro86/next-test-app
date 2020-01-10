import { useRouter } from "next/router";
import Context from "../../config/Context";
import styled from "styled-components";

const HeadingEvent = styled.h1`
  color: green;
`;

export default function Post() {
  const router = useRouter();
  const context = React.useContext(Context);

  return (
    <div>
      <HeadingEvent>Evento : {context.detalle.nombre}</HeadingEvent>
    </div>
  );
}
