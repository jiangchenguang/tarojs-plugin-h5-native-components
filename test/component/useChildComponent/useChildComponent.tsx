import { View } from '@tarojs/components/dist-h5/react';
import SimpleComponent from "./simpleComponent";

interface IProps {
  txt: string
}

const Button = (props: IProps) => {
  return <View>
    <View>{props.txt}</View>
    <SimpleComponent txt={'hello'} />
  </View>
}

export default Button;
