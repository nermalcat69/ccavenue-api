---
title: Get Settlement Details API
---

# Get Settlement Details API

> [!WARNING]
> This endpoint does not appear in the latest CCAvenue API Implementation Guide (`api-docs-by-ccavenue.md`). It may be deprecated, renamed, or replaced by another endpoint (e.g. Payouts Summary / Consolidate Payout Summary). Verify with CCAvenue support before relying on this API in new integrations.

The getSettlementDetails call is used to get the Settlement details such as pay id, Utr No and settlement date. It works on XML and JSON request format only and version 1.2

## Sample Request

```text
enc_request=63957FB55DD6E7B968A7588763E08B240878046EF2F520C44BBC63FB9CCE726209A4734877F5904445591304ABB2F5E58B951E39EAFB9A24584B00590ADB077ADE5E8C444EAC5A250B1EA96F68D22E44EA2515401C2CD753DBA91BD0E7DFE7341BE1E7B7550&access_code=8JXENNSSBEZCU8KQ&command=getSettlementDetails &request_type=XML&response_type=XML&version=1.2
```

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | This is the access code for your application. You must send this with each request. |  |
| request_type(required) | API requests are accepted in XML, JSON or String formats. Specify the request type. | Value is "XML" or "JSON" . |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Value is "XML" or "JSON" |
| command (required) | This is the command to access the API Calls. You must send this with each request. | Value is "getSettlementDetails" |
| reference_no (required) | Unique CCAvenue reference number for the transaction. | Numeric (12) |

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | Reason if API call fails. | String Please refer to the below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer to the below table for failure message. |
| reference_no | Unique CCAvenue reference number for the transaction. | Numeric (25) |
| Pay_Id | Unique pay Id for payout. | Numeric(25) |
| Utr_no | Unique id from bank against each payout id. | String |
| Settlement_date | Date of Settlement | Date in IST(dd-mm-yyyy) |

## Following are the request and response formats

### XML request format

```xml
<?xml version='1.0' ?>
<SettlementDetails_Query reference_no='109810375484'>
</SettlementDetails_Query>
```

### XML response format

```xml
<?xml version='1.0' ?><SettlementDetails_Query order_no=''
reference_no='109810375484'></SettlementDetails_Query>
<?xml version='1.0' encoding='UTF-8'?>
<Settlement_Details_Result>
<error_code></error_code>
<error_desc></error_desc>
<settlement_details_list><settlement_details pay_Id="485807528" settlement_date="2020-03-31"
utr_no="CMS1450654388"/>
</settlement_details_list>
</Settlement_Details_Result>
```

### Json request format

```json
{'reference_no':'109810375484'}
```

### Json response format

```json
{"Settlement_Details_Result":
{"settlement_details_list":
"settlement_details":
{"settlement_date":"2020-03-31","utr_no":"CMS1450654388","pay_Id":485807528}},
"error_desc":"",
"error_code":""}}
```
