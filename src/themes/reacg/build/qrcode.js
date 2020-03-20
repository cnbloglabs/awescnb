
    // 设置二维码
   function qrcode() {
      const qrcode = window.opts.theme.qrcode
      if (qrcode === '' || $('#blog-news').length === 0) return

      const qrcodeStyle = {
        padding: '.187rem .267rem 0',
        width: '4rem',
      }

      $('#blog-news').before(`<img id='custom-qrcode' src='${qrcode}' />`)
      $('#custom-qrcode').css(qrcodeStyle)
    }

    export default qrcode