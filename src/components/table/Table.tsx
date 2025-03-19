import { ComponentProps } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'

type TableProps = ComponentProps<'table'>
type TableHeadProps = ComponentProps<'thead'>
type TableBodyProps = ComponentProps<'tbody'>
type TableRowProps = ComponentProps<'tr'>
type TableHeadCellProps = ComponentProps<'th'>
type TableBodyCellProps = ComponentProps<'td'>

export const Table = ({ className, ...rest }: TableProps) => {
  const classNames = {
    table: clsx(s.table, className),
  }

  return <table className={classNames.table} {...rest} />
}

export const TableHead = ({ className, ...rest }: TableHeadProps) => {
  const classNames = {
    tableHead: className,
  }

  return <thead className={classNames.tableHead} {...rest} />
}

export const TableBody = ({ className, ...rest }: TableBodyProps) => {
  const classNames = {
    tableBody: className,
  }

  return <tbody className={classNames.tableBody} {...rest} />
}

export const TableRow = ({ className, ...rest }: TableRowProps) => {
  const classNames = {
    tableRow: className,
  }

  return <tr className={classNames.tableRow} {...rest} />
}

export const TableHeadCell = ({ className, ...rest }: TableHeadCellProps) => {
  const classNames = {
    tableHeadCell: clsx(s.tableHeadCell, className),
  }

  return <th className={classNames.tableHeadCell} {...rest} />
}

export const TableBodyCell = ({ className, ...rest }: TableBodyCellProps) => {
  const classNames = {
    tableBodyCell: clsx(s.tableBodyCell, className),
  }

  return <td className={classNames.tableBodyCell} {...rest} />
}
