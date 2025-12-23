# 永久链接

在Airalogy平台中，永久链接（permalink）是指一个可以长期有效的链接地址，用于访问特定的资源或页面。在学术论文中可以引用这些永久链接，以确保读者能够方便地找到相关的研究成果和数据。

## 用户个人页

用户个人页的永久链接格式为：

```txt
https://airalogy.com/users/{user_id}
```

## 实验室

实验室的永久链接格式为：

```txt
https://airalogy.com/labs/{lab_id}
```

## 项目

项目的永久链接格式为：

```txt
https://airalogy.com/labs/{lab_id}/projects/{project_id}
```

## Protocol

Protocol的永久链接格式为：

```txt
https://airalogy.com/labs/{lab_id}/projects/{project_id}/protocols/{protocol_id}
```

该链接经常可以用于在学术论文中引用某个特定的Protocol，以供其他研究者参考和复用。

或：

```txt
https://airalogy.com/protocols/{protocol_uuid}
```

`protocol_uuid` 是一个UUID。在Airalogy平台中，每个Protocol都有一个唯一的UUID。当用户通过这个端点查阅Protocol时，Airalogy平台会自动检查用户是否对于该Protocol有访问权限。如果没有权限，用户将无法查看该Protocol的内容。

## Record

Record的永久链接格式为：

```txt
https://airalogy.com/records/{record_id}
```

`record_id` 是一个UUID。在Airalogy平台中，每个Record都有一个唯一的ID。当用户通过这个端点查阅Record时，Airalogy平台会自动检查用户是否对于该Record有访问权限。如果没有权限，用户将无法查看该Record的内容。
