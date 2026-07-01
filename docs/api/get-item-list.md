---
title: Get Item List API
---

# Get Item List API

Item list API call allows you to find all task and item list which is configured for the merchant.

## Request Parameters

For Invoice Items, end request data is not required. Merchant has to send the command, Access code, request_type and response_type parameters only.

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or " JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "getInvoiceItems". |

Request example: access_code=xxxxxxxxxxxxx&command=getInvoiceItems&request_type=xml&response_type=xml

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was not successful. Value "1" denotes API call failure. On enc_response is plaintext representing the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | This Attribute contains the description of the failure request processing. When status is 1 then this attribute will generate the reason for failure. | Please refer below table for the failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| item_List | List of all item/task which is configured for the merchant | Item List type array. Refer to Item_List section for structure |

**Item List:**

| Name | Description | Note |
| --- | --- | --- |
| description | Descriptive information about the Item/task. | Alphanumeric with special characters(hyphen, dot, circular brackets, space, comma , underscore, hash(#) and symbol &)(60). |
| name | Unique name of the Item/task for the generate invoice which is assigned against the merchant id. | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| type | Specify the item type provided. | Possible values for item type are ITEM/TASK. |

## Example XML Response

### Success

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_Item_Result status="0" error_code=”” error_desc=””>
<item_List>
<item name="First Task" type="TASK" description="sgsdfgsfgsdfg" />
<item name="test" type="TASK" description="test" />
<item name="test" type="ITEM" description="test" />
<item name="TestITEM" type="ITEM" description="TEST"/>
</item_List>
</Invoice_Item_Result>
```

### Failure

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_Item_Result status="1" error_desc=”Enc_request: Norecordfoundforgivencriteria.”
error_code=”51419”/>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Example JSON Response

### Success

```json
{
}
"item_List":[
{"name":"HP","description":"QC","type":"ITEM"},
{"name":"asdasd","description":"asdasd","type":"TASK"},
{"name":"STG","description":"test","type":"ITEM"},
{"name":"ITEM","description":"FIRST","type":"ITEM"},
{"name":"TASK","description":"NEW","type":"TASK"},
{"name":"TASK2","description":"NEW","type":"TASK"}
],
"status":0,
“error_desc”:””,
“error_code”:””
```

### Failure

```json
{
}
"status":1,
“error_desc”:”Enc_request: No record found for given criteria.”,
“error_code”:”51419”
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Example STRING Response

### Success

Format: status|type|name|description^ type|name|description|

```text
0|TASK|First Task|sgsdfgsfgsdfg^TASK|Second Task|Second task notes^TASK|test|test^ITEM|Second
Task|akshay^ITEM|test|test|
```

### Failure

Format: status|error_code|error_desc|

```text
1|51419|Enc_request: No record found for given criteria.|
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
