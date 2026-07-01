---
title: Cancel API
---

# Cancel API

Cancel API call allows you to cancel a pending order. An order older than 12 days is automatically cancelled. Once an order has been cancelled/auto-cancelled by the system, it cannot be confirmed. Funds will be refunded to the credit card or debit card or net banking account that was originally charged.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or "JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or "JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "cancelOrder" |
| reference_no (required) | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| amount (required) | Transaction amount to be captured. Amount can be full or partial of the transaction amount. | Decimal(12,2) |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_List>
<order reference_no="123456788" amount="1.00" />
<order reference_no="123456789" amount="2.00" />
</Order_List>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"order_List": [
{"reference_no":"203000099429","amount": "1.00"
},
{"reference_no":"203000099429","amount": "1.00"
}
]
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example STRING Request

Format: `reference_no$amt|reference_no$amt|`

Example: `203000099429$1.00|203000104640$101.23|`

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that API call is successful. Value "1" denotes API call failure. On enc_response is plain text that represents the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| success_count | Merchant checks the successfully processed records for cancellation of the transactions. | Numeric 0<=success_count<= Number of orders for the cancel request. |
| reference_no | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| reason | Failure reason if given reference_no are not going to cancel successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

### Example XML Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Result error_code="">
<error_desc></error_desc>
<success_count>0</success_count>
<failed_List>
<failed_order error_code="51304 " reason=" Invalid order/tracking id " reference_no="123456788"/>
<failed_order error_code="51206" reason="Order List: Invalid Parameter"
reference_no="123456788"/>
</failed_List>
</Order_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example JSON Response

```json
{
"failed_List":[
{"reference_no":"123456788","reason":" Invalid order/tracking id
","error_code":"51304 "},
{"reference_no":"123456788","reason":"Order List: Invalid
Parameter","error_code":"51206"}
],
"error_desc":"",
"success_count":0,
"error_code":""
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example STRING Response

Format: `success_count|error_code$reference_no$reason^error_code$reference_no$reason|`

Example: `0|51304 $123456788$ Invalid order/tracking id ^51206$123456788$Order List: Invalid Parameter|`

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
