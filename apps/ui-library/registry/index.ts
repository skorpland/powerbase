import { type Registry } from 'shadcn/registry'

import { examples } from '@/registry/examples'
import type { RegistryItem } from 'shadcn/registry'
import { blocks } from './blocks'
import { clients } from './clients'
import aiEditorRules from './default/ai-editor-rules/registry-item.json' assert { type: 'json' }

export const registry = {
  name: 'Powerbase UI Library',
  homepage: 'https://powerbase.club/ui',
  items: [
    ...blocks,
    ...clients,
    aiEditorRules as RegistryItem,

    // Internal use only.
    ...examples,
  ],
} satisfies Registry
