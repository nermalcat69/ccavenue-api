---
title: BIN Details API
---

# BIN Details API

Bin Details call is performed to fetch the card details of bin.

## Request Parameters

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is "XML" or " JSON" or "STRING" |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as the request. | Possible value for response_type is "XML" or " JSON" or "STRING" |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is "binDetails". |
| bin_number (required) | First 6 digits of card number (Bin number). | Numeric(6). |

## Example XML Request

```xml
<bin_details_query>
<bin_number>464042</bin_number>
</bin_details_query>
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Example JSON Request

```json
{'bin_number': '464042'}
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Example STRING Request

Format: bin_number|

```text
464042|
```

Note: You will have to encrypt the above request and store in the "enc_request" parameter before sending it to CCAvenue. Kindly refer to the encryption section.

## Response Parameters

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If the value of this parameter is "1" then you need not decrypt the enc_response as it will contain the plain error message. | Value "0" denotes that the API call was successful. Value "1" denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing the format as per response_type. |  |
| bin_number | Bin number that was sent in request. | Numeric(6). |
| card_name | Name of the card of the selected Bin number. | String Possible values, "Visa Debit Card", "MasterCard Debit Card", "Maestro Debit Card"", "Amex", "Diners Club", "DISCOVER", "JCB", "MasterCard", "Visa" |
| card_type | Card type of the given bin number. | String Possible values: "OPTDBCRD", "OPTCRDC" |
| payment_option | Payment option for the card of the given bin number | String. Values : OPTCRD-credit card OPTDBCRD-debit card |
| issuing_bank | Name of the bank that issue the card of the given bin number | String |
| country | Country of the bank that issue the card of the given bin number Note this parameter is available only in xml and JSON response. | String |
| error_desc | Reason if API call does not find the record based on the given search criteria. | String. Please refer below table for failure message. |
| error_code | Error code for Failure. | String. Please refer below table for failure message. |

## Example XML Response

### Success

```xml
<?xml version='1.0' encoding='UTF-8'?>
<bin_details_Result>
<bin_number>464042</bin_number>
<card_name>Visa Debit Card</card_name>
<card_type>DBCRD</card_type>
<country>UNITED STATES</country>
<error_code></error_code>
<error_desc></error_desc>
<issuing_bank>FLAGSTAR BANK FSB</issuing_bank>
<payment_option>OPTDBCRD</payment_option>
</bin_details_Result>
```

### Failure

```xml
<?xml version='1.0' encoding='UTF-8'?>
<bin_details_Result>
<error_code>52026</error_code>
<error_desc>bin_number: Invalid Parameter</error_desc>
</bin_details_Result>
```

## Example JSON Response

### Success

```json
{"bin_details_Result":{
"issuing_bank":"FLAGSTAR BANK FSB",
"card_type":"DBCRD",
"bin_number":464042,
"payment_option":"OPTDBCRD",
"error_code":"UNITED STATES",
"card_name":"Visa Debit Card",
"country":"",
"error_desc":""
}
}
```

### Failure

```json
{"bin_details_Result":{
"error_code":52026,
"error_desc":"bin_number: Invalid Parameter"
}
}
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.

## Example STRING Response

### Success

Format: Bin_number|Card_name|Card_type|Payment_option|Issuing_bank|Error_code|Error_desc

```text
464042|Visa Debit Card|DBCRD|OPTDBCRD|FLAGSTAR BANK FSB||
```

### Failure

```text
|||||52026|bin_number: Invalid Parameter
```

Note: You will have to decrypt the above response from "enc_response" parameter. Kindly refer to the decryption section.
