---
title: Generate Recurring Invoice API
---

# Generate Recurring Invoice API

Recurring invoice call is used to generate recurring invoice for a customer of a merchant.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | This Is the access code for your application. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns response in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is is "XML" or " JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "generateRecurringInvoice" |
| customer_name (required) | Name of the customer receiving the Invoice | Alphanumeric with special character (space, hyphen, apostrophe, underscore, dot)(60). |
| customer_email_id (required) | Email ID on which the Invoice will be sent | Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| customer_email_subject (required) | Subject of the email containing the Invoice | Alphanumeric with special characters (hyphens, dot, space and underscores)(100). |
| valid_for (required) | Duration for which the Invoice is valid | Numeric(4). |
| valid_type (required) | The unit of duration represented by valid_for | Possible values for valid type is minutes/hours/days/month/year |
| Currency (required) | Currency for which the Invoice is to be generated | String Example: INR – Indian Rupee USD– United States Dollar SGD – Singapore Dollar GBP– Pound Sterling EUR – Euro, official currency of Eurozone |
| merchant_reference_no (optional) | Merchant identifier for the Invoice | Alphanumeric with special characters (hyphen and underscore)(25). |
| Amount (required | Invoice Amount | Decimal(12,2). |
| terms_and_conditions (optional) | Terms and conditions to be present in the Invoice | AlphaNumeric with special characters (hyphen, dot, circular brackets and ampersand)(500) |
| customer_mobile_no (required) | Mobile number of the customer receiving the Invoice | Numeric(10). |
| due_date (required) | Invoice Due date | Numeric(3) |
| late_payment_fees (conditional) | Fees to be charged in case of late payment. Late_payment_fees is required if merchant provide late_payment_fees_type. | Decimal(12,2). |
| late_payment_fees_type (conditional) | Unit representation of late_payment_fees. Late_payment_fees type is required if merchant provide late_payment_fees. | Possible value for late payment fees type is Perc/ Flat. |
| discount_if_paid_within_due_date (conditional) | Number of days prior to due date when an additional discount is eligible. Discount_if_paid_within_due_date is required if merchant provide discount value or discount type. | Numeric(3) Ex: due_date is 15th Jan 2014 discount_if_paid_within_due_date is 4 i.e. Discount is applicable up to 11th Jan 2014. |
| discount_value (conditional) | Discount to be applied if the above condition is true. Discount value is required if merchant provide discount type. | Decimal(12,2). |
| discount_type (conditional) | Unit representation of discount_value. Discount type is required if merchant provide discount value. | Possible value for late payment fees type is Perc/ Flat. |
| Occurences (conditional) | Number of occurrences for Invoice Occurrences is required if merchant provide Frequency. | Numeric(3). |
| Frequency (conditional) | Frequency for generating the occurrences Frequency is required if merchant provide Start_date. | Possible values for frequency are Daily/Monthly/Quarterly/ Yearly. |
| start_date (conditional) | Start date specifies 1st occurrence. Start_date is required if merchant provide Occurrences. | Date format in dd-mm-yyyy. |
| item_List (conditional) | Items associated with the Invoice. Provide at least one Item if merchant does not provide any Task. | Item type array. Refer to Item_list section for structure. |
| task_List (conditional) | Tasks associated with the Invoice Provide at least one Task if merchant does not provide any Item. | Task type array. Refer to Task_list section for structure. |

## Note: Recurring Invoice without advance setting

### XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Generate_Invoice_Query>
<customer_name>xxxxx</customer_name>
<customer_email_id>xxxxxx.xxxx@xxxxx.com</customer_email_id>
<customer_email_subject>Test</customer_email_subject>
<customer_mobile_no>9874561236</customer_mobile_no>
<currency>INR</currency>
<valid_for>2</valid_for>
<valid_type>days</valid_type>
<start_date>15-08-2014</start_date>
<frequency>Monthly</frequency>
<occurences>5</occurences>
<item_List>
<item>
</item>
</item_List>
<task_List>
<name>ITEM</name>
<description>FIRST</description>
<unit_cost>1.00</unit_cost>
<quantity>3</quantity>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0" />
</tax_List>
<name>TASK</name>
<notes>NEW</notes>
<task> <rate>1.00</rate>
<hours>2</hours>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0" />
</task> </tax_List>
</task_List>
<merchant_reference_no>123456987</merchant_reference_no>
<terms_and_conditions>terms and condition</terms_and_conditions>
<sms_content>Pls pay your LegalEntity_Name bill # Invoice_ID for Invoice_Currency Invoice_Amount
online at Pay_Link.</sms_content>
</Generate_Invoice_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Json request

```json
{
"customer_name": "xxxxxx", "customer_email_id":
"xxxx.xxx@xxx.com", "customer_email_subject":
"Test", "customer_mobile_no": "9874561236",
"currency": "INR",
"valid_for": "2",
"valid_type": "days",
"start_date": "15-08-2014",
"frequency": "Monthly",
"occurences": "5",
"item_List": [{
"name": "ITEM",
"description": "FIRST",
"quantity": "3",
"unit_cost": "1.00",
"tax_List": [
{"name": "Edu Tax","amount":"5.0"},
{"name": "Pint Tax","amount": "2.5"}
]
}],
"task_List": [{
"name": "TASK",
"notes": "NEW",
"hours": "2",
"rate": "1.00",
"tax_List":[
{"name":"STGTax","amount":"7.0"},
{"name": "Rent Tax","amount": "8.0"}
]
}],
"merchant_reference_no": "123456987",
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
Customer_Name|Currency|Valid_For|Valid_Type|Customer_Email_Id|Customer_Email_Subject|Customer_Mobile_No|Term & Condition|SMS_Content|Merchant_Reference_number|Item_Name$Item_Quantity$Item_Description$Unit_Cost~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount^Item_Name$Item_Quantity$Item_Description$Unit_Cost~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount|Task_Name$Task_Rate$Task_Hours$Task_Notes~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount^Task_Name$Task_Rate$Task_Hours$Task_Notes~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount|Start_Date|Frequecy|Occurences|Due_Date|Late_Payment_Fees|Late_Payment_Fees_Type|Discount_If_Paid_Within_Due_Date|Discount_Value|Discount_Type|
```

Example:

```text
abcd|INR|2|days|xx.xx@xx.info|email subject|9999999999|t&c|Pls call  022-2121212121 to pay your
LegalEntity_Name bill # Invoice_ID for Invoice_Currency Invoice_Amount or pay online at
Pay_Link.|MER1234|ITEM$2$FIRST$1.00~Edu Tax$5.0$Pint Tax$2.5|TASK$1.0$2$NEW~STG Tax$7.0$Rent
Tax$8.0|18-09-2014|Monthly|5|||||||
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

## Note: Recurring invoice with advance setting

### XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Generate_Invoice_Query>
<customer_name>abc</customer_name>
<customer_email_id>abc@sify.com</customer_email_id>
<customer_email_subject>Test</customer_email_subject>
<customer_mobile_no>1234567890</customer_mobile_no>
<currency>INR</currency>
<valid_for>2</valid_for>
<valid_type>days</valid_type>
<start_date>15-08-2014</start_date>
<frequency>Monthly</frequency>
<occurences>5</occurences>
<item_List>
<item>
<name>ITEM</name>
<description>FIRST</description>
</item>
</item_List>
<task_List>
<task>
</task>
</task_List>
<unit_cost>1.00</unit_cost>
<quantity>3</quantity>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0" />
</tax_List>
<name>TASK</name>
<notes>NEW</notes>
<rate>1.00</rate>
<hours>2</hours>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0" />
</tax_List>
<merchant_reference_no>123456987</merchant_reference_no>
<terms_and_conditions>terms and condition</terms_and_conditions>
<due_date>1</due_date>
<late_payment_fees>2.5</late_payment_fees>
<late_payment_fees_type>Perc</late_payment_fees_type>
<discount_if_paid_within_due_date>4</discount_if_paid_within_due_date>
<discount_value>1.50</discount_value>
<discount_type>Perc</discount_type>
<sms_content>Pls pay your LegalEntity_Name bill # Invoice_ID for Invoice_Currency Invoice_Amount
online at Pay_Link.</sms_content>
</Generate_Invoice_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### JSON Request

```json
{
"customer_name": "abc", "customer_email_id": "abc@sify.com", "customer_email_subject": "Test",
"customer_mobile_no": "9874561236", "currency": "INR",
"valid_for": "2",
"valid_type": "days",
"start_date": "15-08-2014",
"frequency": "Monthly",
"occurences": "5",
"item_List": [{
"name": "ITEM",
"description": "FIRST",
"quantity": "3",
"unit_cost": "1.00",
"tax_List": [
{"name": "Edu Tax","amount":"5.0"},
{"name": "Pint Tax","amount": "2.5"}
]
}],
"task_List": [{
"name": "TASK",
"notes": "NEW",
"hours": "2",
"rate": "1.00",
"tax_List":[
{"name":"STGTax","amount":"7.0"},
{"name": "Rent Tax","amount": "8.0"}
],
}],
"merchant_reference_no": "123456987",
"terms_and_conditions": "terms and condition",
"due_date": "1",
"late_payment_fees": "2.5",
"late_payment_fees_type": "Perc",
"discount_if_paid_within_due_date": "4",
"discount_value": "1.50",
"discount_type": "Perc",
"sms_content":"Pls pay your LegalEntity_Name bill#Invoice_ID for Invoice_Currency
Invoice_Amount online at Pay_Link."
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before
sending it to CCAvenue. Kindly refer to the encryption section.

### String Request format

Format:

```text
Customer_Name|Currency|Valid_For|Valid_Type|Customer_Email_Id|Customer_Email_Subject|Customer_Mobile_No|Term & Condition|SMS_Content|Merchant_Reference_number|Item_Name$Item_Quantity$Item_Description$Unit_Cost~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount^Item_Name$Item_Quantity$Item_Description$Unit_Cost~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount|Task_Name$Task_Rate$Task_Hours$Task_Notes~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount^Task_Name$Task_Rate$Task_Hours$Task_Notes~Tax_Name$Tax_Amount$Tax_Name$Tax_Amount|Start_Date|Frequecy|Occurences|Due_Date|Late_Payment_Fees|Late_Payment_Fees_Type|Discount_If_Paid_Within_Due_Date|Discount_Value|Discount_Type|
```

Example:

```text
abcd|INR|2|days|xx.xx@xx.info|email subject|9999999999|t and c|Pls call  022-2121212121 to pay your
LegalEntity_Name bill# Invoice_ID for Invoice_Currency Invoice_Amount or pay online at
Pay_Link.|MER1234|ITEM$2$FIRST$1.00~Edu Tax$5.0$Pint Tax$2.5|TASK$1.0$2$NEW~STG Tax$7.0$Rent Tax$8.0|18-
09-2014|Monthly|5|1|2.5|Perc|1|1.50|Perc|
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

Note: The source document does not include a separate Response Parameters / Example Response section for
Generate Recurring Invoice distinct from the Generate Invoice API; the response format follows the same
structure as documented in the Generate Invoice API (invoice_status, invoice_id, qr_code, tiny_url,
merchant_reference_no, error_code, error_desc).
