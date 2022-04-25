export const downloadImages = (imagesToDownload=[], options) => {
  return new Promise((resolve) => {
    let list=[...imagesToDownload]
    for (let i = 0; i < list.length; i++) {
      let reg1=/https?\:\/\/hbimg.huaban.com\/(.*)?\_fw240\/format\/webp/;
      if (reg1.test( list[i])) {
        list[i]=list[i].replace("_fw240/format/webp","");
      }
    }
    console.log("list",list);
    chrome.runtime.sendMessage(
      { type: 'downloadImages', imagesToDownload:list, options },
      resolve
    );
  });
};
