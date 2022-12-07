import { View } from '@tarojs/components/dist-h5/react';
import { add } from './util'
import { minus } from './util-1';

interface IProps {
  txt: string
}

const Button = (props: IProps) => {
  const sum = add(1, 1);
  const val2 = minus(2, 1);
  return <View>{props.txt}-{sum}-{val2}</View>
}

export default Button;
