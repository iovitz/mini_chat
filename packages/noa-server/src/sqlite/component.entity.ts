import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Page } from './page.entity'

@Entity('component')
export class Component {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'varchar',
    length: 20,
    comment: '表单名称',
  })
  name: string

  @Column({
    type: 'varchar',
    length: 1000,
    comment: '表单名称',
  })
  desc: string

  @Column({
    type: 'boolean',
    default: false,
    comment: '页面是否分享',
  })
  shared: boolean

  @Column({
    type: 'float',
    default: 100000,
    comment: '组件在页面中的顺序',
  })
  rank: number

  @Column({
    type: 'json',
    comment: '组件属性',
  })
  props: string

  @CreateDateColumn({
    comment: '修改时间',
  })
  createdAt: Date

  @UpdateDateColumn({
    comment: '修改时间',
  })
  updatedAt: Date

  @ManyToOne(() => Page, page => page.components)
  page: Page
}
