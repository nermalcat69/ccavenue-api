---
title: Invoice Lookup API
---

# Invoice Lookup API

Invoice lookup API call is used to find the list of all invoices.

## Request Parameters

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchants registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns response in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or " JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "invoiceList". |
| from_date (conditional) | Mandatory along with to_date if no other criteria mentioned | Date must be dd-mm-yyyy format. |
| to_date (conditional) | Mandatory along with from_date if no other criteria mentioned | Date must be dd-mm-yyyy format. |
| max_amount (optional) | Max amount of the invoice to be searched | Decimal(12,2) |
| min_amount (optional) | Min amount of the invoice to be searched | Decimal(12,2) |
| created_by (optional) | Unique identification of the merchant for the generate invoice. | String(Unique id of Merchant) |
| mobile_no (optional) | Customer mobile number for the generate invoice. | Numbers(10) |
| email_id (optional) | Customer email id for the generate invoice. | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| reference_no (optional) | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| invoice_id (optional) | Unique CCAvenue bill id for the generate invoice. | Numeric value(25) |
| invoice_type (optional) | Provide only possible value of the invoice type. | The possible values for invoice type is quick/invoice/recurring |
| page_no (required) | The default value of page no is 1. | Number(1) |

**Request:**

### XML Format

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_List_Query>
<from_date>10-09-2014</from_date>
<to_date>11-09-2014</to_date>
<max_amt>12.00</max_amt>
<min_amt>1.00</min_amt>
<created_by>xxx</created_by>
<invoice_email>xxx@xx.xxx</invoice_email>
<invoice_mobile_no>1234567890</invoice_mobile_no>
<reference_no>1234</reference_no>
<reference_no>1234</reference_no>
<invoice_id>321</invoice_id>
<invoice_no>345678</invoice_no>
<invoice_type>TASK/ITEM</invoice_type>
<invoice_type_name>Task</invoice_type_name>
<page_count>1</page_count>
</Invoice_List_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### JSON Format

