import { isIOS } from 'react-device-detect';

export default function horizontalsScroll(array, tapIdPrefix, scrollWrapperId, buttonIndex, actualElementWidth, additionLeftScroll = 0) {
  const currentPath = window.location.pathname;
  const activeTapId = buttonIndex === 0 ? 0 : buttonIndex || array[buttonIndex]?.id
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);

  if (scrollWrapper) {
    if (activeTapId > 2) {
      setTimeout(() => {
        const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetWidth;
        const leftScrollValue =  ((activeTapId - 1) * (actualElementWidth || elementWidth)) + additionLeftScroll
        if (isIOS) {
          window.uss.setMinAnimationFrame(20)
        }
        window.uss.scrollXTo(leftScrollValue, scrollWrapper)
      }, 0)
    } else {
      scrollWrapper.scrollLeft = 0;
    }
  }
}
