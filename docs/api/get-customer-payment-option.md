---
title: Get Customer Payment Options API
---

# Get Customer Payment Options API

The Customer payment option API call is used to list payment option saved for a customer. Payments options are
saved for a customer in vault for easy and convenient payment.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML,, JSON or String. Please specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING". |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is is "XML" or " JSON" or "STRING". |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "getCustomerPaymentOptions" |
| customer_id (required) | Unique Customer ID for the transaction. | Numeric(25). |

### Example XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Customer_Payment_Options
customer_id="123"/>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Example JSON Request

```json
{
"customer_id": "1234"
}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

### Example String Request

Format: customer_id|

Example: 6|

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to
CCAvenue. Kindly refer to the encryption section

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is "1" then you need not decrypt the enc_response as it will contain plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text represents the error message. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| customer_id | Unique Customer ID for the transaction. | Numeric(25). |
| customer_card_no | Last four digit of card no for the transaction. | Numeric(4) Will contain values only for Credit Card and Debit Card. |
| customer_payopt_type | Number of Payment options assign against to this customer id. | String. Values : OPTNBK-net banking OPTCRD-credit card OPTDBCRD-debit card OPTMOBP-mobile payment OPTIVRS- IVRS OPTWLT- Wallet OPTCASHC-Cash Card OPTEMI- EMI |
| customer_card_name | Customer card name for the transaction. | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| customer_email | Customer email id for the transaction. | Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| customer_card_label | Customer card label name for the transaction. | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| customer_card_id | Unique Customer Card ID is the identifier for the payment options against the Customer ID. | Numeric(25). |
| customer_phone_number | Unique Customer phone number for the transaction. | Numeric(10). |
| customer_card_expiry | Customer card expiry month and year. | Numeric with special characters. |
| customer_card_issuing_bank | Customer card issuing bank name. | String. |
| error_desc | Reason if API call does not find the record based on given search criteria. | String. Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String. Please refer below table for failure message. |

### Example XML Response

#### Success

```xml
<?xml version="1.0"
encoding="UTF-8"
standalone="yes"?>
<Customer_Payment_Option_Result customer_id="1234" error_desc="" error_code="">
<pay_Opt_List>
<customer>
<customer_card_id>26</customer_card_id>
<customer_card_no>4567</customer_card_id>
<customer_card_name>Development Credit
Bank</customer_card_name>
<customer_card_type>NBK</customer_card_type>
<customer_email>xxxx@xxxx.com</customer_email>
<customer_payopt_type>OPTNBK</customer_payment_type>
<customer_card_label>xxxxxxx</customer_card_label>
<customer_card_expiry>10/2020</customer_card_expiry>
<customer_card_issuing_bank>xxxxxxx</customer_card_issuing_bank>
</customer>
<customer>
<customer_card_id>27</customer_card_id>
<customer_card_no>1234</customer_card_no>
<customer_card_name>Development Credit Bank</customer_card_name>
<customer_card_type>NBK</customer_card_type>
<customer_email>xxxx@xxx.com</customer_email>
<customer_payopt_type>OPTNBK</customer_payopt_type>
<customer_card_label>xxxxxxx</customer_card_label>
<customer_card_expiry>10/2020</customer_card_expiry>
<customer_card_issuing_bank>xxxxxxx</customer_card_issuing_bank>
</customer>
</pay_Opt_List>
</Customer_Payment_Option_Result>
```

#### Failure

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Customer_Payment_Option_Result
error_desc="Customer id: Invalid Parameter" customer_id="1234" error_code="51327"/>
```

Note:
You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption
section.

### Example JSON Response

#### Success

```json
{
"pay_Opt_List":[{
"customer_card_name":"Development Credit Bank",
"customer_card_type":"NBK", "customer_card_id":26,
"customer_email":"xxxx@xxx.com",
"customer_payopt_type":"OPTNBK"
"customer_card_label":"xxxxx"
"customer_card_no":"1234"
"customer_card_expiry":"10/2020"
"customer_card_issuing_bank":"xxxxxxxx"
},
{
"customer_card_name":"MasterCard",
"customer_card_type":"CRDC",
"customer_card_id":27,
"customer_email":"xxxx@xxx.com",
"customer_payopt_type":"OPTCRDC",
"customer_card_label":"xxxxx"
"customer_card_no":"4567"
"customer_card_expiry":"10/2020"
"customer_card_issuing_bank":"xxxxxxxx"
}],
"customer_id":"1234",
"error_desc":"",
"error_code":""
}
```

#### Failure

```json
{
"error_desc":"Customer id: Invalid Parameter",
"error_code":"51327",
"customer_id":"1234"
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption
section.

### Example STRING Response

#### Success

Format:

```text
customer_card_id$customer_card_no(last four digits)$customer_card_name$customer_card_type$customer_payopt_type$customer_card_label$customer_email$customer_card_expiry$customer_card_issuing_bank^customer_card_id$customer_card_no(last four digits$customer_card_name$customer_card_type$customer_payopt_type$customer_card_label$customer_email$customer_card_expiry$customer_card_issuing_bank|
```

Example:27$"1234"$MasterCard$CRDC$OPTCRDC$"xxxx"$"xxxx@xxx.com"^29$"4567"$MasterCard$ CRDC$
OPTCRDC$"xxxx"$"xxxx@xxx.com"$"10/2020"$"xxxx"

#### Failure

Format: error_code|error_desc|

Example: 51327|Customer id: Invalid Parameter|

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption
section.
