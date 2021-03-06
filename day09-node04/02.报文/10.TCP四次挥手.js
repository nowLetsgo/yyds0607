/* 
    TCP四次挥手：
        - TCP是双向的，需要两个方向分别关闭，每个方向的关闭又需要请求和确认，总共4次，被称作为四次挥手
        - 客户端给服务端发送释放信号(一次挥手)
            - Fin数据包：释放字段
        - 服务端接收到了客户端的释放信号，并给出了回应信号（二次挥手），但是此时可能还有数据没有处理完成，等待传输
            - ack数据包：确认客户端的释放信号
        - 服务端给客户端发送释放信号，并表示数据也已经发送完毕了（三次挥手）
            - Fin数据包：释放字段
        - 客户端给服务端发送确认信号，表示收到了服务端的释放信号（四次挥手）
            - ack数据包：确认客户端的释放信号

*/