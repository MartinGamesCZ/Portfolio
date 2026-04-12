import { Box, Text } from 'ink';

interface IAppProps {
  cols: number;
  rows: number;
}

export function App(props: IAppProps) {
  return (
    <Box width={props.cols} height={props.rows}>
      <Text>Hello world!</Text>
    </Box>
  );
}
