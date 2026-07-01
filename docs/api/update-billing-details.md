---
title: Update Billing Details API
---

# Update Billing Details API

Update billing details API call is used to update customer billing information against an order.

## Request Parameters

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or " JSON" or "STRING". |
| command (required) | Command value specifies the API Calls. You must send this with each request. | Possible value for this API call is "updateBillingDetails" |
| reference_no (required) | Unique CCAvenue reference no for the transaction. | Numeric value(25). |
| bill_name (required) | Billing name for the order | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| bill_email (required) | Billing email id for order | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| bill_address (required) | Billing address for order (421 = Unsupported version for the API call.) | Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| bill_city (required) | Billing city for order | Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| bill_state (required) | Billing state for order | Alphanumeric with special characters (hyphen, dot and space)(30). |
| bill_country (required) | Billing country for order | Alphanumeric with special characters (space)(30). |
| bill_zip (required) | Billing zip for order | AlphaNumeric with special characters(hyphen and space) (15). |

**Request format:**

### XML Format

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Billing_Details_Query>
<reference_no>123456</reference_no>
<bill_name>bill name</bill_name>
<bill_email>szgfs.sdgf@sfdg.com</bill_email>
<bill_address>santacruz(west)</bill_address>
<bill_city>mumbai</bill_city>
<bill_state>maharashtra</bill_state>
<bill_country>india</bill_country>
<bill_zip>400000</bill_zip>
</Update_Billing_Details_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### JSON Format

```json
{
"reference_no":"123456",
"bill_name":"bill name",
"bill_email":"zgfs.sdgf@sfdg.com",
"bill_address":"santacruz(west)",
"bill_city":"mumbai",
"bill_state":"maharashtra",
"bill_country":"india",
"bill_zip":"400000"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### String Format

Format: Reference No|Billing Name|Bill Email ID|Bill Address|Bill City|Bill State|Bill Country|Bill Zip|

```text
123456|bill name|xxx@xxx.com|santacruz(west)|mumbai|maharashtra|india|400054|
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. (421 = Unsupported version for the API call.) | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text represents the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | Failure reason if billing details are not updated successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| update_status | Update_status denotes whether Billing information have been updated successfully or not. | "0" means update billing details was successful. "1" means billing details are not successfully updated. |

## Response Format

### XML Format

**Success:**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Param_Result update_status="0" error_desc=”” error_code=””/>
```

**Failure:**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Bill_Details_Result update_status=”1” error_desc=”Reference number: Invalid Parameter”
error_code=”51316”/>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### JSON Format

**Success:**

```json
{
"update_status":0,
"error_desc":"",
"error_code":""
}
```

**Failure:**

```json
{
"error_desc":"Reference number: Invalid Parameter",
"update_status":1,
"error_code":"51316"
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### String Format

Success Format: update_status|

```text
0|
```

Failure Format: update_status|error_code|error_desc|

```text
1|51316|Reference number: Invalid Parameter|
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section. (421 = Unsupported version for the API call.)
