---
title: Update Merchant Invoice Reference No API
---

# Update Merchant Invoice Reference No API

(Source section name: "Update Invoice Reference Number")

Update Invoice reference Number API call is used to update Invoice reference number if the same was not provided at the time of invoice generation.

## Request Parameters

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns response in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is is "XML" or " JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "updateBillMerchantReferenceNo" |
| bill_id (required) | Unique CCAvenue Bill id(invoice id) for the generated invoice. | Numeric value(25) |
| merchant_ref_no (required) | Unique reference no shared by merchant to update against CCAvenue bill id (invoice id). | Alphanumeric with special characters(hyphen and underscore)(25). |

**Request format:**

### XML Format

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Bill_Merchant_Reference_No_Query>
<bill_id>1234566</bill_id>
<mer_reference_no>12354</mer_reference_no>
</Update_Bill_Merchant_Reference_No_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### JSON Format

```json
{
"bill_id":"123456",
"mer_reference_no":"123654"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### String Format

Format: Bill_id|merchant_reference_no|

```text
123456|123654|
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | Failure reason if update merchant reference number is not going to be updated successfully for the generated invoice. | Please refer below table for the failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| update_status | Merchant update status specifies the status of update merchant reference number. | Numeric(1) "0" means update merchant reference number was successful. "1" means merchant reference number was not successfully updated. |

## Response Format

### XML Format

**Success:**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merch_Ref_No_Result update_status=”0” error_code=”” error_desc=””/>
```

**Failure:**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merch_Ref_No_Result update_status=”1” error_desc=”Bill Merchant Reference No: Invalid Parameter”
error_code=”51320”/>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### JSON Format

**Success:**

```json
{
"update_status":0,
"error_desc":"", "error_code":""
}
```

**Failure:**

```json
{
"error_desc":"bill_id: Invalid Parameter",
"update_status":1, "error_code":"51319"
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
1|51320|Bill Merchant Reference No: Invalid Parameter|
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
