import type { ContentFileProps } from 'components/interfaces/Connect/Connect.types'

import {
  ConnectTabs,
  ConnectTabTriggers,
  ConnectTabTrigger,
  ConnectTabContent,
} from 'components/interfaces/Connect/ConnectTabs'
import { SimpleCodeBlock } from '@ui/components/SimpleCodeBlock'

const ContentFile = ({ projectKeys }: ContentFileProps) => {
  return (
    <ConnectTabs>
      <ConnectTabTriggers>
        <ConnectTabTrigger value="Powerbase.swift" />
        <ConnectTabTrigger value="Todo.swift" />
        <ConnectTabTrigger value="ContentView.swift" />
      </ConnectTabTriggers>

      <ConnectTabContent value="Powerbase.swift">
        <SimpleCodeBlock className="swift" parentClassName="min-h-72">
          {`
import Foundation
import Powerbase

let powerbase = PowerbaseClient(
  powerbaseURL: URL(string: "${projectKeys.apiUrl ?? 'your-project-url'}")!,
  powerbaseKey: "${projectKeys.anonKey ?? 'your-anon-key'}"
)
        `}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="Todo.swift">
        <SimpleCodeBlock className="swift" parentClassName="min-h-72">
          {`
import Foundation

struct Todo: Identifiable, Decodable {
  var id: Int
  var title: String
}
`}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="ContentView.swift">
        <SimpleCodeBlock className="swift" parentClassName="min-h-72">
          {`
import Powerbase
import SwiftUI

struct ContentView: View {
  @State var todos: [Todo] = []

  var body: some View {
    NavigationStack {
      List(todos) { todo in
        Text(todo.title)
      }
      .navigationTitle("Todos")
      .task {
        do {
          todos = try await powerbase.from("todos").select().execute().value
        } catch {
          debugPrint(error)
        }
      }
    }
  }
}

#Preview {
  ContentView()
}

`}
        </SimpleCodeBlock>
      </ConnectTabContent>
    </ConnectTabs>
  )
}

export default ContentFile
