---
title: Get Refund Details API
---

# Get Refund Details API

The getRefundDetails API call can be used to fetch refund information of the particular transaction.

## Sample Request

```text
enc_request=63957FB55DD6E7B968A7588763E08B240878046EF2F520C44BBC63FB9CCE726209A4734877F5904445591304ABB2F5E58B951E39EAFB9A24584B00590ADB077ADE5E8C444EAC5A250B1EA96F68D22E44EA2515401C2CD753DBA91BD0E7DFE7341BE1E7B7550&access_code=8JXENNSSBEZCU8KQ&command= getRefundDetails&request_type=XML&response_type=XML&version=1.1
```

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | This is the access code for your application. You must send this with each request. |  |
| request_type(required) | API requests are accepted in XML, JSON or String formats. Specify the request type. | Value is "XML" or "JSON" or "STRING". |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Value is "XML" or "JSON" or "STRING". |
| command (required) | This is the command to access the API Calls. You must send this with each request. | Value is "getRefundDetails" |
| reference_no (required) | Unique CCAvenue reference number for the transaction. | Numeric (25) |

### Example XML Request

```xml
<?xml version='1.0' ?>
<RefundDetails_Query
reference_no='123456789012'> </RefundDetails_Query>
```

### Example JSON Request

```json
{'reference_no':'123456789012'}
```

### Example STRING Request

Format: `reference_no|`

Example: `123456789012|`

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain the plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text that represents the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | Reason if API call fails. | String Please refer to the below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer to the below table for failure message. |
| reference_no | Unique CCAvenue reference number for the transaction. | Numeric (25) |
| order_no | Order No for the transaction. | Alphanumeric with special characters (hyphen and underscore) (30). |
| order_curr | Possible Order Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP – Pound Sterling EUR – Euro, official currency of Eurozone |
| order_amt | Amount for the transaction. | Decimal (12,2). |
| order_status | Status of the order. It can be single or multiple. | String Possible values are: Auto-Reversed (Two identical transactions for same order number, both were successful at bank's end but we got response for only one of them, then next day during reconciliation we mark one of the transaction as auto reversed, or we mark transaction as Auto-Reversed if merchant Instant Gratification setting is Yes ) Cancelled (Transaction is cancelled by merchant ) Refunded (Transaction amount is refunded) Auto-Cancelled (Transaction was not confirmed in given time) |
| refund_amt | Transaction amount that was refunded. Amount can be full or partial of the transaction amount. | Decimal (12,2). |
| refund_issue_date | Refund Issue Date &Time. | DateTime in IST ( yyyy-MM-dd HH:mm:ss.SSS) format. |
| refund_processed_on | Latest refund process Date &Time. | DateTime in IST ( yyyy-MM-dd HH:mm:ss.SSS) format. |
| refund_completion_date | Refund Completion Date &Time. | DateTime in IST ( yyyy-MM-dd HH:mm:ss.SSS) format. |
| refund_bank_ref_no | Reference number shared by Bank after refund. | Alphanumeric (25) |
| refund_mer_ref_no | Reference number shared by merchant at the time of refund. | Alphanumeric (30) |
| refund_status | Status of issued refund. | TS-REFC: Refund Confirmed TS-REFA: Refund Awaited TS-REFF: Refund Failed TS-REFD: Refund Declined |

## Successful Response

### XML Response

```xml
<?xml version='1.0' encoding='UTF-8'?>
<refund_details_Result error_code=""
error_desc=""
order_amt="10.00"
order_curr="INR"
order_no="06333954"
order_status="Refunded"
reference_no="203000111377">
<refund_list>
<RefundDetails refund_amt="1.00"
refund_bank_ref_no="2492"
refund_completion_date="2014-09-12 15:12:07.77"
refund_issue_date="2014-09-12 15:11:07.877"
refund_mer_ref_no="A1"
refund_processed_on=""
refund_status="TS-REFC" />
<RefundDetails refund_amt="1.00"
refund_bank_ref_no="2493"
refund_completion_date="2014-09-12 15:12:10.413"
refund_issue_date="2014-09-12 15:11:13.99"
refund_mer_ref_no="A2"
refund_processed_on=""
refund_status="TS-REFC" />
</refund_list>
</refund_details_Result>
```

### JSON Response

```json
{
"refund_list":[{"refund_amt":"1.00",
"refund_issue_date":"2014-09-12 15:11:07.877",
"refund_processed_on":"",
"refund_completion_date":"2014-09-12 15:12:07.77",
"refund_bank_ref_no":"2492",
"refund_mer_ref_no":"A1",
"refund_status":"TS-REFC"
},
{
"refund_amt":"1.00",
"refund_issue_date":"2014-09-12 15:11:13.99",
"refund_processed_on":"",
"refund_completion_date":"2014-09-12 15:12:10.413",
"refund_bank_ref_no":"2493",
"refund_mer_ref_no":"A2",
"refund_status":"TS-REFC"
}],
"reference_no":"203000111377",
"order_no":"06333954",
"order_amt":"10.00",
"order_curr":"INR",
"order_status":"Refunded",
"error_desc":"",
"error_code":""
}
```

### String Response

Format:

```text
error_code|error_desc|reference_no|order_no|order_curr|order_amt|order_status|refund_amt$refund_issue_date$refund_processed_on$refund_completion_date$refund_bank_ref_no$refund_mer_ref_no$refund_status|
||203000111377|06333954|INR|10.00|Refunded|1.00$2014-09-12 15:11:07.877$$2014-09-12 15:12:07.77$2492$A1$TS-REFC^1.00$2014-09-12 15:11:13.99$$2014-09-12 15:12:10.413$2493$A2$TS-REFC|
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Failure Response

### XML Response

```xml
<?xml version='1.0' encoding='UTF-8'?>
<refund_details_Result
error_code="51419"
error_desc="Enc_request: No record found for given criteria."
order_amt=""
order_curr=""
order_no=""
order_status=""
reference_no="123456789012"
/>
```

### JSON Response

```json
{
"reference_no":"123456789012",
"order_no":"",
"order_amt":"",
"order_curr":"",
"order_status":"",
"error_desc":"Enc_request: No record found for given criteria.",
"error_code":"51419"
}
```

### String Response

Format:

```text
error_code|error_desc|reference_no|order_no|order_curr|order_amt|order_status|refund_amt$refund_issue_date$refund_processed_on$refund_completion_date$refund_bank_ref_no$refund_mer_ref_no$refund_status|
51419|Enc_request: No record found for given criteria.|123456789012||||||
```
