import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('page')
export class Page {
  @PrimaryColumn({
    type: 'varchar',
    length: 26,
    comment: '自增主键',
  })
  id: string

  @Column({
    type: 'int',
    unsigned: true,
    comment: '页面版本',
    default: 0,
  })
  rev: number

  @Column({
    type: 'bigint',
    unsigned: true,
    comment: '所属用户',
  })
  userId: number

  @Column({
    type: 'varchar',
    length: 20,
    comment: '页面名称',
  })
  name: string

  @Column({
    type: 'varchar',
    length: 500,
    comment: '页面描述',
    nullable: true,
  })
  description: string

  @Column({
    type: 'varchar',
    length: 100,
    comment: '页面头图',
    nullable: true,
  })
  poster: string

  @Column({
    type: 'varchar',
    length: '20',
    comment: '页面类型',
  })
  type: string

  @Column({
    type: 'text',
    comment: '快照数据',
  })
  snapshot: string

  @Column({
    type: 'boolean',
    comment: '页面是否分享',
    default: false,
  })
  shared: boolean

  @CreateDateColumn({
    comment: '修改时间',
  })
  createdAt: Date

  @UpdateDateColumn({
    comment: '修改时间',
  })
  updatedAt: Date
}
