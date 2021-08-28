协商缓存的过程：
    - 客户端给服务端发送请求，请求某一个资源文件
    
    - 服务端向客户端发送一个响应，在响应头中携带两个关于协商缓存的信息，分别是文件的唯一标识（eTag）和当前文件的最后一次修改时间（last-modified）
    
    - 客户端接收到了响应，把响应头中的关于缓存的信息保存下来，但是保存的时候更换了名字：把eTag更名为if-none-match,把last-modified更名为if-modified-since
    
    - 客户端再次发送请求，请求相应的资源文件，此时会在请求头上携带两个字段，分别是if-none-match和if-modified-since

    - 服务端接收到了客户端发送的if-none-match和if-modified-since两个字段，分别和被请求资源文件的eTag和last-modified比较，如果都比较成功，则让客户端读取缓存，否则返回新的响应和新的eTag和last-modified字段

    - 如果走缓存，则服务端响应的状态码应该是304，并且不需要响应任何内容

    - 如果走缓存，则客户端收到的状态啊是304，然后直接去读缓存

    - 如果不走缓存，则响应状态码200，并且响应新数据和新的eTag和last-modified字段