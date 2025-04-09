import { Button } from '@ui/components/shadcn/ui/button'
import {
  CommandInput,
  CommandList,
  CommandMenu,
  CommandMenuTrigger as CommandMenuTriggerPrimitive,
  CommandProvider,
  useRegisterCommands,
} from 'ui-patterns/CommandMenu'

function Commands() {
  useRegisterCommands('Action commands', [
    {
      id: 'alert',
      name: 'Alert',
      action: () => alert('You triggered a command'),
    },
  ])
  useRegisterCommands('Route commands', [
    {
      id: 'powerbase-website',
      name: 'Go to Powerbase website',
      route: 'https://powerbase.club',
    },
  ])

  return null
}

function CommandMenuTrigger() {
  return (
    <CommandMenuTriggerPrimitive>
      <Button>Open command menu</Button>
    </CommandMenuTriggerPrimitive>
  )
}

export default function CommandMenuDemo() {
  return (
    <CommandProvider openKey="j">
      <Commands />
      <CommandMenu trigger={<CommandMenuTrigger />}>
        <CommandInput />
        <CommandList />
      </CommandMenu>
    </CommandProvider>
  )
}
