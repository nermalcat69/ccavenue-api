---
title: Pending Orders API
---

# Pending Orders API

Pending API call allows you to find the list of pending orders. Only confirmed orders are settled into the merchant's account. An order older than 12 days is automatically canceled. Once an order has been auto-canceled by the system, it cannot be confirmed.

You can optionally confirm only part of an order. Remember, you can do so only once. Remaining funds will be refunded to the credit card or debit card or net banking account that was originally charged.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or "JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or "JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "getPendingOrders". |
| reference_no (optional) | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| order_no (optional) | Unique Merchant order number for the pending order of the transaction. | AlphaNumeric with special characters (hyphen and underscore)(30). |
| order_bill_name (optional) | Name of the customer to find invoice details after placing orders. | Alphanumeric with special character (space, hyphen, apostrophe, underscore, dot)(60). |
| order_email (optional) | Email id of customer to send mail for the generate invoice. | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_bill_tel (optional) | Mobile number of the customer to send the generate invoice. | Numeric(10) |
| order_fraud_status (optional) | Type of fraud status. | String Possible Values are: 1) Value "High" denotes "High Risk" 2) Value "Low" denotes "Low Risk" 3) Value "NR" denotes "No Risk" 4) Value "GA" denotes "Go Ahead" 5) Value "NA" denotes "Not Applicable" |
| order_currency (optional) | Currency in which you processed the transaction. You can send the multiple currencies format. | String Example: INR – Indian Rupee, USD – United States Dollar, SGD – Singapore Dollar, GBP – Pound Sterling, EUR – Euro, official currency of Eurozone. Multiple currency format: INR\|USD\|GBP in XML & JSON request type and INR\|USD\|GBP in STRING request type. |
| order_type (optional) | Type of the order. | String Different types of Orders: 1) OT-INV denotes "Invoice" 2) OT-ORD denotes "Orders" 3) OT-ORDSC denotes "Shopping Cart Orders" 4) OT-PPAY denotes "Phone Pay" 5) OT-SNIP denotes "SNIP orders" |
| page_number (required) | A limited number of records are shared as part of the response. The total records & number of pages are shared as part of the response to enable subsequent calls. | Numeric(4) |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Pending_Orders_Query>
<order_no>XXXXXX</order_no>
<reference_no>XXXXXXX</reference_no>
<order_bill_name>XXXXX</order_bill_name>
<order_email>XXXX@XXXX.com</order_email>
<order_bill_tel>XXXXXXX</order_bill_tel>
<order_fraud_status>XX|XXXX|XXX</order_fraud_status>
<order_currency>XXX|XXX|XXX|XXX</order_currency>
<order_type>XX-XXX|XX-XXX</order_type>
<page_number>1</page_number>
</Pending_Orders_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"order_no": "XXXXXXX", "reference_no":
"XXXXXXX", "order_bill_name": "XXXXX",
"order_email": "XXXX@XXXXX.com",
"order_bill_tel": "XXXXXXXXXXX",
"order_fraud_status": "XX|XXXX|XXX",
"order_currency": "XXX|XXX|XXX|XXX",
"order_type": "XX|XX-XX",
"page_number": "1"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### Example STRING Request Format

```text
reference_no|order_no|order_bill_name|order_bill_tel|order_currency|order_currency
|order_currency|order_email|order_fraud_status|order_fraud_status
|order_fraud_status|order_type|order_type|order_type|page_number|
```

Example:

