import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export interface TagProps  {
  /** --skip */
  className?: string;
  closable?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  [propName: string]: any;
}

export const Tag: React.FC<TagProps> = props => {
  const {
    className,
    closable,
    children,
    onClose,
    ...restProps
  } = props;

  return (
    <div
      className={classnames(className, {
        [`${prefix}-tag`]: true,
        [`${prefix}-tag--closable`]: closable,
      })}
      {...restProps}
    >
      <div className={`${prefix}-tag__text`}>
        {children}
      </div>
      {closable && (
        <div
          className={`${prefix}-tag__close`}
          onClick={event => isFunction(onClose) && onClose(event)}
        >
          <Icon
            className={`${prefix}-tag__close-icon`}
            type="close"
            size={12}
          />
        </div>
      )}
    </div>
  );
};

export default Tag;