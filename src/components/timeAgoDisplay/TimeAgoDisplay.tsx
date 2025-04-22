import TimeAgo from 'react-timeago'

import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import enStrings from 'react-timeago/lib/language-strings/en'
import ruStrings from 'react-timeago/lib/language-strings/ru'

import { Typography } from '../typography'

type Props = {
  className?: string
  date: string
  locale: 'en' | 'ru'
}

export const TimeAgoDisplay = ({ className, date, locale }: Props) => {
  const classNames = {
    timeAgo: className,
  }

  const enFormatter = buildFormatter(enStrings)
  const ruFormatter = buildFormatter(ruStrings)

  const formatter = locale === 'ru' ? ruFormatter : enFormatter

  return (
    <Typography className={classNames.timeAgo} variant={'small_text'}>
      <TimeAgo date={date} formatter={formatter} />
    </Typography>
  )
}
