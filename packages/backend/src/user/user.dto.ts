import { Length, Matches } from 'class-validator';

export class LoginDTO {
  @Length(6, 16, { message: '用户名长度在6~16位之间' })
  @Matches(/^[0-9a-zA-Z_]*$/, {
    message: '用户名只能由字母数字下划线组成',
  })
  username: string;

  @Length(6, 16, { message: '用户名长度在6~16位之间' })
  @Matches(/^[0-9a-zA-Z_]*$/, {
    message: '密码只能由字母数字下划线组成',
  })
  password: string;
}

export class RegisterDTO extends LoginDTO {
  @Length(6, 16, { message: '昵称长度位2~20个字符' })
  nickname: string;
}
