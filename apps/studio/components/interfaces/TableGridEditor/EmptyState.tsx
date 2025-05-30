import { PermissionAction } from '@skorpland/shared-types/out/constants'

import { useProjectContext } from 'components/layouts/ProjectLayout/ProjectContext'
import ProductEmptyState from 'components/to-be-cleaned/ProductEmptyState'
import { useEntityTypesQuery } from 'data/entity-types/entity-types-infinite-query'
import { useCheckPermissions } from 'hooks/misc/useCheckPermissions'
import { useLocalStorage } from 'hooks/misc/useLocalStorage'
import { useQuerySchemaState } from 'hooks/misc/useSchemaQueryState'
import { PROTECTED_SCHEMAS } from 'lib/constants/schemas'
import { useTableEditorStateSnapshot } from 'state/table-editor'

export interface EmptyStateProps {}

const EmptyState = ({}: EmptyStateProps) => {
  const snap = useTableEditorStateSnapshot()
  const { selectedSchema } = useQuerySchemaState()
  const isProtectedSchema = PROTECTED_SCHEMAS.includes(selectedSchema)
  const canCreateTables =
    useCheckPermissions(PermissionAction.TENANT_SQL_ADMIN_WRITE, 'tables') && !isProtectedSchema

  const [sort] = useLocalStorage<'alphabetical' | 'grouped-alphabetical'>(
    'table-editor-sort',
    'alphabetical'
  )

  const { project } = useProjectContext()
  const { data } = useEntityTypesQuery({
    projectRef: project?.ref,
    connectionString: project?.connectionString,
    schemas: [selectedSchema],
    sort,
  })

  const totalCount = data?.pages?.[0].data.count ?? 0

  return (
    <div className="w-full h-full flex items-center justify-center">
      {totalCount === 0 ? (
        <ProductEmptyState
          title="Table Editor"
          ctaButtonLabel={canCreateTables ? 'Create a new table' : undefined}
          onClickCta={canCreateTables ? snap.onAddTable : undefined}
        >
          <p className="text-sm text-foreground-light">
            There are no tables available in this schema.
          </p>
        </ProductEmptyState>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <ProductEmptyState
            title="Table Editor"
            ctaButtonLabel={canCreateTables ? 'Create a new table' : undefined}
            onClickCta={canCreateTables ? snap.onAddTable : undefined}
          >
            <p className="text-sm text-foreground-light">
              Select a table from the navigation panel on the left to view its data
              {canCreateTables && ', or create a new one.'}
            </p>
          </ProductEmptyState>
        </div>
      )}
    </div>
  )
}

export default EmptyState
