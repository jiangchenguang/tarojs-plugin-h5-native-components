// todo 可以改为import { View } from '@tarojs/components'吗？
import { View } from '@tarojs/components/dist-h5/react';

interface IProps {
  txt: string
}

const Button = (props: IProps) => {
  return <View>{props.txt}</View>
}

export default Button;