```json
{
"from_date":"10-10-2014",
"to_date":"11-10-2014",
"max_amt":"10.00",
"min_amt":"1.00",
"created_by":"xxx",
"invoice_email":"xxxx@xxx.com",
"invoice_mobile_no":"1234569871",
"reference_no":"123654",
"invoice_id":"123",
"invoice_no":"147852",
"invoice_type":"item/task",
"invoice_type_name":"task",
"page_count":"1"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

### String Format

Format: FromDate|ToDate|max_amount|min_amount|created_by|mobile_no|email_id|reference_no|invoice_id|invoice_no|invoice_type|invoice_type_name|page_no|

```text
11-10-2014|12-10-2014|10.00|1.00|xxxx|1236547895|xxxx@xx.com|123654789|741258|45698741|task|FIRST|1|
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plaintext representing the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| Invoice_ID | Unique CCAvenue bill id for the generate invoice. | Numeric(25). |
| Invoice_ref_no | Merchant identifier for the Invoice | Alphanumeric with special characters(hyphen and underscore)(25). |
| Invoice_created_by | Unique merchant ID for the generate invoice. | String(70). |
| order_no | Order No for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| order_amt | Amount for the transaction. | Decimal(12,2). |
| order_bill_address | Order billing address details for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| order_bill_city | Order billing City name for the order. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_bill_country | Order billing country for the Order. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_bill_email | Email Address of the Order for notifications. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| order_bill_name | Order billing name for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_bill_state | Order billing state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_bill_tel | Order billing telephone no for the order. | Numeric(10) |
| order_bill_zip | Order billing address' pincode for the order. | Possible value for zip is AlphaNumeric with special characters(hyphen and space) (15). |
| order_capt_amt | Captured amount for the transaction. Captured amount can be full or partial of the transaction amount. | Decimal (12,2) |
| order_curr | Possible order Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP – Pound Sterling EUR – Euro, official currency of Eurozone |
| order_date_time | Order Generated Date & Time. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_device_type | This is the type of device using which the transaction was processed. | Possible value for device type is IVRS/MOB/PC. |
| order_discount | This is Discount Value for the Order No. | Decimal(12,2). |
| order_fee_flat | Flat Fee for the Order No. | Decimal(12,2). |
| order_fee_perc | Provides the percentage fee for the same order No. | Decimal(12,2). |
| order_fee_perc_value | This attribute provides the percentage fee Value for the same order No. | Decimal(12,2). |
| order_fraud_status | Specify whether orders are valid or not. | String Possible Values are: 1) Value "High" denotes "High Risk" 2) Value "Low" denotes "Low Risk" 3) Value "NR" denotes "No Risk" 4) Value "GA" denotes "Go Ahead" 5) Value "NA" denotes "Not Applicable" |
| order_gross_amt | Total transaction amount. | Decimal(12,2). |
| order_ip | Customer IP Address (i.e. from where transaction is being initiated) | IP V-4 Supported. |
| order_no | Order No for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| order_notes | Order information you wish to provide. | AlphaNumeric with special characters(space, comma, dot, hyphen and underscore)(60). |
| order_ship_address | Shipping Address for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| order_ship_city | Shipping city name for the orders. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_ship_country | Shipping country name for the orders. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_ship_email | Shipping email ID for the notifications of the transaction. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_ship_name | Shipping Name of the Customer for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_ship_state | Shipping state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_ship_tel | Telephone no for notifications of the transaction. | Numeric(10). |
| order_ship_zip | Order shipping address' pin code for the order. | Possible value for zip is AlphaNumeric with special characters(hyphen and space) (15). |
| order_status | Status of the order. It can be single or multiple. See possible values below. | String |
| order_status_date_time | This is the latest date and time when order status is modified. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_TDS | Amount of TDS (tax deducted at source) for the Transaction. | Decimal(13,4). |
| reference_no | Unique CCAvenue reference no for the transaction. | Numeric(25). |
| error_desc | This Attribute contains the description of the failure request processing. When status is 1 then this attribute will generate the reason for failure. | Please refer below table for the failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| page_count | Total pages available based on no_of_records in the request | Numeric(25). |
| total_records | Total no. of orders matching the lookup criteria. |  |

**order_status possible values:**

String. Possible values are:

