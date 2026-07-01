---
title: Update Merchant Param API
---

# Update Merchant Param API

(Source section name: "Update Merchant Params")

Update Merchant params API is used to add some extra parameter against Reference no if the same could not be done at the time of the transaction.

## Request Parameters

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or " JSON" or "STRING". |
| command (required) | Command value specifies the API Calls. You must send this with each request. | Possible value for this API call is "updateMerchantParams" |
| reference_no (required) | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| param_value (required) | Merchant can update one param value against unique reference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100) |
| param_value1 (optional) | Merchant can update one param value against unique reference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100) |
| param_value2 (optional) | Merchant can update one param value against unique reference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100) |
| param_value3 (optional) | Merchant can update one param value against unique reference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100). |
| param_value4 (optional) | Merchant can update one param value against unique reference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100) |

**Request format:**

### XML Format

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merchant_Params_Query>
<reference_no>203000093626</reference_no>
<param_value>10</param_value>
<param_value1>11</param_value1>
<param_value2>22</param_value2>
<param_value3>33</param_value3>
<param_value4>44</param_value4>
</Update_Merchant_Params_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### JSON Format

```json
{
"reference_no":"123654",
"param_value":"10",
"param_value1":"11",
"param_value2":"22",
"param_value3":"33",
"param_value4":"44"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### String Format

Format: Reference_no|Param_value1|Param_value2|Param_value3|Param_value4|Param_value5|

```text
123456|10|11|22|33|44|
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | Failure reason if API call does not update/add param value. | Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| update_status | Update status contains merchant parameter if add/update was successful or not. | "0" means update merchant parameter value was successful. "1" means update merchant param value was not successful. |

## Response Format

### XML Format

**Success:**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merchant_Param_Result update_status="0" error_code=”” error_desc=””/>
```

**Failure:**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merchant_Param_Result error_desc="Reference number: Invalid Parameter" update_status="1"
error_code=”51322”/>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### JSON Format

**Success:**

```json
{
“update_status”:0,
"error_desc":"",
"error_code":""
}
```

**Failure:**

```json
{
"error_desc":"Reference number: Invalid Parameter",
"error_code":"51322",
"update_status":1
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
1|51322|Reference number: Invalid Parameter|
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
