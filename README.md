## API Reference

The Stripe API is organized around REST. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP verbs, which are understood by off-the-shelf HTTP clients. We support cross-origin resource sharing, allowing you to interact securely with our API from a client-side web application. JSON is returned by all API responses, including errors.

## HTTP status code summary

Status code | Reason
:------------ | :-------------
`200` - OK | Everything worked as expected.
`404` - Not Found | The requested resource doesn't exist.
`500` - Server error | Something went wrong on our end. (These are rare.)

## Endpoints

### Customers

#### Retrieve all customers
```
curl http://salty-badlands-92678.herokuapp.com/api/customers
```

#### Retrieve a single customer

Parameter | Definition
:------------ | :-------------
:id | The customer's unique id.

```
curl http://salty-badlands-92678.herokuapp.com/api/customers/:id
```

### Premises

#### Retrieve all premises
```
curl http://salty-badlands-92678.herokuapp.com/api/premises
```

#### Retrieve a single premise

Parameter | Definition
:------------ | :-------------
:id | The premise's unique id.

```
curl http://salty-badlands-92678.herokuapp.com/api/premises/:id
```

### Accounts

#### Retrieve all accounts
```
curl http://salty-badlands-92678.herokuapp.com/api/accounts
```

#### Retrieve a single account

Parameter | Definition
:------------ | :-------------
:id | The account's unique id.

```
curl http://salty-badlands-92678.herokuapp.com/api/accounts/:id
```

### Monthly consumptions

#### Retrieve all monthly consumptions
```
curl http://salty-badlands-92678.herokuapp.com/api/monthly-consumptions
```

#### Retrieve a single monthly consumption

Parameter | Definition
:------------ | :-------------
:id | The monthly consumption's unique id.

```
curl http://salty-badlands-92678.herokuapp.com/api/monthly-consumptions/:id
```

