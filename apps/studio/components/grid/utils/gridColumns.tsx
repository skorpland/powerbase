import { CalculatedColumn } from 'react-data-grid'

import { COLUMN_MIN_WIDTH } from 'components/grid/constants'
import { BooleanEditor } from '../components/editor/BooleanEditor'
import { DateTimeEditor } from '../components/editor/DateTimeEditor'
import { JsonEditor } from '../components/editor/JsonEditor'
import { NumberEditor } from '../components/editor/NumberEditor'
import { SelectEditor } from '../components/editor/SelectEditor'
import { TextEditor } from '../components/editor/TextEditor'
import { TimeEditor, TimeWithTimezoneEditor } from '../components/editor/TimeEditor'
import { BinaryFormatter } from '../components/formatter/BinaryFormatter'
import { BooleanFormatter } from '../components/formatter/BooleanFormatter'
import { DefaultFormatter } from '../components/formatter/DefaultFormatter'
import { ForeignKeyFormatter } from '../components/formatter/ForeignKeyFormatter'
import { JsonFormatter } from '../components/formatter/JsonFormatter'
import { AddColumn } from '../components/grid/AddColumn'
import { ColumnHeader } from '../components/grid/ColumnHeader'
import { SelectColumn } from '../components/grid/SelectColumn'
import type { ColumnType, PowerColumn, PowerRow, PowerTable } from '../types'
import {
  isArrayColumn,
  isBinaryColumn,
  isBoolColumn,
  isCiTextColumn,
  isDateColumn,
  isDateTimeColumn,
  isEnumColumn,
  isForeignKeyColumn,
  isJsonColumn,
  isNumericalColumn,
  isTextColumn,
  isTimeColumn,
} from './types'

export const ESTIMATED_CHARACTER_PIXEL_WIDTH = 9

export function getGridColumns(
  table: PowerTable,
  options?: {
    tableId?: number
    editable?: boolean
    defaultWidth?: string | number
    onAddColumn?: () => void
    onExpandJSONEditor: (column: string, row: PowerRow) => void
    onExpandTextEditor: (column: string, row: PowerRow) => void
  }
): any[] {
  const columns = table.columns.map((x, idx) => {
    const columnType = getColumnType(x)
    const columnDefaultWidth = getColumnDefaultWidth(x)
    const columnWidthBasedOnName =
      (x.name.length + x.format.length) * ESTIMATED_CHARACTER_PIXEL_WIDTH
    const columnWidth = options?.defaultWidth
      ? options.defaultWidth
      : columnDefaultWidth < columnWidthBasedOnName
        ? columnWidthBasedOnName
        : columnDefaultWidth

    const columnDefinition: CalculatedColumn<PowerRow> = {
      key: x.name,
      name: x.name,
      idx: idx + 1,
      resizable: true,
      sortable: true,
      width: columnWidth,
      minWidth: COLUMN_MIN_WIDTH,
      frozen: x.isPrimaryKey || false,
      isLastFrozenColumn: false,
      renderHeaderCell: (props) => (
        <ColumnHeader
          {...props}
          columnType={columnType}
          isPrimaryKey={x.isPrimaryKey}
          isEncrypted={x.isEncrypted}
          format={x.format}
          foreignKey={x.foreignKey}
        />
      ),
      renderEditCell: options
        ? getCellEditor(
            x,
            columnType,
            options?.editable ?? false,
            options.onExpandJSONEditor,
            options.onExpandTextEditor
          )
        : undefined,
      renderCell: getCellRenderer(x, columnType, {
        tableId: options?.tableId,
      }),

      // [Next 18 Refactor] Double check if this is correct
      parent: undefined,
      level: 0,
      maxWidth: undefined,
      draggable: false,
    }

    return columnDefinition
  })

  const gridColumns = [SelectColumn, ...columns]
  if (options?.onAddColumn) {
    gridColumns.push(AddColumn)
  }

  return gridColumns
}

