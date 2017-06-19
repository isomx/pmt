export const getScrollData = () => {
  let t = window, objVar = 'inner';
  if (!('innerWidth' in window)) {
    objVar = 'client';
    t = document.documentElement || document.body;
  }
  return {
    scrollTop: window.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop  || 0,
    scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
    clientTop: document.documentElement.clientTop  || document.body.clientTop  || 0,
    clientLeft: document.documentElement.clientLeft || document.body.clientLeft || 0,
    viewPortWidth: t[objVar + 'Width'],
    viewPortHeight: t[objVar + 'Height'],
  }
}

export const getElemPosition = (elem, includeStyles = false) => {
  let resp = null;
  if (elem) {
    const rect = elem.getBoundingClientRect();
    resp = {
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
      height: rect.height,
      width: rect.width,
    };
    if (includeStyles) {
      const style = elem.currentStyle || window.getComputedStyle(elem);
      // console.log('style = ', style);
      resp.style = {
        margin: {
          left: parseInt(style["margin-left"], 10),
          right: parseInt(style["margin-right"], 10),
          top: parseInt(style["margin-top"], 10),
          bottom: parseInt(style["margin-bottom"], 10)
        },
        padding: {
          left: parseInt(style["padding-left"], 10),
          right: parseInt(style["padding-right"], 10),
          top: parseInt(style["padding-top"], 10),
          bottom: parseInt(style["padding-bottom"], 10)
        },
        border: {
          left: parseInt(style["border-left"], 10),
          right: parseInt(style["border-right"], 10),
          top: parseInt(style["border-top"], 10),
          bottom: parseInt(style["border-bottom"], 10)
        },
        zIndex: style["zIndex"],
        position: style['position'],
        backgroundColor: style['backgroundColor'],
        /**
         * Below borderRadius check is because IE does not provide borderRadius, but separates them. So just assuming
         * the radius is the same all the way around and just grabbing the topLeftRadius value
         */
        borderRadius: style['borderRadius'] ? style['borderRadius'] : (style['borderTopLeftRadius'] ? style['borderTopLeftRadius'] : ''),
        top: parseInt(style['top'], 10),
        left: parseInt(style['left'], 10),
      };
    }
  }
  return resp;
}
