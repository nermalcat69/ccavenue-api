---
title: Delete Customer API
---

# Delete Customer API

The Delete Customer API call is used to delete the customer and all saved payment options for the customer.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is is "XML" or " JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "deleteCustomer". |
| customer_id (required) | Unique Customer ID provided by merchant to the customer. | Alphanumeric with special characters (hyphen, underscore, dot,@)(70) |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Query customer_id="123"/>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"customer_id": "1234"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Example STRING Request

Format: customer_id|

Example: 1234|

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text represents the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| deletion_status | Delete status - specify whether customer is going to be deleted successfully or not. | Numeric(1) Possible values for this is 0 - Deletion successful. 1 - Could not be deleted. |
| customer_id | Unique Customer ID for the deleted customer. | Numeric(25). |
| error_desc | Reason if customer is not going to be deleted successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

### Example XML Response

#### Success

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Result deletion_status="0" error_code="" error_desc="">
<customer_id>1234</customer_id>
</Delete_Customer_Result>
```

#### Failure

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Result error_desc="Customer id: Invalid parameter"deletion_status="1" error_code="51325">
<customer_id>1234</customer_id>
</Delete_Customer_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption
section.

### Example JSON Response

#### Success

```json
{
"deletion_status":0,
"error_desc":"",
"error_code":"",
"customer_id":"1234"
}
```

#### Failure

```json
{
"error_desc":"Customer id: Invalid parameter",
"deletion_status":1,
"customer_id":"1234",
"error_code":"51325"
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the
decryption section.

### Example STRING Response

#### Success

Format: deletion_status|customer_id|

Example: 0|123|

#### Failure

Format: deletion_status|error_code|error_desc|customer_id|

Example: 1|51325|Customer id: Invalid parameter|123|

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the
decryption section.
