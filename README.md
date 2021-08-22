https://zhuanlan.zhihu.com/p/59023070

https://webpack.docschina.org/guides/typescript/#root

1. 动态引入报错
```js

```
tsconfig.json里面增加`"module": "esnext",`


### 带解决问题
#### 给slot注入props的方式不够优雅
文件路径： F:\webLearn\webComponents\FUI\src\component\Menu\SubMenu\index.tsx
```jsx harmony
//给子slot注入slot
this.childNodes.forEach((node: any) => {
    node.setSlotProps && node.setSlotProps({showValue: "1"});
});
```

