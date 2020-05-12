import { defineConfig } from 'dumi';

export default defineConfig({
  title: '组件库',
  styles: [
    `
    .markdown table td:nth-child(3) {
      width: 22%;
      color: #c41d7f;
      font-size: 15px;
      word-break: break-all;
  }
    `,
  ],
  // more config: https://d.umijs.org/config
});
