type Props = {
  changeSelect: (value: string) => void
  className: string
  perPageOptions?: number[]
  selectValue: string
}

export const PerPageSelect = ({ changeSelect, className, perPageOptions, selectValue }: Props) => {
  return (
    <select
      className={className}
      onChange={e => changeSelect(e.currentTarget.value)}
      value={selectValue}
    >
      {perPageOptions?.map(option => {
        return (
          <option key={option} value={String(option)}>
            {option}
          </option>
        )
      })}
    </select>
  )
}
