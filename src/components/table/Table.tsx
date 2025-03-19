import { ComponentProps } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'

type Table = ComponentProps<'table'>
type TableHead = ComponentProps<'thead'>
type TableBody = ComponentProps<'tbody'>
type TableRow = ComponentProps<'tr'>
type TableHeadCell = ComponentProps<'th'>
type TableBodyCell = ComponentProps<'td'>

export const Table = ({ className, ...rest }: Table) => {
  const classNames = {
    table: clsx(s.table, className),
  }

  return <table className={classNames.table} {...rest} />
}

export const TableHead = ({ className, ...rest }: TableHead) => {
  const classNames = {
    tableHead: className,
  }

  return <thead className={classNames.tableHead} {...rest} />
}

export const TableBody = ({ className, ...rest }: TableBody) => {
  const classNames = {
    tableBody: className,
  }

  return <tbody className={classNames.tableBody} {...rest} />
}

export const TableRow = ({ className, ...rest }: TableRow) => {
  const classNames = {
    tableRow: className,
  }

  return <tr className={classNames.tableRow} {...rest} />
}

export const TableHeadCell = ({ className, ...rest }: TableHeadCell) => {
  const classNames = {
    tableHeadCell: clsx(s.tableHeadCell, className),
  }

  return <th className={classNames.tableHeadCell} {...rest} />
}

export const TableBodyCell = ({ className, ...rest }: TableBodyCell) => {
  const classNames = {
    tableBodyCell: clsx(s.tableBodyCell, className),
  }

  return <td className={classNames.tableBodyCell} {...rest} />
}
