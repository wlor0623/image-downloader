import html, { render, useState } from '../html.js';

import { Checkbox } from '../components/Checkbox.js';
import { isNotStrictEqual } from '../utils.js';

import { SupportList } from './Support.js';

const initialOptions = Object.keys(localStorage)
  .filter((key) => !key.endsWith('_default'))
  .reduce((options, key) => ({ ...options, [key]: localStorage[key] }), {});

const defaultOptions = Object.keys(localStorage)
  .filter((key) => key.endsWith('_default'))
  .reduce(
    (options, key) => ({
      ...options,
      [key.replace('_default', '')]: localStorage[key],
    }),
    {}
  );

const useNotifications = (initialNotifications = []) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  function addNotification(type, message) {
    setNotifications((notifications) => {
      const notification = { message, type };
      const removeNotificationAfterMs = 10_000;

      setTimeout(() => {
        setNotifications((notifications) =>
          notifications.filter(isNotStrictEqual(notification))
        );
      }, removeNotificationAfterMs);

      return [notification, ...notifications];
    });
  }

  return { notifications, addNotification };
};

const Options = () => {
  const [options, setOptions] = useState(initialOptions);

  const setCheckboxOption = (key) => ({ currentTarget: { checked } }) => {
    setOptions((options) => ({ ...options, [key]: checked.toString() }));
  };

  const setValueOption = (key) => ({ currentTarget: { value } }) => {
    setOptions((state) => ({ ...state, [key]: value }));
  };

  function saveOptions() {
    Object.assign(localStorage, options);
    addNotification('success', 'Options saved');
  }

  function resetOptions() {
    setOptions(defaultOptions);
    addNotification(
      'accent',
      '所有选项都已重置为默认值。现在，您可以通过关闭此页面来保存或放弃所做的更改。'
    );
  }

  function clearData() {
    const userHasConfirmed = window.confirm(
      '这将删除与过滤器、选项和保存文件的默认文件夹名称相关的所有扩展数据。持续'
    );
    if (userHasConfirmed) {
      localStorage.clear();
      window.location.reload();
    }
  }

  const { notifications, addNotification } = useNotifications();

  return html`
    <h1>
      <img src="/images/icon_128.png" />
      图片下载器
      <small class="light">v${chrome.runtime.getManifest().version}</small>
    </h1>

    <fieldset>
      <legend>About</legend>
      <${SupportList} />
    </fieldset>

    <fieldset>
      <legend>一般选项</legend>

      <${Checkbox}
        id="show_download_confirmation_checkbox"
        title="按下下载按钮时需要确认"
        checked="${options.show_download_confirmation === 'true'}"
        onChange=${setCheckboxOption('show_download_confirmation')}
      >
        <span>显示下载确认按钮</span>
      </>

      <br />
      <${Checkbox}
        id="show_file_renaming_checkbox"
        title="用于为下载的文件指定新文件名"
        checked="${options.show_file_renaming === 'true'}"
        onChange=${setCheckboxOption('show_file_renaming')}
      >
        <span>显示文件重命名文本框</span>
      <//>
    </fieldset>
    <fieldset>
    <legend>正则表达式</legend>
  <p>
  </p>
  </fieldset>

    <fieldset>
      <legend>图片选项</legend>

      <${Checkbox}
        id="show_image_url_checkbox"
        title="显示每个图像上方的URL"
        checked="${options.show_image_url === 'true'}"
        onChange=${setCheckboxOption('show_image_url')}
      >
        <span>悬停时显示<b>URL</b></span>
      <//>

      <br />
      <${Checkbox}
        id="show_open_image_button_checkbox"
        title="在每个图像旁边显示一个按钮，以在新选项卡中打开它"
        checked="${options.show_open_image_button === 'true'}"
        onChange=${setCheckboxOption('show_open_image_button')}
      >
        <span>在悬停状态下显示打开按钮</span>
      <//>

      <br />
      <${Checkbox}
        id="show_download_image_button_checkbox"
        title="在每个图像旁边显示一个按钮以单独下载它。此下载不需要确认，即使您已启用确认选项。"
        checked="${options.show_download_image_button === 'true'}"
        onChange=${setCheckboxOption('show_download_image_button')}
      >
      <span>在鼠标悬停时显示下载按钮</span>
      <//>

      <table>
        <tr title="列数">
          <td><label for="columns_numberbox">列数:</label></td>
          <td>
            <input
              id="columns_numberbox"
              type="number"
              required
              min="1"
              max="10"
              value="${options.columns}"
              onChange=${setValueOption('columns')}
            />
          </td>
        </tr>

        <tr
          title="设置最小宽度对于太小而无法辨认的图像很有用"
        >
          <td>
            <label for="image_min_width_numberbox">
            最小显示宽度:
            </label>
          </td>
          <td>
            <input
              id="image_min_width_numberbox"
              type="number"
              required
              min="0"
              max="720"
              value="${options.image_min_width}"
              onChange=${setValueOption('image_min_width')}
            />px
          </td>
        </tr>

        <tr
          title="设置最大宽度可以防止较大的图像占用太多空间，还可以更改弹出窗口的大小"
        >
          <td>
            <label for="image_max_width_numberbox">
              最大显示宽度:
            </label>
          </td>
          <td>
            <input
              id="image_max_width_numberbox"
              type="number"
              required
              min="30"
              max="720"
              value="${options.image_max_width}"
              onChange=${setValueOption('image_max_width')}
            />px
          </td>
        </tr>
      </table>
    </fieldset>

    <div style=${{ display: 'flex', gap: '4px' }}>
      <input
        type="button"
        id="clear_data_button"
        class="danger ghost"
        value="清除数据"
        title="清除此扩展存储在计算机上的所有数据"
        onClick=${clearData}
      />

      <input
        type="button"
        id="reset_button"
        class="neutral ghost"
        style=${{ marginLeft: 'auto' }}
        value="重置"
        title="将所有设置重置为默认设置；事后保存以保留更改"
        onClick=${resetOptions}
      />

      <input
        type="button"
        id="save_button"
        class="accent"
        value="保存"
        title="保存当前设置"
        onClick=${saveOptions}
      />
    </div>

    <!-- TODO: Animate -->
    <div id="notifications">
      ${notifications.map(
        (notification) => html`
          <div class="notification ${`bg-${notification.type}`} inverse">
            ${notification.message}
          </div>
        `
      )}
    </div>
  `;
};

render(html`<${Options} />`, document.querySelector('main'));
