import React from 'react';
import { Button } from 'dumi-lib';
import './index.less';

function alert() {
  window.alert('点击按钮');
}

export default () => (
  <Button className="button" onClick={alert}>
    这是一个按钮
  </Button>
);
