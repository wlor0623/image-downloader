<h1 align="center">
  <img src="images/icon_48.png" alt="图片下载器 logo" height="40" valign="middle" />
  &nbsp;图片下载器
</h1>

<h2 align="center">
  使用浏览器下午网络图片 
  <br />
  <br />
</h2>
欢迎如果您想了解有关如何使用此扩展的更多信息，请查看[用户指南]（USERGUIDE）
如果你是一个对在本地运行扩展而不是从Chrome网络商店安装它感兴趣的开发人员，请继续阅读！

## 本地开发
1. 首先，安装依赖项：
    ```bash
    npm install
    ```
2. 然后，您可以启动开发服务器，该服务器会自动监视文件更改：
    ```bash
    npm start
    ```
    Or alternatively - only run the build once:
    ```bash
    npm run build
    ```
3. 在浏览器设置中打开扩展列表：[chrome://extensions](chrome://extensions)
4.启用**开发者模式**
5.单击**加载解包**按钮，导航到扩展根文件夹并选择“build”文件夹
6.享受吧！

##测试
运行并观察与本地更改的文件相关的测试-在开发过程中非常有用：
```bash
npm  test
```
或者在不观看的情况下运行所有测试并生成覆盖率报告：
```bash
npm run test.all
```

## License
```
Copyright (c) 2012-2021 Vladimir Sabev

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
```
