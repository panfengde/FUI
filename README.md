https://zhuanlan.zhihu.com/p/59023070

https://webpack.docschina.org/guides/typescript/#root

1. 动态引入报错
```js
import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
```
tsconfig.json里面增加`"module": "esnext",`
