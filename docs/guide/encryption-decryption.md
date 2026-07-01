---
title: Encryption and Decryption
---

# Encryption and Decryption

## Encryption of Request for API Calls

Requests sent to CCAvenue will hold the parameters mentioned in the table below. enc_request has to be encrypted using AES similar to the method used for real-time transaction. Encryption key is mapped to Access code as mentioned in API Authentication section.

| Name | Description |
| --- | --- |
| enc_request (required) | AES encrypted request data. |
| access_code (required) | This is the access code for your application. You must send this with each request. |
| command (required) | This is the command to access the API Calls. You must send this with each request. |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. |
| version (required) | This is the version to access API based on version calls and current possible value is 1.1 |

### Example

```text
enc_request=63957FB55DD6E7B968A7588763E08B240878046EF2F520C44BBC63FB9CCE726209A47348
77F5904445591304ABB2F5E598B951E39EAFB9A24584B00590ADB077ADE5E8C444EAC5A250B1EA96F6
8D22E44EA2515401C2CD753DBA91BD0E7DFE7341BE1E7B7550&access_code=8JXENNSSBEZCU8KQ&co
mmand=confirmOrder&request_type=XML&response_type=XML&version=1.1
```

## Decryption of Response for API Calls

Response received from CCAvenue will hold the parameters mentioned in the table below. enc_response, when encrypted will have to be decrypted using AES similar to the method used for real-time transactions. Encryption key is mapped to Access code as mentioned in API Authentication section.

| Name | Description |
| --- | --- |
| enc_response | AES encrypted response containing format as per response_type. |
| enc_error_code | enc_error_code contains value if status is "1" please refer to below table for the error code. |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. |

Note: - Possible refer below table for enc_response value when status value is "1" as follows.

### Example

#### Successful

```text
status=0&enc_response=63957FB55DD6E7B968A7588763E08B240878046EF2F520C44BBC63FB9CCE726
209A473457E6B13721EC6D05ED13A0483ACFDD6F11F284AE79755D47E79687478F93CFCD3CD97510B6
7B961CDB5279F209F5C451F3039696F13C990B963854C8CADF730&enc_error_code=
```

#### Error

```text
status=1&enc_response=Access_code: Invalid Parameter&enc_error_code=51407.
```