- Aborted (transaction is cancelled by the User)
- Auto-Cancelled (transaction has not confirmed within 12 days hence auto cancelled by system)
- Auto-Reversed (two identical transactions for same order number, both were successful at bank's end but we got response for only one of them, then next day during reconciliation we mark one of the transaction as autoreversed)
- Awaited (transaction is processed from billing shipping page but no response is received)
- Cancelled (transaction is cancelled by merchant)
- Chargeback()
- Invalid (Transaction sent to CCAvenue with Invalid parameters, hence could not be processed further)
- Fraud (we update this during recon, the amount is different at bank's end and at CCAvenue due to tampering)
- Initiated (transaction just arrived on billing shipping page and not processed further)
- Refunded (Transaction is refunded.)
- Shipped (transaction is confirmed)
- Successful
- System refund (Refunded by CCAvenue for various find of reversals by CCAvenue)
- Unsuccessful (transaction is not successful)

## Example XML Response

### Success

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_List_Result error_desc="" error_code=”” error_desc=””>
<invoice_List>
<invoice
invoice_Created_By="API"
invoice_Id="xxxxxxxxx"
invoice_ref_no="xxxxxxxx"
order_Amt="xx.xx"
order_Bank_Mid="xxxxxxxx"
order_Bank_Ref_No="xxxxxxxx"
order_Bank_Response="xxxx xxxxx"
order_Bill_Address="xxxxx"
order_Bill_City="xxxxxx"
order_Bill_Country="xxxxxx"
order_Bill_Email="xxxxx@xxxxx.com"
order_Bill_Name="xxxxxx"
order_Bill_State="xxxxxx"
order_Bill_Tel="xxxxxxxxxx"
order_Bill_Zip="xxxxxx"
order_Capt_Amt="xx.xx"
order_Card_Name="xyz"
order_Card_Type="abcd"
order_Currency="xxx"
order_Date_time="xxxx-xx-xx xx:xx:xx"
order_Discount="x.x"
order_Fee_Flat="x.x"
order_Fee_Perc="xx.xx"
order_Fraud_Status="xxx"
order_Gross_Amt="x.xx"
order_Gtw_Id="xxxxx"
order_Ip="xxx.xxx.xxx.xxx"
order_No="x"
order_Ship_Address="xxxxxx xxxx"
order_Ship_City="xxxxxxx"
order_Ship_Country="xxxxxx"
order_Ship_Name="xxxxx xxxx"
order_Ship_State="xxx"
order_Ship_Tel="xxxxxxxxxx"
order_Ship_Zip="xxxxxx"
order_Status="xxxxxxxx"
order_Status_Date_time="xxxx-xx-xx xx:xx:xx"
order_Tax="xx.xxxx"
order_Type="xx-xxx"/>
</invoice_List>
<page_count>1</page_count>
<total_records>1</total_records>
</Invoice_List_Result>
```

### Failure

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_List_Result error_desc="Order List: Invalid Parameter" error_code=”51308”/>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Example JSON Response

### Success

```json
{
"invoice_List":[{
"invoice_Id":5094273,
"invoice_ref_no":"123456987","
invoice_Created_By":"API",
"order_Currency":"INR",
"order_Amt":0.0,
"order_Gross_Amt":0.0,
"order_Discount":0.0,
"order_Capt_Amt":0.0,
"order_Fee_Perc":0.0,
"order_Fee_Perc_Value":0.0,
"order_Fee_Flat":0.0,
"order_Tax":0.0
}],
"page_count":1,
"total_records":1,
"error_desc":"",
"error_code":""
}
```

### Failure

```json
{
"error_desc":"Order List: Invalid Parameter",
"error_code":"51308",
"page_count":0,
"total_records":0
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Example STRING Response

### String Format

```text
page_count|total_records|Invoice_Id$Invoice_ref_no$Invoice_Created_By$Order_No$Order_Type$Order_Currency$Order_Amt$Order_Date_time$Order_Notes$
Order_Ip$Order_Status$$Order_Bank_Response$Order_Bank_Mid$Order_Bank_Ref_No$Order_Status_Date_Time$Order_Fraud_Status$Order_Card_Name$Order_Card_Type
$Order_Gtw_Id$Order_Gross_Amt$Order_Discount$Order_Capt_Amt$Order_Fee_Flat$Order_Fee_Perc
$Order_Tax$Order_Delivery_Details$Order_Bill_Name$Order_Bill_Email$Order_Bill_Tel$Order_Bill_Address$Order_Bill_City$Order_Bill_State$Order_Bill_Country$Order_Bill_Zip$Order_Ship_Name$Order_Ship_Email$Order_Ship_Tel$Order_Ship_Address$Order_Ship_City$Order_Ship_State$Order_Ship_Country$Order_Ship_Zip^|
```

### Success

```text
1|1|xxxxxx$xxxxxxx$API$xxxxx$xx-xxx$xxxx$xx.xx$xxxx-xx-xx xx:xx:xx.xxx$$xxx.xxx.xxx.xxx$xxxx$xxx xxx$xxxxxxx$xxxxxx$xxxx-xx-xx xx:xx:xx.xxx$xx$xxxxxx$xxxx$xxxx$xx.xx$x.x$x.xx$x.x$xx.x$x.xxxx$$xxxx$xxxx@xxx.com$xxxxxxxx$xxx$xxxx$xxxx$xxxx$xxxx$xxxx xxxx$$xxxxxxx$xxxxx xxxx$xxxxxx$xx$xxxxx$xxxxxx|
```

### Failure

Format: page_count|total_records|error_code|error_desc|

```text
0|0|51308|Order List: Invalid Parameter|
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
