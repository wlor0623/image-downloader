import html from '../html.js';
import {
  Checkbox
} from '../components/Checkbox.js';

export const DownloadConfirmation = ({
  onCheckboxChange,
  onClose,
  onConfirm,
  style,
  ...props
}) => {
  return html `
    <div style=${{ gridColumn: '1 / -1', ...style }} ...${props}>
      <div>
        <hr/>
        <p>快速查看您的浏览器设置</p>
        <p class="danger">
如果<b>在下载前询问每个文件的保存位置</b>选项为
选中，继续可能会打开很多弹出窗口。继续
下载？
        </p>
      </div>

      <div style=${{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <div style=${{ marginRight: 'auto' }}>
          <${Checkbox} onChange=${onCheckboxChange}>
            了解,不再弹出
          <//>
        </div>

        <input
          type="button"
          class="neutral ghost"
          value="取消"
          onClick=${onClose}
        />

        <input
          type="button"
          class="success"
          value="确定下载"
          onClick=${() => {
            onClose();
            onConfirm();
          }}
        />
      </div>
    </div>
  `;
};
