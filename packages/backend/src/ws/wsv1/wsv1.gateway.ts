import { Inject, LoggerService } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Socket } from 'socket.io';

@WebSocketGateway({
  path: '/ws/v1',
})
export class Wsv1Gateway
  implements OnGatewayConnection<Socket>, OnGatewayDisconnect<Socket>
{
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @WebSocketServer() server;
  users = 0;

  // https://juejin.cn/post/7225171762395824188
  async handleConnection(client: Socket) {
    this.logger.log(
      {
        userid: client.request.userid,
        clientId: client.id,
      },
      '链接成功',
    );
  }

  async handleDisconnect(client: Socket) {
    this.logger.log(client.id, '取消连接');
  }

  @SubscribeMessage('events')
  async handleEvent(client: Socket, data: string) {
    this.logger.verbose('sss');
    return data;
  }

  @SubscribeMessage('hello')
  async handleMessage(client: Socket, payload: string) {
    this.logger.log(payload, '说hello');

    client.emit('hello', 'server hello payload');
  }
}
