import html from '../html.js';

export const UrlFilterMode = (props) => html`
  <select ...${props}>
    <option value="normal" title="纯文本搜索">
      文本
    </option>

    <option
      value="通配符"
      title="您还可以使用以下特殊符号：
      * → 零个或多个字符
      ? → 零或一个字符
      + → 一个或多个字符"
    >
      Wildcard
    </option>

    <option
      value="正则表达式"
      title=${`正则表达式（高级）：
      [abc]→ A、b或c的单个字符
      [^abc]→ 除a、b或c以外的任何单个字符
      [a-z]→ a-z范围内的任何单个字符
      [a-zA-Z]→ a-z或a-z范围内的任何单个字符
      ^ → 起跑线
      $ → 行尾
      A.→ 字符串开头
      Z→ 结束
      . → 任何单个字符
      s→ 任何空格字符
      s→ 任何非空白字符
      D→ 任何数字
      D→ 任何非数字
      W→ 任意单词字符（字母、数字、下划线）
      W→ 任何非单词字符
       → 任何单词边界字符
      (...) → 捕获所有封闭的东西
      （a | b）→ a或b
      A.→ 零分或一分
      a*→ 零个或多个
      a+→ 一个或多个
      a{3}→ 正好三个
      a{3，}→ 3个或更多的
      a{3,6}→ 3到6天之中`}
    >
      Regex
    </option>
  </select>
`;
