# Permanent Links

On the **Airalogy** platform, a **permalink** is a long-lasting URL that points to a specific resource or page. These links can be cited in academic papers so readers can easily locate the referenced research results and data.

## User Profile

Permalink format:

```txt
https://airalogy.com/users/{user_id}
```

## Lab

Permalink format:

```txt
https://airalogy.com/labs/{lab_id}
```

## Project

Permalink format:

```txt
https://airalogy.com/labs/{lab_id}/projects/{project_id}
```

## Protocol

Permalink formats:

```txt
https://airalogy.com/labs/{lab_id}/projects/{project_id}/protocols/{protocol_id}
```

Researchers often cite this link in academic publications to let others view and reuse a specific Protocol.

or

```txt
https://airalogy.com/protocols/{protocol_uuid}
```

`protocol_uuid` is a UUID assigned to every Protocol. When a user opens this endpoint, Airalogy automatically checks their access rights; if they lack permission, the Protocol’s contents remain hidden.

## Record

Permalink format:

```txt
https://airalogy.com/records/{record_id}
```

`record_id` is a UUID assigned to every Record. Airalogy verifies user permissions on access; users without the required rights cannot view the Record’s contents.
