import { View } from '@tarojs/components/dist-h5/react';

var Button = function (props) {
    return View(null, [props.txt]);
};

export { Button as default };
