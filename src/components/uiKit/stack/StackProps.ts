interface StackProps {
    children: React.ReactNode;
    direction?: 'row' | 'column';
    wrap?: boolean;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    gap?: number;
}

export default StackProps;