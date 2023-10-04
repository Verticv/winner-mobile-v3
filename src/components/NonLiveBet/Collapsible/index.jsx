import React, { useState, useEffect, useRef } from "react";
import "./_collapsible.scss";
const Collapsible = ({
  open,
  collapsibleClassName = "collapsible-card-edonec",
  headerClassName = "collapsible-header-edonec",
  titleClassName = "title-text-edonec",
  iconButtonClassName = "collapsible-icon-button-edonec",
  contentClassName = "collapsible-content-edonec",
  contentClassNameDisableClose = "collapsible-content-edonec-disable-close",
  contentContainerClassName = "collapsible-content-container",
  children,
  headerChild,
  disableAnimationOnClose = false,
  header = "",
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState(open ? undefined : 0);
  const ref = useRef(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  useEffect(() => {
    if (open !== isOpen) {
      handleFilterOpening();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <div className={collapsibleClassName}>
        <div className={isOpen ? 'collapse-opened' :'collapse-closed'}
          onClick={handleFilterOpening}>{headerChild}</div>

        <div
          className={disableAnimationOnClose && !isOpen ? contentClassNameDisableClose : contentClassName}
          style={{ height }}
        >
          <div ref={ref}>
            <div className={`${contentContainerClassName} ${!isOpen ? 'opacity-0' : 'opacity-1'}`} >{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;