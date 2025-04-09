import type { PropsWithChildren } from 'react'
import type { RenderCellProps } from 'react-data-grid'
import type { PowerRow } from '../../types'
import { NullValue } from '../common/NullValue'

export const BooleanFormatter = (p: PropsWithChildren<RenderCellProps<PowerRow, unknown>>) => {
  const value = p.row[p.column.key] as boolean | null
  if (value === null) return <NullValue />
  return <>{value ? 'TRUE' : 'FALSE'}</>
}
