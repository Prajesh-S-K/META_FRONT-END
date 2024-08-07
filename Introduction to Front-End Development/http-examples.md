# HTTP 

## Http methods :

| http | Description |
| ---- | ----------- |
| GET | The client requests a resource on the web server. |
| POST | The client submits data to a resource on the web server. |
| PUT | The client replaces a resource on the web server. |
| DELETE | The client deletes a resource on the web server. |
| PATCH | The client partially updates a resource on the web server. |


### HTTP request Headers :

```
Host: example.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en
Content-type: text/json
```

- The Host header specifies the host of the server and indicates where the resource is requested from.

- The User-Agent header informs the web server of the application that is making the request. It often includes the operating system (Windows, Mac, Linux), version and application vendor.

- The Accept header informs the web server what type of content the client will accept as the response.

- The Accept-Language header indicates the language and optionally the locale that the client prefers.

- The Content-type header indicates the type of content being transmitted in the request body.

### HTTP Request Body :

```
POST /users HTTP/1.1
Host: example.com

{
 "key1":"value1",
 "key2":"value2",
 "array1":["value3","value4"]
}
```


### Http Responces :

#### 1XX International :

| Status Code | Reason Phrase | Description |
| ---- | -------------- | -------------- |
| 100 | Continue | The server received the request headers and should continue to send the request body. |
| 101 | Switching Protocols | The client has requested the server to switch protocols and the server has agreed to do so. |


#### 2XX Successful :

| Status Code | Reason Phrase | Description |
| ---- | -------------- | -------------- |
| 200 | OK | Standard response returned by the server to indicate it successfully processed the request. |
| 201 | Created | The server successfully processed the request and a resource was created. |
| 202 | Accepted | The server accepted the request for processing but the processing has not yet been completed. |
| 204 | No Content | The server successfully processed the request but is not returning any content. |

#### 3XX Redirection :

| Status Code | Reason Phrase | Description |
| ---- | -------------- | -------------- |
| 301 | Moved Permanently | This request and all future requests should be sent to the returned location. |
| 302 | Found | This request should be sent to the returned location. |

#### 4XX Client Error :

| Status Code | Reason Phrase | Description |
| ---- | -------------- | -------------- |
| 400 | Bad Request | The server cannot process the request due to a client error, e.g., invalid request or transmitted data is too large. |
| 401 | Unauthorized | The client making the request is unauthorized and should authenticate. |
| 403 | Forbidden | The request was valid but the server is refusing to process it. This is usually returned due to the client having insufficient permissions for the website, e.g., requesting an administrator action but the user is not an administrator. |
| 404 | Not Found | The server did not find the requested resource. |
| 405 | Method Not Allowed | The web server does not support the HTTP method used. |

#### 5XX Server Error :

| Status Code | Reason Phrase | Description |
| ---- | -------------- | -------------- |
| 500 | Internal Server Error | A generic error status code given when an unexpected error or condition occurred while processing the request. |
| 502 | Bad Gateway | The web server received an invalid response from the Application Server. |
| 503 | Service Unavailable | The web server cannot process the request. |

### HTTP Responces Headers :

```
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html
```

-The Date header specifies the date and time the HTTP response was generated.

-The Server header describes the web server software used to generate the response.

-The Content-Length header describes the length of the response.

-The Content-Type header describes the media type of the resource returned (e.g. HTML document, image, video).

#### HTTP Responces Body :

```
HTTP/1.1 200 OK
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html

<html>
  <head><title>Test</title></head>
  <body>Test HTML page.</body>
</html>
```