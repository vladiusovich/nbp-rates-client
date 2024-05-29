import { transformProps } from '../types/TransformedProps';
import S, { StyledStackProps } from './Stack.styled';
import StackProps from './StackProps';

const Stack: React.FC<StackProps> = (props: StackProps) => {
    return <S {...transformProps(props as StyledStackProps)}>{props.children}</S>;
};

export default Stack;
