---
title: Order Lookup API
---

# Order Lookup API

The Lookup API call can be used to extract transaction details for a certain set of transactions. The functionality works similar to a search feature.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or "JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or "JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "orderLookup". |
| reference_no (optional) | Unique CCAvenue reference number for the transaction. | Numeric(25). |
| from_date (required) | Provide the Start Date to find the orders list. | Date must be in IST (dd-mm-yyyy) format. |
| to_date (optional) | Provide the end date to search the orders between from date and to date. It should be greater than or equal to from date. | Date must be in IST (dd-mm-yyyy) format. |
| order_currency (optional) | Currency in which you processed the transaction. You can send the multiple currencies format. | String Example: INR – Indian Rupee, USD – United States Dollar, SGD – Singapore Dollar, GBP – Pound Sterling, EUR – Euro, official currency of Eurozone. Multiple currency format: INR\|USD\|GBP in JSON & XML request type but INR\|USD\|GBP in STRING request type |
| order_email (optional) | Email address used to purchase the order. | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_fraud_status (optional) | Specify whether orders are valid or not. | String Possible Values are: 1) Value "High" denotes "High Risk" 2) Value "Low" denotes "Low Risk" 3) Value "NR" denotes "No Risk" 4) Value "GA" denotes "Go Ahead" 5) Value "NA" denotes "Not Applicable" |
| order_min_amount (optional) | Minimum amount limit for search criteria for the transaction. | Decimal(12,2). |
| order_max_amount (optional) | Maximum amount limit for search criteria for the transaction. | Decimal(12,2). |
| order_name (optional) | Customer name for the transaction. | Alphanumeric with special character (space, hyphen, apostrophe, underscore, dot)(60). |
| order_no (optional) | Unique merchant order no for the transaction. | AlphaNumeric with special characters (hyphen and underscore)(60). |
| order_payment_type (optional) | Payment Mode for the transaction. It can be single or multiple. | String Below are the Possible Values: 1) CASHC (Cash Card Payment Type) 2) CRDC (Credit Card Payment Type) 3) DBCRD (Debit Card Payment Type) 4) MOBP (Mobile Payment Type) 5) NBK (Net Banking). Multiple values format: MOBP\|NBK for JSON & XML request type but MOBP\|NBK for STRING request type. |
| order_status (optional) | Status of the order. It can be single or multiple. | String Possible values are: Aborted (transaction is cancelled by the User); Auto-Cancelled (transaction has not confirmed within 12 days hence auto cancelled by system); Auto-Reversed (two identical transactions for same order number, both were successful at bank's end but we got response for only one of them, then next day during reconciliation we mark one of the transaction as auto reversed); Awaited (transaction is processed from billing shipping page but no response is received); Cancelled (transaction is cancelled by merchant); Chargeback(); Invalid (Transaction sent to CCAvenue with Invalid parameters, hence could not be processed further); Fraud (we update this during recon, the amount is different at bank's end and at CCAvenue due to tampering); Initiated (transaction just arrived on billing shipping page and not processed further); Refunded (Transaction is refunded.); Shipped (transaction is confirmed); Successful; System refund (Refunded by CCAvenue for various finds of reversals by CCAvenue); Unsuccessful (transaction is not successful due to) |
| order_type (optional) | Type of the order. | String Different types of Orders: 1) OT-INV denotes "Invoice" 2) OT-ORD denotes "Orders" 3) OT-ORDSC denotes "Shopping Cart Orders" 4) OT-PPAY denotes "Phone Pay" 5) OT-SNIP denotes "SNIP orders" |
| order_bill_tel (optional) | Customer mobile number for the transaction. | Numeric(10). |
| page_number (required) | A limited number of records are shared as part of the response. The total records & number of pages are shared as part of the response to enable subsequent calls. | Numeric(4). |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Lookup_Query>
<order_no>xxxxxxx</order_no>
<reference_no>xxxxxxxxx</reference_no>
<order_email>xxx@xxxxx.com</order_email>
<order_bill_tel>xxxxxxxxxxx</order_bill_tel>
<order_country>xxxxx</order_country>
<from_date>xx-xx-xxxx</from_date>
<to_date>xx-xx-xxxx</to_date>
<order_max_amount>xx.xx</order_max_amount>
<order_min_amount>xx.xx</order_min_amount>
<order_status>xxxxxxx</order_status>
<order_fraud_status>xxxx</order_fraud_status>
<order_currency>xxx</order_currency>
<order_type>xx-xxx</order_type>
<order_payment_type>xxxxxx</order_payment_type>
<page_number>1</page_number>
</Order_Lookup_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"order_no": "xxx",
"reference_no":"xxxxx",
"order_email": "xxx@xxxx.com",
"order_bill_tel": "xxxxxxxxx",
"order_country": "xxxxxxx",
"from_date": "xx-xx-xxxx",
"to_date": "xx-xx-xxxx",
"order_max_amount": "xx.xx",
"order_min_amount": "xx.xx",
"order_status": "xxxxx",
"order_fraud_status": "xxxx",
"order_currency": "xxx",
"order_type": "xxxxxx",
"order_payment_type": "xxxxx",
"page_number":1
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example STRING Request

