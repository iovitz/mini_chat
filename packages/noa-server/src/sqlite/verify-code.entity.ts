import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('verifyCode')
export class VerifyCode {
  @PrimaryColumn({
    type: 'bigint',
    unsigned: true,
    default: () => process.hrtime.bigint() + BigInt(Math.floor(Math.random() * 10000)),
    comment: '自增主键',
  })
  id: number

  @Column({
    type: 'varchar',
    length: 10,
    comment: '验证码',
  })
  code: string

  @Column({
    type: 'varchar',
    length: 10,
    comment: '用户ClientID',
  })
  clientId: string

  @Column({
    type: 'varchar',
    length: 50,
    comment: '用户IP',
  })
  ip: string

  @Column({
    type: 'varchar',
    length: 200,
    comment: '浏览器的UserAgent',
  })
  ua: string

  @UpdateDateColumn({
    comment: '修改时间',
  })
  updatedAt: Date

  @CreateDateColumn({
    comment: '修改时间',
  })
  createdAt: Date
}
