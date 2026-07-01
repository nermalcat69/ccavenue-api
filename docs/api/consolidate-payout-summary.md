---
title: Consolidate Payout Summary API
---

# Consolidate Payout Summary API

ConsolidatePayouts Summary API call is used to list payouts summary for a merchant for a given settlement date.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or "JSON" |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or "JSON" |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "consolidatepayoutSummary". |
| settlement_date (required) | Provide the settlement Date to find the payouts list. | Date must be in IST(dd-mm-yyyy )format. |

### Example XML Request

```xml
<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<Consolidatepayout_summary_query>
<settlement_date>01-02-2019</settlement_date>
</Consolidatepayout_summary_query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
'settlement_date': '01-02-2019'
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1 then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| account_no | Account number for payout | numeric(25) |
| ifsc_code | Ifsc code of bank |  |
| pay_amount | Payout amount for a payout. | Decimal(12,2). |
| pay_Id | Unique pay Id for payout. | Numeric (25). |
| settlement_date | Date of settlement. | Date in IST(dd-mm-yyyy ) format. |
| settlement_bank | Name of bank in which settlement done. | String. |
| settlement_currency | Currency in which settlement is done. | String. Examples: INR – Indian Rupee |
| trans_currency | Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP – Pound Sterling EUR – Euro, official currency of Eurozone |
| sub_acc_Id | Unique sub account id for merchant if payouts done for sub account of merchant. | Alphanumeric with special characters (hyphen)(20). |
| utr_no | Unique id from bank against each payout id. | String. |
| error_desc | Reason if customer payment option is not going to be deleted successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

## Example XML Response

### Success

```xml
<?xml version='1.0' encoding='UTF-8'?>
<ConsolidatePayout_Summary_Result>
<error_code></error_code>
<error_desc></error_desc>
<Consolidatepayout_summary_list>
<Consolidatepayout_summary_details
account_no=”784857445”
ifsc_code=”HDFC000060”
pay_amount="211.76"
pay_Id="40907"
settlement_date="19-01-2016"
settlement_bank="KARUR VYSYA BANK"
sub_acc_id=” ”
settlement_currency="INR" sub_acc_Id="split-1"
trans_currency="INR"
utr_no="1234567890” />
<Consolidatepayout_summary_details
account_no=”784857445”
ifsc_code=”HDFC000060”
pay_amount="211.76"
pay_Id="0"
settlement_date="19-01-2016"
settlement_bank="KARUR VYSYA BANK"
sub_acc_id=””
settlement_currency="INR" sub_acc_Id="split-1"
trans_currency="INR"
utr_no="1234567890” />
</Consolidatepayout_summary_list>
</ConsolidatePayout_Summary_Result>
```

### Failure

```xml
<?xml version='1.0' encoding='UTF-8'?>
<ConsolidatePayout_Summary_Result>
<error_code>51419</error_code>
<error_desc>Enc_request: No record found for given criteria.
</error_desc>
</ConsolidatePayout_Summary_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Example JSON Response

### Success

```json
{
"ConsolidatePayout_Summary_Result":{
"error_code":"",
"error_desc":"",
"Consolidatepauyout_summary_list":{
"Consolidatepauyout_summary_details":[{
“account_no”:”784857445”,
“ifsc_code”:”HDFC000060”,
"settlement_bank":"KARUR VYSYA BANK",
"pay_amount":211.76,
"trans_currency":"INR",
"pay_Id":40907,
"sub_acc_Id":"split-
1","settlement_date":"19-01-2016",
"settlement_currency":"INR",
“utr_no”:"”
}],
"Consolidatepauyout_summary_details":[{
“account_no”=”784857445”,
“ifsc_code”:”HDFC000060”,
"settlement_bank":"KARUR VYSYA BANK",
"pay_amount":211.76,
"trans_currency":"INR",
"pay_Id":”0”,
"sub_acc_Id":"split-1",
"settlement_date":"19-01-2016",
"settlement_currency":"INR",
“utr_no”:"”
}
}
}
```

### Failure

```json
{
"ConsolidatePayout_Summary_Result":{
"error_code":52014,
"error_desc":"payout_date: Required parameter missing"
}
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
