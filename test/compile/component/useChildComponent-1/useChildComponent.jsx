import { View } from '@tarojs/components/dist-h5/react';
import SimpleComponent from "./simpleComponent.jsx";

const Button = (props) => {
  return <View>
    <View>{props.txt}</View>
    <SimpleComponent txt={'hello'} />
  </View>
}

export default Button;