Format:

```text
reference_no|order_no|from_date|to_date|order_status|order_bill_tel|order_country|order_ema
il|order_fraud_status|order_max_amount|order_min_amount|order_name|order_payment_type|
order_type|order_currency|page_number|
```

Example: `||21-03-2015|03-04-2015||||||||||||1|`

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text represents the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| order_amt | Amount for the transaction. | Decimal(12,2). |
| order_bill_address | Order billing address details for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| order_bill_city | Order billing City name for the order. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_bill_country | Order billing country for the Order. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_bill_email | Email Address of the Order for notifications. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_bill_name | Order billing name for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_bill_state | Order billing state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_bill_tel | Order billing telephone no for the order. | Numeric(10) |
| order_bill_zip | Order billing address's pincode for the order. | Possible value for zip is AlphaNumeric with special characters (hyphen and space) (15). |
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
| order_no | Order No for the transaction. | AlphaNumeric with special characters (hyphen and underscore)(30). |
| order_notes | Order information you wish to provide. | AlphaNumeric with special characters (space, comma, dot, hyphen and underscore)(60). |
| order_ship_address | Shipping Address for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| order_ship_city | Shipping city name for the orders. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_ship_country | Shipping country name for the orders. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_ship_email | Shipping email ID for the notifications of the transaction. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_ship_name | Shipping Name of the Customer for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_ship_state | Shipping state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_ship_tel | Telephone no for notifications of the transaction. | Numeric(10). |
| order_ship_zip | Order shipping address's pincode for the order. | Possible value for zip is AlphaNumeric with special characters (hyphen and space) (15). |
| order_status | Status of the order. It can be single or multiple. | String Possible values are: Aborted (transaction is cancelled by the User); Auto-Cancelled (transaction has not confirmed within 12 days hence auto cancelled by system); Auto-Reversed (two identical transactions for same order number, both were successful at bank's end but we got response for only one of them, then next day during reconciliation we mark one of the transaction as auto reversed); Awaited (transaction is processed from billing shipping page but no response is received); Cancelled (transaction is cancelled by merchant); Chargeback(); Invalid (Transaction sent to CCAvenue with Invalid parameters, hence could not be processed further); Fraud (we update this during recon, the amount is different at bank's end and at CCAvenue due to tampering); Initiated (transaction just arrived on billing shipping page and not processed further); Refunded (Transaction is refunded.); Shipped (transaction is confirmed); Successful; System refund (Refunded by CCAvenue for various find of reversals by CCAvenue); Unsuccessful (transaction is not successful due to) |
| order_status_date_time | This is the latest date and time when order status is modified. | DateTime in IST (yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_TDS | Amount of TDS (tax deducted at source) for the Transaction. | Decimal(13,4). |
| order_tax | Tax Amount for the Transaction. | Decimal (13,4) |
| reference_no | CCAvenue reference no allocated to the transaction. | Numeric(25). |
| order_bank_ref_no | Unique reference number share by Bank after successful transaction. | Numeric(25). |
| order_bank_response | Description about the transaction shared by the bank after transaction. | String |
| order_gtw_id | Unique payment option Bank name. | Alphabet(6) |
| order_card_name | Specify the card name for the transaction. | Possible value for card name is "VISA","MASTERCARD","AMEX","JCB","ECRD","DINERS CLUB","DSNV","CTBL","CVMS". |
| order_option_type | Specify the payment option type for the order. | String Possible value for payment option type is OPTCASHC-Cash card, OPTCRDC-Credit Card, OPTDBCRD-Debit Card, OPTEMI-EMI, OPTIVRS-IVRS, OPTMOBP-Mobile Payments, OPTNBK-Net Banking |
| Merchant_param1 | Temp parameters value update by merchant at transaction time for further use. | String |
| Merchant_param2 | Temp parameters value update by merchant at transaction time for further use. | String |
| Merchant_param3 | Temp parameters value update by merchant at transaction time for further use. | String |
| Merchant_param4 | Temp parameters value update by merchant at transaction time for further use. | String |
| Merchant_param5 | Temp parameters value update by merchant at transaction time for further use. | String |
| error_desc | Reason if search criteria did not find the orders for the transactions. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| page_count | Total pages available based on no_of_records in the request | Example: no_of_records sent in request was 100, total_records matching the lookup criteria were 1000, page_count will be 10 (total_records / no_of_records) rounded to the ceiling |
| total_records | Total no. of orders matching the lookup criteria |  |

### Example XML Response

#### Success Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Lookup_Result error_code="">
<error_desc></error_desc>
<order_Status_List>
<order order_TDS="0.0"
order_amt="1.0"
order_bank_response="Invalid Credentials"
order_bill_address="Room no1101,nearRailwaystationAmbad"
order_bill_city="Indore"
order_bill_country="India"
order_bill_email="xxxxx.xxx@xxxxx.xxxx"
order_bill_name="Shashi" order_bill_state="MP"
order_bill_tel="1234567890"
order_bill_zip="425001"
order_capt_amt="0.0"
order_card_name="MasterCard"
order_currncy="INR" order_date_time="2015-
03-31 11:20:44.47" order_device_type="PC"
order_discount="0.0"
order_fee_flat="0.0"
order_fee_perc="12.0"
order_fee_perc_value="0.12"
order_fraud_status="NA"
order_gross_amt="1.0"
order_gtw_id="SBI"
order_ip="192.168.2.182"
order_no="45289752"
order_notes="order will be shipped"
order_option_type="OPTCRDC"
order_ship_address="Roomno1101,nearRailwaystationAmbad"
order_ship_city="Indore"
order_ship_country="India"
order_ship_name="Shashi"
order_ship_state="MP"
order_ship_tel="1234567890"
order_ship_zip="425001"
order_status="Unsuccessful"
order_status_date_time="2015-03-31 11:21:09.99"
order_tax="0.0148"
reference_no="204000134595"/>
</order_Status_List>
<page_count>1</page_count>
<total_records>1</total_records>
</Order_Lookup_Result>
```

#### Failure Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Lookup_Result error_code="51313">
<error_desc>Order List: Invalid Parameter</error_desc>
<page_count>0</page_count>
<total_records>0</total_records>
</Order_Lookup_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example JSON Response

#### Success Response

```json
{
"order_Status_List":[{
"reference_no":204000134595,
"order_no":"45289752",
"order_currncy":"INR",
"order_amt":1.0,
"order_date_time":"2015-03-31 11:20:44.47",
"order_bill_name":"Shashi",
"order_bill_address":"Room no 1101, near Railwaystation Ambad",
"order_bill_zip":"425001",
"order_bill_tel":"1234567890",
"order_bill_email":"xxxx.xxxx@xxxx.xxxx",
"order_bill_country":"India",
"order_ship_name":"Shashi",
"order_ship_address":"Room no1101, near RailwaystationAmbad",
"order_ship_country":"India",
"order_ship_tel":"1234567890",
"order_bill_city":"Indore",
"order_bill_state":"MP",
"order_ship_city":"Indore",
"order_ship_state":"MP",
"order_ship_zip":"425001",
"order_notes":"order will be shipped",
"order_ip":"192.168.2.182",
"order_status":"Unsuccessful",
"order_fraud_status":"NA",
"order_status_date_time":"2015-03-31 11:21:09.99",
"order_capt_amt":0.0,
"order_card_name":"MasterCard",
"order_fee_perc_value":0.12, "order_fee_perc":12.0,
"order_fee_flat":0.0,
"order_gross_amt":1.0,
"order_discount":0.0,
"order_tax":0.0148,
"order_TDS":0.0,
"order_gtw_id":"SBI",
"order_bank_response":"Invalid Credentials",
"order_option_type":"OPTCRDC",
"order_device_type":"PC"
Merchant_param1":"Mobile No9595226054", "
Merchant_param2":"Flight from Dehli", "
Merchant_param3":"ToMumbai", "
Merchant_param4":"Mobile No9595226054", "
Merchant_param5":"Mobile No9595226054",
}],
"page_count":1,
"total_records":1,
"error_desc":"",
"error_code":""
}
```

#### Failure Response

```json
{
"page_count":0,
"total_records":0,
"error_desc":"Order List: Invalid Parameter",
"error_code":"51313"
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example STRING Response

#### Success Response Format

```text
page_count|total_records|reference_no|order_no|order_amount|order_status|order_bank_ref_n
o|order_bank_response|order_card_name|order_currancy|order_date_time|order_delivery_detai
ls|order_device_type|order_fraud_status|order_gateway_id|order_ip|order_notes|order_option_
type|order_bill_name|order_bill_address|order_bill_city|order_bill_state|order_bill_country|orde
r_bill_zip|order_bill_tel|order_bill_email|order_ship_name|order_ship_address|order_ship_city|o
rder_ship_state|order_ship_county|order_ship_zip|order_ship_tel|order_ship_email|order_captu
re_amount|order_discount|order_gross_amount|order_fee_flat|order_fee_perc|order_fee_perc_
value^||Merchant_param1|Merchant_param2|Merchant_param3|Merchant_param4|
Merchant_param5|
```

Example (Successful Response):

```text
1|1|204000134595|45289752|1.0|Unsuccessful||Invalid Credentials|MasterCard|INR|2015-03-31
11:20:44.47||PC|NA|SBI|192.168.2.182|order will be shipped|OPTCRDC|Shashi|Room no 1101, near Railway
station Ambad|Indore|MP|India|425001|9595226054|xxxxx.xxxx@xxxxxx.xxxx|Shashi|Room no 1101, near
Railway station Ambad|Indore|MP|India|425001|1234567890||0.0|0.0|1.0|0.0|12.0|0.12| Mobile
No9595226054|Flight from Dehli|ToMumbai|Mobile No9595226054|Mobile No9595226054|
```

#### Failure Response

Format: `page_no|total_no_of_records|error_code|error_desc|`

Example: `0|0|51313|Order List: Invalid Parameter|`

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
