import { PillDiv } from "../styled/styled";

function Escena({ content, active }) {
  return <PillDiv active={active}>{content}</PillDiv>;
}

export default Escena;
