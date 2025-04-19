import { formatDate } from 'date-fns'

import s from './datepicker.module.scss'

import { CalendarIcon } from '../../assets'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Calendar } from './calendar/Calendar'

type Props = {
  onChange: (date: string | undefined) => void
  value: Date | undefined
}

export function Datepicker({ onChange, value }: Props) {
  const selectHandler = (date: Date | undefined) => {
    if (date) {
      onChange(formatDate(date, 'yyyy-MM-dd'))
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild className={s.datepicker_container}>
        <button type={'button'}>
          <CalendarIcon />
          <span>{value !== undefined ? formatDate(value, 'dd/MM/yyyy') : '00.00.0000'}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className={s.content}>
        <Calendar mode={'single'} onSelect={selectHandler} selected={value} t={'en'} />
      </PopoverContent>
    </Popover>
  )
}
