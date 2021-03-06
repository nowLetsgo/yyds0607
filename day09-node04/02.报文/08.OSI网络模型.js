/* 
    OSI网络模型：
        在理论上，网络模型分为七层，被称作OSI七层网络模型
        在实践上分为五层，被称作为TCP/IP五层网络模型

        - 应用层
            - TCP/IP协议的应用层对应着OSI网络模型的 应用层、会话层、表示层
            - 应用层：为用户的应用提供支持和网络的访问
            - 表示层：负责对数据的加密和压缩等转化数据操作
            - 会话层：负责网络中建立连接
        - 传输层
            - 提供应用程序的接口（在数据上添加了TCP/UDP头）
            - 对数据的检测和流量控制

        - 网络层：
            - 解决了数据由一个计算机的ip如何发送到目标计算机的过程
            - 在数据上添加了ip头部

        - 数据链路层/物理层
            - 将数据转换为电子的形式在传输介质上传播


*/