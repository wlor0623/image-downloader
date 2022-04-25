import html from '../html.js';
import { ExternalLink } from '../components/ExternalLink.js';

const years = new Date().getFullYear() - 2012;

export const SupportList = () => html`
  <p>
  您是使用此扩展的120多万人之一，
  在过去的${''}${years}年里，广告公司一直在联系我
  通过提供支付服务来交换<b>您的私人数据</b>如：
  </p>

  <ul>
  <li>你访问了哪些网站</li>
  <li>当你拜访他们时</li>
  <li>你从哪里来拜访他们</li>
  </ul>

  <p>
  这些公司认为你的数据有什么价值？
  <b>每月0.15到0.45美分</b>
  <br/>
  不到一分钱！你认为这值得牺牲你的隐私和隐私吗
  信任？
  </p>

  <p>我的回答总是响亮的 <b>不</b></p>

  <p>
  如果你同意，请考虑支持这个项目，这样我就可以继续维护下去。
  在使用它的同时保持扩展<b>免费</b>且<b>开源</b>，
  而且<b>没有目标广告或跟踪算法</b>——从始至终
  </p>

  <div class="tab-list">
    <div class="tab-item">
      <${SupportRadio} id="support_patreon" value="patreon" />

      <label class="tab-header" for="support_patreon">
        <img src="/images/patreon.png" />
        Patreon
      </label>

      <div class="tab-content centered">
        <${ExternalLink} href="https://www.patreon.com/vdsabev">
          <br /><br />
          <img src="/images/patreon-wordmark.png" />
          <br /><br />
          patreon.com/vdsabev
        <//>

        <p>
        每月定期捐款，参与我们的讨论社区
        </p>
      </div>
    </div>

    <div class="tab-item">
      <${SupportRadio} id="support_paypal" value="paypal" />

      <label class="tab-header" for="support_paypal">
        <img src="/images/paypal.png" />
        PayPal
      </label>

      <div class="tab-content centered">
        <${ExternalLink} href="https://www.paypal.me/vdsabev">
          <img src="/images/paypal-wordmark.jpg" />
          paypal.me/vdsabev
        <//>

        <p>Give a one-time donation to show your support for the project.</p>
      </div>
    </div>

    <div class="tab-item">
      <${SupportRadio} id="support_btc" value="btc" />

      <label class="tab-header" for="support_btc">
        <img src="/images/btc.png" />
        BTC
      </label>

      <div class="tab-content centered">
        <br />
        <${ExternalLink} href="bitcoin:3LGkKmET7sGzsJriW16mtM8Kmo2XN7258C">
          <img src="/images/btc-qr.png" />
        <//>

        <pre>3LGkKmET7sGzsJriW16mtM8Kmo2XN7258C</pre>

        <p style=${{ maxWidth: '380px' }}>
          Any bitcoin you send will be retained as bitcoin and hodled 💥👀
        </p>
      </div>
    </div>

    <div class="tab-item">
      <${SupportRadio} id="support_eth" value="eth" />

      <label class="tab-header" for="support_eth">
        <img src="/images/eth.png" />
        ETH
      </label>

      <div class="tab-content centered">
        <br />
        <${ExternalLink}
          href="ethereum:0x49707Cb358e8B2F795C8FceF4D2DcfD2BADF7679"
        >
          <img src="/images/eth-qr.png" />
        <//>

        <pre>0x49707Cb358e8B2F795C8FceF4D2DcfD2BADF7679</pre>

        <p>
          Any Ethereum you send will be retained as Ethereum and hodled
          <br />
          or used as gas for running decentralized applications 💥👀
        </p>
      </div>
    </div>

    <div class="tab-item">
      <${SupportRadio} id="support_bat" value="bat" />

      <label class="tab-header" for="support_bat">
        <img src="/images/bat.png" />
        BAT
      </label>

      <div class="tab-content centered">
        <br />
        <${ExternalLink}
          href="ethereum:0x0d8775f648430679a709e98d2b0cb6250d2887ef/transfer?address=0xdb54EBD0eF147599050B3629d65a73d65ef344D2"
        >
          <img src="/images/bat-qr.png" />
        <//>

        <pre>0xdb54EBD0eF147599050B3629d65a73d65ef344D2</pre>

        <div>
          <p>
            Alternatively, you can send a tip on my GitHub profile page:
            <br />
            <${ExternalLink} href="https://github.com/vdsabev" />
          </p>

          <p>
            Any BAT you send will be retained as BAT and hodled
            <br />
            or used to tip other creators 💥👀
          </p>
        </div>
      </div>
    </div>
  </div>

  <p>
    源码地址 GitHub:${' '}
    <${ExternalLink}
      href="https://github.com/PactInteractive/image-downloader"
    />
  </p>
`;

const SupportRadio = (props) => html`
  <input type="radio" name="support" ...${props} />
`;
