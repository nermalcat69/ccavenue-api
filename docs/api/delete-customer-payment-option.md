---
title: Delete Customer Payment Option API
---

# Delete Customer Payment Option API

The Delete Customer Payment Option API call is used to delete a particular payment option saved for the customer.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or " JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "deleteCustomerPaymentOption ". |
| customer_id (required) | Unique Customer ID for the transaction. | Numeric(25). |
| customer_card_id (required) | Unique Customer card ID against the payment option for the transaction. | Numeric (25). |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Payment_Query
customer_id="123" customer_card_id="22"/>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"customer_id": "1234",
"customer_card_id": "14"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Example STRING Request

Format: customer_card_id|customer_id|

Example: 14|1234|

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| customer_id | Unique Customer ID for the transaction. | Numeric(25). |
| customer_card_id | Unique Customer card ID against the payment option for the transaction. | Numeric (25). |
| deletion_status | Delete Status value specifies whether customer payment option is going to delete successfully or not. | Possible values for this is 0 - Deletion successful. 1 - Could not be deleted. |
| error_desc | Reason if customer payment option is not going to delete successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

### Example XML Response

#### Success

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Payment_Option_Result
deletion_status="0"
customer_id="24"
customer_card_id="1234" error_code="" error_desc=""/>
```

#### Failure

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Payment_Option_Result
customer_card_id="22" customer_id="123"
error_desc="CustomerCardId:InvalidParameter"
error_code="51336"
deletion_status="1"/>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the
decryption section.

### Example JSON Response

#### Success

```json
{
"customer_card_id":22,
"deletion_status":0,
"customer_id":123,
"error_desc":"",
"error_code":""
}
```

#### Failure

```json
{
"customer_card_id":22,
"deletion_status":1,
"customer_id":123,
"error_desc":"Customer CardId:InvalidParameter",
"error_code":"51336"
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the
decryption section.

### Example String Response

#### Success

Format: deletion_status|customer_card_id|customer_id|

Example:0|1234|24|

#### Failure

Format: deletion_status|error_code|error_desc|customer_card_id|customer_id|

Example:1|51327|Customer id: Invalid Parameter|22|123|

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the
decryption section.
