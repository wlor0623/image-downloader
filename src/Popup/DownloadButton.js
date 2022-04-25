import html from '../html.js';

// TODO: Implement loading animation
export const DownloadButton = ({ disabled, loading, ...props }) => {
  const tooltipText = disabled
    ? '首先选择一些要下载的图像'
    : loading
    ? '如果需要，可以在下载图像时关闭扩展弹出窗口！'
    : '';

  return html`
    <input
      type="button"
      class="accent ${loading ? 'loading' : ''}"
      value=${loading ? '•••' : '下载'}
      disabled=${disabled || loading}
      title=${tooltipText}
      ...${props}
    />
  `;
};