function getCellEditor(
  columnDefinition: PowerColumn,
  columnType: ColumnType,
  isEditable: boolean,
  onExpandJSONEditor: (column: string, row: any) => void,
  onExpandTextEditor: (column: string, row: any) => void
) {
  if (!isEditable) {
    if (['array', 'json'].includes(columnType)) {
      // eslint-disable-next-line react/display-name
      return (p: any) => (
        <JsonEditor {...p} isEditable={isEditable} onExpandEditor={onExpandJSONEditor} />
      )
    } else if (!['number', 'boolean'].includes(columnType)) {
      // eslint-disable-next-line react/display-name
      return (p: any) => (
        <TextEditor {...p} isEditable={isEditable} onExpandEditor={onExpandTextEditor} />
      )
    } else {
      return
    }
  }
  if (columnDefinition.isPrimaryKey || !columnDefinition.isUpdatable) {
    return
  }

  switch (columnType) {
    case 'boolean': {
      // eslint-disable-next-line react/display-name
      return (p: any) => <BooleanEditor {...p} isNullable={columnDefinition.isNullable} />
    }
    case 'date': {
      return DateTimeEditor('date', columnDefinition.isNullable || false)
    }
    case 'datetime': {
      return columnDefinition.format.endsWith('z')
        ? DateTimeEditor('datetimetz', columnDefinition.isNullable || false)
        : DateTimeEditor('datetime', columnDefinition.isNullable || false)
    }
    case 'time': {
      return columnDefinition.format.endsWith('z') ? TimeWithTimezoneEditor : TimeEditor
    }
    case 'enum': {
      const options = columnDefinition.enum!.map((x) => {
        return { label: x, value: x }
      })
      // eslint-disable-next-line react/display-name
      return (p: any) => (
        <SelectEditor {...p} options={options} isNullable={columnDefinition.isNullable} />
      )
    }
    case 'array':
    case 'json': {
      // eslint-disable-next-line react/display-name
      return (p: any) => <JsonEditor {...p} onExpandEditor={onExpandJSONEditor} />
    }
    case 'number': {
      return NumberEditor
    }
    case 'citext':
    case 'text': {
      // eslint-disable-next-line react/display-name
      return (p: any) => (
        <TextEditor
          {...p}
          isEditable={isEditable}
          isNullable={columnDefinition.isNullable}
          onExpandEditor={onExpandTextEditor}
        />
      )
    }
    default: {
      return undefined
    }
  }
}

function getCellRenderer(
  columnDef: PowerColumn,
  columnType: ColumnType,
  metadata: { tableId?: number }
) {
  switch (columnType) {
    case 'boolean': {
      return BooleanFormatter
    }
    case 'foreign_key': {
      if (!columnDef.isUpdatable) {
        return DefaultFormatter
      } else {
        // eslint-disable-next-line react/display-name
        return (p: any) => <ForeignKeyFormatter {...p} tableId={metadata.tableId} />
      }
    }
    case 'binary': {
      return BinaryFormatter
    }
    case 'json': {
      return JsonFormatter
    }
    default: {
      return DefaultFormatter
    }
  }
}

function getColumnType(columnDef: PowerColumn): ColumnType {
  if (isForeignKeyColumn(columnDef)) {
    return 'foreign_key'
  } else if (isNumericalColumn(columnDef.dataType)) {
    return 'number'
  } else if (isArrayColumn(columnDef.dataType)) {
    return 'array'
  } else if (isJsonColumn(columnDef.dataType)) {
    return 'json'
  } else if (isTextColumn(columnDef.dataType)) {
    return 'text'
  } else if (isCiTextColumn(columnDef.format)) {
    return 'citext'
  } else if (isDateColumn(columnDef.format)) {
    return 'date'
  } else if (isTimeColumn(columnDef.format)) {
    return 'time'
  } else if (isDateTimeColumn(columnDef.format)) {
    return 'datetime'
  } else if (isBoolColumn(columnDef.dataType)) {
    return 'boolean'
  } else if (isEnumColumn(columnDef.dataType)) {
    return 'enum'
  } else if (isBinaryColumn(columnDef.dataType)) {
    return 'binary'
  } else return 'unknown'
}

export function getColumnDefaultWidth(columnDef: PowerColumn): number {
  if (isNumericalColumn(columnDef.dataType)) {
    return 120
  } else if (
    isDateTimeColumn(columnDef.format) ||
    isDateColumn(columnDef.format) ||
    isTimeColumn(columnDef.format)
  ) {
    return 150
  } else if (isBoolColumn(columnDef.dataType)) {
    return 120
  } else if (isEnumColumn(columnDef.dataType)) {
    return 150
  } else return 250
}
