import { FormPage } from '../page'
import { ExecutorMap } from './component.executor'
import { CommandOption } from './component.option'

export * from './command.const'
export * from './command.types'

export function executeCommand(page: FormPage, option: CommandOption) {
  const { command } = option
  const executor = ExecutorMap[command]
  if (!executor) {
    return false
  }
  // 返回脏区组件列表
  return executor.execute(page, option as never)
}
