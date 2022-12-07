import { View } from '@tarojs/components/dist-h5/react';
import { add } from './util';
import { minus } from './util-1';

const Button = (props) => {
  const val1 = add(1, 1);
  const val2 = minus(2, 1);
  return <View>{props.txt}-{val1}-{val2}</View>
}

export default Button;
