---
title: Refund API
---

# Refund API

The Refund API call allows you to refund an order/transaction that has previously been executed but not yet refunded. Funds will be refunded to the credit card or debit card or net banking account that was originally charged.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or "JSON" or "STRING". |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or "JSON" or "STRING". |
| command (required) | Unique name which specifies the API Call. You must send this with each request. | Possible value for command to this API call is "refundOrder". |
| reference_no (required) | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| refund_amount (required) | Transaction amount to be refund. Amount can be full or partial of the transaction amount. | Decimal(12,2). |
| refund_ref_no (required) | Unique reference number shared by merchant to refund the captured transaction amount. | AlphaNumeric(30) |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Refund_Order_Query reference_no="1236547" refund_amount="1.0" refund_ref_no="API1234">
</Refund_Order_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"reference_no":"1236547",
"refund_amount":"1.0",
"refund_ref_no":"API1234"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example STRING Request

Format: `reference_no|refund_amount|refund_ref_no|`

Example: `203000094245|1.00|API1234|`

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes the API call was successful. Value "1" denotes API call failure. On enc_response is plain text represents the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| refund_status | Refund status specifies whether given refund request is going to succeed or fail. | Numeric Value "0" denotes refund was successful Value "1" denotes refund was failure. |
| reason | Failure reason if the refund request is going to fail for the transactions. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

### Example XML Response

#### Success Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Refund_Order_Result reason="" refund_status="0" reason="" error_code=""/>
```

#### Failure Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Refund_Order_Result reason="Reference number: Invalid Parameter" refund_status="1" error_code="51310"/>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example JSON Response

#### Success Response

```json
{
"reason":"",
"error_code":"",
"refund_status":0
}
```

#### Failure Response

```json
{
"reason":"Reference number: Invalid Parameter",
"error_code":"51310",
"refund_status":1
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example STRING Response

#### Success Response

Format: `refund_status|`

Example: `0|`

#### Failure Response

Format: `refund_status|error_code|reason|`

Example: `1|51310|Reference number: Invalid Parameter|`

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
