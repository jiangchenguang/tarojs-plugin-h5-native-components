import { View } from '@tarojs/components/dist-h5/react';
import Button$1 from './simpleComponent.js';

var Button = function (props) {
    return View(null, [
    View(null, [props.txt]),
    Button$1({txt: 'hello'})
  ]);
};

export { Button as default };