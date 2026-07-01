---
title: Generate Quick Invoice API
---

# Generate Quick Invoice API

This Quick invoice API call is used to generate a quick invoice for a customer.
This is a flavour of regular invoice but with limited options hence an easy implementation.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | This is the access code for your application. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Value is "XML" or "JSON" or "STRING". |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Value is "XML" or "JSON" or "STRING". |
| command (required) | This is the command to access the API Calls. You must send this with each request. | "generateQuickInvoice" for generate Quick invoice. |
| customer_name (required) | Name of the customer receiving the Invoice | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| customer_email_id (required) | Email ID on which the Invoice will be sent | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| customer_email_subject (required | Subject of the email containing the Invoice | Alphanumeric with special characters (hyphens, dot, space and underscores)(100). |
| valid_for (required) | Duration for which the Invoice is Valid | Numeric(4) |
| valid_type (required) | The unit of duration represented by valid_for | Possible values for valid type is minutes/hours/days/month/year |
| Currency (required) | Currency for which the Invoice is to be generated | String Example: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP– Pound Sterling EUR – Euro, official currency of Eurozone |
| amount(required) | Invoice Amount for the generate invoice. | Decimal(12,2) |
| invoice_description | Invoice Description to be sent in Email | String (500) |
| merchant_reference_no (Optional) | Merchant identifier for the Invoice | Alphanumeric with special characters (hyphen and underscore)(50). |
| merchant_reference_no1 (Optional) | Merchant identifier for the Invoice | Alphanumeric with special characters (hyphen and underscore and hash)(100). |
| merchant_reference_no2 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters (hyphen and underscore and hash)(100). |
| merchant_reference_no3 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters (hyphen and underscore and hash)(100). |
| merchant_reference_no4 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters (hyphen and underscore and hash)(100). |
| terms_and_conditions (optional) | Terms and conditions to be present in the Invoice | AlphaNumeric with special characters (hyphen, dot, circular brackets and ampersand)(500) |
| sms_content (optional) | Sms content to be sent if delivery type is SMS or BOTH | Alphanumeric with special characters (space, hyphen, uhash, ampersand, dot, round brackets)(60). |
| sub_acc_id (optional) | Unique Sub Account ID. | String |
| customer_mobile_no (required) | Mobile number of the customer receiving the Invoice. | Numeric(10) |
| bill_delivery_type (required) | Invoice delivery mechanism. | Possible value for bill delivery type is EMAIL/ SMS/ BOTH. |
| Files (optional) | Attachments to be sent with the quick invoice. Applicable only if bill delivery type is EMAIL/ BOTH. | File type array described in below table. |

### Files

| Name | Description | Note |
| --- | --- | --- |
| Name (required) | Attachment file name which is passing at generate invoice time. | String File extension must be (.jpg .jpeg .doc .pdf .docx .png )format |
| Content (required) | Attachment file content must be in byte array format decoded with decodeBase64 algorithm. | String(Attachment file size up to MOB) |

### XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Generate_Invoice_Query>
<customer_name>abc</customer_name>
<bill_delivery_type>BOTH</bill_delivery_type>
<customer_mobile_no>7894561230</customer_mobile_no>
<customer_email_id>test@test.com
</customer_email_id>
<customer_email_subject>Test</customer_email_subject>
<invoice_description>Test</invoice_description>
<currency>INR</currency>
<valid_for>2</valid_for>
<valid_type>days</valid_type>
<amount>1.0</amount>
<merchant_reference_no>123456987</merchant_reference_no>
<merchant_reference_no1>123456987</merchant_reference_no1>
<merchant_reference_no2>123456987</merchant_reference_no2>
<merchant_reference_no3>123456987</merchant_reference_no3>
<merchant_reference_no4>123456987</merchant_reference_no4>
<sub_acc_id></sub_acc_id>
<terms_and_conditions>terms and condition</terms_and_conditions>
<sms_content>Pls pay your LegalEntity_Name bill # Invoice_ID for
Invoice_Currency Invoice_Amount online at
Pay_Link.</sms_content>
<files>
</files>
<name>Test.doc</name>
<content>77u/SGVsbG8gaW5kaWEK</content>
</Generate_Invoice_Query>
```

### Json Request

```json
{
"customer_name": "Akshay",
"bill_delivery_type": "both",
"customer_mobile_no":1234567890,
"customer_email_id": "test@avenues.info",
"customer_email_subject": "Test",
"invoice_description": "Test",
"currency": "INR",
"valid_for": 2,
"valid_type": "days",
"amount": 10.0,
"merchant_reference_no":123456987,
"merchant_reference_no1":123456987,
"merchant_reference_no2":123456987,
"merchant_reference_no3":123456987,
"merchant_reference_no4":123456987,
"sub_acc_id":"",
"terms_and_conditions": "terms and condition",
"sms_content":"Pls call 022-2121212121 to pay your LegalEntity_Name bill#
Invoice_ID for
Invoice_Currency Invoice_Amount or pay online at Pay_Link.",
"files": [{
"name": "Test.doc",
"content": "77u/SGVsbG8gaW5kaWEK"
}]
}
```

### String Request

Format:

```text
customer_name|currency|valid_for|valid_type|amount|bill_delivery_type|merchant_reference_no|merchant_reference_no1|merchant_reference_no2|sub_acc_id|terms_and_conditions|mobile_no|sms_content|customer_email_id|customer_email_subject|invoice_description|file_name|file_content^file_name|file_content|
```

Example:

```text
xxxxxxx|INR|2|days|1.00|SMS|123456987|44785555654|4444545477878|sub1|terms and
condition|9874563215|Pls call 022-2121212121 to pay your LegalEntity_Name bill# Invoice_ID
for Invoice_Currency Invoice_Amount or pay online at Pay_Link.|xxxxx.xxxx@xxxx.com|test invoice mail|this invoice
generate for testing|invoice.doc|77u/SGVsbG8gaW5kaWEK|
```

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
