import { View, Text } from 'react-native';
import Button from './Button';

interface CustomComponentProps {
  name: string;
  description?: string;
}

export default function CustomComponent({
  name,
  description,
}: CustomComponentProps) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      {description ? <Text> {description} </Text> : null}
      <Button>hello</Button>
    </View>
  );
}
