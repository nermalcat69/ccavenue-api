---
title: Consolidate Settlement Details API
---

# Consolidate Settlement Details API

ConsolidateSettlementDetails API call is used to list Settelement Details for a merchant for a given Order Number And Reference Number.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or "JSON" |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or "JSON" |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "ConsolidateSettlementDetail |
| Order Number (required) | Provide the Order Number to find the ConsolidateSettlementDetails | Order number should be numeric |
| Reference Number (required) | Provide the Reference Number to find the ConsolidateSettlementDetails | Reference number should be numeric |

### Example XML Request

```xml
<?xml version='1.0' ?><ConsolidateSettlementDetails_Query> order_no='53889594'
reference_no='53889594' ></ConsolidateSettlementDetails_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
'Order Number': '53889594'
'Reference Number': ' 53889594’
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1 then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| pay_Id | Unique pay Id for payout. | Numeric (25). |
| settlement_date | Date of settlement. | Date in IST(dd-mm-yyyy ) |
| utr_no | Unique id from bank against each payout . | String utr_no |
| error_desc | Reason if customer payment option is not going to be deleted successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

## Example XML Response

### XML Response Data

```xml
<?xml version='1.0' encoding='UTF-8'?><ConsolidateSettlement_Details_Result><error_code></error_code><error_desc></error_desc><Consolidatesettlement_details_list><Consolidatesettlement_details pay_Id="711304"
settlement_date="2020-03-12" utr_no=""/>
pay_Id="0" settlement_date="2020-03-12"
utr_no=""/></Consolidatesettlement_details_list></ConsolidateSettlement_Details_Result>
```

### Failure

```xml
<?xml version='1.0' encoding='UTF-8'?>
<ConsolidateSettlement_Details_Result>
<error_code>51419</error_code>
<error_desc>Enc_request: No record found for given criteria.
</error_desc>
</ConsolidateSettlement_Details_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Example JSON Response

### Success

```json
{
"ConsolidateSettlement_Details_Result":{
"error_code":"",
"error_desc":"",
"Consolidatesettlement_details_list":{
"Consolidatesettlement_details":[{
"pay_Id":40907,
"settlement_date":"19-01-2016",
“utr_no”=" ”
}],
"Consolidatesettlement_details":[{
"pay_Id":0, "settlement_date":"19-
01-2016",
“utr_no”=" ”
}
}
}
```

### Failure

```json
{
"ConsolidateSettlement_Details_Result":{
"error_code":51002,
"error_desc":"Reference Number: Invalid Parameter"
}
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
