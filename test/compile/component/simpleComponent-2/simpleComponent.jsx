import { View } from '@tarojs/components/dist-h5/react';
import { minus } from './util-1';

const Button = (props) => {
  const val2 = minus(2, 1);
  return <View>{props.txt}-{val2}</View>
}

export default Button;
