import { View } from '@tarojs/components/dist-h5/react';
import "./style.stylus";


interface IProps {
  txt: string
}

const Button = (props: IProps) => {
  return <View>{props.txt}</View>
}

export default Button;
