import { View } from '@tarojs/components/dist-h5/react';
import SimpleComponent from "./simpleComponent";

const Button = (props) => {
  return <View>
    <View>{props.txt}</View>
    <SimpleComponent txt={'hello'} />
  </View>
}

export default Button;
