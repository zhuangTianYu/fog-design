import React, { useState, useEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Input from '@components/input';
import Trigger from '@components/trigger';
import Icon from '@components/icon';
import DatePanel from './components/date-panel';
import YearPanel from './components/year-panel';
import MonthPanel from './components/month-panel';
import useControlled from '@hooks/useControlled';
import { setRafTimeout } from '@utils/index';
import {
  FORMAT_DEFAULT,
  timestampToDate,
  getMonthStartDate,
  getLastMonthDate,
  getNextMonthDate,
  getLastYearDate,
  getNextYearDate,
  getLastGroupYearDate,
  getNextGroupYearDate,
  getDates,
  getYears,
  getMonths,
} from './utils';
import './index.less';

const { prefix } = namespace;

type ModeType = 'date' | 'month' | 'year';

interface DatePickerProps  {
  className?: string;
  placeholder?: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  format?: string;
  disabled?: boolean;
  disabledDate?: (value: number) => boolean;
  mode?: ModeType;
  renderFooter?: () => React.ReactElement;
}

const DatePicker: React.FC<DatePickerProps> = props => {
  const {
    className,
    placeholder,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    open: openFromProps,
    defaultOpen: defaultOpenFromProps,
    onOpenChange: onOpenChangeFromProps,
    format,
    disabled,
    disabledDate,
    renderFooter,
    mode,
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const { value: open, onChange: onOpenChange } = useControlled({
    value: openFromProps,
    defaultValue: defaultOpenFromProps,
    onChange: onOpenChangeFromProps,
  });

  // panelValue is zero o'clock on the first day of the panel month
  const [panelValue, setPanelValue] = useState<number>(undefined);

  const [panelMode, setPanelMode] = useState<ModeType>(undefined);

  const inputValue = useMemo(() => {
    if (value === null || value === undefined) return '';

    return timestampToDate(value, format || FORMAT_DEFAULT[mode]).dateString;
  }, [value]);

  const triggerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value === null || value === undefined) {
      setPanelValue(getMonthStartDate(Date.now()));
    } else {
      setPanelValue(getMonthStartDate(value));
    }
  }, [value]);

  useEffect(() => {
    setPanelMode(mode);
  }, [mode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === inputRef.current) {
        if (event.key === 'Escape' && open) {
          onOpenChange(false);
        }
        if (event.key === 'Enter' && !open) {
          onOpenChange(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      onOpenChange(true);
    } else {
      setRafTimeout(() => {
        onOpenChange(false);
      }, 200);
    }
  };

  const handleChange = (nextValue: number) => {
    onChange(nextValue);
    handleOpenChange(false);
  };

  const handleDateClick = (nextValue: number) => {
    handleChange(nextValue);
  };

  const handleYearClick = (nextValue: number) => {
    if (mode === 'year') {
      handleChange(nextValue);
    } else {
      setPanelValue(nextValue);
      setPanelMode('month');
    }
  };

  const handleMonthClick = (nextValue: number) => {
    if (mode === 'month') {
      handleChange(nextValue);
    } else {
      setPanelValue(nextValue);
      setPanelMode('date');
    }
  };

  const popup = (
    <div
      className={`${prefix}-date-picker__popup`}
      onClick={() => inputRef.current.focus()}
    >
      {mode === 'date' && panelMode === 'date' && (
        <DatePanel
          value={panelValue}
          list={getDates(panelValue, value, disabledDate)}
          onLastYearClick={() => setPanelValue(getLastYearDate(panelValue))}
          onLastMonthClick={() => setPanelValue(getLastMonthDate(panelValue))}
          onNextMonthClick={() => setPanelValue(getNextMonthDate(panelValue))}
          onNextYearClick={() => setPanelValue(getNextYearDate(panelValue))}
          onYearClick={() => setPanelMode('year')}
          onMonthClick={() => setPanelMode('month')}
          onCellClick={handleDateClick}
          renderFooter={renderFooter}
        />
      )}
      {panelMode === 'year' && (
        <YearPanel
          list={getYears(panelValue, value, mode === 'year' ? disabledDate : null)}
          onLastGroupClick={() => setPanelValue(getLastGroupYearDate(panelValue))}
          onNextGroupClick={() => setPanelValue(getNextGroupYearDate(panelValue))}
          onYearClick={() => {}}
          onCellClick={handleYearClick}
          renderFooter={renderFooter}
        />
      )}
      {panelMode === 'month' && (
        <MonthPanel
          value={panelValue}
          list={getMonths(panelValue, value, mode === 'month' ? disabledDate : null)}
          onLastYearClick={() => setPanelValue(getLastYearDate(panelValue))}
          onNextYearClick={() => setPanelValue(getNextYearDate(panelValue))}
          onYearClick={() => setPanelMode('year')}
          onCellClick={handleMonthClick}
          renderFooter={renderFooter}
        />
      )}
    </div>
  );

  return (
    <div className={classnames(`${prefix}-date-picker`, className, {
      [`${prefix}-date-picker--open`]: open,
    })}>
      <Trigger
        visible={open}
        onVisibleChange={onOpenChange}
        popup={popup}
        popupClassName={`${prefix}-date-picker__popup`}
        popupTransitionProps={{
          beforeEnter: `${prefix}-date-picker__popup--before-enter`,
          entering: `${prefix}-date-picker__popup--entering`,
          entered: `${prefix}-date-picker__popup--entered`,
          leaving: `${prefix}-date-picker__popup--leaving`,
        }}
        disabled={disabled}
      >
        <div ref={triggerRef}>
          <Input
            className={`${prefix}-date-picker__input`}
            ref={inputRef}
            value={inputValue}
            placeholder={placeholder}
            suffix={<Icon type="calendar" />}
            disabled={disabled}
            readOnly
          />
        </div>
      </Trigger>
    </div>
  );
};

DatePicker.defaultProps = {
  mode: 'date',
};

export default DatePicker;