---
layout: post
title: HTTP状态码
date: '2017-05-23 07:00:00'
categories: [计算机基础]
tags: [HTTP, State]
---

![]({{site.baseurl}}/assets/images/2017/http.jpg)


# 1** 
  * 100 (Continue/继续)：如果服务器收到头信息中带有100-continue的请求，这是指客户端询问是否可以在后续的请求中发送附件。在这种情况下，服务器用100(SC_CONTINUE)允许客户端继续或用417 (Expectation Failed)告诉客户端不同意接受附件。
  * 101 (Switching Protocols/转换协议)：指服务器将按照其头信息变为一个不同的协议。

---
# 2** 
  * 200 (OK/正常)：一切正常。一般用于相应GET和POST请求。这个状态码对servlet是缺省的；如果没有调用setStatus方法的话，就会得到200。
  * 201 (Created/已创建)：表示服务器在请求的响应中建立了新文档；应在定位头信息中给出它的URL。
  * 202 (Accepted/接受)：)告诉客户端请求正在被执行，但还没有处理完。 
  * 203 (Non-Authoritative Information/非官方信息)：表示文档被正常的返回，但是由于正在使用的是文档副本所以某些响应头信息可能不正确。
  * 204 (No Content/无内容)：无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
  * 205 (Reset Content/重置内容)：重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。 
  * 206 (Partial Content/局部内容)：部分内容。服务器成功处理了部分GET请求

---
# 3** 
  * 300 (Multiple Choices/多重选择)：多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
  * 301 (Moved Permanently)：永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
  * 302 (Found/找到)：临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
  * 303 (See Other/参见其他信息)：查看其它地址。与301类似。使用GET和POST请求查看
  * 304 (Not Modified/为修正)：未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
  * 305 (Use Proxy/使用代理)：使用代理。所请求的资源必须通过代理访问
  * 307 (Temporary Redirect/临时重定向)：临时重定向。与302类似。使用GET请求重定向。

---
# 4** 
  * 400 (Bad Request/错误请求)：客户端请求的语法错误，服务器无法理解；
  * 401 (Unauthorized/未授权)：请求要求用户的身份认证
  * 403 (Forbidden/禁止)：服务器理解请求客户端的请求，但是拒绝执行此请求
  * 404 (Not Found/未找到)：服务器无法根据客户端的请求找到资源（网页）。
  * 405 (Method Not Allowed/方法未允许)：客户端请求中的方法被禁止
  * 406 (Not Acceptable/无法访问)：服务器无法根据客户端请求的内容特性完成请求
  * 407 (Proxy Authentication Required/代理服务器认证要求)：请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
  * 408 (Request Timeout/请求超时)：服务器等待客户端发送的请求时间过长，超时
  * 409 (Conflict/冲突) 服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突
  * 410 (Gone/已经不存在)：客户端请求的资源已经不存在。
  * 411 (Length Required/需要数据长度)：服务器无法处理客户端发送的不带Content-Length的请求信息
  * 412 (Precondition Failed/先决条件错误)：客户端请求信息的先决条件错误
  * 413 (Request Entity Too Large/请求实体过大)：由于请求的实体过大，服务器无法处理，因此拒绝请求。
  * 414 (Request URI Too Long/请求URI过长)：请求的URI过长（URI通常为网址），服务器无法处理
  * 415 (Unsupported Media Type/不支持的媒体格式)：服务器无法处理请求附带的媒体格式
  * 416 (Requested Range Not Satisfiable/请求范围无法满足)：客户端请求的范围无效
  * 417 (Expectation Failed/期望失败)：服务器无法满足Expect的请求头信息

---
# 5** 
  * 500 (Internal Server Error/内部服务器错误)：服务器内部错误，无法完成请求
  * 501 (Not Implemented/未实现)：服务器不支持请求的功能，无法完成请求
  * 502 (Bad Gateway/错误的网关)：接收服务器接收到远端服务器的错误响应
  * 503 (Service Unavailable/服务无法获得)：服务器由于在维护或已经超载而无法响应。
  * 504 (Gateway Timeout/网关超时)：接收服务器没有从远端服务器得到及时的响应。
  * 505 (HTTP Version Not Supported/不支持的 HTTP 版本)：

