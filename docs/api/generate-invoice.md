---
title: Generate Invoice API
---

# Generate Invoice API

The Invoice API call is used to generate an invoice for a customer. Values can be passed as for generating invoice
using the flexibility of Invoice settings.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or " JSON" or "STRING". |
| command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "generateInvoice". |
| customer_name (required) | Name of the customer receiving the Invoice. | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| customer_email_id (required) | Email ID on which the Invoice will be sent | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| customer_email_subject (required) | Subject of the email containing the Invoice | Alphanumeric with special characters (hyphens, dot, space and underscores)(100). |
| valid_for (required) | Duration for which the Invoice is valid | Numeric(4). |
| valid_type (required) | The unit of duration represented by valid_for | Possible values for valid type is minutes/hours/days/month/year |
| Currency (required) | Currency for which the Invoice is to be generated | String Example: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP– Pound Sterling EUR – Euro, official currency of Eurozone |
| merchant_reference_no (optional) | Merchant identifier for the Invoice | Alphanumeric with special characters (hyphen and underscore)(25). |
| merchant_reference_no1 (optional) | Merchant identifier for the Invoice | Alphanumeric with special characters (hyphen and underscore and hash)(100). |
| merchant_reference_no2 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters (hyphen and underscore and hash)(100). |
| merchant_reference_no3 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters (hyphen and underscore and hash)(100). |
| merchant_reference_no4 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters (hyphen and underscore and hash)(100). |
| sub_acc_id (optional) | Unique Sub Account ID. | String |
| Amount (required | Invoice Amount | Decimal(12,2). |
| terms_and_conditions (optional) | Terms and conditions to be present in the Invoice | AlphaNumeric with special characters (hyphen, dot, circular brackets and ampersand)(500) |
| customer_mobile_no (required) | Mobile number of the customer receiving the Invoice | Numeric(10). |
| due_date (required) | Invoice Due date | Numeric(3) |
| late_payment_fees (conditional) | Fees to be charged in case of late payment. Late_payment_fees is required if merchant provide late_payment_fees_type. | Decimal(12,2). |
| late_payment_fees_type (conditional) | Unit representation of late_payment_fees. Late_payment_fees type is required if merchant provide late_payment_fees. | Possible value for late payment fees type is Perc/Flat. |
| discount_if_paid_within_due_date (conditional) | Number of days prior to due date when an additional discount is eligible. Discount_if_paid_within_due_date is required if merchant provide discount value or discount type. | Numeric(3) Ex: due_date is 15th Jan 2014 discount_if_paid_within_due_date is 4 i.e. Discount is applicable up to 11th Jan 2014. |
| discount_value (conditional) | Discount to be applied if the above condition is true. Discount value is required if merchant provide discount type. | Decimal(12,2). |
| discount_type (conditional) | Unit representation of discount_value. Discount type is required if merchant provide discount value. | Possible value for late payment fees type is Perc/Flat. |
| item_List (conditional) | Items associated with the Invoice. Provide at least one Item if merchant does not provide any task. | Item type array. Refer to Item_list section for structure. |
| task_List (conditional) | Tasks associated with the Invoice Provide at least one Task if merchant does not provide any Item. | Task type array. Refer to Task_list section for structure. |

### Item_List

| Name | Description | Note |
| --- | --- | --- |
| name | Item Name | Alphanumeric with special characters (space, underscore, hyphen)(30). |
| description | Item description | Alphanumeric with special characters (hyphen, dot, circular brackets, space, comma, underscore, hash(#) and symbol &)(60) |
| unit_cost | Cost per Item | Decimal (12,2) . |
| quantity | Quantity of item | Numeric(3). |
| tax_List | Tax associated with the Item | Tax type array. Refer to Tax_list section for structure. |

### Task_List

| Name | Description | Note |
| --- | --- | --- |
| name | Task Name | Alphanumeric with special characters (space, underscore and hyphen)(30). |
| notes | Notes for the task | Alphanumeric with special characters (hyphen, dot, circular brackets, space, comma, underscore, hash(#) and symbol &)(60) |
| rate | Rate per hour | Decimal (12,2) . |
| hours | Number of hours to be charged | Numeric(3). |
| tax_List | Tax associated with the task. | Tax type array. Refer to Tax_list section for structure. |

tax_List: Tax associated with the task. Tax type array. Refer to Tax_list section for structure.

### Tax_List

| Name | Description | Note |
| --- | --- | --- |
| name | Tax list name | Alphanumeric with special characters (space, underscore and hyphen)(30). |
| amount | Amount of tax applicable | Decimal (13,4). |

## Note: Generate invoice without advance setting

### XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Generate_Invoice_Query>
<customer_name>abc</customer_name>
<customer_email_id>abc@sify.com</customer_email_id>
<customer_email_subject>Test</customer_email_subject>
<customer_mobile_no>1234567898</customer_mobile_no>
<currency>INR</currency>
<valid_for>2</valid_for>
<valid_type>days</valid_type>
<item_List>
<item>
<name>ITEM</name>
<description>FIRST</description>
<unit_cost>1.00</unit_cost>
<quantity>3</quantity>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0"/>
</tax_List>
</item>
</item_List>
<task_List>
<task>
</task>
</task_List>
<name>TASK</name>
<notes>NEW</notes>
<rate>1.00</rate>
<hours>2</hours>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0"/>
</tax_List>
<merchant_reference_no>123456987</merchant_reference_no>
<merchant_reference_no1>123456987</merchant_reference_no1>
<merchant_reference_no2>123456987</merchant_reference_no2>
<merchant_reference_no3>123456987</merchant_reference_no3>
<merchant_reference_no4>123456987</merchant_reference_no4>
<sub_acc_id>sub1</sub_acc_id>
<terms_and_conditions>terms and condition</terms_and_conditions>
<sms_content>Pls pay your LegalEntity_Name bill# Invoice_ID for Invoice_Amount online at
Pay_Link.</sms_content>
</Generate_Invoice_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Json request

```json
{
"customer_name": "abc",
"customer_email_id": "abc@sify.com",
"customer_email_subject": "Test",
"customer_mobile_no": "9874561236",
"currency": "INR",
"valid_for": "2",
"valid_type": "days",
"item_List": [{
"name": "ITEM",
"description": "FIRST",
"quantity": "3",
"unit_cost": "1.00",
"tax_List": [
{"name": "Edu Tax","amount": "5.0"},
{"name": "Pint Tax","amount": "2.5"}
]
}],
"task_List": [{
"name": "TASK",
"notes": "NEW",
"hours": "2",
"rate": "1.00",
"tax_List":[
{"name": "STG Tax","amount": "7.0"},
{"name": "Rent Tax","amount": "8.0"}
]
}],
"merchant_reference_no": "123456987",
"merchant_reference_no1":123456987,
"merchant_reference_no2":123456987,
"merchant_reference_no3": "123456987",
"merchant_reference_no4": "123456987",
"sub_acc_id":"sub1",
"terms_and_conditions": "terms and condition",
"sms_content":"Pls pay your LegalEntity_Name bill#Invoice_ID for Invoice_Currency
Invoice_Amount online at Pay_Link."
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### String Request format

Format:

```text
Customer_Name|Currency|Valid_For|Valid_Type|Customer_Email_Id|Customer_Email_Subject|Customer_Mobile_No|Term & Condition|SMS_Content|Merchant_Reference_No|merchant_reference_no1|merchant_reference_no2|sub_acc_id|Item_Name$Item_Quantity$Item_Description$Unit_Cost~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount^Item_Name$Item_Quantity$Item_Description$Unit_Cost~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount|Task_Name$Task_Rate$Task_Hours$Task_Notes~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount^Task_Name$Task_Rate$Task_Hours$Task_Notes~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount|Due_Date|Late_Payment_Fees|Late_Payment_Fees_Type|Discount_If_Paid_Within_Due_Date|Discount_Value|Discount_Type|
```

Example:

```text
abcd|INR|2|days|xx.xx@xx.info|email subject|1234567890|term and condition|Pls call  022-2121212121 to
pay your LegalEntity_Name bill# Invoice_ID for Invoice_Currency Invoice_Amount or pay online at
Pay_Link.|MER123654|44785555654|4444545477878|sub1|ITEM$2$FIRST$1.00~Edu Tax$5.0$Pint
Tax$2.5|TASK$1.0$2$NEW~STG Tax$7.0$Rent Tax$8.0|||||||
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

## Note: Generate Invoice with advance setting

### XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Generate_Invoice_Query>
<customer_name>abc</customer_name>
<customer_email_id>abc@sify.com</customer_email_id>
<customer_email_subject>Test</customer_email_subject>
<customer_mobile_no>1234567898</customer_mobile_no>
<currency>INR</currency>
<valid_for>2</valid_for>
<valid_type>days</valid_type>
<item_List>
<item>
<name>ITEM</name>
<description>FIRST</description>
<unit_cost>1.00</unit_cost>
<quantity>3</quantity>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0"/>
</tax_List>
</item>
</item_List>
<task_List>
<task>
</task>
</task_List>
<name>TASK</name>
<notes>NEW</notes>
<rate>1.00</rate>
<hours>2</hours>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0"/>
</tax_List>
<merchant_reference_no>123456987</merchant_reference_no>
<merchant_reference_no1>1234f56987</merchant_reference_no1>
<merchant_reference_no2>12345s6987</merchant_reference_no2>
<sub_acc_id>sub1</sub_acc_id>
<terms_and_conditions>terms and condition</terms_and_conditions>
<due_date>1</due_date>
<late_payment_fees>2.5</late_payment_fees>
<late_payment_fees_type>Perc</late_payment_fees_type>
<discount_if_paid_within_due_date>4</discount_if_paid_within_due_date>
<discount_value>1.50</discount_value>
<discount_type>Perc</discount_type>
<sms_content>Pls pay your LegalEntity_Name bill # Invoice_ID for Invoice_Currency Invoice_Amount online
at Pay_Link.</sms_content>
</Generate_Invoice_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Json request string

```json
{
"customer_name": "abc",
"customer_email_id": "abc@sify.com",
"customer_email_subject": "Test",
"customer_mobile_no": "1234567890",
"currency": "INR",
"valid_for": "2",
"valid_type": "days",
"item_List": [{
"name": "ITEM",
"description": "FIRST",
"quantity": "3",
"unit_cost": "1.00",
"tax_List": [
{"name": "Edu Tax","amount": "5.0"},
{"name": "Pint Tax","amount": "2.5"}
]
}],
"task_List": [{
"name": "TASK",
"notes": "NEW",
"hours": "2",
"rate": "1.00",
"tax_List":[
{"name": "STG Tax","amount": "7.0"},
{"name": "Rent Tax","amount": "8.0"}
]
}],
"merchant_reference_no": "123456987",
"merchant_reference_no1":123456987,
"merchant_reference_no2":123456987,
"sub_acc_id":"sub1",
"terms_and_conditions": "terms and condition",
"due_date": "3",
"late_payment_fees": "2.5",
"late_payment_fees_type": "Perc",
"discount_if_paid_within_due_date": "4",
"discount_value": "1.50",
"discount_type": "Perc" ,
"sms_content":"Pls pay your LegalEntity_Name bill#Invoice_ID for Invoice_Currency
Invoice_Amount online at Pay_Link."
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### String Request format

Format:

```text
Customer_Name|Currency|Valid_For|Valid_Type|Customer_Email_Id|Customer_Email_Subject|Customer_Mobile_No|Term & Condition|SMS_Content|Merchant_Reference_No|merchant_reference_no1|merchant_reference_no2|sub_acc_id|Item_Name$Item_Quantity$Item_Description$Unit_Cost~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount^ Item_Name$Item_Quantity$Item_Description$Unit_Cost~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount|Task_Name$Task_Rate$Task_Hours$Task_Notes~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount^Task_Name$Task_Rate$Task_Hours$Task_Notes~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount|Due_Date|Late_Payment_Fees|Late_Payment_Fees_Type|Discount_If_Paid_Within_Due_Date|Discount_Value|Discount_Type|
```

Example:

```text
abcd|INR|2|days|xx.xx@xx.info|email subject|1234567890|term and condition|Pls call  022-2121212121 to
pay your LegalEntity_Name bill# Invoice_ID for Invoice_Currency Invoice_Amount or pay online at
Pay_Link.|MER1234654|44785555654|4444545477878|sub1|ITEM$2$FIRST$1.00~Edu Tax$5.0$Pint
Tax$2.5|TASK$1.0$2$NEW~STG Tax$7.0$Rent Tax$8.0|1|2.5|Perc|1|1.50|Perc|
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

## XML Response

### Success

```xml
<?xml version='1.0' encoding='UTF-8'?>
<Generate_Invoice_Result error_code=""
error_desc=""invoice_status="0">
<invoice_id>5122841</invoice_id>
<qr_code>
iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAAB7klEQVR42u3cUYrDMAwFQN
0t0
TFLrET4qtedCfQkPqMThS4qyPjMsyBNAFukAX6AJdoAt0gS7QBbpAF-
gCXaALdIEu0KELdIEu0AW6QJfp6Gut7Z8nx 221_Ov_J_QYcOHfpB6F3HeTLgTyZM5fhAhw4d-
kvQu9bf9PVA4n9Bhw4d-nD0X44PHTp06NCvRP_vtQF06NChQ2_vyFUOrI4cdOjQoZfdT-
_63v106NChD0TvmlSJTt0V4wUdOnTodSjp—
m7OntKNujQoUPfMshdXbj0hovO6wTo0KFDb5oMiY0JiU5a5TlDhw4d-
qEduV03QbrKzF0TDDp06NCHlGy7BrmyTNORgw4d-
kD09H6xxG93TdpOaOjQoUNvKn92lW9d62xiKzR06NChH1qyVb6iM3HM9GYK6NChQ9eR2wLX9bbq6
0s26NChT3sw8m0dv8QLjsZ25KBDh_5xw6V8g0BlCTb2aVjo0KFPQ08fp_Il_-
kSFTp06NAPRe9aW7s6e68pcaFDhw79PPR0idR1ztChQ4c-
EP3Jup8oFSuf2oUOHTr0izty6S3MifUdOnTo0C9D73rKNN2F23U9AB06dOgHocu7Ah26QBfoAl2gC3SBL
tAFukAX6AJdoAt0gS7QBTp0gS7QBbpAF-jy5vwB_TaQ25UAXPwAAAAASUVORK5CYII
</qr_code>
<tiny_url>http://payit.cc/I5122841</tiny_url>
</Generate_Invoice_Result>
```

### Failure

```xml
<?xml version='1.0' encoding='UTF-8'?>
<Generate_Invoice_Result error_code="51072"
error_desc="Merchant reference number:Invalid Parameter"
invoice_status="1">
<invoice_id></invoice_id>
<qr_code></qr_code>
<tiny_url></tiny_url>
</Generate_Invoice_Result>
```

## Json Response

### 1. Success

```json
{
"error_desc":"",
"invoice_id":"5122799",
"tiny_url":"http://payit.cc/I5122799",
"qr_code":"iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAAB-
klEQVR42u3dUY7CMAwFwNz_0rsnQFo2frWTzpP4Q6V0IiV2U1g_8roslwC6QBfoAl2gC3SBLtAFukAX6AJdoAt0
gS7QBTp0gS7QBbpAF-jydvS1Vvlr57M-vf8vx-z6XtChQ4c-HL3rODsDYGfAPHl9oEOHDn0Ienr- rVoPTPhe0KFDh_5C9G-
Pv1N2QYcOHTr0Uehd5wMdOnToOnIlx0ncyNCRgw4dOvR_d8nSpVPXGsD9dOjQoV- M_mSevFFy7DWCDh069OycXrUe-
Paz0qDTBwx06NChP1iy7cAlOl1V5zxxnQAdOnToTWVU17aonXk5cc7QoUOHflBHLrF9KHFh04Ohau0BHTp06A
PREyXPtO5f1ZoHOnTo0A_qyFXNlV0POyTWIdChQ4d-",
"invoice_status":0,
"error_code":"",
"merchant_reference_no":"123456987"
}
```

### 2. Failure

```json
{
"error_desc":"Email id:Invalid Parameter",
"invoice_id":"",
"tiny_url":"",
"qr_code":"",
"invoice_status":1,
"error_code":"51012",
"merchant_reference_no":""
}
```

## String Response

### 1. Success

Format: invoice_status|invoice_id|qr_code|tiny_url|merchant_reference_no|

Example:

```text
0|5089334|iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAAB6UlEQVR42u3dQW7DMAwEQP
3_08kXEpgr0tIs0EvRurHHgETKctdHrstyCaALdIEu0AW6QBfoAl2gC3SBLtAFukAXGIvG3To0KGPunkSmxF05KBD h35hyZYe-
9LHTMwxoEOHDv3Cjlyiu5VeHJnYhYMOHTr0jeg7S6fEurnHpaBDhw591H6xrtd-
KtmgQ4cOvWXfWQJx4tsqoEOHDv0lHbn0freqbps3UUCHDv1g9J3_wyV9I3kaFjp06J57l0GBDl2gC3SBLtAFukA
X6AJdoAt0gS7QBbpAF-gCHbpAF-
gCXaALdJmcLyERMkikhZ8LAAAAAElFTkSuQmCC|http://payit.cc/I5089334|123456789|
```

### 2. Failure

Format: invoice_status|error_code|error_desc|merchant_reference_no|

Example: 1|51323|Tax not configured for the merchant.|123456789|

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption
section.