```text
XXXXXXX|XXXXXX|XXXXX|XXXXXXX|XXX|XXX|XXX|XXX|XXXX@XXXX.com|XX|XXXX|XXX|XX-
XXX|XX-XXX|1|
```

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
| days_left | Number of days left to pay order amount. | Numeric(3) |
| order_discount | This is Discount Value for the Order No. | Decimal(12,2). |
| order_fee_flat | Flat Fee for the Order No. | Decimal(12,2). |
| order_fee_perc | Provides the percentage fee for the same order No. | Decimal(12,2). |
| order_fee_perc_value | This attribute provides the percentage fee Value for the same order No. | Decimal(12,2). |
| order_fraud_status | Specify whether orders are valid or not. | String Possible Values are: 1) Value "High" denotes "High Risk" 2) Value "Low" denotes "Low Risk" 3) Value "NR" denotes "No Risk" 4) Value "GA" denotes "Go Ahead" 5) Value "NA" denotes "Not Applicable" |
| order_gross_amt | Total transaction amount. | Decimal(12,2). |
| order_ip | Customer IP Address (i.e. from where transaction is being initiated) | IP V-4 Supported. |
| order_no | Order No for the transaction. | AlphaNumeric with special characters (hyphen and underscore)(30). |
| order_notes | Order information you wish to provide. | AlphaNumeric with special characters (space, comma, dot, hyphen and underscore)(60). |
| days_left | Number of days left to pay order amount. | Numeric (4). |
| order_bank_mid | Unique merchant id provided by issuer bank to merchant for the transaction. | Numeric(16). |
| order_bank_ref_no | Unique reference number shared by Bank after successful transaction. | Numeric(25). |
| order_bank_response | Description about the transaction shared by the bank after transaction. | String |
| order_gtw_id | Unique payment option Bank name. | Alphabet(6) |
| order_card_name | Specify the card name for the transaction. | Possible value for card name is "VISA","MASTERCARD","AMEX","JCB","ECRD","DINERS CLUB","DSNV","CTBL","CVMS". |
| order_option_type | Specify the payment option type for the order. | String Possible value for payment option type is OPTCASHC-Cash card, OPTCRDC-Credit Card, OPTDBCRD-Debit Card, OPTEMI-EMI, OPTIVRS-IVRS, OPTMOBP-Mobile Payments, OPTNBK-Net Banking |
| order_card_type | Specify the card type used to pay order amount. | String Possible value for card type is Cash card, Credit Card, Debit Card, EMI, IVRS, Mobile Payments, Net Banking |
| order_risk_mitigation | Specify whether the current order on risk mitigation or not. | String(1) Possible value is "Y" or "N". |
| order_tax | Tax Amount for the Transaction. | Decimal (13,4) |
| order_tran_status | Transaction status for the order coming from bank's end. | String Possible value is TS-AUTA-Authorization Awaited, TS-AUTC-Authorization confirm, TS-AUTCR-Authorization confirmed on reconciliation, TS-AUTD-Authorization Declined, TS-AUTDR-Authorization Declined on reconciliation, TS-AUTFR-Authorization Fraud, TS-AUTFRR-Authorization Fraud on reconciliation, TS-AUTFRAM-Amt mismatch, TS-AUTFRCM-Currency mismatch, TS-AUTFRUT-Authorization fraud, TS-ABRTBNK-Aborted at bank's end. |
| order_type | Type of the order. | String Different types of Orders: 1) OT-INV denotes "Invoice" 2) OT-ORD denotes "Orders" 3) OT-ORDSC denotes "Shopping Cart Orders" 4) OT-PPAY denotes "Phone Pay" 5) OT-SNIP denotes "SNIP orders" |
| order_ship_address | Shipping Address for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| order_ship_city | Shipping city name for the orders. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_ship_country | Shipping country name for the orders. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_ship_email | Shipping email ID for the notifications of the transaction. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_ship_name | Shipping Name of the Customer for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_ship_state | Shipping state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_ship_tel | Telephone no for notifications of the transaction. | Numeric(10). |
| order_ship_zip | Order shipping address' pin code for the order. | Possible value for zip is AlphaNumeric with special characters (hyphen and space) (15). |
| order_status | Status of the order. It can be single or multiple. | String Possible values are: Aborted (transaction is cancelled by the User); Auto-Cancelled (transaction has not confirmed within 12 days hence auto cancelled by system); Auto-Reversed (two identical transactions for same order number, both were successful at bank's end but we got response for only one of them, then next day during reconciliation we mark one of the transaction as auto reversed); Awaited (transaction is processed from billing shipping page but no response is received); Cancelled (transaction is cancelled by merchant); Chargeback(); Invalid (Transaction sent to CCAvenue with Invalid parameters, hence could not be processed further); Fraud (we update this during recon, the amount is different at bank's end and at CCAvenue due to tampering); Initiated (transaction just arrived on billing shipping page and not processed further); Refunded (Transaction is refunded.); Shipped (transaction is confirmed); Successful; System refund (Refunded by CCAvenue for various findings of reversals by CCAvenue); Unsuccessful (transaction is not successful due to) |
| order_status_date_time | This is the latest date and time when order status is modified. | DateTime in IST (yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_TDS | Amount of TDS (tax deducted at source) for the Transaction. | Decimal(13,4). |
| reference_no | Unique CCAvenue reference no allocated to the transaction. | Numeric(25). |
| error_desc | Reason if search criteria did not find the orders for the transactions. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| page_count | Total pages available based on no_of_records in the request | Example: no_of_records sent in request was 100, total_records matching the lookup criteria were 1000, page_count will be 10 (total_records / no_of_records) rounded to the ceiling |
| total_records | Total no. of orders matching the lookup criteria |  |

### Example XML Response

#### Success Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Pending_Orders_Result error_code="">
<error_desc></error_desc>
<page_count>1</page_count>
<pending_Orders_List>
<pending_Orders
days_left="3"
order_TDS="0.0"
order_amt="1.0"
order_bank_mid="1234567890" order_bank_ref_no="289049"
order_bank_response="Approved"
order_bill_address="Room no1101,nearRailwaystationAmbad"
order_bill_city="Indore"
order_bill_country="India"
order_bill_email="xxxxxx.xxxx@xxxxxx.xxxx"
order_bill_name="Shashi"
order_bill_state="MP"
order_bill_tel="1234567890"
order_bill_zip="425001"
order_capt_amt="0.0"
order_card_name="Amex"
order_card_type="Credit Card"
order_curr="INR" order_date_time="2015-
04-13 10:59:05.517" order_discount="0.0"
order_fee_flat="0.0"
order_fee_perc="4.0"
order_fee_perc_value="0.04"
order_fraud_status="NA"
order_gross_amt="1.0"
order_gtw_id="PGT"
order_ip="192.168.2.182"
order_no="66885810"
order_notes="order will beshipped"
order_risk_mitigation="Y"
order_ship_address="room no.701nearbusstand"
order_ship_city="Hyderabad"
order_ship_country="India"
order_ship_name="Chaplin"
order_ship_state="Andhra"
order_ship_tel="1234567890"
order_ship_zip="425001"
order_status="Successful"
order_status_date_time="2015-04-13 10:59:53.217"
order_tax="0.0049"
order_tran_status="TS-AUTC"
order_type="OT-ORD"
reference_no="204000136232"/>
</pending_Orders_List>
<total_records>1</total_records>
</Pending_Orders_Result>
```

#### Failure Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Pending_Orders_Result error_code="51313">
<error_desc>Order List: Invalid Parameter</error_desc>
<page_count>1</page_count>
<total_records>1</total_records>
</Pending_Orders_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example JSON Response

#### Success Response

```json
{
"pending_Orders":[{
"reference_no":"204000136232",
"order_no":"66885810",
"order_type":"OT-ORD",
"order_curr":"INR",
"order_amt":1.0,
"order_date_time":"2015-04-13 10:59:05.517",
"order_bill_name":"Shashi",
"order_bill_address":"Room no 1101, near Railwaystation Ambad",
"order_bill_zip":"425001",
"order_bill_city":"Indore",
"order_bill_state":"MP",
"order_bill_tel":"12345687890",
"order_bill_email":"xxxxxxx@xxxxx.xxxx",
"order_bill_country":"India",
"order_ship_name":"Chaplin",
"order_ship_address":"room no.701nearbusstand",
"order_ship_country":"India",
"order_ship_tel":"1234567890",
"order_ship_city":"Hyderabad",
"order_ship_state":"Andhra",
"order_ship_zip":"425001",
"order_notes":"order will be shipped",
"order_ip":"192.168.2.182",
"order_status":"Successful",
"order_fraud_status":"NA",
"order_status_date_time":"2015-04-13 10:59:53.217",
"order_capt_amt":0.0,
"order_card_type":"Credit Card",
"order_card_name":"Amex",
"order_bank_mid":"xxxxxxxxx",
"order_fee_perc":4.0,
"order_fee_perc_value":0.04,
"order_fee_flat":0.0,
"order_gross_amt":1.0,
"order_discount":0.0,
"order_tax":0.0049,
"order_bank_ref_no":"xxxxxxxx",
"order_gtw_id":"PGT",
"order_bank_response":"Approved",
"order_risk_mitigation":"Y",
"days_left":"3",
"order_tran_status":"TS-AUTC",
"order_TDS":0.0,
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
"page_count":1,
"total_records":1,
"error_desc":"Order List: Invalid Parameter",
"error_code":"51313"
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

### Example STRING Response

#### Success Response Format

```text
page_count|total_records|reference_no|order_no|order_status|order_trans_status|order_type|o
rder_capt_amt|order_discount|order_fee_flat|order_fee_perc|order_fee_perc_value|order_gross
_amt|order_tax|days_left|order_bank_mid|order_bank_ref_no|order_bank_response|order_bill_
name|order_bill_email|order_bill_address|order_bill_city|order_bill_state|order_bill_country|ord
er_bill_tel|order_bill_zip|order_card_name|order_card_type|order_curr|order_date_time|order_
delivery_details|order_fraud_status|order_gtw_id|order_ip|order_misc_id|order_notes|order_ris
k_mitigation|order_ship_name|order_ship_email|order_ship_address|order_ship_city|order_ship
_state|order_ship_country|order_ship_tel|order_ship_zip|order_status_date_time^|
```

Example:

```text
1|1|204000136232|66885810|Successful|TS-AUTC|OT-
ORD|0.0|0.0|0.0|4.0|0.04|1.0|0.0049|3|1234567890|289049|Approved|Shashi|xxxxxx.xx@xxxx
xx.xxxx|Room no 1101, near Railway station
Ambad|Indore|MP|India|1234567890|425001|Amex|Credit Card|INR|2015-04-13
10:59:05.517||NA|PGT|192.168.2.182||order will be shipped|Y|Chaplin||room no.701 near bus
stand|Hyderabad|Andhra|India|1236547892|425001|2015-04-13 10:59:53.217|
```

#### Failure Response

Format: `page_no|total_no_of_records|error_code|error_desc|`

Example: `0|0|51313|Order List: Invalid Parameter|`

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
