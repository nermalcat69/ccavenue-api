---
title: Add Customer Payment Option API
---

# Add Customer Payment Option API

The Add Customer Payment Option API call is used to add another payment option for the customer of the
merchant.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is "XML" or " JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "addCustomerPaymentOption". |
| customer_id (required) | Unique Customer ID for the transaction. | Numeric(25). |
| customer_name_on_card (optional) | Customer name on card. | Alphanumeric with special characters (space, underscore)(30). |
| customer_phone_no (optional) | Customer mobile number. | Numeric(10). |
| customer_email (optional) | Customer email id. | Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| customer_card_issuer_bank (optional) | Customer card issuer bank name. | Alphanumeric with special characters (space, underscore )(70). |
| customer_card_expiry (required) | Customer Card expiry date. | Date format in MM/yyyy. |
| customer_card_no (required) | Customer Card number. | Numeric(25) |
| customer_card_name (required) | Customer Card name. | String VISA MASTERCARD AMEX JCB ECRD DINERS CLUB DSNV CTBL CVMS AMEX EZE CLICK |
| customer_card_type (required) | Customer card type to payment option for the transaction. | String. CRDC-credit card DBRD-debit card |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Add_Customer_Payment_Option_Query>
<customer_id>14</customer_id>
<customer_email>test@test.com</customer_email>
<customer_phone_no>8698319931</customer_phone_no>
<customer_name_on_card>subash yadav</customer_name_on_card>
<customer_card_name>mastercard</customer_card_name>
<customer_card_no>421578965236545</customer_card_no>
<customer_card_expiry>11/2015</customer_card_expiry>
<customer_card_issuer_bank>HDFC</customer_card_issuer_bank>
<customer_card_type>CRDC</customer_card_type>
</Add_Customer_Payment_Option_Query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"customer_id":14, "customer_email":"subash.yadav@avenues.info",
"customer_phone_no":8698319931,
"customer_name_on_card":"subash yadav",
"customer_card_no":421578965236545,
"customer_card_name":"mastercard",
"customer_card_expiry":"11/2015",
"customer_card_issuer_bank":"Kotak mahindra",
"customer_card_type":"CRDC"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Example STRING Request

Format:

```text
customer_id|customer_email|customer_phone_no|customer_name_on_card|customer_card_no|customer_card_name|customer_card_expiry|customer_issuer_bank|customer_card_type|
```

Example: 14|test@test.com|8698319931|subash yadav|421578965236545|mastercard|11/2015|Kotak
mahindra|CRDC|

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| customer_id | Unique Customer ID for the transaction. | Numeric(25). |
| customer_card_id | Unique Customer card ID against the payment option for the transaction. | Numeric (25). |
| Status | Delete Status value specifies whether customer payment option is going to be deleted successfully or not. | Possible values for this is 0 - Deletion successful. 1 - Could not be deleted. |
| customer_card_no_last 4digits | Last four digit of card no for the transaction. | Numeric(4) Will contain values only for Credit Card and Debit card. |
| customer_pay_opt_type | Customer payment option for given details. | String OPTCRD-credit card OPTDBCRD-debit card |
| customer_card_expry | Customer card expiry date. | Date format in MM/yyyy. |
| customer_card_issuer_b ank | Customer Card issuer bank. | Alphanumeric with special characters (space, underscore )(70). |
| customer_card_name | Customer Card name. | String VISA MASTERCARD AMEX JCB ECRD DINERS CLUB DSNV CTBL CVMS AMEX EZE CLICK |
| error_desc | Reason if customer payment option is not going to be deleted successfully. | String. Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String. Please refer below table for failure message. |

### Example XML Response

#### Success

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Add_Customer_Payment_Option_Result>
<customer_card_expiry>11/2015</customer_card_expiry>
<customer_card_id>240</customer_card_id>
<customer_card_issuer_bank>HDFC</customer_card_issuer_bank>
<customer_card_name>Visa</customer_card_name>
<customer_card_no_last4digits>2346</customer_card_no_last4digits>
<customer_id>14</customer_id>
<customer_pay_opt_type>OPTCRDC</customer_pay_opt_type>
<error_code></error_code>
<error_desc></error_desc>
<status>0</status>
</Add_Customer_Payment_Option_Result>
```

#### Failure

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Add_Customer_Payment_Option_Result>
<customer_card_expiry>11/2015</customer_card_expiry>
<customer_card_id></customer_card_id>
<customer_card_issuer_bank>HDFC</customer_card_issuer_bank>
<customer_card_name>Visa</customer_card_name>
<customer_card_no_last4digits>2346</customer_card_no_last4digits>
<customer_id>14</customer_id>
<customer_pay_opt_type></customer_pay_opt_type>
<error_code>51336</error_code>
<error_desc>Customer Card Id: Invalid Parameter</error_desc>
<status>1</status>
</Add_Customer_Payment_Option_Result>
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption
section.

### Example JSON Response

#### Success

```json
{
"customer_id":"14",
"customer_card_id":"36",
"customer_card_no_last4digits":"6545",
"customer_card_expiry":"11/2015",
"customer_pay_opt_type":"OPTCRDC",
"customer_name_on_card":"subash yadav",
"customer_card_name":"Visa",
"customer_card_issuer_bank":"HDFC",
"error_desc":"",
"error_code":"","status":0
}
```

#### Failure

```json
{
"customer_id":"14",
"customer_card_id":"",
"customer_card_no_last4digits":"2346",
"customer_card_expiry":"11/2015",
"customer_pay_opt_type":"",
"customer_name_on_card":"subash yadav",
"customer_card_name":"Visa",
"customer_card_issuer_bank":"HDFC",
"error_desc":"Customer CardId:InvalidParameter",
"error_code":"51337",
"status":1
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the
decryption section.

### Example String Response

Format:

```text
Status|customer_id|customer_card_id|customer_card_no_last4digits|customer_card_expiry|customer_pay_opt_type|customer_card_name|customer_card_issuer_bank|error_code|error_desc|
```

#### Failure

Example:1|14||test user|1111|11/2015|OPTCRDC|Visa|HDFC|51337|Customer Id:Invalid
parameters|

#### Success

Example:0|14|415|test user|1111|11/2015|OPTCRDC|Visa|HDFC|||

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the
decryption section.
