---
title: Status API
---

# Status API

The Status API call can be used to ascertain the status of a transaction/order. You can use this call if you have not received status/information for a transaction request. It can also be used as an additional security measure to reconfirm the parameters posted back.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or "JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or "JSON" or "STRING". |
| command (required) | Command value specifies the API calls. You must send this with each request. | Value is "orderStatusTracker". |
| reference_no (conditional) | CCAvenue reference no. allocated to the transaction. Reference number is required if you do not share order_no. | Numeric(25). |
| order_no (conditional) | This is the merchant reference number for the transaction. Order number is required if you do not share reference_no. | AlphaNumeric with special characters (hyphen and underscore)(30). |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Status_Query order_no="33231644" reference_no="225013271813"/>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"reference_no": "225013271813",
"order_no": "33231644"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example STRING Request

Format: `reference_no|order_no|`

Example: `225013271813|33231644|`

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text represents the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| order_amt | Amount for the transaction. | Decimal(12,2). |
| order_bill_address | Order billing address details for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315). |
| order_bill_city | Order billing City name for the order. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_bill_country | Order billing Country for the Order. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_bill_email | Email Address of the Order for notifications. | Possible value for email ID is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_bill_name | Order billing name for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_bill_state | Order billing state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_bill_tel | Order billing telephone no. for the order. | Numeric(10) |
| order_bill_zip | Order billing address's pincode for the order. | Possible value for zip is Alphanumeric with special characters (hyphen and space) (15). |
| order_capt_amt | Captured amount for the transaction. Captured amount can be full or partial of the transaction amount. | Decimal(12,2). |
| order_curr | Possible order Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee, USD – United States Dollar, SGD – Singapore Dollar, GBP – Pound Sterling, EUR – Euro, official currency of Eurozone |
| order_date_time | Order Generated Date & Time. | DateTime in IST (yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_device_type | This is the type of device using which the transaction was processed. | Possible value for device type is IVRS/MOB/PC. |
| order_discount | This is Discount Value for the Order No. | Decimal(12,2). |
| order_fee_flat | Flat Fee for the Order No. | Decimal(12,2). |
| order_fee_perc | Provides the percentage fee for the same order No. | Decimal(12,2). |
| order_fee_perc_value | This attribute provides the percentage fee Value for the same order No. | Decimal(12,2). |
| order_fraud_status | Specify whether orders are valid or not. | String Possible Values are: 1) Value "High" denotes "High Risk" 2) Value "Low" denotes "Low Risk" 3) Value "NR" denotes "No Risk" 4) Value "GA" denotes "Go Ahead" 5) Value "NA" denotes "Not Applicable" |
| order_gross_amt | Total transaction amount. | Decimal(12,2). |
| order_ip | Customer IP Address (i.e. from where transaction is being initiated) | IP V-4 Supported. |
| order_no | Order No. for the transaction. | Alphanumeric with special characters (hyphen and underscore)(30). |
| order_notes | Order information you wish to provide. | Alphanumeric with special characters (space, comma, dot, hyphen and underscore)(60). |
| order_ship_address | Shipping Address for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| order_ship_city | Shipping city name for the orders. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_ship_country | Shipping country name for the orders. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_ship_email | Shipping email ID for the notifications of the transaction. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_ship_name | Shipping Name of the Customer for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_ship_state | Shipping state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_ship_tel | Telephone no. for notifications of the transaction. | Numeric(10). |
| order_ship_zip | Order shipping address's pincode for the order. | Possible value for zip is Alphanumeric with special characters (hyphen and space) (15). |
| order_status | Status of the order. It can be single or multiple. | String Possible values are: Aborted (transaction is cancelled by the User); Auto-Cancelled (transaction has not confirmed within 12 days hence auto cancelled by system); Auto-Reversed (two identical transactions for same order number, both were successful at bank's end but we got response for only one of them, then next day during reconciliation we mark one of the transaction as auto reversed); Awaited (transaction is processed from billing shipping page but no response is received); Cancelled (transaction is cancelled by merchant); Chargeback(); Invalid (Transaction sent to CCAvenue with Invalid parameters, hence could not be processed further); Fraud (we update this during recon, the amount is different at bank's end and at CCAvenue due to tampering); Initiated (transaction just arrived on billing shipping page and not processed further); Refunded (Transaction is refunded.); Shipped (transaction is confirmed); Successful; System refund (Refunded by CCAvenue for various findings of reversals by CCAvenue); Unsuccessful (transaction is not successful); Timeout (The CCAvenue payment page has a Timeout set at 15 minutes per session) |
| order_status_date_time | This is the latest date and time when order status is modified. | DateTime in IST (yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_TDS | Amount of TDS (tax deducted at source) for the Transaction. | Decimal (13,4) |
| order_tax | Tax Amount for the Transaction. | Decimal (13,4) |
| reference_no | CCAvenue reference no. allocated to the transaction. | Numeric(25). |
| order_bank_ref_no | Unique reference number shared by Bank after successful transaction. | Numeric(25). |
| order_bank_response | Description about the transaction shared by the bank after transaction. | String |
| order_gtw_id | Unique payment option Bank name. | Alphabet(6) |
| order_card_name | Specify the card name for the transaction. | Possible value for card name is "VISA","MASTERCARD","AMEX","JCB","DINERS CLUB". |
| order_option_type | Specify the payment option type for the order. | String Possible value for payment option type is: OPTCASHC-Cash card, OPTCRDC-Credit Card, OPTDBCRD-Debit Card, OPTEMI-EMI, OPTIVRS-IVRS, OPTMOBP-Mobile Payments, OPTNBK-Net Banking |
| param_value1 | Temp parameters value update by merchant at transaction time for further use. | String |
| param_value2 | Temp parameters value update by merchant at transaction time for further use. | String |
| param_value3 | Temp parameters value update by merchant at transaction time for further use. | String |
| param_value4 | Temp parameters value update by merchant at transaction time for further use. | String |
| param_value5 | Temp parameters value update by merchant at transaction time for further use. | String |
| page_count | Total pages available based on no_of_records in the request. | Example: no_of_records sent in request was 100, total_records matching the lookup criteria were 1000, page_count will be 10 (total_records / no_of_records) rounded to the ceiling. |
| total_records | Total no. of orders matching the lookup criteria. |  |
| error_desc | Reason if search criteria did not find the orders for the transactions. | String. Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String. Please refer below table for failure message. |

### Example XML Response

#### Success Response

```xml
<?xml version='1.0' encoding='UTF-8'?>
<Order_Status_Result error_code="">
<error_desc></error_desc>
<order_TDS>0.0</order_TDS>
<order_amt>1.0</order_amt>
<order_bank_ref_no>035944</order_bank_ref_no>
<order_bank_response>Transaction Successful</order_bank_response>
<order_bill_address>Room no1101,nearRailwaystation
Ambad</order_bill_address>
<order_bill_city>Indore</order_bill_city>
<order_bill_country>India</order_bill_country>
<order_bill_email>chandrakant.patil@avenues.info</order_bill_email>
<order_bill_name>Shashi</order_bill_name>
<order_bill_state>MP</order_bill_state>
<order_bill_tel>9595226054</order_bill_tel>
<order_bill_zip>425001</order_bill_zip>
<order_capt_amt>0.0</order_capt_amt>
<order_card_name>MasterCard</order_card_name>
<order_currncy>INR</order_currncy>
<order_date_time>2015-09-16 15:05:55.573</order_date_time>
<order_delivery_details></order_delivery_details>
<order_device_type>PC</order_device_type>
<order_discount>0.0</order_discount>
<order_fee_flat>0.0</order_fee_flat>
<order_fee_perc>2.3</order_fee_perc>
<order_fee_perc_value>0.02</order_fee_perc_value>
<order_fraud_status>NA</order_fraud_status>
<order_gross_amt>1.0</order_gross_amt>
<order_gtw_id>ICICI</order_gtw_id>
<order_ip>192.168.2.182</order_ip>
<order_no>66068092</order_no>
<order_notes>order will be shipped</order_notes>
<order_option_type>OPTCRDC</order_option_type>
<order_ship_address>Room no1101,nearRailwaystation
Ambad</order_ship_address>
<order_ship_city>Indore</order_ship_city>
<order_ship_country>India</order_ship_country>
<order_ship_email></order_ship_email>
<order_ship_name>Shashi</order_ship_name>
<order_ship_state>MP</order_ship_state>
<order_ship_tel>9595226054</order_ship_tel>
<order_ship_zip>425001</order_ship_zip>
<order_status>Successful</order_status>
<order_status_date_time>2015-09-16 15:06:13.243</order_status_date_time>
<order_tax>0.0028</order_tax>
<param_value1>Mobile No9595226054</param_value1>
<param_value2>Flight from Dehli</param_value2>
<param_value3>ToMumbai</param_value3>
<param_value4>Mobile No9595226054</param_value4>
<param_value5>Mobile No9595226054</param_value5>
<reference_no>204000163469</reference_no>
<status>0</status>
</Order_Status_Result>
```

#### Failure Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Status_Result error_code="51313">
<error_desc>Order List: Invalid Parameter</error_desc>
<status>1</status>
</Order_Status_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example JSON Response

#### Success Response

```json
{
"reference_no":"204000163469",
"order_no":"66068092",
"order_currncy":"INR",
"order_amt":1.0,
"order_date_time":"2015-09-16 15:05:55.573",
"order_bill_name":"Shashi",
"order_bill_address":"Room no 1101, near Railwaystation Ambad",
"order_bill_zip":"425001",
"order_bill_tel":"9595226054",
"order_bill_email":"chandrakant.patil@avenues.info",
"order_bill_country":"India",
"order_ship_name":"Shashi",
"order_ship_address":"Room no1101, near RailwaystationAmbad",
"order_ship_country":"India",
"order_ship_tel":"9595226054",
"order_bill_city":"Indore",
"order_bill_state":"MP",
"order_ship_city":"Indore",
"order_ship_state":"MP",
"order_ship_zip":"425001",
"order_ship_email":"",
"order_notes":"order will be shipped",
"order_ip":"192.168.2.182",
"order_status":"Successful",
"order_fraud_status":"NA",
"order_status_date_time":"2015-09-1615:06:13.243",
"order_capt_amt":0.0,
"order_card_name":"MasterCard",
"order_delivery_details":"",
"order_fee_perc":2.3,
"order_fee_perc_value":0.02,
"order_fee_flat":0.0,
"order_gross_amt":1.0,
"order_discount":0.0,
"order_tax":0.0028,
"order_bank_ref_no":"035944",
"order_gtw_id":"ICICI",
"order_bank_response":"Transaction Successful",
"order_option_type":"OPTCRDC", "order_TDS":0.0,
"order_device_type":"PC",
"param_value1":"Mobile No9595226054",
"param_value2":"Flight from Dehli",
"param_value3":"ToMumbai",
"param_value4":"Mobile No9595226054",
"param_value5":"Mobile No9595226054",
"error_desc":"",
"status":0,
"error_code":""
}
```

#### Failure Response

```json
{
"error_desc":"Order List: Invalid Parameter",
"error_code":"51313",
"status":1
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example STRING Response

#### Success Response Format

```text
status|order_status|reference_no|order_bank_ref_no|order_bank_response|
order_bill_name|order_bill_email|order_bill_address|order_bill_city|order_bill_state|order_bill_co
untry|order_bill_telephone_no|order_bill_city_zip|order_card_name|order_currency|order_date_
time|order_delivery_details|order_device_type|order_fraud_status|order_gateway_id|order_iP|or
der_no| order_notes|order_option_type|order_shiping_name|order_ship_email|order_ship_address|order
_ship_city|order_ship_state|order_ship_country|order_ship_telephone_no|order_ship_zip|order_
status_date_time|order_TDS|order_amount|order_capture_amount|order_discount|order_fee_fla
t|order_fee_perc|order_fee_perc_value|order_gross_amount|order_tax|param_value1|param_value
2|param_value3|param_value4|param_value5|
```

Example:

```text
0|Successful|204000163514|068406|Transaction Successful|Shashi|gzpmgexii@i.softbank.jp|Room no
1101, near Railway station Ambad|Indore|MP|India|9595226054|425001|MasterCard|INR|2015-
09-18 12:53:40.407||PC|NA|ICICI|192.168.2.182|64807533|order will be
shipped|OPTCRDC|Shashi||Room no 1101, near Railway station
Ambad|Indore|MP|India|9595226054|425001|2015-09-18
12:54:15.357|0.0|1.0|0.0|0.0|0.0|2.3|0.02|1.0|0.0028|Mobile No9595226054|Flight from
Dehli|ToMumbai|Mobile No9595226054|Mobile No9595226054|
```

#### Failure Response

Format: `status|error_code|error_desc|`

Example: `1|51313|Order List: Invalid Parameter|`

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
