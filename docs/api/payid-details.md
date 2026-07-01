---
title: PayId Details API
---

# PayId Details API

PayId Details API call is used to list transactions for a given PayId.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or "JSON" |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or "JSON" |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "payIdDetails". |
| pay_id (required) | Provide the settlement Date to find the payouts list. | Numeric(25). |
| page_number (optional) | A limited number of records are shared as part of the response. The total records & number of pages are shared as part of the response to enable subsequent calls. | Numeric(4). |

## Example XML Request

```xml
<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<pay_id_details_query>
<pay_id>XXXXX</pay_id>
<page_number>1</page_number>
</pay_id_details_query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Example JSON Request

```json
{
'pay_id':'XXXXX',
‘page_number’:1
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| pay_Id | Unique pay Id for payout. | Numeric (25). |
| Amount | Amount of transaction. | Decimal(12,2). |
| amt_payable | Payable amount for given transaction to merchant. | Decimal(12,2). |
| bank_ref_no | Bank reference number of aggregator bank. | Numeric(25). |
| bill_email | Customer email id for the transaction. | Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| bill_name | Order billing name for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| ccavenue_ref_no | CCAvenue reference no allocated to the transaction. | Numeric(25). |
| currency | Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP – Pound Sterling EUR – Euro, official currency of Eurozone |
| date_time | This is the latest date and time when order status is modified. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| fees | Fee applied to process transaction by CCAvenue. | Decimal(12,2). |
| order_no | Order No for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| sub_acc_id | Unique Id for sub Account of merchant if provided for transaction | Alphanumeric with special characters (hyphen)(20). |
| tax | Sum of Taxes applied for the transaction. | Decimal(12,2). |
| txn_type | Type of transaction included in payouts. | String Example: Auto-Cancelled Cancelled MISC MSGCHRG Chargeback Refunded Shipped ASUC |
| order_option_type | Type of payment option. | String Example: OPTEMI OPTNBK OPTMOBP OPTIVRS OPTCASHC OPTDBCRD OPTCRDC OPTWLT OPTNEFT OPTUPI |
| page_count | Total pages available based on no_of_records in the request | Example: no_of_records sent in request was 100 total_records matching the lookup criteria were 1000 page_count will be 10 (total_records / no_of_records) rounded to the ceiling |
| total_records | Total no. of orders matching the lookup criteria |  |
| error_desc | Reason if customer payment option is not going to be deleted successfully. | String. Please refer below table for failure message. |
| error_code | Error code for the Failure reason. | String. Please refer below table for failure message. |

## Example XML Response

### Success

```xml
<?xml version='1.0' encoding='UTF-8'?>
<pay_id_details_Result>
<error_code></error_code>
<error_desc></error_desc>
<pay_id>XXXXX</pay_id>
<page_count>X</page_count>
<total_records>XXX</total_records>
<pay_id_txn_details_list>
<pay_id_txn_details
amount="40.00" amt_payable="35.88" bank_ref_no="14525144XX217" bill_email=xx.xx@xxx.com
bill_name="Shashi" ccavenue_ref_no="2XX000170631" currency="INR"
date_time="2016-01-11 17:42:58.223" fees="3.60" order_no="296XX917" sub_acc_id="" tax="0.52"
order_option_type=”OPTDBCRD” txn_type="Chargeback" />
</pay_id_txn_details_list>
</pay_id_details_Result>
```

### Failure

```xml
<?xml version='1.0' encoding='UTF-8'?>
<pay_id_details_Result>
<error_code>51419</error_code>
<error_desc>Enc_request: No record found for given criteria.</error_desc>
<pay_id>XXXXX</pay_id>
<page_count>0</page_count>
<total_records>0</total_records>
</pay_id_details_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Example JSON Response

### Success

```json
{
"pay_id_details_Result":{ "error_code":"",
"error_desc":"", "pay_id":XXXXX,
“page_count”:X, “total_records”:XXX,
"pay_id_txn_details_list":{
"pay_id_txn_details"[{
"amt_payable":35.88, "bill_email":"xx.xxx@xx.com", "fees":3.6, "bill_name":"Shashi", "order_no":29XX9917,
"currency":"INR", "amount":40,"tax":0.52,"ccavenue_ref_no":20XX00170631, "bank_ref_no":1452XXX407217,
"date_time":"2016-01-11 17:42:58.223","order_option_type":"OPTDBCRD", "txn_type":"Chargeback",
"sub_acc_id":""
}]
}
}
}
```

### Failure

```json
{
"pay_id_details_Result":{
"error_code":XXXXX,
"error_desc":"pay_id: Invalid Parameter",
"pay_id": XXXXX,
"total_records":0,
"page_count":0
}
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
