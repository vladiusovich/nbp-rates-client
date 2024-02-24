import S from './Stack.styled';
import StackProps from './StackProps';

const Stack: React.FC<StackProps> = (props) => {
    return <S {...props}>{props.children}</S>;
};

export default Stack;
