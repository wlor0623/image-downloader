import html from '../html.js';
import * as actions from './actions.js';

export const ImageUrlTextbox = (props) => html`
  <input
    type="text"
    readonly
    onClick=${(e) => {
      e.currentTarget.select();
    }}
    ...${props}
  />
`;

export const OpenImageButton = ({ imageUrl, onClick, ...props }) => {
  return html`
    <button
      type="button"
      title="从新标签页打开"
      style=${{ backgroundImage: `url("/images/open.svg")` }}
      onClick=${(e) => {
        chrome.tabs.create({ url: imageUrl, active: false });
        if (onClick) {
          onClick(e);
        }
      }}
      ...${props}
    />
  `;
};

export const DownloadImageButton = ({
  imageUrl,
  options,
  onClick,
  ...props
}) => {
  return html`
    <button
      type="button"
      title="下载"
      style=${{ backgroundImage: `url("/images/download.svg")` }}
      onClick=${(e) => {
        actions.downloadImages([imageUrl], options);
        if (onClick) {
          onClick(e);
        }
      }}
      ...${props}
    />
  `;
};
