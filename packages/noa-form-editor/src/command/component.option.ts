import { ComponentPropertyTypeMap, ComponentUnionType } from '../components'
import { CommandName } from './command.const'

export interface CommandOptionBase {
  compId: string
  command: CommandName
}

export interface AddCompOption extends CommandOptionBase {
  command: CommandName.CompAdd
  compId: string
  type: keyof ComponentPropertyTypeMap
  property: ComponentUnionType
}

export interface DelCompOption extends CommandOptionBase {
  command: CommandName.CompDelete
  compId: string
}

export interface MoveCompOption extends CommandOptionBase {
  command: CommandName.CompMove
  compId: string
  index: number
  newIndex: number
}

export interface UpdateCompOption extends CommandOptionBase {
  command: CommandName.CompUpdate
  compId: string
  property: Partial<ComponentUnionType>
}

export type CommandOption = AddCompOption | DelCompOption | MoveCompOption | UpdateCompOption
