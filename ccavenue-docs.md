<!-- Page 1 -->
**Merchant’s API Implementation Guide**

<!-- Page 2 -->
**Statement of Confidentiality**
This document contains information that is proprietary and confidential to Avenues India Private Limited which shall
not bedisclosed,transmitted,or duplicated,used in whole or in part for any purpose other than its intended purpose.
Any use or disclosure in wholeorinpartofthis information without express written permission of Avenues India Private
Ltd is prohibited. Any othercompanyandproductnamesmentionedareusedforidentificationpurposesonly,and may be
trademarksoftheirrespectiveowners.

<!-- Page 3 -->
**CCAvenue API**
The CCAvenue API is designed to enable you to interact securely with our API from your client-side web application.
Youcan get XML, JSON or String responses from the API, including errors.
You need an active account to initiate an API call to the CCAvenue payment gateway.
**API Authentication**
Merchant needs an active account to initiate an API call to the CCAvenue payment gateway. Merchants will have
to log in to their CCAvenue M.A.R.S account and get the authentication credentials for initiating API calls.
MerchantmustprovideCCAvenuewiththepublicIPaddressfromwherethe APIcallswillbeinitiated. API calls
willworkonly after CCAvenue registers the IP address provided.
Login to your CCAvenue M.A.R.S account, under Settings tab -> API Keys page; copy the following
credentials:
- Merchant ID
- Access Code
- Encryption Key

<!-- Page 4 -->
**API Calls**
**CCAvenue API supports following API calls.**
- Confirm – The Confirm API call allows you to confirm a pending order. Only confirmed orders are
settled into the merchant’s account. An order older than 12 days is automatically cancelled.
Once an orderhasbeen auto-cancelled by thesystem, it cannot be confirmed.
- Cancel – The Cancel API call allows you to cancel a pending order. Funds will be refunded to the
credit card or debitcard or netbanking account that was originally charged. Anorder older than
12 days is automatically cancelled.
- Refund – The Refund API call allows you to refund an order/transaction that has previously been
executed but not yet refunded. Funds will be refunded to the credit card or debit card or net
banking account that was originally charged.
- Status(Kindly pass version as 1.2)– The Status API call can be used to ascertain the status of a
transaction/order. You can use this call if you have not received status/information for a
transaction request. It can also be used as an additional security measure to reconfirm the
parameters posted back.
- Order Lookup(Kindly pass version as 1.2) – The Order Lookup API call can be used to find
transactions/orders basedon given criteria.
- Pending Orders – The Pending Orders API call can be used to list transactions which are yet to be
confirmed or cancelled. Pending orders need to be confirmed for them to be settled, those older
than 12 days are automatically cancelled.
- Delete Customer - The Delete Customer API call is used to delete all saved payment options for the
customer.
- Delete Customer Payment Option - The Delete Customer Payment Option API call is used to delete
a particular payment option saved for the customer.
- Add Customer Payment Option(Kindly pass version as 1.2) – Add Customer payment option
API call is used to add another payment option for registered customerof the merchant.
- GetCustomer PaymentOption(Kindly pass version as 1.2) – The Customer payment option APIcall
is used to list payment options saved for a customer. Payments options are saved for a customer in
thevaultforeasy and convenientpayment.
- GenerateInvoice(Kindly pass version as 1.2) - The Invoice API call is used to generate aninvoice for
acustomer. Valuescan be passed as forgeneratinginvoice using the flexibility of Invoice Settings.

<!-- Page 5 -->
- Generate Recurring Invoice - Recurring invoice call is used to generate recurring invoice for a
customer of a merchant .
- Generate Quick Invoice(Kindly pass version as 1.2) - This Quick Invoice API call is used to
generate a quick invoice for a customer. This is a flavour of regular invoice but with limited
options; hence an easy implementation.
- Get Item List - The Item list API call is used to find the list of configured Items and task for
merchant.The items andtasksareusedto createaregularInvoiceorarecurringinvoice.
- Invoice Lookup - Invoice Lookup API call is used to find list of invoice order lookup details of
orders.
- Update Merchant Invoice Reference No- Update Invoicereference Number APIcall is usedto update
Invoicereferencenumberifthesamewasnotprovidedatthetimeofinvoicegeneration.
17.
Update Merchant Param - Update Merchant params API is used to add some extra parameter
against Merchantparams if the same couldnot be doneatthe timeofthetransaction.
18.
Update Billing Details - Update billing details API call is used to update customer billing
information against anorder.
19.
BinDetails – This is used to fetch the carddetails for a bin number.
20.
**PayId Details – (Kindly pass version as 1.4) - PayId Details API call is used to list**
transactions for a given PayId.
21.
**Payouts Summary(Kindly pass version as 1.2) - Payouts Summary API call is used to list**
payouts summary for a merchant for a given settlement date.
22.
getRefundDetails – The getRefundDetails API call can be used to fetch refund information of
the particular transaction.
- getSettlementDetails– The getSettlementDetails call is use to get the Settlement details such
payid ,UtrNo and settlement date.
- ConsolidatePayout Summary - (Kindly pass version as DEF) ConsolidatePayout Summary API call is
used to list payouts summary for a merchant for a given settlement date.
- ConsolidateSettlementDetails - (Kindly pass version as DEF) ConsolidateSettlementDetails API call
is used to list Settlement Details for a merchant for a given Order Number and Reference
Number.

<!-- Page 6 -->
### Production API URL:-https://api.ccavenue.com/apis/servlet/DoWebTrans
**Staging API URL:- https://apitest.ccavenue.com/apis/servlet/DoWebTrans**
**Encryption of Request for API Calls**
Requests sent to CCAvenue will hold the parameters mentioned in the table below.
enc_request, has to be encrypted using AESsimilarto the method usedfor real-time transaction. Encryptionkeyis
mappedtoAccesscodeasmentionedinAPIAuthenticationsection.

| Name | Description |
| --- | --- |
| enc_request(required) | AES encrypted request data. |
| access_code(required) | This is the accesscode foryour application.Youmust send this with each request. |
| command(required) | This is thecommandtoaccess the APICalls. Youmustsendthis witheach request. |
| request_type(required) | APIrequestsareacceptedinXML, JSONor String.Specifytherequesttype. |
| response_type(optional) | APIreturns XML, JSON or String responses. If leftblank, theresponsewill be in the same format as request. |
| version(required) | Thisistheversiontoaccess APIbased onversioncalls andcurrentpossible values is 1.1 |

**Example:**
enc_request=63957FB55DD6E7B968A7588763E08B240878046EF2F520C44BBC63FB9CCE726209A47348
77F5904445591304ABB2F5E598B951E39EAFB9A24584B00590ADB077ADE5E8C444EAC5A250B1EA96F6
**8D22E44EA2515401C2CD753DBA91BD0E7DFE7341BE1E7B7550&access_code=8JXENNSSBEZCU8KQ&co**
**mmand=confirmOrder&request_type=XML&response_type=XML&version=1.1**

<!-- Page 7 -->
**Decryption of Response for API Calls**
Response received from CCAvenue will hold the parameters mentioned in the table below. enc_response,
when encrypted will have to be decrypted using AES similar to the method used for real- timetransactions.
Encryptionkeyismappedto Accesscode as mentionedin APIAuthenticationsection.

| Name | Description |
| --- | --- |
| enc_response | AES encrypted response containing format as per response_type. |
| enc_error_code | enc_error_code contains valueifstatus is “1”please refer to belowtable for the error code. |
| status | This states whether the call was successful or not. If value of this parameter is“1”thenyou need not decrypt the enc_responseas itwill contain plain error message. |

Note: - Possible refer below table for enc_response value when status value is “1” as follows.
**Example:**
**Successful:**
status=0&enc_response=63957FB55DD6E7B968A7588763E08B240878046EF2F520C44BBC63FB9CCE726
209A473457E6B13721EC6D05ED13A0483ACFDD6F11F284AE79755D47E79687478F93CFCD3CD97510B6
**7B961CDB5279F209F5C451F3039696F13C990B963854C8CADF730&enc_error_code=**
**Error:**
**status=1&enc_response=Access_code: Invalid Parameter&enc_error_code=51407.**

<!-- Page 8 -->
- Confirm
Confirm API call allows youto confirm a pending order.Only confirmed orders aresettled into the
merchant’s account. Anorder older than 12 days is automaticallycancelled. Once an order has been
auto-cancelled by the system,itcannotbeconfirmed.You canoptionally confirm only part of anorder.
Remember,you can doso onlyonce.Remaining funds will be refunded to the creditcard ordebitcard or
net banking account that was originally charged.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted string containing request parameters. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted inXML, JSON or String. Specify the request type. | Possible value for request_type is “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. Ifleftblank,the responsewill be in the same format as request. | Possiblevalueforresponse_typeis “XML” or “ JSON” or “STRING”. |
| Command (required) | Command value specifies theAPIcalls.You must send this with each request. | Possible value for this API call is “confirmOrder”. |
| reference_no (required) | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| amount (required) | Transaction amount to be captured. Amount can be full or partial of the transaction amount. | Decimal(12,2) |

**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_List>
<order reference_no="123456789" amount="1.00"/>
<order reference_no="123456789" amount="2.00" />
</Order_List>

<!-- Page 9 -->
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example JSON Request**
{
"order_List": [
{ "reference_no":"203000099429", "amount": "1.00"},
{ "reference_no": "203000104640", "amount": "1.00"}
]
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.
**Example STRING Request**
## Format: reference_no|amt|reference_no|amt|reference_no|amt|
**Example: 203000099429|1.00|203000104640|1.00|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”then you need not decrypt the enc_response as itwill contain plain errormessage. | Value“0”denotes that the API call was successful. Value“1” denotes API call failure. On enc_response is plain text represents theerrormessage. |
| enc_response | AES encryptedresponsecontainingformat as per response_type |  |
| success_count | Merchant checks the successfully processed records for confirmation of the transactions. | Numeric 0<=success_count<= Numberof orders to be confirmed. |
| reference_no | Unique CCAvenue reference numbers for the transaction. | Numeric(25) |

<!-- Page 10 -->

| reason | Failurere as on if the given unique reference_no not going to confirm. | String Please refer below table for failure message. |
| --- | --- | --- |
| error_code | Error code for Failure. | String Please refer below table for failure message. |

**Example XML Response**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Result error_code="">
<error_desc></error_desc>
<success_count>0</success_count>
<failed_List>
<failed_order error_code="51304 " reason=" Invalid order/tracking id " reference_no="123456788"/>
<failed_ordererror_code="51206"reason="OrderList:InvalidParameter"
reference_no="123456788"/>
</failed_List>
</Order_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Example JSON Response**
{
"failed_List":[
{"reference_no":"123456788","reason":" Invalid order/tracking id
","error_code":"51304 "},
{"reference_no":"123456788","reason":"Order List: Invalid
Parameter","error_code":"51206"}
],
"error_desc":"",
"success_count":0,
"error_code":""
}
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**ExampleSTRING Response**

<!-- Page 11 -->
## Format: success_count|error_code|reference_no|reason^error_code|reference_no|reason|
Example:0|51304|123456788|Invalidorder/trackingid^51206|123456788|OrderList:Invalid
Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
- Cancel
Cancel API call allows you to cancel a pending order.An order older than 12 days is automatically
cancelled. Onceanorderhasbeencancelled/auto-cancelledbythesystem, it cannotbeconfirmed. Fundswillbe
refundedtothecreditcardordebitcardornetbankingaccount thatwas originally charged.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmust send thiswitheach request. |  |
| request_type (required) | APIrequests are accepted inXML, JSON or String. Specify the request type. | Possible value for request_type is “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. Ifleftblank,the responsewill be in the same format as request. | Possiblevalueforresponse_typeis “XML” or “ JSON” or “STRING”. |
| Command (required) | Command value specifies the APIcalls.You must send this with each request. | Possible value for this API call is “cancelOrder” |
| reference_no (required) | Unique CCAvenue reference number forthe transaction. | Numeric(25) |
| amount (required) | Transaction amount to be captured. Amount can be full or partial of the transaction amount. | Decimal(12,2) |

<!-- Page 12 -->
**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_List>
<order reference_no="123456788" amount="1.00" />
<order reference_no="123456789" amount="2.00" />
</Order_List>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example JSON Request**
{
"order_List": [
{"reference_no":"203000099429","amount": "1.00"
},
{"reference_no":"203000099429","amount": "1.00"
}
]
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example STRING Request**
## Format: reference_no|amt|reference_no|amt|
**Example: 203000099429|1.00|203000104640|101.23|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need notdecrypt the enc_response as it will contain plain errormessage. | Value“0”denotes that API callis successful. Value “1” denotes API call failure. On enc_response is plaintextthat represents the error message. |
| enc_response | AESencryptedresponsecontainingformatas per response_type |  |

<!-- Page 13 -->

| success_count | Merchant checks the successfully processed records for cancellation of the transactions. | Numeric 0<=success_count<= Numberofordersforthecancel request. |
| --- | --- | --- |
| reference_no | Unique CCAvenuereference number for the transaction. | Numeric(25) |
| reason | Failure reasonifgivenreference_no arenot going to cancel successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

**Example XML Response**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Result error_code="">
<error_desc></error_desc>
<success_count>0</success_count>
<failed_List>
<failed_order error_code="51304 " reason=" Invalid order/tracking id " reference_no="123456788"/>
<failed_ordererror_code="51206"reason="OrderList:InvalidParameter"
reference_no="123456788"/>
</failed_List>
</Order_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Example JSON Response**
{
"failed_List":[
{"reference_no":"123456788","reason":" Invalid order/tracking id
","error_code":"51304 "},
{"reference_no":"123456788","reason":"Order List: Invalid
Parameter","error_code":"51206"}
],
"error_desc":"",
"success_count":0,
"error_code":""
}

<!-- Page 14 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**ExampleSTRING Response**
## Format: success_count|error_code|reference_no|reason^error_code|reference_no|reason|
Example:0|51304|123456788|Invalidorder/trackingid^51206|123456788|OrderList:Invalid
Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
3.
**Refund**
The Refund API call allows you to refund an order/transaction that has previously been executed but not yet
refunded.Fundswillberefundedtothe creditcardordebitcardornetbankingaccountthatwas originally
charged.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmust send thiswitheach request. |  |
| request_type (required) | APIrequests are accepted inXML, JSON or String. Specify the request type. | Possible value for request_type is “XML” or “JSON” or “STRING”. |
| response_type (optional) | API returns XML, JSON or String responses. If left blank,the responsewill be inthe same format as request. | Possiblevalueforresponse_typeis “XML” or “ JSON” or “STRING”. |
| command (required) | Uniquenamewhichspecifies the APICall. You must send this with each request. | Possible value for command to this API call is “refundOrder”. |

<!-- Page 15 -->

| reference_no (required) | Unique CCAvenuereference number for the transaction. | Numeric(25) |
| --- | --- | --- |
| refund_amount (required) | Transaction amount to be refund. Amount can be full or partial of the transaction amount. | Decimal(12,2). |
| refund_ref_no (required) | Unique reference numbershared by merchant to refund the captured transaction amount. | AlphaNumeric(30) |

**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Refund_Order_Query reference_no="1236547" refund_amount="1.0" refund_ref_no="API1234">
</Refund_Order_Query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example JSON Request**
{
"reference_no":"1236547",
"refund_amount":"1.0",
"refund_ref_no":"API1234"
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.
**Example STRING Request**
**Format: reference_no|refund_amount|refund_ref_no|**
## Example: 203000094245|1.00|API1234|
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.

<!-- Page 16 -->
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need notdecrypt the enc_response asitwill contain plain errormessage. | Value“0” denotes the APIcall was successful. Value“1” denotes API call failure. On enc_response is plain text representstheerrormessage. |
| enc_response | AESencryptedresponsecontainingformat as per response_type |  |
| refund_status | Refundstatusspecifies whethergivenrefund request isgoing to succeed or fail. | Numeric Value “0” denotes refund was successful Value “1” denotes refund was failure. |
| reason | Failure reasonifthere fund request is goingto fail for thetransactions. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

Example XML Response
**Success Response:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Refund_Order_Result reason="" refund_status="0" reason=”” error_code=””/>
**Failure Response:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Refund_Order_Result reason="Reference number: Invalid Parameter" refund_status="1" error_code=”51310”/>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Example JSON Response**

<!-- Page 17 -->
**Success Response:**
{
"reason":"",
"error_code":"",
"refund_status":0
}
**Failure Response:**
{
"reason":"Referencenumber:InvalidParameter",
"error_code":"51310",
"refund_status":1
}
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example STRING Response
**Success Response: Format:**
refund_status|
**Example: 0|**
**Failure Response:**
## Format: refund_status|error_code|reason|
## Example: 1|51310|Reference number: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.

<!-- Page 18 -->
4.
**Status**
The Status APIcall can be used to ascertainthestatus of a transaction/order. You can usethis call if you havenot
receivedstatus/informationforatransactionrequest.Itcanalsobeusedasanadditional security measure to
reconfirm the parameters posted back.
**Request Parameters**

| Name | Description | Note Parameters Datatype (Parameters max length) |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests areaccepted inXML, JSON or String. Specify the request type. | Possiblevalueforrequest_type is “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. Ifleftblank,the responsewill be in the same format as request. | Possible value for response_type is “XML” or “ JSON” or “STRING”. |
| command (required) | Command value specifies the API calls.You must send this with each request. | Value is “orderStatusTracker”. |
| reference_no (conditional) | CCAvenuereferenceno. allocated tothe transaction. Reference number is required if you do not share order_no. | Numeric(25). |
| order_no (conditional) | This is the merchant reference number for the transaction. Order number isrequired if youdonot share reference_no. | AlphaNumeric with special characters (hyphen and underscore)(30). |

**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Status_Query order_no="33231644" reference_no="225013271813"/>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to

<!-- Page 19 -->
CCAvenue. Kindly refer to the encryption section.
**Example JSON Request**
{
"reference_no": "225013271813",
"order_no": "33231644"
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.
**Example STRING Request**
**Format: reference_no|order_no|**
**Example: 225013271813|33231644|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Response Parameters**
**Name**
**Description**
**Note**
**status**
Thisstateswhetherthecallwassuccessfulor not.
Ifvalue ofthisparameter is“1”thenyou need
not decrypt the enc_response as it will
contain plain errormessage.

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need not decrypt the enc_response as it will contain plain errormessage. | Value “0” denotes thatthe API call wassuccessful. Value“1” denotes APIcallfailure. On enc_response is plain text representstheerrormessage. |
| enc_response | AESencryptedresponsecontainingformat as per response_type |  |
| order_amt | Amount for the transaction. | Decimal(12,2). |
| order_bill_address | Order billing address details for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315). |
| order_bill_city | Order billing City name for the order. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_bill_country | Order billing Country for the Order. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_bill_email | EmailAddress ofthe Order for notifications. | Possible value for email ID is |

<!-- Page 20 -->

|  |  | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| --- | --- | --- |
| order_bill_name | Order billing name for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe,underscore, dot)(60). |
| order_bill_state | Order billing state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_bill_tel | Order billing telephone no. for the order. | Numeric(10) |
| order_bill_zip | Order billing address’s pincode for the order. | Possible value for zip is Alphanumeric with special characters (hyphen and space) (15). |
| order_capt_amt | Captured amount for the transaction. Capturedamountcanbefullorpartialofthe transaction amount. | Decimal(12,2). |
| order_curr | Possibleorder Currencyinwhichmerchant processed thetransaction. | String Examples: INR – Indian Rupee USD– United StatesDollar SGD – Singapore DollarGBP– PoundSterling EUR – Euro, official currency of Eurozone |
| order_date_time | Order Generated Date &Time. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_device_type | This is the type of device using which the transaction was processed. | Possiblevaluefordevicetypeis IVRS/MOB/PC. |
| order_discount | This is Discount Value for the Order No. | Decimal(12,2). |
| order_fee_flat | Flat Fee for the Order No. | Decimal(12,2). |
| order_fee_perc | Provides the percentage fee for the same order No. | Decimal(12,2). |

<!-- Page 21 -->

| order_fee_perc_value | This attribute provides the percentage fee Value for the same order No. | Decimal(12,2). |
| --- | --- | --- |
| order_fraud_status | Specify whether orders are valid or not. | String Possible Values are: 1) Value“High” denotes“High Risk” 2) Value“Low” denotes“Low Risk” 3) Value“NR” denotes“NoRisk” Value “GA” denotes“Go Ahead” 5)Value“NA”denotes“Not Applicable” |
| order_gross_amt | Total transaction amount. | Decimal(12,2). |
| order_ip | Customer IP Address (i.e. from where transaction is being initiated) | IP V-4 Supported. |
| order_no | Order No. for the transaction. | Alphanumeric with special characters (hyphen and underscore)(30). |
| order_notes | Order information you wish to provide. | Alphanumeric with special characters (space, comma, dot, hyphen and underscore)(60). |
| order_ship_address | Shipping Address for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| order_ship_city | Shipping city name for the orders. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_ship_country | Shipping country name for the orders. | Possiblevalueforcountryis Alphanumeric withspecial characters (space)(30). |
| order_ship_email | Shipping email ID for the notifications of the transaction. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |

<!-- Page 22 -->

| order_ship_name | Shipping Name ofthe Customer for theorder. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe,underscore, dot)(60). |
| --- | --- | --- |
| order_ship_state | Shipping state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_ship_tel | Telephone no. for notifications of the transaction. | Numeric(10). |
| order_ship_zip | Order shippingaddress's pincodeforthe order. | Possible value for zip is Alphanumeric with special characters(hyphen and space) (15). |
| order_status | Status of the order.Itcan be single ormultiple. | String Possible values are: Aborted(transactioniscancelled by the User) Auto-Cancelled (transaction has not confirmed within 12 days hence autocancelledbysystem) Auto- Reversed (two identical transactions for same order number,bothweresuccessfulat bank'sendbutwegotresponse for only one of them, then next day during reconciliation we mark one of the transaction as auto reversed ) Awaited (transaction is processed |

<!-- Page 23 -->

|  |  | frombillingshippingpagebutno response isreceived) Cancelled (transaction is cancelled by merchant ) Chargeback() Invalid(Transaction sent to CCAvenue with Invalid parameters, hence could not be processed further) Fraud (we update this during recon,theamountisdifferentat bank’sendandatCCAvenuedue to tampering) Initiated (transaction just arrived onbillingshippingpageandnot processed further) Refunded (Transaction is refunded.) Shipped (transaction is confirmed) Successful Systemrefund(Refundedby CCAvenueforvariousfindingsof reversals by CCAvenue) Unsuccessful (transaction is not successful) Timeout (The CCAvenue payment page has a Timeout set at 15 minutes per session) |
| --- | --- | --- |
| order_status_date_time | This is the latestdate and time when order status ismodified. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_TDS | AmountofTDS(taxdeductedatsource)for the Transaction. | Decimal (13,4) |
| order_tax | Tax Amount for the Transaction. | Decimal (13,4) |
| reference_no | CCAvenue reference no. allocated to the transaction. | Numeric(25). |
| order_bank_ref_no | Unique reference number shared by Bank after successful transaction. | Numeric(25). |

<!-- Page 24 -->

| order_bank_response | Descriptionaboutthetransactionsharedby the bank after transaction. | String |
| --- | --- | --- |
| order_gtw_id | Unique payment option Bank name. | Alphabet(6) |
| order_card_name | Specify the card name for the transaction. | Possible value for card name is VISA","MASTERCARD","AMEX","J CB","DINERS CLUB". |
| order_option_type | Specifythepayment option type for the order. | String Possiblevalue for payment option type is: OPTCASHC-Cash card OPTCRDC -Credit Card OPTDBCRD-Debit Card OPTEMI-EMI OPTIVRS-IVRS OPTMOBP-MobilePayments OPTNBK-Net Banking |
| Merchant_param1 | Tempparameters value update by merchant at transaction time for further use. | String |
| Merchant_param2 | Tempparameters value update by merchant at transaction time for further use. | String |
| Merchant_param3 | Tempparameters value update by merchant at transaction time for further use. | String |
| Merchant_param4 | Tempparameters value update by merchant at transaction time for further use. | String |
| Merchant_param5 | Tempparameters value update by merchant at transaction time for further use. | String |
| page_count | Totalpagesavailablebasedonno_of_records in the request. | Example: no_of_records sent in request was 100 total_records matching the lookup criteria were 1000 page_count will be 10 (total_records / no_of_records) rounded to the ceiling. |
| total_records | Totalno.ofordersmatchingthelookup criteria. |  |
| error_desc | Reason ifsearch criteria didnotfind the orders for thetransactions. | String. Please refer below table for failure message. |

<!-- Page 25 -->

| error_code | Error code for Failure reason. | String. Please refer below table for failure message. |
| --- | --- | --- |
|  |  |  |

Example XML Response
**Success Response:**
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

<!-- Page 26 -->
<order_ship_name>Shashi</order_ship_name>
<order_ship_state>MP</order_ship_state>
<order_ship_tel>9595226054</order_ship_tel>
<order_ship_zip>425001</order_ship_zip>
<order_status>Successful</order_status>
<order_status_date_time>2015-09-16 15:06:13.243</order_status_date_time>
<order_tax>0.0028</order_tax>
< Merchant_param1>Mobile No9595226054</ Merchant_param1>
< Merchant_param2>Flight from Dehli</ Merchant_param2>
< Merchant_param3>ToMumbai</ Merchant_param3>
< Merchant_param4>Mobile No9595226054</ Merchant_param4>
< Merchant_param5>Mobile No9595226054</ Merchant_param5>
<reference_no>204000163469</reference_no>
<status>0</status>
</Order_Status_Result>
**Failure Response:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Status_Result error_code=”51313”>
<error_desc>Order List: Invalid Parameter</error_desc>
<status>1</status>
</Order_Status_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Example JSON Response**
**Success Response:**
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

<!-- Page 27 -->
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
"order_device_type":"PC", "
Merchant_param1":"Mobile No9595226054", "
Merchant_param2":"Flight from Dehli", "
Merchant_param3":"ToMumbai", "
Merchant_param4":"Mobile No9595226054", "
Merchant_param5":"Mobile No9595226054",
"error_desc":"",
"status":0,
"error_code":""
}
**Failure Response:**
{
"error_desc":"Order List: Invalid Parameter",
"error_code":"51313",
"status":1
}

<!-- Page 28 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example STRING Response
**Format:**
## status|order_status|reference_no|order_bank_ref_no|order_bank_response|
## order_bill_name|order_bill_email|order_bill_address|order_bill_city|order_bill_state|order_bill_co
## untry|order_bill_telephone_no|order_bill_city_zip|order_card_name|order_currency|order_date_
## time|order_delivery_details|order_device_type|order_fraud_status|order_gateway_id|order_iP|or
## der_no| order_notes|order_option_type|order_shiping_name|order_ship_email|order_ship_address|order
## _ship_city|order_ship_state|order_ship_country|order_ship_telephone_no|order_ship_zip|order_
status_date_time|order_TDS|order_amount|order_capture_amount|order_discount|order_fee_fla
## t|order_fee_perc|order_fee_perc_value|order_gross_amount|order_tax|Merchant_param1|
Merchant_param2| Merchant_param3| Merchant_param4| Merchant_param5|
**Example:**
## 0|Successful|204000163514|068406|Transaction Successful|Shashi|gzpmgexii@i.softbank.jp|Room no
## 1101, near Railway station Ambad|Indore|MP|India|9595226054|425001|MasterCard|INR|2015-
## 09-18 12:53:40.407||PC|NA|ICICI|192.168.2.182|64807533|order will be
## shipped|OPTCRDC|Shashi||Room no 1101, near Railway station
## Ambad|Indore|MP|India|9595226054|425001|2015-09-18
## 12:54:15.357|0.0|1.0|0.0|0.0|0.0|2.3|0.02|1.0|0.0028|Mobile No9595226054|Flight from
Dehli|ToMumbai|Mobile No9595226054|Mobile No9595226054|
**Failure Response:**
## Format: statud|error_code|error_desc|
## Example: 1|51313|Order List: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
- Order Lookup
The Lookup APIcall canbe used toextracttransaction details for a certainsetoftransactions. The functionality
works similar to a search feature.

<!-- Page 29 -->
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmust send thiswitheach request. |  |
| request_type (required) | API requests are accepted inXML, JSON or String. Specify the request type. | Possible valuefor request_type is “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. Ifleftblank,the response will be in the same format as request. | Possiblevalueforresponse_typeis “XML” or “ JSON” or “STRING”. |
| Command (required) | Command valuespecifies the API calls.You must send this with each request. | Possible value for this API call is “orderLookup”. |
| reference_no (optional) | Unique CCAvenue reference number forthe transaction. | Numeric(25). |
| from_date (required) | Providethe StartDate to find theorderslist. | Datemust be inIST(dd-mm-yyyy )format. |
| to_date (optional) | Providetheend date to searchthe orders betweenfromdateand to date.Itshouldbe greater than or equal to from date. | Date must be in IST(dd-mm-yyyy) format. |
| order_currency (optional) | Currency in whichyou processed the transaction. You cansendthe multiple currencies format. | String Example: INR – Indian Rupee USD–United StatesDollar SGD – Singapore Dollar GBP – PoundSterling EUR – Euro, officialcurrencyof Eurozone Multiple currency format: INR|USD| GBP in JSON & XML request type but INR|USD|GBP in STRING request type |

<!-- Page 30 -->

| order_email (optional) | Email address used to purchase the order. | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| --- | --- | --- |
| order_fraud_status (optional) | Specify whether orders are valid or not. | String Possible Values are: 1) Value“High” denotes “High Risk” 2) Value“Low”denotes“LowRisk” 3) Value “NR” denotes“NoRisk” 4) Value“GA” denotes“GoAhead” 5) Value “NA” denotes“Not Applicable” 6) |
| order_min_amount (optional) | Minimum amount limitforsearch criteriafor the transaction. | Decimal(12,2). |
| order_max_amount (optional) | Maximum amountlimitforsearchcriteriafor the transaction. | Decimal(12,2). |
| order_name (optional) | Customer name for the transaction. | Alphanumericwithspecialcharacter (space, hyphen, apostrophe, underscore, dot)(60). |
| order_no (optional) | Unique merchant order no for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(60). |
| order_payment_type (optional) | Payment Mode for the transaction.It canbe single ormultiple. | String Below are the Possible Values: 1) CASHC (Cash Card Payment Type) 2) CRDC (Credit CardPayment Type) 3) DBCRD (Debit CardPayment Type) 4) MOBP(MobilePaymentType) 5) NBK (Net Banking ) Multiple values format: MOBP| NBK for JSON & XML request typebutMOBP|NBKforSTRING request type. |

<!-- Page 31 -->
**order_status**
(optional)
Status ofthe order.It can be single or
multiple.
String
Possible values are:
Aborted (transaction is cancelled by the
**User)**
Auto-Cancelled (transaction has not
confirmed within 12 days hence auto
**cancelled by system)**
**Auto-Reversed (two identical**
transactions for same order number,
bothweresuccessfulat bank'sendbut
wegotresponsefor
only one of them, then next day
duringreconciliationwemarkone of
the transaction as auto reversed )
Awaited (transaction is processed from
billing shipping page but no response
**isreceived)**
Cancelled (transaction is cancelled by
**merchant )**
**Chargeback()**
Invalid(Transaction sent to
CCAvenue with Invalid parameters,
hence could not be processed
further)

<!-- Page 32 -->

|  |  | Fraud (weupdatethis duringrecon, the amount is different at bank’s end and at CCAvenue due to tampering) Initiated (transaction just arrived on billing shipping page and not processed further) Refunded (Transaction is refunded.) Shipped (transaction is confirmed) Successful System refund (Refunded by CCAvenue for various find of reversals by CCAvenue) Unsuccessful (transaction is not successful due to ) |
| --- | --- | --- |
| order_type (optional) | Type of the order. | String Different types of Orders: 1) OT-INV denotes“Invoice” 2) OT-ORD denotes“Orders” 3) OT-ORDSCdenotes“Shopping Cart Orders” 4) OT-PPAY denotes” Phone Pay” 5) OT-SNIP denotes“SNIPorders” |
| order_bill_tel (optional) | Customer mobilenumber for the transaction. | Numeric(10). |
| page_number (required) | A limited number of records are shared as part of theresponse.Thetotalrecords&number of pages areshared aspartof the response to enable subsequent calls. | Numeric(4). |

**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Lookup_Query>
<order_no>xxxxxxx</order_no>
<reference_no>xxxxxxxxx</reference_no>
<order_email>xxx@xxxxx.com</order_email>

<!-- Page 33 -->
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
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.
**Example JSON Request**
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
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.

<!-- Page 34 -->
**Example STRING Request**
**Format:**
## reference_no|order_no|from_date|to_date|order_status|order_bill_tel|order_country|order_ema
## il|order_fraud_status|order_max_amount|order_min_amount|order_name|order_payment_type|
## order_type|order_currency|page_number|
**Example:  ||21-03-2015|03-04-2015||||||||||||1|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need notdecrypt the enc_response as it will contain plain errormessage. | Value“0”denotes that the API call was successful. Value “1” denotes API call failure.Onenc_responseisplain text represents the error message. |
| enc_response | AESencryptedresponsecontainingformat as per response_type |  |
| order_amt | Amount for the transaction. | Decimal(12,2). |
| order_bill_address | Order billing address details for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circularbracketsanddot)(315) |
| order_bill_city | Order billing City name for the order. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_bill_country | Order billing country for the Order. | Possiblevalueforcountryis Alphanumeric withspecial characters (space)(30). |

<!-- Page 35 -->

| order_bill_email | EmailAddress of the Order fornotifications. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| --- | --- | --- |
| order_bill_name | Order billing name for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_bill_state | Order billing state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_bill_tel | Order billing telephone no for the order. | Numeric(10) |
| order_bill_zip | Orderbilling address’s pincodefor theorder. | Possible value for zip is AlphaNumeric with special characters(hyphen and space) (15). |
| order_capt_amt | Captured amount for the transaction. Capturedamountcanbefullorpartialofthe transaction amount. | Decimal(12,2). |
| order_curr | Possibleorder Currencyinwhichmerchant processed thetransaction. | String Examples: INR – Indian Rupee USD– United StatesDollar SGD – Singapore DollarGBP– PoundSterling EUR– Euro,officialcurrencyof Eurozone |
| order_date_time | Order Generated Date &Time. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_device_type | This is the type of device using which the transaction was processed. | Possiblevalue fordevicetypeis IVRS/MOB/PC. |
| order_discount | This is Discount Value for the Order No. | Decimal(12,2). |
| order_fee_flat | Flat Fee for the Order No. | Decimal(12,2). |
| order_fee_perc | Provides the percentage fee for the same order No. | Decimal(12,2). |

<!-- Page 36 -->

| order_fee_perc_value | This attribute provides the percentage fee Value for the same order No. | Decimal(12,2). |
| --- | --- | --- |
| order_fraud_status | Specify whether orders are valid or not. | String Possible Values are: 1) Value“High” denotes“High Risk” 2) Value“Low” denotes“Low Risk” 3) Value“NR”denotes“No Risk” 4) Value “GA” denotes “Go Ahead” 5) Value “NA” denotes“Not Applicable” |
| order_gross_amt | Total transaction amount. | Decimal(12,2). |
| order_ip | Customer IP Address (i.e. from where transaction is being initiated) | IP V-4 Supported. |
| order_no | Order No for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| order_notes | Order information you wish to provide. | AlphaNumeric with special characters(space, comma, dot, hyphen and underscore)(60). |
| order_ship_address | Shipping Address for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circularbracketsanddot)(315) |
| order_ship_city | Shipping city name for the orders. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_ship_country | Shipping country name for the orders. | Possible value for country is Alphanumeric with special characters (space)(30). |

<!-- Page 37 -->

| order_ship_email | ShippingemailID for the notifications of the transaction. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| --- | --- | --- |
| order_ship_name | Shipping Name ofthe Customer for theorder. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_ship_state | Shipping state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_ship_tel | Telephone no for notifications of the transaction. | Numeric(10). |
| order_ship_zip | Order shippingaddress's pincodeforthe order. | Possible value for zip is AlphaNumeric with special characters(hyphen and space) (15). |

<!-- Page 38 -->

| order_status | Status of theorder.Itcan be single ormultiple. | String Possible values are: Aborted (transaction is cancelled by the User) Auto-Cancelled (transactionhas not confirmed within 12 days hence autocancelledbysystem) Auto- Reversed (two identical transactionsfor same order number, both weresuccessful at bank's end but we got response foronly one of them, thennext day during reconciliation we markoneofthe transactionas auto reversed) Awaited (transaction is processedfrombillingshipping page but no response is received) Cancelled (transaction is cancelled by merchant ) Chargeback() Invalid(Transaction sent to CCAvenue with Invalid parameters, hence could not be processed further) Fraud (we update this during recon,theamountisdifferentat bank’sendandatCCAvenuedue to tampering) Initiated (transaction just arrived onbilling shippingpage and not processed further ) Refunded (Transaction is refunded.) Shipped (transaction is confirmed) Successful System refund (Refunded by CCAvenue for various find of reversals by CCAvenue) Unsuccessful (transaction is not successful due to ) |
| --- | --- | --- |
| order_status_date_time | This is the latest date and time when order status is modified. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |

<!-- Page 39 -->

| order_TDS | AmountofTDS(taxdeductedatsource)for the Transaction. | Decimal(13,4). |
| --- | --- | --- |
| order_tax | Tax Amount for the Transaction. | Decimal (13,4) |
| reference_no | CCAvenue reference no allocated to the transaction. | Numeric(25). |
| order_bank_ref_no | Unique reference number share by Bank after successful transaction. | Numeric(25). |
| order_bank_response | Descriptionaboutthetransactionsharedby the bank after transaction. | String |
| order_gtw_id | Unique payment option Bank name. | Alphabet(6) |
| order_card_name | Specify the card name for the transaction. | Possiblevalueforcardnameis VISA","MASTERCARD","AMEX", "JCB","ECRD","DINERS CLUB","DSNV","CTBL","CVMS". |
|  |  |  |
| order_option_type | Specify thepaymentoptiontypefor the order. | String Possiblevalueforpayment option typeis OPTCASHC-Cash card OPTCRDC -Credit Card OPTDBCRD-Debit Card OPTEMI-EMI OPTIVRS-IVRS OPTMOBP-MobilePayments OPTNBK-Net Banking |
| Merchant_param1 | Temp parameters value update by merchant at transaction time for further use. | String |
| Merchant_param2 | Temp parameters value update by merchant at transaction time for further use. | String |
| Merchant_param3 | Temp parameters value update by merchant at transaction time for further use. | String |
| Merchant_param4 | Temp parameters value update by merchant at transaction time for further use. | String |
| Merchant_param5 | Temp parameters value update by merchant at transaction time for further use. | String |

<!-- Page 40 -->

| error_desc | Reason ifsearch criteriadid not find the orders for thetransactions. | String Please refer below table for failure message. |
| --- | --- | --- |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| page_count | Totalpagesavailablebasedonno_of_records in the request | Example:no_of_recordssentin request was100 total_records matching the lookup criteria were 1000 page_count will be 10 (total_records / no_of_records) rounded to the ceiling |
| total_records | Total no.of orders matching the lookup criteria |  |

**Example XML Response**
**Success Response:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Lookup_Result error_code=””>
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

<!-- Page 41 -->
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
**Failure Response:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order_Lookup_Result error_code=”51313”>
<error_desc>Order List: Invalid Parameter</error_desc>
<page_count>0</page_count>
<total_records>0</total_records>
</Order_Lookup_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example JSON Response
**Success Response:**
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

<!-- Page 42 -->
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
**Failure Response:**
{
"page_count":0,
"total_records":0,
"error_desc":"Order List: Invalid Parameter",
"error_code":"51313"
}

<!-- Page 43 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example STRING Response
**Success Response: Format:**
## page_count|total_records|reference_no|order_no|order_amount|order_status|order_bank_ref_n
o|order_bank_response|order_card_name|order_currancy|order_date_time|order_delivery_detai
ls|order_device_type|order_fraud_status|order_gateway_id|order_ip|order_notes|order_option_
type|order_bill_name|order_bill_address|order_bill_city|order_bill_state|order_bill_country|orde
r_bill_zip|order_bill_tel|order_bill_email|order_ship_name|order_ship_address|order_ship_city|o
rder_ship_state|order_ship_county|order_ship_zip|order_ship_tel|order_ship_email|order_captu
re_amount|order_discount|order_gross_amount|order_fee_flat|order_fee_perc|order_fee_perc_
value^||Merchant_param1|Merchant_param2|Merchant_param3|Merchant_param4|
Merchant_param5|
**Example:**
**Successful Response:**
## 1|1|204000134595|45289752|1.0|Unsuccessful||Invalid Credentials|MasterCard|INR|2015-03-31
11:20:44.47||PC|NA|SBI|192.168.2.182|order will be shipped|OPTCRDC|Shashi|Room no 1101, near Railway
station Ambad|Indore|MP|India|425001|9595226054|xxxxx.xxxx@xxxxxx.xxxx|Shashi|Room no 1101, near
Railway station Ambad|Indore|MP|India|425001|1234567890||0.0|0.0|1.0|0.0|12.0|0.12| Mobile
No9595226054|Flight from Dehli|ToMumbai|Mobile No9595226054|Mobile No9595226054|
**Failure Response:**
## Format: page_no|total_no_of_records|error_code|error_desc|
## Example: 0|0|51313|Order List: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.

<!-- Page 44 -->
6.
**Pending Orders**
PendingAPI callallows you to find the listofpending orders.Only confirmed orders aresettled into the
merchant’saccount. An orderolderthan12days isautomaticallycanceled. Once an orderhas been auto-
canceled by the system, it cannot be confirmed.
You can optionally confirm only part of an order. Remember, you cando so only once. Remaining funds willbe
refundedtothecreditcardordebitcardornetbankingaccountthatwasoriginallycharged.
**Request Parameters**
**Name**
**Description**
**Note**
**enc_request**
(required)

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send thiswitheach request. |  |
| request_type (required) | API requests are accepted in XML, JSONor String. Specify the request type. | Possible valuefor request_type is “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. Ifleftblank,the responsewill be in the same format as request. | Possiblevalueforresponse_typeis is “XML” or “ JSON” or “STRING”. |
| Command (required) | Command value specifies the API calls.You must send this with each request. | Possible value for this API call is “getPendingOrders”. |
| reference_no (optional) | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| order_no (optional) | Unique Merchant order number for the pendingorderofthe transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| order_bill_name (optional) | Name of the customer to find invoicedetails after placingorders. | Alphanumericwithspecialcharacter (space, hyphen, apostrophe, underscore, dot)(60). |
| order_email (optional) | Emailidofcustomer to sendmailforthe generate invoice. | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_bill_tel (optional) | Mobile number of the customer to send the generate invoice. | Numeric(10) |

<!-- Page 45 -->

| order_fraud_status (optional) | Type of fraud status. | String Possible Values are: 1) Value“High” denotes“High Risk” 2) Value“Low” denotes“Low Risk” 3) Value “NR” denotes“NoRisk” 4) Value“GA” denotes“GoAhead” 5) Value “NA” denotes “Not Applicable |
| --- | --- | --- |
| order_currency (optional) | Currency in which you processed the transaction. You cansend themultiple currencies format. | String Example: INR – Indian Rupee USD– United StatesDollar SGD – Singapore DollarGBP– PoundSterling EUR – Euro, official currencyof Eurozone Multiple currency format: INR|USD| GBP in XML & JSON requesttypeandINR|UDS|GBPin STRING request type. |
| order_type (optional) | Type of the order. | String Different types of Orders: 1) OT-INV denotes“Invoice” 2) OT-ORD denotes“Orders” 3) OT-ORDSCdenotes“Shopping Cart Orders” 4) OT-PPAY denotes” Phone Pay” 5) OT-SNIP denotes“SNIPorders” |
| page_number (required) | Alimitednumberofrecords are shared as part of the response. The total records & number of pagesaresharedaspartoftheresponseto enable subsequent calls. | Numeric(4) |

<!-- Page 46 -->
**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Pending_Orders_Query>
<order_no>XXXXXX</order_no>
<reference_no>XXXXXXX</reference_no>
<order_bill_name>XXXXX</order_bill_name>
<order_email>XXXX@XXXX.com</order_email>
<order_bill_tel>XXXXXXX</order_bill_tel>
<order_fraud_status>XX|XXXX|XXX</order_fraud_status>
## <order_currency>XXX|XXX|XXX|XXX</order_currency>
## <order_type>XX-XXX|XX-XXX</order_type>
<page_number>1</page_number>
</Pending_Orders_Query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.
**Example JSON Request**
{
"order_no": "XXXXXXX", "reference_no":
"XXXXXXX", "order_bill_name": "XXXXX",
"order_email": "XXXX@XXXXX.com",
"order_bill_tel": "XXXXXXXXXXX",
## "order_fraud_status": "XX|XXXX|XXX",
## "order_currency": "XXX|XXX|XXX|XXX",
"order_type": "XX|XX-XX",
"page_number": "1"
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly referto the encryption section.
**Example STRING Request Format:**
## reference_no|order_no|order_bill_name|order_bill_tel|order_currency|order_currency
## |order_currency|order_email|order_fraud_status|order_fraud_status
|order_fraud_status|order_type|order_type|order_type|page_number|
## Example: XXXXXXX|XXXXXX|XXXXX|XXXXXXX|XXX|XXX|XXX|XXX|XXXX@XXXX.com|XX|XXXX|XXX|XX-
## XXX|XX-XXX|1|
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

<!-- Page 47 -->
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need notdecrypt the enc_response asitwill contain plain errormessage. | Value“0”denotes that the API call wassuccessful. Value “1” denotes API call failure.Onenc_responseisplain text represents the error message. |
| enc_response | AESencryptedresponsecontainingformat as per response_type |  |
| order_amt | Amount for the transaction. | Decimal(12,2). |
| order_bill_address | Order billing address details for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circularbracketsanddot)(315 ) |
| order_bill_city | Order billing City name for the order. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_bill_country | Order billing country for the Order. | Possiblevalueforcountryis Alphanumeric withspecial characters (space)(30). |
| order_bill_email | EmailAddressoftheOrderfornotifications. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_bill_name | Order billing name for the order. | Possiblevaluefornameis Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_bill_state | Order billing state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_bill_tel | Order billing telephone no for the order. | Numeric(10) |

<!-- Page 48 -->

|  |  |  |
| --- | --- | --- |
| order_bill_zip | Orderbillingaddress’pincodefortheorder. | Possible value for zip is AlphaNumeric with special characters(hyphen and space) (15). |
| order_capt_amt | Captured amount for the transaction. Capturedamountcanbefullorpartialofthe transaction amount. | Decimal(12,2). |
| order_curr | Possibleorder Currencyinwhichmerchant processed thetransaction. | String Examples : INR – Indian Rupee USD– United StatesDollar SGD – Singapore DollarGBP– PoundSterling EUR– Euro,officialcurrencyof Eurozone |
| order_date_time | Order Generated Date &Time. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_device_type | This is the type of device using which the transaction was processed. | Possiblevalue fordevicetypeis IVRS/MOB/PC. |
| days_left | Number of days left to pay order amount. | Numeric(3) |
| order_discount | This is Discount Value for the Order No. | Decimal(12,2). |
| order_fee_flat | Flat Fee for the Order No. | Decimal(12,2). |
| order_fee_perc | Provides the percentage fee for the same order No. | Decimal(12,2). |
| order_fee_perc_value | This attribute provides the percentage fee Value for the same order No. | Decimal(12,2). |

<!-- Page 49 -->

| order_fraud_status | Specify whether orders are valid or not. | String Possible Values are: 1) Value“High” denotes “High Risk” 2) Value“Low” denotes “Low Risk” 3) Value“NR”denotes “No Risk” 4) Value “GA” denotes “Go Ahead” 5) Value “NA” denotes“Not Applicable” |
| --- | --- | --- |
| order_gross_amt | Total transaction amount. | Decimal(12,2). |
| order_ip | Customer IP Address (i.e. from where transaction is being initiated) | IP V-4 Supported. |
| order_no | Order No for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| order_notes | Order information you wish to provide. | AlphaNumeric with special characters(space, comma, dot, hyphen and underscore)(60). |
| days_left | Number of days left to pay order amount. | Numeric (4). |
| order_bank_mid | Unique merchant id provided by issuer bank to merchant for the transaction. | Numeric(16). |
| order_bank_ref_no | Unique reference number shared by Bank after successful transaction. | Numeric(25). |
| order_bank_response | Descriptionaboutthetransactionsharedby the bank after transaction. | String |
| order_gtw_id | Unique payment option Bank name. | Alphabet(6) |
| order_card_name | Specify the card name for the transaction. | Possiblevalueforcardnameis VISA","MASTERCARD","AMEX", "JCB","ECRD","DINERS CLUB","DSNV","CTBL","CVMS". |

<!-- Page 50 -->

| order_option_type | Specify the payment option typefor the order. | String Possiblevaluefor payment option typeis OPTCASHC-Cash card OPTCRDC -Credit Card OPTDBCRD-Debit Card OPTEMI-EMI OPTIVRS-IVRS OPTMOBP-MobilePayments OPTNBK-Net Banking |
| --- | --- | --- |
| order_card_type | Specify the card type used to pay order amount. | String Possible value for card type is Cash card Credit Card Debit Card EMI IVRS Mobile Payments Net Banking |
| order_risk_mitigation | Specify whether the current order on risk mitigation or not. | String(1) Possible value is “Y” or ”N”. |
| order_tax | Tax Amount for the Transaction. | Decimal (13,4) |

<!-- Page 51 -->

| order_tran_status | Transaction status for the order coming from bank's end. | String Possible value is TS-AUTA- Authorization Awaited TS-AUTC- Authorization confirm TS-AUTCR- Authorization confirmed on reconciliation TS-AUTD- Authorization Declined TS-AUTDR- Authorization Declined on reconciliation TS-AUTFR- Authorization Fraud TS-AUTFRR-AuthorizationFraud on reconciliation TS-AUTFRAM- Amt mismatch TS-AUTFRCM - Currency mismatch TS-AUTFRUT- Authorization fraud TS-ABRTBNK- Aborted at bank's end. |
| --- | --- | --- |
| order_type | Type of the order. | String Different types of Orders: 1) OT-INVdenotes “Invoice” 2) OT-ORDdenotes“Orders” 3) OT-ORDSCdenotes“Shopping Cart Orders” 4) OT-PPAY denotes”Phone Pay” 5) OT-SNIPdenotes“SNIP orders” |
| order_ship_address | Shipping Address for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circularbracketsanddot)(315 ) |
| order_ship_city | Shipping city name for the orders. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |

<!-- Page 52 -->

| order_ship_country | Shipping country name for the orders. | Possible value for country is Alphanumeric with special characters (space)(30). |
| --- | --- | --- |
| order_ship_email | Shipping email IDfor the notifications of the transaction. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| order_ship_name | ShippingName ofthe Customer for the order. | Possiblevaluefornameis Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_ship_state | Shipping state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_ship_tel | Telephone no for notifications of the transaction. | Numeric(10). |
| order_ship_zip | Order shipping address' pin code for the order. | Possible value for zip is AlphaNumeric with special characters(hyphen and space) (15). |

<!-- Page 53 -->

| order_status | Status of the order. It canbesingle or multiple. | String Possible values are: Aborted (transaction is cancelled by the User) Auto-Cancelled (transaction has not confirmed within 12 days henceautocancelled bysystem) Auto-Reversed (two identical transactions for same order number, both weresuccessful at bank'sendbutwegot response foronlyoneofthem, thennext day during reconciliation we markoneof thetransactionas auto reversed) Awaited (transaction is processedfrombilling shipping page but no response is received) Cancelled (transaction is cancelled by merchant ) Chargeback() Invalid(Transaction sent to CCAvenue with Invalid parameters, hence could not be processed further) Fraud (we update this during recon,theamountisdifferent at bank’sendandatCCAvenue due to tampering) Initiated (transaction just arrived onbilling shippingpage and not processed further ) Refunded (Transaction is refunded.) Shipped (transaction is confirmed) Successful Systemrefund(Refundedby CCAvenueforvariousfindingsof reversals by CCAvenue) Unsuccessful (transaction is not successful due to ) |
| --- | --- | --- |
|  |  |  |
| order_status_date_time | This is the latest date and time when order status is modified. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |

<!-- Page 54 -->

| order_TDS | AmountofTDS(taxdeductedatsource)for the Transaction. | Decimal(13,4). |
| --- | --- | --- |
| reference_no | Unique CCAvenue reference no allocated to the transaction. | Numeric(25). |
| error_desc | Reason ifsearchcriteriadidnot findthe orders forthe transactions. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| page_count | Totalpagesavailablebasedonno_of_records in the request | Example:no_of_recordssentin request was100 total_records matching the lookup criteria were 1000 page_count will be 10 (total_records / no_of_records) rounded to the ceiling |
| total_records | Total no.of orders matching the lookup criteria |  |

**Example XML Response**
**Success Response:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Pending_Orders_Result error_code=””>
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

<!-- Page 55 -->
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
**Failure Response:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Pending_Orders_Result error_code=”51313”>
<error_desc>Order List: Invalid Parameter</error_desc>
<page_count>1</page_count>
<total_records>1</total_records>
</Pending_Orders_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example JSON Response
**Success Response:**

<!-- Page 56 -->
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

<!-- Page 57 -->
}],
"page_count":1,
"total_records":1,
"error_desc":"",
"error_code":""
}
**Failure Response:**
{
"page_count":1,
"total_records":1,
"error_desc":"Order List: Invalid Parameter",
"error_code":"51313"
}
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example STRING Response
**Success Response: Format:**
## page_count|total_records|reference_no|order_no|order_status|order_trans_status|order_type|o
rder_capt_amt|order_discount|order_fee_flat|order_fee_perc|order_fee_perc_value|order_gross
_amt|order_tax|days_left|order_bank_mid|order_bank_ref_no|order_bank_response|order_bill_
name|order_bill_email|order_bill_address|order_bill_city|order_bill_state|order_bill_country|ord
er_bill_tel|order_bill_zip|order_card_name|order_card_type|order_curr|order_date_time|order_
delivery_details|order_fraud_status|order_gtw_id|order_ip|order_misc_id|order_notes|order_ris
k_mitigation|order_ship_name|order_ship_email|order_ship_address|order_ship_city|order_ship
## _state|order_ship_country|order_ship_tel|order_ship_zip|order_status_date_time^|
**Example:**
## 1|1|204000136232|66885810|Successful|TS-AUTC|OT-
ORD|0.0|0.0|0.0|4.0|0.04|1.0|0.0049|3|1234567890|289049|Approved|Shashi|xxxxxx.xx@xxxx
xx.xxxx|Room no 1101, near Railway station
Ambad|Indore|MP|India|1234567890|425001|Amex|Credit Card|INR|2015-04-13
10:59:05.517||NA|PGT|192.168.2.182||order will be shipped|Y|Chaplin||room no.701 near bus
stand|Hyderabad|Andhra|India|1236547892|425001|2015-04-13 10:59:53.217|
**Failure Response:**
## Format:page_no|total_no_of_records|error_code|error_desc|
## Example: 0|0|51313|Order List: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.

<!-- Page 58 -->
7.
**Delete Customer**
The Delete Customer API call is used to delete the customer and all saved payment options for the customer.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmust send thiswitheach request. |  |
| request_type (required) | API requests are accepted in XML,JSONor String. Specify the request type. | Possible value for request_type is “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. Ifleftblank,the responsewill be in the same format as request. | Possiblevalueforresponse_typeis is “XML” or “ JSON” or “STRING”. |
| Command (required) | Command valuespecifies the APIcalls.You must send this with each request. | Possible value for this API call is “deleteCustomer”. |
| customer_id (required) | Unique Customer ID provided by merchant to the customer. | Alphanumeric with special characters (hyphen, underscore, dot,@)(70) |

**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Query customer_id="123"/>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example JSON Request**
{
"customer_id": "1234"
}

<!-- Page 59 -->
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

<!-- Page 60 -->
Example STRING Request
## Format:customer_id|
**Example: 1234|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not If value of this parameter is “1” then you need not decrypt the enc_response as it will contain plain errormessage. | .Value“0”denotes that the APIcall was successful. Value“1” denotes API call failure. On enc_response is plain text representstheerrormessage. |
| enc_response | AES encrypted response containing format as per response_type |  |
| deletion_status | Delete status - specify whether customeris goingto be deletedsuccessfully ornot. | Numeric(1) Possiblevaluesforthisis 0- Deletion successful. 1 - Could not be deleted. |
| customer_id | Unique Customer ID for the deleted customer. | Numeric(25). |
| error_desc | Reason if customeris not going to be deleted successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

Example XML Response
**Success:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Result deletion_status="0" error_code=”” error_desc=””>
<customer_id>1234</customer_id>
</Delete_Customer_Result>

<!-- Page 61 -->
**Failure:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Result error_desc="Customer id: Invalid parameter"deletion_status="1" error_code=”51325”>
<customer_id>1234</customer_id>
</Delete_Customer_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
**Example JSON Response**
**Success:**
{
"deletion_status":0,
"error_desc":"",
"error_code":"",
"customer_id":"1234"
}
**Failure:**
{
"error_desc":"Customer id: Invalid parameter",
"deletion_status":1,
"customer_id":"1234",
"error_code":"51325"
}
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Example STRING Response Success:**
## Format:deletion_status|customer_id|
**Example: 0|123|**
**Failure:**
## Format: deletion_status|error_code|error_desc|customer_id|
## Example: 1|51325|Customer id: Invalid parameter|123|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.

<!-- Page 62 -->
- Delete Customer Payment Option
The Delete Customer Payment Option API call is used to delete a particular payment option saved for the customer.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmust send thiswitheach request. |  |
| request_type (required) | API requests are accepted in XML,JSONor String. Specify the request type. | Possiblevalueforrequest_typeis “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. Ifleftblank,the responsewill be in the same format as request. | Possible value for response_type is “XML” or “ JSON” or “STRING”. |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this APIcall is “deleteCustomerPaymentOption ”. |
| customer_id (required) | Unique Customer ID for the transaction. | Numeric(25). |
| customer_card_id (required) | Unique Customercard ID againstthe payment option for the transaction. | Numeric (25). |

**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Payment_Query
customer_id="123" customer_card_id="22"/>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example JSON Request**

<!-- Page 63 -->
{
"customer_id": "1234",
"customer_card_id": "14"
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example STRING Request**
## Format: customer_card_id|customer_id|
**Example: 14|1234|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is “1” then you need not decrypt the enc_response as it will contain plain errormessage. | Value“0”denotes that the API call was successful. Value“1” denotes API call failure. On enc_response is plain text representingtheerror message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| customer_id | Unique Customer ID for the transaction. | Numeric(25). |
| customer_card_id | Unique Customercard ID againstthe payment option for the transaction. | Numeric (25). |
| deletion_status | Delete Status value specifies whether customer payment option is going to delete successfully or not. | Possiblevaluesforthisis 0- Deletionsuccessful. 1 - Could not be deleted. |
| error_desc | Reason if customer payment option is not going to delete successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

<!-- Page 64 -->
Example XML Response
**Success:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Payment_Option_Result
deletion_status="0"
customer_id="24"
customer_card_id="1234" error_code=”” error_desc=””/>
**Failure:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Delete_Customer_Payment_Option_Result
customer_card_id="22" customer_id="123"
error_desc="CustomerCardId:InvalidParameter"
error_code=”51336”
deletion_status="1"/>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example JSON Response
**Success:**
{
"customer_card_id":22,
"deletion_status":0,
"customer_id":123,
"error_desc":"",
"error_code":""
}
**Failure:**
{
"customer_card_id":22,
"deletion_status":1,
"customer_id":123,
"error_desc":"Customer CardId:InvalidParameter",
"error_code":"51336"
}
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example String Response Success:
## Format: deletion_status|customer_card_id|customer_id|
## Example:0|1234|24|

<!-- Page 65 -->
**Failure:**
## Format: deletion_status|error_code|error_desc|customer_card_id|customer_id|
## Example:1|51327|Customer id: Invalid Parameter|22|123|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
- Add Customer Payment Option
The Add Customer Payment Option API call is used to add another payment option for the customer of the
merchant.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | UniqueCCAvenueaccesscode which is generated when merchant registered their IP address. Youmustsendthiswith each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possiblevalueforrequest_typeis “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank,the responsewill bein the same format as request. | Possible value for response_type is “XML” or “ JSON” or “STRING”. |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possiblevalueforthis APIcall is “addCustomerPaymentOption”. |
| customer_id (required) | Unique Customer ID for the transaction. | Numeric(25). |
| customer_name_on_card (optional) | Customer name on card. | Alphanumeric with special characters (space, underscore)(30). |
| customer_phone_no (optional) | Customer mobile number. | Numeric(10). |

<!-- Page 66 -->

| customer_email (optional) | Customer email id. | Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| --- | --- | --- |
| customer_card_issuer_bank (optional) | Customercardissuerbank name. | Alphanumeric with special characters (space, underscore )(70). |
| customer_card_expiry (required) | Customer Card expiry date. | Date format in MM/yyyy. |
| customer_card_no (required) | Customer Card number. | Numeric(25) |
| customer_card_name (required) | Customer Card name. | String VISA MASTERCARD AMEX JCB ECRD DINERS CLUB DSNV CTBL CVMS AMEX EZE CLICK |
| customer_card_type (required) | Customer card type to payment option for the transaction. | String. CRDC-creditcard DBRD-debit card |

**Example XML Request**
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
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

<!-- Page 67 -->
**Example JSON Request**
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
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example STRING Request Format:**
customer_id|customer_email|customer_phone_no|customer_name_on_card|customer_card_no|cust
omer_card_name|customer_card_expiry|customer_issuer_bank|customer_card_type|
## Example: 14|test@test.com|8698319931|subash yadav|421578965236545|mastercard|11/2015|Kotak
mahindra|CRDC|
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is “1” then you need not decrypt the enc_response as it will contain plain errormessage. | Value “0” denotes thatthe APIcall was successful. Value“1” denotes APIcallfailure. On enc_response is plain text representingtheerrormessage. |
| enc_response | AES encrypted response containing format as per response_type |  |
| customer_id | Unique Customer ID for the transaction. | Numeric(25). |
| customer_card_id | Unique Customercard ID againstthe payment option for the transaction. | Numeric (25). |
| Status | Delete Status value specifies whether customer payment option is going to be deleted successfully or not. | Possible values for this is 0 - Deletionsuccessful. 1 - Could not be deleted. |

<!-- Page 68 -->

|  |  |  |
| --- | --- | --- |
| customer_card_no_last 4digits | Last four digitofcardno for thetransaction. | Numeric(4) Will contain values only for Credit Card and Debit card. |
| customer_pay_opt_type | Customer payment option for given details. | String OPTCRD-credit card OPTDBCRD-debit card |
| customer_card_expry | Customer card expiry date. | Date format in MM/yyyy. |
| customer_card_issuer_b ank | Customer Card issuer bank. | Alphanumericwithspecialcharacters (space, underscore )(70). |
| customer_card_name | Customer Card name. | String VISA MASTERCARD AMEX JCB ECRD DINERS CLUB DSNV CTBL CVMS AMEX EZE CLICK |
| error_desc | Reason if customer payment option is not goingto be deleted successfully. | String. Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String. Please refer below table for failure message. |

Example XML Response
**Success:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Add_Customer_Payment_Option_Result>
<customer_card_expiry>11/2015</customer_card_expiry>
<customer_card_id>240</customer_card_id>

<!-- Page 69 -->
<customer_card_issuer_bank>HDFC</customer_card_issuer_bank>
<customer_card_name>Visa</customer_card_name>
**<customer_card_no_last4digits>2346</customer_card_no_last4digits>**
<customer_id>14</customer_id>
<customer_pay_opt_type>OPTCRDC</customer_pay_opt_type>
<error_code></error_code>
<error_desc></error_desc>
<status>0</status>
</Add_Customer_Payment_Option_Result>
**Failure:**
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
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
Example JSON Response
**Success:**
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

<!-- Page 70 -->
**Failure:**
{
}
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
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Example String Response Format:**
## Status|customer_id|customer_card_id|customer_card_no_last4digits|customer_card_expiry|custo
mer_pay_opt_type|customer_card_name|customer_card_issuer_bank|error_code|error_desc|
**Failure:**
## Example:1|14||test user|1111|11/2015|OPTCRDC|Visa|HDFC|51337|Customer Id:Invalid
parameters|
**Success:**
## Example:0|14|415|test user|1111|11/2015|OPTCRDC|Visa|HDFC|||
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
- Get Customer Payment Options
The Customer payment option APIcall is usedtolist paymentoptionsaved for acustomer. Payments options are
saved for acustomer invault for easy and convenientpayment.
**Request Parameters**
**Name**
**Description**
**Note**
**enc_request**
(required)

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmustsendthiswitheachrequest. |  |

<!-- Page 71 -->

| request_type (required) | API requests are accepted in XML,,JSON or String. Please specify the request type. | Possible value for request_type is “XML” or “ JSON” or “STRING”. |
| --- | --- | --- |
| response_type (optional) | APIreturnsresponsesinXML, JSONor String format.Ifleftblank,the response willbe inthe same format as request. | Possiblevalueforresponse_typeisis “XML” or “ JSON” or “STRING”. |
| Command (required) | Command value specifies the APIcalls.You must send this with each request. | Possible value for this API call is “getCustomerPaymentOptions” |
| customer_id (required) | Unique Customer ID for the transaction. | Numeric(25). |

**Example XML Request**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Customer_Payment_Options
customer_id="123"/>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example JSON Request**
{
"customer_id": "1234"
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Example String Request**
**Format: customer_id|**
**Example: 6|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section

<!-- Page 72 -->
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameteris“1”thenyouneednot decrypttheenc_responseasitwill containplainerrormessage. | Value “0” denotes thatthe APIcall was successful. Value “1” denotes API call failure. On enc_response is plain text represents the errormessage. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| customer_id | Unique Customer ID for the transaction. | Numeric(25). |
| customer_card_no | Last four digitofcardnofor the transaction. | Numeric(4) Will contain values only for Credit Card and Debit Card. |
| customer_payopt_type | Number of Paymentoptionsassign against to thiscustomer id. | String. Values : OPTNBK-net banking OPTCRD-credit card OPTDBCRD-debit card OPTMOBP-mobile payment OPTIVRS- IVRS OPTWLT- Wallet OPTCASHC-Cash Card OPTEMI- EMI |
| customer_card_name | Customer card name for the transaction. | Alphanumericwithspecialcharacters (space, hyphen,apostrophe, underscore, dot)(60). |
| customer_email | Customeremailid forthe transaction. | Alphanumericwithspecialcharacters (hyphen, underscore, dot,@)(70). |
| customer_card_label | Customer card label name for the transaction. | Alphanumericwithspecialcharacters (space, hyphen, apostrophe, underscore, dot)(60). |
| customer_card_id | Unique Customer Card IDis the identifierforthe payment options against the Customer ID. | Numeric(25). |
| customer_phone_number | Unique Customer phone number for the transaction. | Numeric(10). |

<!-- Page 73 -->

| customer_card_expiry | Customer card expiry month and year. | Numeric with special characters. |
| --- | --- | --- |
| customer_card_issuing_bank | Customer card issuing bank name. | String. |
| error_desc | ReasonifAPIcalldoesnotfindthe recordbasedongivensearchcriteria. | String. Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String. Please refer below table for failure message. |

Example XML Response
**Success:**
<?xml version="1.0"
encoding="UTF-8"
standalone="yes"?>
<Customer_Payment_Option_Result customer_id=”1234” error_desc=”” error_code=””>
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

<!-- Page 74 -->
</customer>
</pay_Opt_List>
</Customer_Payment_Option_Result>
**Failure:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Customer_Payment_Option_Result
error_desc="Customer id: Invalid Parameter" customer_id=”1234” error_code=”51327”/> Note:
You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
Example JSON Response
**Success:**
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
“customer_id”:”1234”,
"error_desc":"",
"error_code":""
}

<!-- Page 75 -->
**Failure:**
{
"error_desc":"Customer id: Invalid Parameter",
"error_code":"51327",
“customer_id”:”1234”
}
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
Example STRING Response
**Success:**
**Format: customer_card_id|customer_card_no(last four**
digits)|customer_card_name|customer_card_type|customer_payopt_type|customer_card_label|custo
mer_email|customer_card_expiry|customer_card_issuing_bank^customer_card_id|customer_card_no( last four
digits|customer_card_name|customer_card_type|customer_payopt_type|customer_card_label|custo
mer_email|customer_card_expiry|customer_card_issuing_bank|
Example:27|”1234”|MasterCard|CRDC|OPTCRDC|”xxxx”|"xxxx@xxx.com"^29|”4567”|MasterCard| CRDC|
OPTCRDC|”xxxx”|"xxxx@xxx.com"|”10/2020”|”xxxx”
**Failure:**
### Format: error_code|error_desc|
## Example: 51327|Customer id: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.

<!-- Page 76 -->
11.
**Generate Invoice**
The Invoice APIcall is usedtogenerate aninvoiceforacustomer. Valuescan be passed as forgenerating invoice
using the flexibility of Invoice settings.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Uniqueaccesscodewhichis generated whenmerchantregistered theirIP address.Youmustsendthis with each request. |  |
| request_type (required) | APIrequestsareacceptedinXML, JSON or String. Specify the request type. | Possiblevalueforrequest_typeis “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the responsewillbeinthesameformat as request. | Possible value for response_type is “XML” or “ JSON” or “STRING”. |
| command (required) | Command value specifies the API calls. Youmustsendthiswitheachrequest. | Possible value for this API call is “generateInvoice”. |
| customer_name (required) | Name of the customer receiving the Invoice. | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| customer_email_id (required) | Email ID on which the Invoice will be sent | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| customer_email_subject (required) | Subject of the email containing the Invoice | Alphanumeric with special characters (hyphens, dot, space and underscores)(100). |
| valid_for (required) | DurationforwhichtheInvoiceisvalid | Numeric(4). |
| valid_type (required) | The unit of duration represented by valid_for | Possible values for valid type is minutes/hours/days |

<!-- Page 77 -->

| Currency (required) | Currency for which theInvoiceistobe generated | String Example: INR – Indian Rupee USD – UnitedStatesDollar SGD – Singapore Dollar GBP– PoundSterling EUR – Euro, official currency of Eurozone |
| --- | --- | --- |
| merchant_reference_no (optional) | Merchant identifier for the Invoice | Alphanumeric with special characters (hyphen and underscore)(25). |
| merchant_reference_no1 (optional) | Merchant identifier for the Invoice | Alphanumeric with special characters(hyphenandunderscore and hash)(100). |

<!-- Page 78 -->

| merchant_reference_no2 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters(hyphenandunderscore and hash)(100). |
| --- | --- | --- |
| merchant_reference_no3 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters(hyphenandunderscore and hash)(100). |
| merchant_reference_no4 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters(hyphenandunderscore and hash)(100). |
| sub_acc_id (optional) | Unique Sub Account ID. | String |
| Amount (required | Invoice Amount | Decimal(12,2). |
| terms_and_conditions (optional) | Terms and conditions to be presentin the Invoice | AlphaNumeric with special characters(hyphen, dot, circular brackets and ampersand)(500) |
| customer_mobile_no (required) | Mobile number of the customer receiving the Invoice | Numeric(10). |
| due_date (required) | Invoice Due date | Numeric(3) |
| late_payment_fees (conditional) | Feesto be chargedincase of late payment. Late_payment_feesisrequiredif merchant provide late_payment_fees_type. | Decimal(12,2). |
| late_payment_fees_type (conditional) | Unit representation of late_payment_fees. Late_payment_fees typeisrequiredif merchantprovidelate_payment_fees. | Possiblevalueforlatepayment fees type is Perc/Flat. |
| discount_if_paid_within_due_date (conditional) | Number of days prior to due date when an additional discount is eligible. Discount_if_paid_within_due_date is required if merchant provide discount value or discount type. | Numeric(3) Ex: due_date is 15th Jan 2014 discount_if_paid_within_due_date is 4 i.e. Discount is applicable up to 11th Jan 2014. |
| discount_value (conditional) | Discountto be applied if the above condition istrue. Discount valueis requiredif merchant provide discounttype. | Decimal(12,2). |

<!-- Page 79 -->

| discount_type (conditional) | Unitrepresentation of discount_value. Discount type is required if merchant provide discountvalue. | Possiblevalueforlatepayment fees type is Perc/Flat. |
| --- | --- | --- |
| item_List (conditional) | Items associated with the Invoice. ProvideatleastoneItemifmerchant does not provide any task. | Itemtypearray.RefertoItem_list section for structure. |

<!-- Page 80 -->
**task_List**
(conditional)
Tasks associated with the Invoice
Provide atleast one Taskifmerchant
does notprovide any Item.
Task typearray. Refer to Task_list
section for structure.
Item_List:

| Name | Description | Note |
| --- | --- | --- |
| name | Item Name | Alphanumericwithspecialcharacters (space, underscore, hyphen)(30). |
| description | Item description | Alphanumericwithspecialcharacters (hyphen, dot, circular brackets, space, comma,underscore,hash(#) and symbol &)(60) |
| unit_cost | Cost per Item | Decimal (12,2) . |
| quantity | Quantity of item | Numeric(3). |
| tax_List | Tax associated with the Item | Tax type array. Refer to Tax_list section for structure. |

**Task_List:**

| Name | Description | Note |
| --- | --- | --- |
| name | Task Name | Alphanumericwithspecialcharacters (space, underscore and hyphen)(30). |
| notes | Notes for the task | Alphanumericwithspecialcharacters (hyphen, dot, circular brackets, space, comma,underscore, hash(#) and symbol &)(60) |
| rate | Rate per hour | Decimal (12,2) . |
| hours | Number of hours to be charged | Numeric(3). |
| tax_List | Tax associated with the task. | Tax type array. Refer to Tax_list section for structure. |

**tax_List**
Tax associated with the task.
Tax type array. Refer to Tax_list
section for structure.
**Tax_List:**

| Name | Description | Note |
| --- | --- | --- |
| name | Tax list name | Alphanumeric with special characters (space, underscore and hyphen)(30). |
| amount | Amount of tax applicable | Decimal (13,4). |

**Note: Generate invoice without advance setting**

<!-- Page 81 -->
**XML Request:**
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
### <description>FIRST</description>
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

<!-- Page 82 -->
<terms_and_conditions>terms and condition</terms_and_conditions>
<sms_content>Pls payyour LegalEntity_Namebill# Invoice_ID for Invoice_Amountonlineat
Pay_Link.</sms_content>
</Generate_Invoice_Query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Json request:**
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
"sms_content":"Pls payyourLegalEntity_Namebill#Invoice_IDfor Invoice_Currency
Invoice_Amount online at Pay_Link."
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

<!-- Page 83 -->
**String Request format:**
Format:
## Customer_Name|Currency|Valid_For|Valid_Type|Customer_Email_Id|Customer_Email_Subject|Customer
## _Mobile_No|Term & Condition|SMS_Content|Merchant_Reference_No
## |merchant_reference_no1|merchant_reference_no2|sub_acc_id|Item_Name|Item_Quantity|Item_Descri
ption|Unit_Cost~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount^
Item_Name|Item_Quantity|Item_Description|Unit_Cost~Tax_Name|Tax_Amount|Tax_Name|Tax_Amoun
t|Task_Name|Task_Rate|Task_Hours|Task_Notes~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount^Task_
Name|Task_Rate|Task_Hours|Task_Notes~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount|Due_Date|La
te_Payment_Fees|Late_Payment_Fees_Type|Discount_If_Paid_Within_Due_Date|Discount_Value|Discoun t_Type|
Example:
## abcd|INR|2|days|xx.xx@xx.info|email subject|1234567890|term and condition|Pls call  022-2121212121 to
payyourLegalEntity_Namebill# Invoice_IDforInvoice_CurrencyInvoice_Amountorpayonlineat
## Pay_Link.|MER123654|44785555654|4444545477878|sub1|ITEM|2|FIRST|1.00~Edu Tax|5.0|Pint
## Tax|2.5|TASK|1.0|2|NEW~STG Tax|7.0|Rent Tax|8.0|||||||
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Note: Generate Invoice with advance setting**
XML Request:
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
### <description>FIRST</description>
<unit_cost>1.00</unit_cost>
<quantity>3</quantity>
<tax_List>
<tax
name="Pint Tax" amount="2.5"/>
<tax
name="Rent Tax" amount="8.0"/>
</tax_List>
</item>

<!-- Page 84 -->
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

<!-- Page 85 -->
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
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
Json request string:
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
**"merchant_reference_no1":123456987,**
"merchant_reference_no2":123456987,
"sub_acc_id":"sub1",

<!-- Page 86 -->
"terms_and_conditions": "terms and condition",
"due_date": "3",
"late_payment_fees": "2.5",
"late_payment_fees_type": "Perc",
"discount_if_paid_within_due_date": "4",
"discount_value": "1.50",
"discount_type": "Perc" ,
"sms_content":"Pls payyourLegalEntity_Namebill#Invoice_IDfor Invoice_Currency
Invoice_Amount online at Pay_Link."
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
String Request format:
Format:
## Customer_Name|Currency|Valid_For|Valid_Type|Customer_Email_Id|Customer_Email_Subject|Customer
## _Mobile_No|Term &
## Condition|SMS_Content|Merchant_Reference_No|merchant_reference_no1|merchant_reference_no2|su
## b_acc_id|Item_Name|Item_Quantity|Item_Description|Unit_Cost~Tax_Name|Tax_Amount|Tax_Name|Ta
x_Amount^ Item_Name|Item_Quantity|Item_Description|Unit_Cost~Tax_Name|Tax_Amount|Tax_Name|Tax_Amoun
t|Task_Name|Task_Rate|Task_Hours|Task_Notes~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount^Task_
Name|Task_Rate|Task_Hours|Task_Notes~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount|Due_Date|La
te_Payment_Fees|Late_Payment_Fees_Type|Discount_If_Paid_Within_Due_Date|Discount_Value|Discoun t_Type|
Example:
## abcd|INR|2|days|xx.xx@xx.info|email subject|1234567890|term and condition|Pls call  022-2121212121 to
payyourLegalEntity_Namebill# Invoice_IDforInvoice_CurrencyInvoice_Amountorpayonlineat
## Pay_Link.|MER1234654|44785555654|4444545477878|sub1|ITEM|2|FIRST|1.00~Edu Tax|5.0|Pint
## Tax|2.5|TASK|1.0|2|NEW~STG Tax|7.0|Rent Tax|8.0|1|2.5|Perc|1|1.50|Perc|
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**XML Response:**
- Success
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

<!-- Page 87 -->
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
- Failure
<?xml version='1.0' encoding='UTF-8'?>
<Generate_Invoice_Result error_code="51072"
error_desc="Merchantreferencenumber:InvalidParameter"
invoice_status="1">
<invoice_id></invoice_id>
<qr_code></qr_code>
<tiny_url></tiny_url>
</Generate_Invoice_Result>
**Json Response: 1.Success**
**{**
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
**"merchant_reference_no":"123456987"**
}

<!-- Page 88 -->
**2.Failure**
{
"error_desc":"Emailid:Invalid Parameter",
"invoice_id":"",
"tiny_url":"",
"qr_code":"",
"invoice_status":1,
"error_code":"51012",
"merchant_reference_no":""
}
**String Response: 1.Success**
## Format:invoice_status|invoice_id|qr_code|tiny_url merchant_reference_no l
Example:
## 0|5089334|iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAAB6UlEQVR42u3dQW7DMAwEQP
3_08kXEpgr0tIs0EvRurHHgETKctdHrstyCaALdIEu0AW6QBfoAl2gC3SBLtAFukAXGIvG3To0KGPunkSmxF05KBD h35hyZYe-
9LHTMwxoEOHDv3Cjlyiu5VeHJnYhYMOHTr0jeg7S6fEurnHpaBDhw591H6xrtd-
KtmgQ4cOvWXfWQJx4tsqoEOHDv0lHbn0freqbps3UUCHDv1g9J3_wyV9I3kaFjp06J57l0GBDl2gC3SBLtAFukA
X6AJdoAt0gS7QBbpAF-gCHbpAF-
## gCXaALdJmcLyERMkikhZ8LAAAAAElFTkSuQmCC|http://payit.cc/I5089334|123456789|
**2.Failure**
### Format:invoice_status|error_code|error_desc|merchant_reference_no|
## Example: 1|51323|Tax not configured for the merchant.|123456789|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.

<!-- Page 89 -->
12.
**Generate Recurring Invoice**
Recurring invoice call is used to generate recurring invoice for a customer of a merchant.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | This Is the accesscode for your application. You must send this with each request. |  |
| request_type (required) | API requests are accepted inXML,JSON or String. Specify the request type. | Possible value for request_type is “XML” or “ JSON” or “STRING”. |
| response_type (optional) | APIreturnsresponseinXML,JSONorString format. Ifleftblank,the responsewill bein the same format as request. | Possiblevalueforresponse_typeis is “XML” or “ JSON” or “STRING”. |
| Command (required) | Command valuespecifies the API calls.You must send this with each request. | Possible value for this API call is “generateRecurringInvoice” |
| customer_name (required) | NameofthecustomerreceivingtheInvoice | Alphanumericwithspecialcharacter (space, hyphen, apostrophe, underscore, dot)(60). |
| customer_email_id (required) | Email ID on which the Invoice will be sent | Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| customer_email_subject (required) | Subject of the email containing the Invoice | Alphanumeric with special characters(hyphens,dot,spaceand underscores)(100). |
| valid_for (required) | Duration for which the Invoice is valid | Numeric(4). |
| valid_type (required) | Theunitofdurationrepresentedbyvalid_for | Possible values for valid type is minutes/hours/days/month/year |

<!-- Page 90 -->

| Currency (required) | Currency forwhich the Invoice is to be generated | String Example: INR – Indian Rupee USD– United StatesDollar SGD – Singapore DollarGBP– PoundSterling EUR – Euro, official currency of Eurozone |
| --- | --- | --- |
| merchant_reference_no (optional) | Merchant identifier for the Invoice | Alphanumeric with special characters(hyphen and underscore)(25). |
| Amount (required | Invoice Amount | Decimal(12,2). |
| terms_and_conditions (optional) | Terms andconditions to be present inthe Invoice | AlphaNumeric with special characters(hyphen, dot, circular brackets and ampersand)(500) |
| customer_mobile_no (required) | Mobilenumberofthecustomerreceivingthe Invoice | Numeric(10). |
| due_date (required) | Invoice Due date | Numeric(3) |
| late_payment_fees (conditional) | Feestobe chargedincaseoflatepayment. Late_payment_fees is requiredifmerchant providelate_payment_fees_type. | Decimal(12,2). |
| late_payment_fees_typ e (conditional) | Unit representation of late_payment_fees. Late_payment_fees type is required if merchant provide late_payment_fees. | Possiblevalueforlatepaymentfees type is Perc/ Flat. |
| discount_if_paid_within _due_date (conditional) | Number ofdays prior toduedatewhenan additional discount is eligible. Discount_if_paid_within_due_date is required if merchant provide discount value or discount type. | Numeric(3) Ex: due_date is 15th Jan 2014 discount_if_paid_within_due_date is 4 i.e.Discountisapplicableupto 11th Jan 2014. |

<!-- Page 91 -->

| discount_value (conditional) | Discount to be appliedifthe abovecondition is true. Discount value is required if merchant provide discount type. | Decimal(12,2). |
| --- | --- | --- |
| discount_type (conditional) | Unit representation of discount_value. Discount type is required if merchant provide discount value. | Possiblevalueforlatepaymentfees type is Perc/ Flat. |
| Occurences (conditional) | Number of occurrences for Invoice Occurrences is requiredifmerchantprovide Frequency. | Numeric(3). |
| Frequency (conditional) | Frequency for generating the occurrences Frequency is required if merchant provide Start_date. | Possible values for frequency are Daily/Monthly/Quarterly/ Yearly. |
| start_date (conditional) | Start date specifies 1st occurrence. Start_date is required if merchant provide Occurrences. | Date format in dd-mm-yyyy. |
| item_List (conditional) | Items associated with the Invoice. Provide at leastone Item ifmerchant does not provide any Task. | Itemtype array. RefertoItem_list section for structure. |
| task_List (conditional) | Tasks associated with the Invoice Provide at least one Taskif merchant does not provide any Item. | Task type array.Refer toTask_list section for structure. |

**Note: Recurring Invoice without advance setting**
**XML Request:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Generate_Invoice_Query>
<customer_name>xxxxx</customer_name>
<customer_email_id>xxxxxx.xxxx@xxxxx.com</customer_email_id>
<customer_email_subject>Test</customer_email_subject>
<customer_mobile_no>9874561236</customer_mobile_no>

<!-- Page 92 -->
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

<!-- Page 93 -->
</task_List>
<merchant_reference_no>123456987</merchant_reference_no>
<terms_and_conditions>terms and condition</terms_and_conditions>
<sms_content>Pls pay your LegalEntity_Name bill # Invoice_ID for Invoice_Currency Invoice_Amount
online at Pay_Link.</sms_content>
</Generate_Invoice_Query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Json request:**
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

<!-- Page 94 -->
"merchant_reference_no": "123456987",
"terms_and_conditions": "terms and condition",
"sms_content":"PlspayyourLegalEntity_Namebill#Invoice_IDforInvoice_Currency
Invoice_Amount online atPay_Link."
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**String Request format:**
**Format:**
## Customer_Name|Currency|Valid_For|Valid_Type|Customer_Email_Id|Customer_Email_Subject|Custo
## mer_Mobile_No|Term &
## Condition|SMS_Content|Merchant_Reference_number|Item_Name|Item_Quantity|Item_Description|
Unit_Cost~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount^
Item_Name|Item_Quantity|Item_Description|Unit_Cost~Tax_Name|Tax_Amount|Tax_Name|Tax_Am
ount|Task_Name|Task_Rate|Task_Hours|Task_Notes~Tax_Name|Tax_Amount|Tax_Name|Tax_Amou
nt^Task_Name|Task_Rate|Task_Hours|Task_Notes~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount|
## Start_Date|Frequecy|Occurences|Due_Date|Late_Payment_Fees|Late_Payment_Fees_Type|Discount_I
## f_Paid_Within_Due_Date|Discount_Value|Discount_Type|
**Example:**
## abcd|INR|2|days|xx.xx@xx.info|email subject|9999999999|t&c|Pls call  022-2121212121 to pay your
LegalEntity_Name bill # Invoice_ID for Invoice_Currency Invoice_Amount or pay online at
## Pay_Link.|MER1234|ITEM|2|FIRST|1.00~Edu Tax|5.0|Pint Tax|2.5|TASK|1.0|2|NEW~STG Tax|7.0|Rent
## Tax|8.0|18-09-2014|Monthly|5|||||||
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Note: Recurring invoice with advance setting**
**XML Request:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Generate_Invoice_Query>
<customer_name>abc</customer_name>
<customer_email_id>abc@sify.com</customer_email_id>
<customer_email_subject>Test</customer_email_subject>
<customer_mobile_no>1234567890</customer_mobile_no>
<currency>INR</currency>
<valid_for>2</valid_for>

<!-- Page 95 -->
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

<!-- Page 96 -->
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
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**JSON Request:**
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

<!-- Page 97 -->
"discount_type": "Perc",
"sms_content":"Pls payyourLegalEntity_Namebill#Invoice_IDfor Invoice_Currency
Invoice_Amount online at Pay_Link."
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before
sending it to CCAvenue. Kindly refer to the encryption section.
**String Request format:**
**Format:**
## Customer_Name|Currency|Valid_For|Valid_Type|Customer_Email_Id|Customer_Email_Subject|Custo
## mer_Mobile_No|Term &
## Condition|SMS_Content|Merchant_Reference_number|Item_Name|Item_Quantity|Item_Description|
Unit_Cost~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount^
Item_Name|Item_Quantity|Item_Description|Unit_Cost~Tax_Name|Tax_Amount|Tax_Name|Tax_Am
ount|Task_Name|Task_Rate|Task_Hours|Task_Notes~Tax_Name|Tax_Amount|Tax_Name|Tax_Amou
nt^Task_Name|Task_Rate|Task_Hours|Task_Notes~Tax_Name|Tax_Amount|Tax_Name|Tax_Amount|
## Start_Date|Frequecy|Occurences|Due_Date|Late_Payment_Fees|Late_Payment_Fees_Type|Discount_I
## f_Paid_Within_Due_Date|Discount_Value|Discount_Type|
**Example:**
## abcd|INR|2|days|xx.xx@xx.info|email subject|9999999999|t and c|Pls call  022-2121212121 to pay your
LegalEntity_Namebill# Invoice_IDforInvoice_CurrencyInvoice_Amountorpayonlineat
## Pay_Link.|MER1234|ITEM|2|FIRST|1.00~Edu Tax|5.0|Pint Tax|2.5|TASK|1.0|2|NEW~STG Tax|7.0|Rent Tax|8.0|18-
## 09-2014|Monthly|5|1|2.5|Perc|1|1.50|Perc|
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
13.
**Generate Quick Invoice**
This Quick invoice API call is used to generate a quick invoice for a customer.
This is a flavour of regular invoice but with limited options hence an easy implementation.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | This is the access code for your application. Youmustsendthiswith each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Value is “XML” or “JSON” or “STRING”. |

<!-- Page 98 -->

|  |  |  |
| --- | --- | --- |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Value is “XML” or “JSON” or “STRING”. |
| command (required) | This is the command to access the API Calls. You must send this with each request. | “generateQuickInvoice” for generate Quick invoice. |
| customer_name (required) | Name ofthe customer receivingthe Invoice | Alphanumericwithspecialcharacters (space, hyphen,apostrophe, underscore, dot)(60). |
| customer_email_id (required) | EmailID onwhichtheInvoicewillbe sent | Alphanumericwithspecialcharacters (hyphen, underscore, dot, @)(70). |
| customer_email_subject (required | Subject of the email containingthe Invoice | Alphanumericwithspecialcharacters (hyphens, dot, space and underscores)(100). |
| valid_for (required) | Duration for which the Invoice is Valid | Numeric(4) |
| valid_type (required) | The unit of duration represented by valid_for | Possible values for valid type is minutes/hours/days/month/year |
| Currency (required) | Currency for which the Invoice is to be generated | String Example: INR – Indian Rupee USD – UnitedStatesDollar SGD – Singapore Dollar GBP– PoundSterling EUR – Euro, official currency of Eurozone |
| amount(required) | Invoice Amount for the generate invoice. | Decimal(12,2) |
| invoice_description | Invoice Description to be sent in Email | String (500) |
| merchant_reference_no (Optional) | Merchant identifier for the Invoice | Alphanumeric with special characters(hyphen and underscore)(50). |
| merchant_reference_no1 (Optional) | Merchant identifier for the Invoice | Alphanumeric with special characters(hyphen and underscore and hash)(100). |

<!-- Page 99 -->

| merchant_reference_no2 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters(hyphen and underscore and hash)(100). |
| --- | --- | --- |
| merchant_reference_no3 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters(hyphen and underscore and hash)(100). |
| merchant_reference_no4 (Optional) | Merchant identifier for the Invoice (Will not be visible in invoice just for reference) | Alphanumeric with special characters(hyphen and underscore and hash)(100). |
| terms_and_conditions (optional) | Termsandconditions to be present in the Invoice | AlphaNumeric with special characters(hyphen, dot, circular brackets and ampersand)(500) |
| sms_content (optional) | Sms content to be sent if delivery type is SMS or BOTH | Alphanumericwithspecialcharacters (space, hyphen, uhash, ampersand, dot, round brackets)(60). |
| sub_acc_id (optional) | Unique Sub Account ID. | String |
| customer_mobile_no (required) | Mobile number of the customer receiving the Invoice. | Numeric(10) |
| bill_delivery_type (required) | Invoice delivery mechanism. | Possiblevalueforbilldeliverytypeis EMAIL/ SMS/ BOTH. |
| Files (optional) | Attachments to be sent with the quick invoice. Applicable only ifbill delivery type is EMAIL/ BOTH. | File type array describedin below table. |

Files:-

| Name | Description | Note |
| --- | --- | --- |
| Name (required) | Attachmentfile name whichispassingat generate invoicetime. | String File extension must be (.jpg .jpeg .doc .pdf .docx .png )format |
| Content (required) | Attachment file content must be in byte array format decoded with decodeBase64 algorithm. | String(Attachment file size up to MOB) |

<!-- Page 100 -->
**XML Request:**
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
Invoice_Currency Invoice_Amountonline at
Pay_Link.</sms_content>
<files>
</files>
<name>Test.doc</name>
### <content>77u/SGVsbG8gaW5kaWEK</content>
</Generate_Invoice_Query>
**Json Request:**
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

<!-- Page 101 -->
"merchant_reference_no2":123456987,
"merchant_reference_no3":123456987,
"merchant_reference_no4":123456987,
"sub_acc_id":"",
"terms_and_conditions": "terms and condition",
"sms_content":"Pls call 022-2121212121topayyour LegalEntity_Namebill#
Invoice_ID for
Invoice_CurrencyInvoice_AmountorpayonlineatPay_Link.",
"files": [{
"name": "Test.doc",
"content": "77u/SGVsbG8gaW5kaWEK"
}]
}
**String Request:**
format: customer_name|currency|valid_for|valid_type|amount|bill_delivery_type|merchant_reference_
## no|merchant_reference_no1|merchant_reference_no2|sub_acc_id|terms_and_conditions|mobil
## e_no|sms_content|customer_email_id|customer_email_subject|invoice_description|file_name| file_content^
## file_name|file_content|
Example: xxxxxxx|INR|2|days|1.00|SMS|123456987|44785555654|4444545477878|sub1|terms and
condition|9874563215|Plscall 022-2121212121topayyourLegalEntity_Namebill# Invoice_ID
for Invoice_Currency Invoice_Amount or pay online at Pay_Link.|xxxxx.xxxx@xxxx.com|test invoice mail|this invoice
## generate for testing|invoice.doc|77u/SGVsbG8gaW5kaWEK|
**XML Response:**
- Success
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

<!-- Page 102 -->
</Generate_Invoice_Result>
- Failure
<?xml version='1.0' encoding='UTF-8'?>
<Generate_Invoice_Result error_code="51072"
error_desc="Merchantreferencenumber:InvalidParameter"
invoice_status="1">
<invoice_id></invoice_id>
<qr_code></qr_code>
<tiny_url></tiny_url>
</Generate_Invoice_Result>
**Json Response: 1.Success**
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
**"merchant_reference_no":"123456987"**
}
**2.Failure**
{
"error_desc":"Emailid:Invalid Parameter",
"invoice_id":"",
"tiny_url":"",
"qr_code":"",
"invoice_status":1,
"error_code":"51012",

<!-- Page 103 -->
"merchant_reference_no":""
}
**String Response: 1.Success**
## Format:invoice_status|invoice_id|qr_code|tiny_url merchant_reference_no l
Example:
## 0|5089334|iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAAB6UlEQVR42u3dQW7DMAwEQP
3_08kXEpgr0tIs0EvRurHHgETKctdHrstyCaALdIEu0AW6QBfoAl2gC3SBLtAFukAXGIvG3To0KGPunkSmxF05KBD h35hyZYe-
9LHTMwxoEOHDv3Cjlyiu5VeHJnYhYMOHTr0jeg7S6fEurnHpaBDhw591H6xrtd-
KtmgQ4cOvWXfWQJx4tsqoEOHDv0lHbn0freqbps3UUCHDv1g9J3_wyV9I3kaFjp06J57l0GBDl2gC3SBLtAFukA
X6AJdoAt0gS7QBbpAF-gCHbpAF-
## gCXaALdJmcLyERMkikhZ8LAAAAAElFTkSuQmCC|http://payit.cc/I5089334|123456789|
**2.Failure**
## Format:invoice_status|error_code|error_desc|merchant_reference_no|
## Example: 1|51323|Tax not configured for the merchant.|123456789|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
- Get ItemList
Item list API call allows you to find all task and item list which is configured for the merchant.
**Request Parameters**
ForInvoiceItems,endrequestdataisnotrequired.Merchanthastosendthecommand,Accesscode,
request_type and response_type parameters only.

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmustsendthiswitheachrequest. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possiblevalueforrequest_typeis “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns XML, JSON or String responses. If left blank,the responsewill be inthesame format as request. | Possiblevalueforresponse_typeis “XML” or “ JSON” or “STRING”. |
| Command (required) | Command value specifies the API calls.You must send this with each request. | Possible value for this API call is “getInvoiceItems”. |

<!-- Page 104 -->
Request example: access_code=xxxxxxxxxxxxx&command=getInvoiceItems&request_type=xml&response_type=xml
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This stateswhetherthe callwassuccessfulor not. If value of this parameter is “1” then you need not decrypt the enc_response as it will contain plain errormessage. | Value“0”denotes that theAPI callwas not successful. Value “1” denotes API call failure. On enc_response is plaintextrepresenting the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | ThisAttributecontainsthedescriptionofthe failurerequest processing.When status is1 thenthis attributewillgeneratethereasonfor failure. | Please refer below table for the failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| item_List | List ofall item/taskwhichisconfigured for the merchant | Item List type array. Refer to Item_Listsectionforstructure |

**Item List:**

| Name | Description | Note |
| --- | --- | --- |
| description | Descriptive informationaboutthe Item/task. | Alphanumeric with special characters(hyphen, dot, circular brackets, space, comma , underscore,hash(#)andsymbol &)(60). |
| name | Unique name of the Item/task for the generateinvoicewhichisassignedagainstthe merchant id. | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| type | Specify the item type provided. | Possible values for item type are ITEM/TASK. |

104

<!-- Page 105 -->
Example XML Response
**Success:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_Item_Result status="0" error_code=”” error_desc=””>
<item_List>
<item name="First Task" type="TASK" description="sgsdfgsfgsdfg" />
<item name="test" type="TASK" description="test" />
<item name="test" type="ITEM" description="test" />
<item name="TestITEM" type="ITEM" description="TEST"/>
</item_List>
</Invoice_Item_Result>
**Failure:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_Item_Result status="1" error_desc=”Enc_request: Norecordfoundforgivencriteria.”
error_code=”51419”/>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
**Example JSON Response**
**Success:**
{
}
"item_List":[
{"name":"HP","description":"QC","type":"ITEM"},
{"name":"asdasd","description":"asdasd","type":"TASK"},
{"name":"STG","description":"test","type":"ITEM"},
{"name":"ITEM","description":"FIRST","type":"ITEM"},
{"name":"TASK","description":"NEW","type":"TASK"},
{"name":"TASK2","description":"NEW","type":"TASK"}
],
"status":0,
“error_desc”:””,
“error_code”:””
**Failure:**
{
}
"status":1,
“error_desc”:”Enc_request: No record found for given criteria.”,
“error_code”:”51419”
105

<!-- Page 106 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
Example STRING Response
**Success:**
## Format: status|type|name|description^ type|name|description|
## Example: 0|TASK|First Task|sgsdfgsfgsdfg^TASK|Second Task|Second task notes^TASK|test|test^ITEM|Second
## Task|akshay^ITEM|test|test|
**Failure:**
## Format: status|error_code|error_desc|
## Example: 1|51419|Enc_request: No record found for given criteria.|
Note: You will haveto decrypt the above responsefrom“enc_response” parameter. Kindly refer to the
decryptionsection.
- Invoice Lookup
Invoice lookup API call is used to find the list of all invoices.
**Request Parameters**

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generatedwhenmerchants registeredtheir IP address. Youmustsendthiswitheachrequest. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possiblevalueforrequest_typeis “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns response in XML, JSON or String format.If leftblank,the responsewill be inthe same format as request. | Possiblevalueforresponse_typeis “XML” or “ JSON” or “STRING”. |
| Command (required) | Command valuespecifies theAPI calls.You must send this with each request. | Possible value for this API call is “invoiceList”. |

106

<!-- Page 107 -->

| from_date (conditional) | Mandatory along with to_date if no other criteria mentioned | Datemustbedd-mm-yyyyformat. |
| --- | --- | --- |
| to_date (conditional) | Mandatory along with from_date if no other criteria mentioned | Datemustbedd-mm-yyyyformat. |
| max_amount (optional) | Max amount of the invoice to be searched | Decimal(12,2) |
| min_amount (optional) | Min amount of the invoice to be searched | Decimal(12,2) |
| created_by (optional) | Uniqueidentificationofthe merchantfor the generate invoice. | String(Unique id of Merchant) |
| mobile_no (optional) | Customer mobile number for the generate invoice. | Numbers(10) |
| email_id (optional) | Customer email id for the generate invoice. | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| invoice_no | Reference number generated from the merchant end. | Numeric(25) |
| reference_no (optional) | Unique CCAvenue reference number for the transaction. | Numeric(25) |
| invoice_id (optional) | Unique CCAvenue bill id for the generate invoice. | Numeric value(25) |
| invoice_type (optional) | Provide only possible value of the invoice type. | Thepossiblevalues for invoice type is quick/invoice/recurring |
| page_no (required) | The default value of page no is 1. | Number(1) |

**Request:**
**XML Format:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_List_Query>
<from_date>10-09-2014</from_date>
<to_date>11-09-2014</to_date>
<max_amt>12.00</max_amt>
<min_amt>1.00</min_amt>
<created_by>xxx</created_by>
<invoice_email>xxx@xx.xxx</invoice_email>
107

<!-- Page 108 -->
<invoice_mobile_no>1234567890</invoice_mobile_no>
<reference_no>1234</reference_no>
<reference_no>1234</reference_no>
<invoice_id>321</invoice_id>
<invoice_no>345678</invoice_no>
<invoice_type>TASK/ITEM</invoice_type>
<invoice_type_name>Task</invoice_type_name>
<page_count>1</page_count>
</Invoice_List_Query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**JSON Format:**
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
Note: You will have to encrypt the above request and store in the “enc_request” parameter before
sending it to CCAvenue. Kindly refer to the encryption section.
**String Format:**
## FromDate|ToDate|max_amount|min_amount|created_by|mobile_no|email_id|reference_no|invoice_
## id|invoice_no|invoice_type|invoice_type_name|page_no|
## Example:11-10-2014|12-10-
## 2014|10.00|1.00|xxxx|1236547895|xxxx@xx.com|123654789|741258|45698741|task|FIRST|1|
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
108

<!-- Page 109 -->
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need notdecrypt the enc_response as itwill contain plain errormessage. | Value“0”denotes that the API call was successful. Value “1” denotes API call failure. On enc_response is plaintextrepresenting the error message. |
| enc_response | AESencryptedresponsecontainingformat as per response_type |  |
| Invoice_ID | Unique CCAvenue bill id for the generate invoice. | Numeric(25). |
| Invoice_ref_no | Merchant identifier for the Invoice | Alphanumeric with special characters(hyphen and underscore)(25). |
| Invoice_created_by | Unique merchant ID for the generate invoice. | String(70). |
| order_no | Order No for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| order_amt | Amount for the transaction. | Decimal(12,2). |
| order_bill_address | Order billing address details for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circularbracketsanddot)(315) |
| order_bill_city | Order billing City name for the order. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_bill_country | Order billing country for the Order. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_bill_email | EmailAddressoftheOrderfor notifications. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |

<!-- Page 110 -->

|  |  |  |
| --- | --- | --- |
| order_bill_name | Order billing name for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_bill_state | Order billing state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_bill_tel | Order billing telephone no for the order. | Numeric(10) |
| order_bill_zip | Orderbillingaddress’pincodeforthe order. | Possible value for zip is AlphaNumeric with special characters(hyphen and space) (15). |
| order_capt_amt | Captured amount for the transaction. Capturedamountcanbefullorpartialofthe transaction amount. | Decimal (12,2) |
| order_curr | Possibleorder Currencyinwhichmerchant processed thetransaction. | String Examples: INR – Indian Rupee USD– United StatesDollar SGD – Singapore DollarGBP– PoundSterling EUR– Euro,officialcurrencyof Eurozone |
| order_date_time | Order Generated Date &Time. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| order_device_type | This is the type of device using which the transaction was processed. | Possiblevaluefor devicetypeis IVRS/MOB/PC. |
| order_discount | This is Discount Value for the Order No. | Decimal(12,2). |
| order_fee_flat | Flat Fee for the Order No. | Decimal(12,2). |
| order_fee_perc | Provides the percentage fee for the same order No. | Decimal(12,2). |
| order_fee_perc_value | This attribute provides the percentage fee Value for the same order No. | Decimal(12,2). |

<!-- Page 111 -->

|  |  |  |
| --- | --- | --- |
| order_fraud_status | Specify whether orders are valid or not. | String Possible Values are: 1) Value“High” denotes“High Risk” 2) Value“Low” denotes“Low Risk” 3) Value“NR”denotes“No Risk” 4) Value “GA” denotes “Go Ahead” 5) Value “NA” denotes“Not Applicable” |
| order_gross_amt | Total transaction amount. | Decimal(12,2). |
| order_ip | Customer IP Address (i.e. from where transaction is being initiated) | IP V-4 Supported. |
| order_no | Order No for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| order_notes | Order information you wish to provide. | AlphaNumeric with special characters(space, comma, dot, hyphen and underscore)(60). |
| order_ship_address | Shipping Address for the order. | Possible value for address is Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circularbracketsanddot)(315) |
| order_ship_city | Shipping city name for the orders. | Possible value for city is Alphanumeric with special characters (space, comma, hyphen and dot)(30). |
| order_ship_country | Shipping country name for the orders. | Possible value for country is Alphanumeric with special characters (space)(30). |
| order_ship_email | ShippingemailIDfor the notifications ofthe transaction. | Possible value for email id is Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |

<!-- Page 112 -->

|  |  |  |
| --- | --- | --- |
| order_ship_name | ShippingName of the Customer for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| order_ship_state | Shipping state for the order. | Alphanumeric with special characters (hyphen, dot and space)(30). |
| order_ship_tel | Telephone no for notifications of the transaction. | Numeric(10). |
| order_ship_zip | Order shipping address' pin code for the order. | Possible value for zip is AlphaNumeric with special characters(hyphen and space) (15). |

<!-- Page 113 -->
**order_status**
Status ofthe order. Itcan besingle ormultiple. String
Possible values are:
Aborted (transaction is
**cancelled by the User)**
Auto-Cancelled (transactionhas
not confirmed within 12 days
hence auto cancelled by
**system)**
Auto-Reversed (two identical
transactions for same order
number, both were successful at
bank's end but we got
responseforonly oneofthem,
then next day during
reconciliation we mark one of
thetransaction as autoreversed
**)**
**Awaited (transaction is**
processedfrombillingshipping
page but no response is
**received)**
**Cancelled (transaction is**
**cancelled by merchant )**
**Chargeback()**
**Invalid(Transaction sent to**
CCAvenue with Invalid
parameters, hence could not be
processed further)
**Fraud(weupdatethisduring**
recon,theamountisdifferent at
bank’sendandatCCAvenue due
**totampering)**
**Initiated (transaction just**
arrived onbilling shippingpage
**and not processed further )**
**Refunded (Transaction is**
**refunded.)**
**Shipped (transaction is confirmed)**
Successful
System refund (Refunded by
CCAvenue for various find of
**reversals by CCAvenue)**
Unsuccessful (transaction is not
**successful)**

<!-- Page 114 -->

| order_status_date_time | This is the latest date and time when order status is modified. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| --- | --- | --- |
| order_TDS | AmountofTDS(taxdeductedatsource)for the Transaction. | Decimal(13,4). |
| reference_no | Unique CCAvenue reference no for the transaction. | Numeric(25). |
| error_desc | ThisAttributecontainsthedescriptionofthe failure requestprocessing.When status is1 then this attributewill generate thereasonfor failure. | Please refer below table for the failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| page_count | Totalpagesavailablebasedonno_of_records in the request | Numeric(25). |
| total_records | Total no.of orders matching the lookup criteria. |  |

**Example XML Response**
**Success:**
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

<!-- Page 115 -->
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
**Failure:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Invoice_List_Result error_desc="Order List: Invalid Parameter" error_code=”51308”/>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
Example JSON Response Success:
{
"invoice_List":[{
"invoice_Id":5094273,
"invoice_ref_no":"123456987","
invoice_Created_By":"API",
"order_Currency":"INR",
"order_Amt":0.0,
"order_Gross_Amt":0.0,
"order_Discount":0.0,

<!-- Page 116 -->
}
**Failure:**
{
}
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
"error_desc":"Order List: Invalid Parameter",
"error_code":"51308",
"page_count":0,
"total_records":0

<!-- Page 117 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
Example STRING Response
**String Format:**
## page_count|total_records|Invoice_Id|Invoice_ref_no|Invoice_Created_By|Order_No|Order_Type|Ord
er_Currency|Order_Amt|Order_Date_time|Order_Notes|
Order_Ip|Order_Status||Order_Bank_Response|Order_Bank_Mid|Order_Bank_Ref_No|Order_Status_
Date_Time|Order_Fraud_Status|Order_Card_Name|Order_Card_Type
|Order_Gtw_Id|Order_Gross_Amt|Order_Discount|Order_Capt_Amt|Order_Fee_Flat|Order_Fee_Perc
|Order_Tax|Order_Delivery_Details|Order_Bill_Name|Order_Bill_Email|Order_Bill_Tel|Order_Bill_Add
ress|Order_Bill_City|Order_Bill_State|Order_Bill_Country|Order_Bill_Zip|Order_Ship_Name|Order_Sh
ip_Email|Order_Ship_Tel|Order_Ship_Address|Order_Ship_City|Order_Ship_State|Order_Ship_Countr
y|Order_Ship_Zip^|
**Success:**
## 1|1|xxxxxx|xxxxxxx|API|xxxxx|xx-xxx|xxxx|xx.xx|xxxx-xx-xx xx:xx:xx.xxx||xxx.xxx.xxx.xxx|xxxx|xxx
xxx|xxxxxxx|xxxxxx|xxxx-xx-xx
xx:xx:xx.xxx|xx|xxxxxx|xxxx|xxxx|xx.xx|x.x|x.xx|x.x|xx.x|x.xxxx||xxxx|xxxx@xxx.com|xxxxxxxx|xxx|xx
xx|xxxx|xxxx|xxxx|xxxx xxxx||xxxxxxx|xxxxx xxxx|xxxxxx|xx|xxxxx|xxxxxx|
**Failure:**
## page_count|total_records|error_code|error_desc|
## 0|0|51308|Order List: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.

<!-- Page 118 -->
- UpdateInvoice ReferenceNumber
Update Invoicereference Number API call is usedto update Invoice reference number ifthesame was not
provided at the time of invoice generation.
**Request Parameters:**

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmustsendthiswitheachrequest. |  |
| request_type (required) | API requests are accepted in XML,JSONor String. Specify the request type. | Possiblevalueforrequest_typeis “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns response in XML, JSON or String format.Ifleftblank,the responsewill be inthe same format as request. | Possiblevalueforresponse_typeis is “XML” or “ JSON” or “STRING”. |
| Command (required) | Command valuespecifies the API calls.You must send this with each request. | Possible value for this API call is “updateBillMerchantReferenceNo” |
| bill_id (required) | Unique CCAvenue Bill id(invoice id) for the generated invoice. | Numeric value(25) |
| merchant_ref_no (required) | Unique reference no shared by merchant to updateagainst CCAvenuebillid(invoiceid). | Alphanumeric with special characters(hyphen and underscore)(25). |

**Request format:**
**XML Format:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Bill_Merchant_Reference_No_Query>
<bill_id>1234566</bill_id>
<mer_reference_no>12354</mer_reference_no>
</Update_Bill_Merchant_Reference_No_Query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.

<!-- Page 119 -->
**JSON Format:**
{
"bill_id":"123456",
"mer_reference_no":"123654"
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**String Format:**
## Format: Bill_id|merchant_reference_no|
**Example: 123456|123654|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need notdecrypt theenc_response as itwill contain plain errormessage. | Value“0”denotes that the API call was successful. Value“1” denotes API call failure. On enc_response is plain text representingtheerror message. |
| enc_response | AESencryptedresponsecontainingformat as per response_type |  |
| error_desc | Failurere as on ifupdate merchant reference numberis notgoingto beupdatedsuccessfully for the generatedinvoice. | Please refer belowtablefor the failure message. |
| error_code | Error code for Failure reason. | String Please refer below tablefor failure message. |
| update_status | Merchant update status specifies the status of update merchantreferencenumber. | Numeric(1) “0” means update merchant reference number was successful. “1” means merchant reference number was not successfully updated. |

<!-- Page 120 -->
**Response Format:**
**XML Format:**
**Success:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merch_Ref_No_Result update_status=”0” error_code=”” error_desc=””/>
**Failure:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merch_Ref_No_Result update_status=”1” error_desc=”Bill Merchant Reference No: Invalid Parameter”
error_code=”51320”/>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
**JSON Format:**
**Success:**
{
}
**Failure:**
{
}
"update_status":0,
"error_desc":, "error_code":
"error_desc":"bill_id: Invalid Parameter",
"update_status":1, "error_code":"51319"

<!-- Page 121 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
**String Format:**
**Success Format: update_status|**
**Example: 0|**
## Failure Format: update_status|error_code|error_desc|
## Example: 1|51320|Bill Merchant Reference No: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
- Update MerchantParams
Update Merchantparams API is usedto addsome extraparameteragainst Reference noifthesame could not be
done at the time of the transaction.
**Request Parameters:**

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmust send thiswitheach request. |  |
| request_type (required) | AP Irequests are accepted inXML, JSON or String. Specify the request type. | Possiblevalueforrequest_typeis “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns XML, JSON or String responses. If left blank,the responsewill be inthesame format as request. | Possiblevalueforresponse_typeis “XML” or “ JSON” or “STRING”. |
| command (required) | Command value specifies the API Calls. You must send this with each request. | Possible value for this API call is “updateMerchantParams” |
| reference_no (required) | Unique CCAvenuereferencenumber for the transaction. | Numeric(25) |

<!-- Page 122 -->

|  |  |  |
| --- | --- | --- |
| param_value (required) | Merchantcan update oneparamvalue against uniquereference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100) |
| param_value1 (optional) | Merchantcan update oneparamvalue against uniquereference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100) |
| param_value2 (optional) | Merchantcan update oneparamvalue against uniquereference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100) |
| param_value3 (optional) | Merchantcan updateoneparam value against uniquereference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100). |
| param_value4 (optional) | Merchantcan update oneparamvalue against uniquereference no after placing order. | Alphanumeric with special characters(comma, hyphen, backslash and dot)(100) |

**Request format:**
**XML Format:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merchant_Params_Query>
<reference_no>203000093626</reference_no>
<param_value>10</param_value>
<param_value1>11</param_value1>
<param_value2>22</param_value2>
<param_value3>33</param_value3>
<param_value4>44</param_value4>
</Update_Merchant_Params_Query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**JSON Format:**
{
"reference_no":"123654",
"param_value":"10",

<!-- Page 123 -->
"param_value1":"11",
"param_value2":"22",
"param_value3":"33",
"param_value4":"44"
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**String Format:**
## Format: Reference_no|Param_value1|Param_value2|Param_value3|Param_value4|Param_value5|
**Example: 123456|10|11|22|33|44|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need not decrypt the enc_response as itwill contain plain errormessage. | Value“0”denotes that the API call was successful. Value“1” denotes API call failure. On enc_response is plain text representingthe error message. |
| enc_response | AESencryptedresponsecontainingformat as per response_type |  |
| error_desc | Failure reasonif APIcalldoes not update/add param value. | Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |
| update_status | Update status contains merchant parameter if add/update was successful or not. | “0” means update merchant parameter value was successful. “1” means update merchant param value was not successful. |

<!-- Page 124 -->
**Response Format:**
**XML Format:**
**Success:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merchant_Param_Result update_status="0" error_code=”” error_desc=””/>
**Failure:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Merchant_Param_Result error_desc="Reference number: Invalid Parameter" update_status="1"
error_code=”51322”/>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
**JSON Format:**
**Success:**
{
}
**Failure:**
{
}
“update_status”:0,
"error_desc":"",
"error_code":""
"error_desc":"Referencenumber:Invalid Parameter",
"error_code":"51322",
"update_status":1
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
**String Format:**
**Success Format: update_status|**
**Example: 0|**
## Failure Format: update_status|error_code|error_desc|

<!-- Page 125 -->
## Example: 1|51322|Reference number: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.

<!-- Page 126 -->
- Update BillingDetails
Update billing details API call is used to update customer billing information against an order.
**Request Parameters:**

| Name | Description | value |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmust send thiswitheach request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possiblevalueforrequest_type is “XML” or “ JSON” or “STRING”. |
| response_type (optional) | API returns XML, JSON or String responses. If left blank,the responsewill beinthesame format as request. | Possible value for response_type is “XML” or “ JSON” or “STRING”. |
| command (required) | Command value specifies the API Calls. You must send this with each request. | Possible valueforthisAPIcall is “updateBillingDetails” |
| reference_no (required) | Unique CCAvenue reference no for the transaction. | Numeric value(25). |
| bill_name (required) | Billing name for the order | Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| bill_email (required) | Billing email id for order | Alphanumeric with special characters (hyphen, underscore, dot, @)(70). |
| bill_address (required)421=Unsupport ed version for the API call. | Billing address for order | Alphanumeric with special characters (space, hyphen, comma, ampersand(&), hash(#), circular brackets and dot)(315) |
| bill_city (required) | Billing city for order | Alphanumeric with special characters (space, comma, hyphen and dot)(30). |

<!-- Page 127 -->

|  |  |  |
| --- | --- | --- |
| bill_state (required) | Billing state for order | Alphanumeric with special characters (hyphen, dot and space)(30). |
| bill_country (required) | Billing country for order | Alphanumeric with special characters (space)(30). |
| bill_zip (required) | Billing zip for order | AlphaNumeric with special characters(hyphen and space) (15). |

**Request format:**
**XML Format:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Billing_Details_Query>
<reference_no>123456</reference_no>
<bill_name>bill name</bill_name>
<bill_email>szgfs.sdgf@sfdg.com</bill_email>
<bill_address>santacruz(west)</bill_address>
<bill_city>mumbai</bill_city>
<bill_state>maharashtra</bill_state>
<bill_country>india</bill_country>
<bill_zip>400000</bill_zip>
</Update_Billing_Details_Query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**JSON Format:**
{
"reference_no":"123456",
"bill_name":"bill name",
"bill_email":"zgfs.sdgf@sfdg.com",
"bill_address":"santacruz(west)",
"bill_city":"mumbai",
"bill_state":"maharashtra",
"bill_country":"india",
"bill_zip":"400000"

<!-- Page 128 -->
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**String Format:**
## Format: Reference No|Billing Name|Bill Email ID|Bill Address|Bill City|Bill State|Bill Country|Bill Zip|
## Example: 123456|bill name|xxx@xxx.com|santacruz(west)|mumbai|maharashtra|india|400054|

<!-- Page 129 -->
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it to
CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status421=Unsupported versionfortheAPIcall. | Thisstateswhetherthecallwassuccessfulor not. Ifvalue ofthisparameter is“1”thenyou need notdecrypt the enc_response as itwill contain plain errormessage. | Value“0”denotes thatthe APIcall was successful. Value“1” denotes API call failure. On enc_response is plain text representstheerrormessage. |
| enc_response | AESencryptedresponsecontainingformat as per response_type |  |
| error_desc | Failure reason if billing details are not updated successfully. | String Please refer below tablefor failure message. |
| error_code | Error code for Failure reason. | String Please refer below tablefor failure message. |
| update_status | Update_status denotes whether Billing informationhavebeenupdatedsuccessfully or not. | “0” means update billing details was successful. “1” means billing details are not successfully updated. |

**Response Format:**
**XML Format:**
**Success:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Param_Result update_status="0" error_desc=”” error_code=””/>
**Failure:**
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Update_Bill_Details_Result update_status=”1” error_desc=”Reference number: Invalid Parameter”
error_code=”51316”/>

<!-- Page 130 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the decryption
section.
**JSON Format:**
**Success:**
{
}
**Failure:**
{
}
"update_status":0,
"error_desc":"",
"error_code":""
"error_desc":"Referencenumber:InvalidParameter",
"update_status":1,
"error_code":"51316"

<!-- Page 131 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**String Format:**
**Success Format: update_status|**
**Example: 0|**
## Failure Format: update_status|error_code|error_desc|
## Example: 1|51316|Reference number: Invalid Parameter|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryptionsection.421=Unsupported version for the API call.
- Bin Details
Bin Details call is performed to fetch the card details of bin.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. Youmustsendthiswitheachrequest. |  |
| request_type (required) | API requests are accepted inXML, JSON or String. Specify the request type. | Possiblevalueforrequest_type is “XML” or “ JSON” or “STRING” |
| response_type (optional) | APIreturnsresponsesinXML, JSONor String format.Ifleftblank,the responsewillbe inthe same format as the request. | Possible value for response_type is “XML” or “ JSON” or “STRING” |
| Command (required) | Command valuespecifies theAPI calls.You must send this with each request. | PossiblevalueforthisAPIcallis “binDetails”. |
| bin_number (required) | First 6 digits of card number (Bin number). | Numeric(6). |

<!-- Page 132 -->
**Example XML Request**
<bin_details_query>
<bin_number>464042</bin_number>
</bin_details_query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before
sending it to CCAvenue. Kindly refer to the encryption section.
**Example JSONRequest**
{'bin_number': '464042'}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before
sending it to CCAvenue. Kindly refer to the encryption section.
Example STRING Request
**Format: bin_number|**
**Example: 464042|**
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending it
**to CCAvenue. Kindlyrefertotheencryptionsection.**
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | Thisstateswhetherthecallwassuccessfulor not. If thevalue ofthis parameter is“1” then you need notdecrypt the enc_response asit will contain theplain errormessage. | Value “0” denotesthatthe APIcall was successful. Value“1” denotes APIcallfailure. On enc_response is plain text representingtheerrormessage. |
| enc_response | AESencryptedresponsecontainingtheformat as per response_type. |  |
| bin_number | Bin number that was sent in request. | Numeric(6). |

<!-- Page 133 -->

| card_name | Name ofthe card ofthe selected Binnumber. | String Possible values, "Visa Debit Card", "MasterCard Debit Card", "Maestro Debit Card"", "Amex", "Diners Club", "DISCOVER", "JCB", "MasterCard", "Visa" |
| --- | --- | --- |
| card_type | Card type of the given bin number. | String Possible values: “OPTDBCRD”, “OPTCRDC” |
| payment_option | Paymentoption for thecardofthegiven bin number | String. Values : OPTCRD-credit card OPTDBCRD-debit card |
| issuing_bank | Name ofthe bank that issue thecardof the given bin number | String |
| country | Countryof thebankthatissuethe cardof the given binnumber Note this parameter is available only in xml and JSONresponse. | String |
| error_desc | Reasonif API call does notfind the record based onthegiven search criteria. | String. Please refer below table for failure message. |
| error_code | Error code for Failure. | String. Please refer below table for failure message. |

<!-- Page 134 -->
**Example XML Response**
**Success:**
<?xml version='1.0' encoding='UTF-8'?>
<bin_details_Result>
<bin_number>464042</bin_number>
<card_name>Visa Debit Card</card_name>
<card_type>DBCRD</card_type>
### <country>UNITED STATES</country>
<error_code></error_code>
<error_desc></error_desc>
<issuing_bank>FLAGSTAR BANK FSB</issuing_bank>
<payment_option>OPTDBCRD</payment_option>
</bin_details_Result>
**Failure:**
<?xml version='1.0' encoding='UTF-8'?>
<bin_details_Result>
<error_code>52026</error_code>
<error_desc>bin_number: Invalid Parameter</error_desc>
</bin_details_Result>
Example JSON
**Response Success:**
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

<!-- Page 135 -->
**Failure:**
{"bin_details_Result":{
"error_code":52026,
"error_desc":"bin_number: Invalid
Parameter"
}
}
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
Example STRING
**Response Success:**
## Format: Bin_number|Card_name|Card_type|Payment_option|Issuing_bank|Error_code|Error_desc
**Example:**
## 464042|Visa Debit Card|DBCRD|OPTDBCRD|FLAGSTAR BANK FSB||
**Failure:**
**Example: |||||52026|bin_number: Invalid Parameter**
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
- PayId Details
PayId Details API call is used to list transactions for a given PayId.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is “XML” or “JSON” |

<!-- Page 136 -->

|  |  |  |
| --- | --- | --- |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is “XML” or “JSON” |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is “payIdDetails”. |
| pay_id (required) | Provide the settlement Date to find the payouts list. | Numeric(25). |
| page_number (required) | A limited number of records are shared as part of the response. The total records & number of pages are shared as part of the response to enable subsequent calls. | Numeric(4). |
| no_of_records(required) | Number of records which are available in pages. | Numeric. |

**Example XML Request**
<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<pay_id_details_query>
<pay_id>XXXXX</pay_id>
<page_number>1</page_number>
<no_of_records>300</ no_of_records >
</pay_id_details_query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly refer to the encryption section.
**Example JSON Request**
{
'pay_id':'XXXXX',
‘page_number’:1
‘no_of_records’:300
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly refer to the encryption section.

<!-- Page 137 -->
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is “1” then you need not decrypt the enc_response as it will contain plain error message. | Value “0” denotes that the API call was successful. Value “1” denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| pay_Id | Unique pay Id for payout. | Numeric (25). |
| Amount | Amount of transaction. | Decimal(12,2). |
| amt_payable | Payable amount for given transaction to merchant. | Decimal(12,2). |
| bank_ref_no | Bank reference number of aggregator bank. | Numeric(25). |
| bill_email | Customer email id for the transaction. | Alphanumeric with special characters (hyphen, underscore, dot,@)(70). |
| bill_name | Order billing name for the order. | Possible value for name is Alphanumeric with special characters (space, hyphen, apostrophe, underscore, dot)(60). |
| ccavenue_ref_no | CCAvenue reference no allocated to the transaction. | Numeric(25). |
| currency | Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP – Pound Sterling EUR – Euro, official currency of Eurozone |

<!-- Page 138 -->

| date_time | This is the latest date and time when order status is modified. | DateTime in IST( yyyy-MM-dd HH:mm:ss.SSS) format. |
| --- | --- | --- |
| fees | Fee applied to process transaction by CCAvenue. | Decimal(12,2). |
| order_no | Order No for the transaction. | AlphaNumeric with special characters(hyphen and underscore)(30). |
| sub_acc_id | Unique Id for sub Account of merchant if provided for transaction | Alphanumeric with special characters (hyphen)(20). |
| tax | Sum of Taxes applied for the transaction. | Decimal(12,2). |
| txn_type | Type of transaction included in payouts. | String Example: Auto-Cancelled Cancelled MISC MSGCHRG Chargeback Refunded Shipped ASUC |
| order_option_type | Type of payment option. | String Example: OPTEMI OPTNBK OPTMOBP OPTIVRS OPTCASHC OPTDBCRD OPTCRDC OPTWLT OPTNEFT OPTUPI |
| page_count | Total pages available based on no_of_records in the request | Example: no_of_records sent in request was 100 total_records matching the lookup criteria were 1000 page_count will be 10 (total_records / no_of_records) rounded to the ceiling |
| total_records | Total no. of orders matching the lookup criteria |  |
| error_desc | Reason if customer payment option is not going to be deleted successfully. | String. Please refer below table for failure message. |
| error_code | Error code for the Failure reason. | String. Please refer below table for failure message. |

<!-- Page 139 -->
**Example XML Response**
**Success:**
<?xml version='1.0' encoding='UTF-8'?>
<pay_id_details_Result>
<error_code></error_code>
<error_desc></error_desc>
<pay_id>XXXXX</pay_id>
<page_count>X</page_count>
<total_records>XXX</total_records>
<pay_id_txn_details_list>
<pay_id_txn_details
amount="40.00" amt_payable="35.88" bank_ref_no="14525144XX217" bill_email=xx.xx@xxx.com
bill_name="Shashi" ccavenue_ref_no="2XX000170631" currency="INR"
date_time="2016-01-11 17:42:58.223" fees="3.60" order_no="296XX917" sub_acc_id="" tax="0.52"
order_option_type=”OPTDBCRD” txn_type="Chargeback" />
</pay_id_txn_details_list>
</pay_id_details_Result>
**Failure:**
<?xml version='1.0' encoding='UTF-8'?>
<pay_id_details_Result>
<error_code>51419</error_code>
<error_desc>Enc_request: No record found for given criteria.</error_desc>
<pay_id>XXXXX</pay_id>
<page_count>0</page_count>
<total_records>0</total_records>
</pay_id_details_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Example JSON Response**
**Success:**
{
"pay_id_details_Result":{ "error_code":"",
"error_desc":"", "pay_id":XXXXX,
“page_count”:X, “total_records”:XXX,
"pay_id_txn_details_list":{
"pay_id_txn_details"[{

<!-- Page 140 -->
"amt_payable":35.88, "bill_email":"xx.xxx@xx.com", "fees":3.6, "bill_name":"Shashi", "order_no":29XX9917,
"currency":"INR", "amount":40,"tax":0.52,"ccavenue_ref_no":20XX00170631, "bank_ref_no":1452XXX407217,
"date_time":"2016-01-11 17:42:58.223","order_option_type":"OPTDBCRD", "txn_type":"Chargeback",
"sub_acc_id":""
}]
}
}
}
**Failure:**
{
}
"pay_id_details_Result":{
"error_code":XXXXX,
"error_desc":"pay_id: Invalid Parameter",
"pay_id": XXXXX,
"total_records":0,
"page_count":0
}

<!-- Page 141 -->
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
- Payouts Summary
Payouts Summary API call is used to list payouts summary for a merchant for a given settlement date.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is “XML” or “JSON” |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the same format as request. | Possible value for response_type is “XML” or “JSON” |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is “payoutSummary”. |
| settlement_date (required) | Provide the settlement Date to find the payouts list. | Date must be in IST(dd-mm-yyyy )format. |

**Example XML Request**
<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<payout_summary_query>
<settlement_date>01-02-2019</settlement_date>
</payout_summary_query>
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
**it to CCAvenue. Kindly refer to the encryption section. Example JSON Request**
{
'settlement_date': '01-02-2019'

<!-- Page 142 -->
}
Note: You will have to encrypt the above request and store in the “enc_request” parameter before sending
it to CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is “1” then you need not decrypt the enc_response as it will contain plain error message. | Value “0” denotes that the API call was successful. Value “1” denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| pay_amount | Payout amount for a payout. | Decimal(12,2). |
| pay_Id | Unique pay Id for payout. | Numeric (25). |
| settlement_date | Date of settlement. | Date in IST(dd-mm-yyyy ) format. |
| settlement_bank | Name of bank in which settlement done. | String. |
| settlement_currency | Currency in which settlement is done. | String. Examples: INR – Indian Rupee |
| trans_currency | Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP – Pound Sterling EUR – Euro, official currency of Eurozone |
| sub_acc_Id | Unique sub account id for merchant if payouts done for sub account of merchant. | Alphanumeric with special characters (hyphen)(20). |
| utr_no | Unique id from bank against each payout id. | String. |

<!-- Page 143 -->

|  |  |  |
| --- | --- | --- |
| error_desc | Reason if customer payment option is not going to be deleted successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

**Example XML Response**
**Success:**
<?xml version='1.0' encoding='UTF-8'?>
<Payout_Summary_Result>
<error_code></error_code>
<error_desc></error_desc>
<payout_summary_list>
<payout_summary_details
pay_amount="211.76"
pay_Id="40907"
settlement_date="19-01-2016"
settlement_bank="KARUR VYSYA BANK"
settlement_currency="INR" sub_acc_Id="split-1"
trans_currency="INR"
utr_no="1234567890” />
</payout_summary_list>
</Payout_Summary_Result>
**Failure:**
<?xml version='1.0' encoding='UTF-8'?>
<Payout_Summary_Result>
<error_code>51419</error_code>
<error_desc>Enc_request: No record found for given criteria.

<!-- Page 144 -->
</error_desc>
</Payout_Summary_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Example JSON Response**
**Success:**
{
"Payout_Summary_Result":{
"error_code":"",
"error_desc":"",
"pauyout_summary_list":{
"pauyout_summary_details":[{
"settlement_bank":"KARUR VYSYA BANK",
"pay_amount":211.76,
"trans_currency":"INR",
"pay_Id":40907,
"sub_acc_Id":"split-1",
"settlement_date":"19-01-2016",
"settlement_currency":"INR",
“utr_no”="1234567890”
}]
}
}
}
**Failure:**
{

<!-- Page 145 -->
"Payout_Summary_Result":{
"error_code":52014,
"error_desc":"payout_date: Required parameter missing"
}
}
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
**decryption section.**
- Refund Details API:
The getRefundDetails API call can be used to fetch refund information of the particular transaction.
**Sample request**
**enc_request=63957FB55DD6E7B968A7588763E08B240878046EF2F520C44BBC63FB9CCE726209A473487**
7
F5904445591304ABB2F5E58B951E39EAFB9A24584B00590ADB077ADE5E8C444EAC5A250B1EA96F68D22
E
**44EA2515401C2CD753DBA91BD0E7DFE7341BE1E7B7550&access_code=8JXENNSSBEZCU8KQ&command**
**= getRefundDetails&request_type=XML&response_type=XML&version=1.1**
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | This is the access code for your application. You must send this with each request. |  |
| request_type(required) | API requests are accepted in XML, JSON or String formats. Specify the request type. | Value is “XML” or “JSON” or “STRING”. |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Value is “XML” or “JSON” or “STRING”. |

<!-- Page 146 -->

| command (required) | This is the command to access the API Calls. You must send this with each request. | Value is “getRefundDetails” |
| --- | --- | --- |
| reference_no (required) | Unique CCAvenue reference number for the transaction. | Numeric (25) |

**Example XML Request**
<?xml version='1.0' ?>
<RefundDetails_Query
reference_no='123456789012'> </RefundDetails_Query>
**Example JSON Request**
{'reference_no':'123456789012'}
**Example STRING Request**
**Format: reference_no|**
**Example: 123456789012|**

<!-- Page 147 -->
Note: You will have to encrypt the above request and store in the “enc_request” parameter before
sending it to CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is “1” then you need not decrypt the enc_response as it will contain the plain error message. | Value “0” denotes that the API call was successful. Value “1” denotes API call failure. On enc_response is plain text that represents the error message. |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | Reason if API call fails. | String Please refer to the below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer to the below table for failure message. |
| reference_no | Unique CCAvenue reference number for the transaction. | Numeric (25) |
| order_no | Order No for the transaction. | Alphanumeric with special characters (hyphen and underscore) (30). |
| order_curr | Possible Order Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP – Pound Sterling EUR – Euro, official currency of Eurozone |
| order_amt | Amount for the transaction. | Decimal (12,2). |
| order_status | Status of the order. It can be single or multiple. | String Possible values are: Auto-Reversed (Two identical transactions for same order number, both were successful at bank's end but we got response for only one of them, then next day during reconciliation we mark one of the |

<!-- Page 148 -->

|  |  | transaction as auto reversed, or we mark transaction as Auto-Reversed if merchant Instant Gratification setting is Yes ) Cancelled (Transaction is cancelled by merchant ) Refunded (Transaction amount is refunded) Auto-Cancelled (Transaction was not confirmed in given time) |
| --- | --- | --- |
| refund_amt | Transaction amount that was refunded. Amount can be full or partial of the transaction amount. | Decimal (12,2). |
| refund_issue_date | Refund Issue Date &Time. | DateTime in IST ( yyyy-MM-dd HH:mm:ss.SSS) format. |
| refund_processed_on | Latest refund process Date &Time. | DateTime in IST ( yyyy-MM-dd HH:mm:ss.SSS) format. |
| refund_completion_date | Refund Completion Date &Time. | DateTime in IST ( yyyy-MM-dd HH:mm:ss.SSS) format. |
| refund_bank_ref_no | Reference number shared by Bank after refund. | Alphanumeric (25) |
| refund_mer_ref_no | Reference number shared by merchant at the time of refund. | Alphanumeric (30) |
| refund_status | Status of issued refund. | TS-REFC: Refund Confirmed TS-REFA: Refund Awaited TS-REFF: Refund Failed TS-REFD: Refund Declined |

**Successful Response**
**XML Response:**
<?xml version='1.0' encoding='UTF-8'?>
<refund_details_Result error_code=""
error_desc=""
order_amt="10.00"

<!-- Page 149 -->
order_curr="INR"
order_no="06333954"
order_status="Refunded"
reference_no="203000111377">
<refund_list>
<RefundDetails refund_amt="1.00"
refund_bank_ref_no="2492"
refund_completion_date="2014-09-12 15:12:07.77"
refund_issue_date="2014-09-12 15:11:07.877"
refund_mer_ref_no="A1"
refund_processed_on=""
refund_status="TS-REFC" />
<RefundDetails refund_amt="1.00"
refund_bank_ref_no="2493"
refund_completion_date="2014-09-12 15:12:10.413"
refund_issue_date="2014-09-12 15:11:13.99"
refund_mer_ref_no="A2"
refund_processed_on=""
refund_status="TS-REFC" />
</refund_list>
</refund_details_Result>
**JSON Response:**
{
"refund_list":[{"refund_amt":"1.00",
"refund_issue_date":"2014-09-12 15:11:07.877",
"refund_processed_on":"",
"refund_completion_date":"2014-09-12 15:12:07.77",
"refund_bank_ref_no":"2492",
"refund_mer_ref_no":"A1",
"refund_status":"TS-REFC"
},
{
"refund_amt":"1.00",
"refund_issue_date":"2014-09-12 15:11:13.99",
"refund_processed_on":"",
"refund_completion_date":"2014-09-12 15:12:10.413",
"refund_bank_ref_no":"2493",
"refund_mer_ref_no":"A2",
"refund_status":"TS-REFC"
}],
"reference_no":"203000111377",
"order_no":"06333954",
"order_amt":"10.00",
"order_curr":"INR",
"order_status":"Refunded",
"error_desc":"",
"error_code":""
}

<!-- Page 150 -->
**String Response:**
**Format:**
error_code|error_desc|reference_no|order_no|order_curr|order_amt|order_status|refund_amt|refund_
issue_date|refund_processed_on|refund_completion_date|refund_bank_ref_no|refund_mer_ref_no|ref
und_status|
||203000111377|06333954|INR|10.00|Refunded|1.00|2014-09-12 15:11:07.877||2014-09-12
15:12:07.77|2492|A1|TS-REFC^1.00|2014-09-12 15:11:13.99||2014-09-12 15:12:10.413|2493|A2|TS-
REFC|
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer to the
decryption section.
**Failure Response:**
**XML Response:**
<?xml version='1.0' encoding='UTF-8'?>
<refund_details_Result
error_code="51419"
error_desc="Enc_request: No record found for given criteria."
order_amt=""
order_curr=""
order_no=""
order_status=""
reference_no="123456789012"
/>
**JSON Response:**
{
"reference_no":"123456789012",
"order_no":"",
"order_amt":"",
"order_curr":"",
"order_status":"",
"error_desc":"Enc_request: No record found for given criteria.",
"error_code":"51419"
}
**String Response:**
**Format:**
error_code|error_desc|reference_no|order_no|order_curr|order_amt|order_status|refund_amt|refund_
issue_date|refund_processed_on|refund_completion_date|refund_bank_ref_no|refund_mer_ref_no|ref
und_status|

<!-- Page 151 -->
51419|Enc_request: No record found for given criteria.|123456789012||||||
- getSettlementDetails :- – The   getSettlementDetails   call is use to get the Settlement details such payid
,UtrNo and settlement date. It works on XML and JSON request format only and version 1.2
**Sample request**
**enc_request=63957FB55DD6E7B968A7588763E08B240878046EF2F520C44BBC63FB9CCE726209A4734877**
F5904445591304ABB2F5E58B951E39EAFB9A24584B00590ADB077ADE5E8C444EAC5A250B1EA96F68D22E
**44EA2515401C2CD753DBA91BD0E7DFE7341BE1E7B7550&access_code=8JXENNSSBEZCU8KQ&command=**
**getSettlementDetails &request_type=XML&response_type=XML&version=1.2**
**Request Parameter**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data |  |
| access_code (required) | This is the access code for your application. You must send this with each request. |  |
| request_type(required) | API requests are accepted in XML, JSON or String formats. Specify the request type. | Value is “XML” or “JSON” . |
| response_type (optional) | API returns XML, JSON or String responses. If left blank, the response will be in the same format as request. | Value is “XML” or “JSON” |
| command (required) | This is the command to access the API Calls. You must send this with each request. | Value is “getSettlementDetails” |
| reference_no (required) | Unique CCAvenue reference number for the transaction. | Numeric (12) |

<!-- Page 152 -->
**Response Parameter**

| Name | Description | Note |
| --- | --- | --- |
| enc_response | AES encrypted response containing format as per response_type |  |
| error_desc | Reason if API call fails. | String Please refer to the below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer to the below table for failure message. |
| reference_no | Unique CCAvenue reference number for the transaction. | Numeric (25) |
| Pay_Id | Unique pay Id for payout. | Numeric(25) |
| Utr_no | Unique id from bank against each payout id. | String |
| Settlement_date | Date of Settlement | Date in IST(dd-mm-yyyy) |

**Following are the request and response formats...**
- XML request format:
<?xml version='1.0' ?>
<SettlementDetails_Query reference_no='109810375484'>
</SettlementDetails_Query>
XML response format:
<?xml version='1.0' ?><SettlementDetails_Query order_no=''
reference_no='109810375484'></SettlementDetails_Query>
<?xml version='1.0' encoding='UTF-8'?>
<Settlement_Details_Result>
<error_code></error_code>
<error_desc></error_desc>
<settlement_details_list><settlement_details pay_Id="485807528" settlement_date="2020-03-31"
utr_no="CMS1450654388"/>
</settlement_details_list>
</Settlement_Details_Result>
- Json request format:

<!-- Page 153 -->
{'reference_no':'109810375484'}
Json response format:
{"Settlement_Details_Result":
{"settlement_details_list":
"settlement_details":
{"settlement_date":"2020-03-31","utr_no":"CMS1450654388","pay_Id":485807528}},
"error_desc":"",
"error_code":""}}
- Consolidate Payout Summary
ConsolidatePayouts Summary API call is used to list payouts summary for a merchant for a given
settlement date.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is “XML” or “JSON” |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the | Possible value for response_type is “XML” or “JSON” |

<!-- Page 154 -->

|  | same format as request. |  |
| --- | --- | --- |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is “consolidatepayoutSummary”. |
| settlement_date (required) | Provide the settlement Date to find the payouts list. | Date must be in IST(dd-mm-yyyy )format. |

**Example XML Request**
<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<Consolidatepayout_summary_query>
<settlement_date>01-02-2019</settlement_date>
</Consolidatepayout_summary_query>
**Note: You will have to encrypt the above request and store in the “enc_request” parameter**
before sending it to CCAvenue. Kindly refer to the encryption section. Example JSON Request
{
'settlement_date': '01-02-2019'
}
**Note: You will have to encrypt the above request and store in the “enc_request” parameter**
before sending it to CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is “1 then you need not decrypt the enc_response as it will contain plain error message. | Value “0” denotes that the API call was successful. Value “1” denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| account_no | Account number for payout | numeric(25) |

<!-- Page 155 -->

| ifsc_code | Ifsc code of bank |  |
| --- | --- | --- |
| pay_amount | Payout amount for a payout. | Decimal(12,2). |
| pay_Id | Unique pay Id for payout. | Numeric (25). |
| settlement_date | Date of settlement. | Date in IST(dd-mm-yyyy ) |
|  |  | format. |
| settlement_bank | Name of bank in which settlement done. | String. |
| settlement_currency | Currency in which settlement is done. | String. Examples: INR – Indian Rupee |
| trans_currency | Currency in which merchant processed the transaction. | String Examples: INR – Indian Rupee USD – United States Dollar SGD – Singapore Dollar GBP – Pound Sterling EUR – Euro, official currency of Eurozone |
| sub_acc_Id | Unique sub account id for merchant if payouts done for sub account of merchant. | Alphanumeric with special characters (hyphen)(20). |
| utr_no | Unique id from bank against each payout id. | String. |
| error_desc | Reason if customer payment option is not going to be deleted successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String Please refer below table for failure message. |

<!-- Page 156 -->
**Example XML Response**
**Success:**
<?xml version='1.0' encoding='UTF-8'?>
<ConsolidatePayout_Summary_Result>
<error_code></error_code>
<error_desc></error_desc>
<Consolidatepayout_summary_list>
<Consolidatepayout_summary_details
account_no=”784857445”
ifsc_code=”HDFC000060”
pay_amount="211.76"
pay_Id="40907"
settlement_date="19-01-2016"
settlement_bank="KARUR VYSYA BANK"
sub_acc_id=” ”
settlement_currency="INR" sub_acc_Id="split-1"
trans_currency="INR"
utr_no="1234567890” />
<Consolidatepayout_summary_details
account_no=”784857445”
ifsc_code=”HDFC000060”
pay_amount="211.76"
pay_Id="0"
settlement_date="19-01-2016"
settlement_bank="KARUR VYSYA BANK"
sub_acc_id=””
settlement_currency="INR" sub_acc_Id="split-1"
trans_currency="INR"
utr_no="1234567890” />
</Consolidatepayout_summary_list>
</ConsolidatePayout_Summary_Result>
**Failure:**
<?xml version='1.0' encoding='UTF-8'?>
<ConsolidatePayout_Summary_Result>
<error_code>51419</error_code>

<!-- Page 157 -->
<error_desc>Enc_request: No record found for given criteria.
</error_desc>
</ConsolidatePayout_Summary_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer
to the decryption section.
**Example JSON Response**
**Success:**
{
"ConsolidatePayout_Summary_Result":{
"error_code":"",
"error_desc":"",
"Consolidatepauyout_summary_list":{
"Consolidatepauyout_summary_details":[{
“account_no”:”784857445”,
“ifsc_code”:”HDFC000060”,
"settlement_bank":"KARUR VYSYA BANK",
"pay_amount":211.76,
"trans_currency":"INR",
"pay_Id":40907,
"sub_acc_Id":"split-
1","settlement_date":"19-01-2016",
"settlement_currency":"INR",
“utr_no”:"”
}],
"Consolidatepauyout_summary_details":[{
“account_no”=”784857445”,
“ifsc_code”:”HDFC000060”,
"settlement_bank":"KARUR VYSYA BANK",
"pay_amount":211.76,
"trans_currency":"INR",
"pay_Id":”0”,
"sub_acc_Id":"split-1",
"settlement_date":"19-01-2016",
"settlement_currency":"INR",

<!-- Page 158 -->
“utr_no”:"”
}
}
}
**Failure:**
{
"ConsolidatePayout_Summary_Result":{
"error_code":52014,
"error_desc":"payout_date: Required parameter missing"
}
}
**Note: You will have to decrypt the above response from “enc_response” parameter. Kindly**
**refer to the decryption section.**
- ConsolidateSettlementDetails
ConsolidateSettlementDetails API call is used to list Settelement Details for a merchant for a given Order
Number And Reference Number.
**Request Parameters**

| Name | Description | Note |
| --- | --- | --- |
| enc_request (required) | AES encrypted request data. |  |
| access_code (required) | Unique CCAvenue access code which is generated when merchant registered their IP address. You must send this with each request. |  |
| request_type (required) | API requests are accepted in XML, JSON or String. Specify the request type. | Possible value for request_type is “XML” or “JSON” |
| response_type (optional) | API returns responses in XML, JSON or String format. If left blank, the response will be in the | Possible value for response_type is “XML” or “JSON” |

|  | same format as request. |  |
| --- | --- | --- |
| Command (required) | Command value specifies the API calls. You must send this with each request. | Possible value for this API call is “ConsolidateSettlementDetail |
| Order Number | Provide the Order Number to find the |  |

<!-- Page 159 -->

| (required) Reference Number | ConsolidateSettlementDetails Provide the Reference Number to find the | Order number should be numeric |
| --- | --- | --- |
| (required) | ConsolidateSettlementDetails | Reference number should be numeric |

**Reference Number**
Provide the Reference Number to find the
(required)
ConsolidateSettlementDetails
Reference number should be
numeric
xml request-
<?xml version='1.0' ?><ConsolidateSettlementDetails_Query> order_no='53889594'
reference_no='53889594' ></ConsolidateSettlementDetails_Query>
**Note: You will have to encrypt the above request and store in the “enc_request” parameter**
before sending it to CCAvenue. Kindly refer to the encryption section. Example JSON Request
{
'Order Number': '53889594'
'Reference Number': ' 53889594’
}
**Note: You will have to encrypt the above request and store in the “enc_request” parameter**
before sending it to CCAvenue. Kindly refer to the encryption section.
**Response Parameters**

| Name | Description | Note |
| --- | --- | --- |
| status | This states whether the call was successful or not. If value of this parameter is “1 then you need not decrypt the enc_response as it will contain plain error message. | Value “0” denotes that the API call was successful. Value “1” denotes API call failure. On enc_response is plain text representing the error message. |
| enc_response | AES encrypted response containing format as per response_type. |  |
| pay_Id | Unique pay Id for payout. | Numeric (25). |

**enc_response**
AES encrypted response containing
format
as per response_type.
**pay_Id**
Unique pay Id for payout.
Numeric (25).

|  |  |  |
| --- | --- | --- |
| settlement_date | Date of settlement. | Date in IST(dd-mm-yyyy ) |
| utr_no | Unique id from bank against each String payout . | utr_no |
| error_desc | Reason if customer payment option is not going to be deleted successfully. | String Please refer below table for failure message. |
| error_code | Error code for Failure reason. | String |

<!-- Page 160 -->
Please refer below table for
failure message.
XML Response Data
<?xml version='1.0' encoding='UTF-
8'?><ConsolidateSettlement_Details_Result><error_code></error_code><error_desc></error_des
c><Consolidatesettlement_details_list><Consolidatesettlement_details pay_Id="711304"
settlement_date="2020-03-12" utr_no=""/>
pay_Id="0" settlement_date="2020-03-12"
utr_no=""/></Consolidatesettlement_details_list></ConsolidateSettlement_Details_Result>
**Failure:**
<?xml version='1.0' encoding='UTF-8'?>
<ConsolidateSettlement_Details_Result>
<error_code>51419</error_code>
<error_desc>Enc_request: No record found for given criteria.
</error_desc>
</ConsolidateSettlement_Details_Result>
Note: You will have to decrypt the above response from “enc_response” parameter. Kindly refer
to the decryption section.
**Example JSON Response**
**Success:**
{
"ConsolidateSettlement_Details_Result":{
"error_code":"",
"error_desc":"",
"Consolidatesettlement_details_list":{
"Consolidatesettlement_details":[{
"pay_Id":40907,

<!-- Page 161 -->
"settlement_date":"19-01-2016",
“utr_no”=" ”
}],
"Consolidatesettlement_details":[{
"pay_Id":0, "settlement_date":"19-
01-2016",
“utr_no”=" ”
}
}
}
**Failure:**
{
"ConsolidateSettlement_Details_Result":{
"error_code":51002,
"error_desc":"Reference Number: Invalid Parameter"
}
}
**Note: You will have to decrypt the above response from “enc_response” parameter. Kindly**
**refer to the decryption section.**

<!-- Page 162 -->
**Note: - Error Message when API status is “1”.**

| Error_code | Short Description | Long Description | Message |
| --- | --- | --- | --- |
| 51401 | Missing Parameter | Request_type: Required Parameter is Missing | “Ensure that request_type parameter is not blank.” |
| 51402 | Missing Parameter | Command: Required parameter missing | “Ensure that Command parameter is not blank.” |
| 51403 | Missing Parameter | Access_code: Required Parameter is Missing | “Ensurethataccess_code parameterisnot blank.” |
| 51404 | Invalid Parameter | Request Type: Invalid Parameter | "Ensurethat Request Typeparameter valueis only XML/ JSON/STRING." |
| 51405 | Invalid Parameter | Response Type: Invalid Parameter | "EnsurethatResponseTypeparameter valueis only XML/ JSON/STRING." |
| 51407 | Invalid Parameter | Access_code: Invalid Parameter | “You are not allowed to performthis operation.” |
| 51408 | Missing Parameter | Enc_request: Required parameter missing | “Ensure that enc_request parameter is not blank.” |
| 51410 | Invalid Parameter | Command: Invalid Parameter | “Ensure that the commandname isnot invalid. Pleaserefer API documentfor valid command.” |
| 51411 | Invalid Parameter | JSONrequestformat:Invalid Parameter format | “Ensure that the JSON request format isnot invalid. Pleaserefer API documentforthe API call.” |
| 51412 | Invalid Parameter | XMLrequestformat: Invalid Parameter format | “Ensure that XML request format is not invalid. PleasereferAPIdocumentfor theAPIcall.” |
| 51413 | Invalid Parameter | STRING request format: Invalid Parameter format | “Ensure that STRING request format isnot invalid. Pleaserefer API documentforthe API call.” |
| 51419 | Invalid Parameters | Enc_request: No record found for given | “No records were found for given search |

<!-- Page 163 -->

|  |  | criteria. | criteria.” |
| --- | --- | --- | --- |
| 51420 | Invalid Parameters | Enc_request:Unabletoprocess request | “Unable to process your request for the API call.” |
| 51421 | Invalid Parameter | API version: Invalid Parameter | “Pleaseuseonlysupportedversionfor the API call.” |
| -1 | Invalid Parameter | Enc_request: Invalid Request | "Ensure that Request parameter isnot invalid." |

-1
Invalid Parameter
Enc_request: Invalid Request
"Ensure that Request parameter isnot
invalid."
**Note: Failure Reason for API call**

| Error_cod e | Short Description | Long Description | Reason /Error_desc | Applicable to |
| --- | --- | --- | --- | --- |
| 51001 | Missing Parameter | Reference Number: Required parameter missing | “Ensurethatthe Reference Number parameter is not blank.” | Confirm, Cancel, Refund, Status, UpdateBillingDetails, UpdateMerchantParams, InvoiceLookUp, |
| 51002 | Invalid Parameter | Reference Number: Invalid Parameter | “Ensurethatthe Reference Number parameter is numeric.” | Confirm, Cancel, Refund, Status, OrderLookUp, UpdateBillingDetails, UpdateMerchantParams, InvoiceLookUp, GetPendingOrders |
| 51003 | Invalid Parameter | Reference Number: Invalid Parameter | “Ensurethatthe Reference Number parameter does notexceed 25 characters.” | Confirm, Cancel, Refund, Status, OrderLookUp, UpdateBillingDetails, UpdateMerchantParams, InvoiceLookUp, GetPendingOrders |
| 51004 | Invalid Parameter | Reference number/Order number: Invalid Parameter | “Ensure that reference number/ordernumberis provided.” | Status |
| 51006 | Missing Parameter | Start/From Date: Required parameter missing | “Ensure that start/fromdateis provided.” | OrderLookUp |
| 51007 | Invalid Parameter | Start/From Date: Invalid Parameter | “Ensure that Start/From date is in dd-mm-yyyy format.” | OrderLookUp |
| 51008 | Invalid Parameter | End/To Date: Invalid Parameter | “Ensure that End/To date is in dd- mm-yyyy format.” | OrderLookUp |

<!-- Page 164 -->

| 51009 | Missing Parameter | Mobile number: Required parameter missing | “Ensure that Mobile Number parameter is not blank.” | GenerateQuickInvoice, GenerateRecurringInvoice , GenerateInvoice, Order Lookup |
| --- | --- | --- | --- | --- |
| 51010 | Invalid Parameter | Mobilenumber:Invalid Parameter | “Ensure that Mobile number | InvoiceLookUp, |
|  |  |  | parameter contains 10 digits.” | GenerateQuickInvoice, GenerateRecurringInvoice , GenerateInvoice, GetPendingOrders, OrderLookUp |
| 51011 | Missing Parameter | Emailid:Required parameter missing | “Ensure that Email id is provided.” | GenerateQuickInvoice, GenerateRecurringInvoice |
| 51012 | Invalid Parameter | Email id: Invalid Parameter | “Ensure that onlyletters, numbers, hyphen, dot, one @ and underscore are provided for Email id parameter.” | InvoiceLookUp, GenerateQuickInvoice, GenerateRecurringInvoice , GetPendingOrders, Order Lookup |
| 51013 | Invalid Parameter | Email id: Invalid Parameter | “Ensure that Email id parameter doesnot exceed 70characters.” | InvoiceLookUp, GenerateQuickInvoice, GenerateRecurringInvoice, GetPendingOrders |
| 51014 | Missing Parameter | Amount: Required parameter missing | “Ensure that Amount parameter is not blank.” | GenerateQuickInvoice, GenerateRecurringInvoice , GenerateInvoice, Refund Order |
| 51015 | Invalid Parameter | Amount: Invalid Parameter | “Ensure that the Amount parameter is in Decimal.” | Confirm, Cancel, Refund, OrderLookUp, InvoiceLookUp, |
| 51017 | Invalid Parameter | Order Number: Invalid Parameter | “Ensure only letters, numbers, hyphen and underscore are provided for Order Number parameter.” | Status, GetPendingOrders, OrderLookUp |
| 51018 | Invalid Parameter | Order Number: Invalid Parameter | “Ensure that Order Number parameter does notexceed 30 characters.” | Status, GetPendingOrders, OrderLookUp |
| 51020 | Invalid Parameter | Minimum amount: Invalid Parameter | "Ensure that Minimum amount parameter has Decimal value." | Order Lookup |
| 51022 | Invalid Parameter | Maximum amount: Invalid Parameter. | "Ensure that Maximum amount parameter ghas decimal value.” | Order Lookup |

<!-- Page 165 -->

| 51023 | Missing Parameters | Page Number: Required Parameter missing | "Ensurethat Page Number parameter isnot blank.” | Order Lookup |
| --- | --- | --- | --- | --- |
| 51024 | Invalid Parameter | Page Number: Invalid Parameter | "Ensure that Page Number parameter is greater than zero." | Order Lookup |
| 51026 | Invalid Parameter | Invoice id: Invalid Parameter | “Ensure that invoice id parameter is numeric.” | Invoice Lookup |
| 51027 | Invalid Parameter | Invoice id: Invalid Parameter | “Ensure that invoice id parameter parameter does not exceed 30 characters.” | Invoice Lookup |
| 51028 | Invalid Parameter | Invoice Number: Invalid Parameter | "Ensure that only letters, number hyphen and underscore are provided for invoice Number parameter." | Order Lookup |
| 51029 | Invalid Parameter | Invoice Number: Invalid Parameter | "Ensure tha Invoice number parameter does notexceed 30 characters." | Invoice Lookup |
| 51031 | Invalid Parameter | Invoice type: Invalid Parameter | “Ensure that values for invoice type parameter are TASK/ITEM.” | InvoiceLookUp, |
| 51032 | Missing Parameter | Currency: Required parameter missing | “Ensurethat Currency parameteris not blank.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51033 | Invalid Parameter | Currency: Invalid Parameter | “EnsurethatCurrencyis assignedto the merchant.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51034 | Missing Parameter | Valid for: Required parameter missing | “Ensure that'validfor' parameteris not blank.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |

<!-- Page 166 -->

| 51035 | Invalid Parameter | Valid for: Invalid Parameter | “Ensure that 'validfor' parameteris Numeric.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| --- | --- | --- | --- | --- |
| 51036 | Invalid Parameter | Valid for: Invalid Parameter | “Ensure that 'valid for' parameter does not exceed 4 digits.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51037 | Missing Parameter | Valid type: Required parameter missing | “Ensure that valid type parameter value is not blank.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51038 | Invalid Parameter | Valid type: Invalid Parameter | “Ensure that values for valid type parameter are days/hours/minutes.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51039 | Missing Parameter | Bill delivery type: Required parameter missing | “Ensure that bill delivery Type parameter is not blank.” | GenerateQuickInvoice |
| 51040 | Invalid Parameter | Bill delivery type: Invalid Parameter | “Ensure that valuefor billdelivery type parameter is SMS/EMAIL.” | GenerateQuickInvoice |
| 51041 | Missing Parameter | Name:Requiredparameter missing | “Ensure that Name parameter is not blank.” | UpdateBillingDetails, GenerateQuickInvoice, GenerateRecurringInvoice |
| 51042 | Invalid Parameter | Name: Invalid Parameter | “Ensure that only letters, space, dot, underscore, hyphen and single apostrophe are provided for Name parameter.” | UpdateBillingDetails, GenerateQuickInvoice, GenerateRecurringInvoice, PendingOrder |
| 51043 | Invalid Parameter | Name: Invalid Parameter | “Ensurethat Name parameter does not exceed 60 characters.” | UpdateBillingDetails, GenerateQuickInvoice, GenerateRecurringInvoice, PendingOrder |
| 51044 | Missing Parameter | Address: Required parameter missing | “Ensurethat Address parameteris not blank.” | UpdateBillingDetails |

<!-- Page 167 -->

| 51045 | Invalid Parameter | Address: Invalid Parameter | “Ensure only letters, numbers, space, hyphen, comma, ampersand, hash, circularbracketsanddotare providedforAddress parameter.” | UpdateBillingDetails |
| --- | --- | --- | --- | --- |
| 51046 | Invalid Parameter | Address: Invalid Parameter | “Ensure that Address parameter doesnot exceed315characters.” | UpdateBillingDetails |
| 51047 | Missing Parameter | City: Required parameter missing | “Ensure that City parameter is not blank.” | Missing Mer_charge_reference_nu mber, UpdateBillingDetails |
| 51048 | Invalid Parameter | City: Invalid Parameter | “Ensure that only numbers, letters, space, comma, hyphen and dot are provided for City parameter.” | UpdateBillingDetails |
| 51049 | Invalid Parameter | City: Invalid Parameter | “Ensurethat City parameter does not exceed 30 characters.” | UpdateBillingDetails |
| 51050 | Missing Parameter | Zip/PINcode:Required parameter missing | “Ensure that Zip/PIN code parameter is not blank.” | UpdateBillingDetails |
| 51051 | Invalid Parameter | Zip/PIN code: Invalid Parameter | “Ensure that only letters, numbers, hyphen and space are provided for Zip/PIN code parameter.” | UpdateBillingDetails |
| 51052 | Invalid Parameter | Zip/PIN code: Invalid Parameter | “Ensure that Zip/PIN code parameter doesnot exceed 15 characters.” | UpdateBillingDetails |
| 51053 | Missing Parameter | State: Required parameter missing | “Ensure that State parameter is not blank.” | UpdateBillingDetails |
| 51054 | Invalid Parameter | State: Invalid Parameter | “Ensure that only letters, hyphen, dot and space are providedfor State parameter.” | UpdateBillingDetails |
| 51055 | Invalid Parameter | State: Invalid Parameter | “Ensurethat State parameter does not exceed 30 characters.” | UpdateBillingDetails |

<!-- Page 168 -->

| 51056 | Missing Parameter | Country : Required parameter missing | “Ensurethat Country Code parameter isnot blank.” | UpdateBillingDetails |
| --- | --- | --- | --- | --- |
| 51057 | Invalid Parameter | Country: Invalid Parameter | “Ensure that only letters andspace are allowed for Country Code parameter.” | UpdateBillingDetails |
| 51058 | Invalid Parameter | Country: Invalid Parameter | “Ensure that Country Code parameter doesnot exceed 30 characters.” | UpdateBillingDetails |
| 51059 | Missing Parameter | Customerid:Required parameter missing | “Ensure that Customer id parameter is not blank.” | GetCustomerPaymentO ptions, DeleteCustomerPayment Option, DeleteCustomer, Customer payment option,Add customer payment option |
| 51060 | Invalid Parameter | Customer id: Invalid Parameter | “Ensure that only letters and number are provided for Customer id parameter.” | GetCustomerPaymentOpti ons,Ad d customer payment option DeleteCustomerPaymentO ption, DeleteCustomer |
| 51061 | Invalid Parameter | Customer id: Invalid Parameter | “Ensure that Customer id parameter does not exceed 25 digits.” | GetCustomerPaymentO ptions, DeleteCustomerPayment Option, DeleteCustomer, Customer payment option,Add customer payment option |
| 51062 | Missing Parameter | Customercardid: Required parameter missing | “Ensure that Customer card id is not blank.” | DeleteCustomerPaymentO ption |
| 51063 | Invalid Parameter | Customer card id: Invalid Parameter | “Ensure that only numbers are provided for Customercardid parameter.” | DeleteCustomerPaymentO ption |
| 51064 | Invalid Parameter | Customer card id: Invalid Parameter | “Ensure that Customer cardid parameter doesnot | DeleteCustomerPaymentO ption |

<!-- Page 169 -->

|  |  |  | exceed 25 characters.” |  |
| --- | --- | --- | --- | --- |
| 51065 | Missing Parameter | Parameter value: Required parameter missing | “Ensurethat Merchant Paramsvalue is notblank.” | UpdateMerchantParams |
| 51066 | Invalid Parameter | Parametervalue: Invalid Parameter | “Ensurethat Alphanumeric, comma, hyphen,backslash anddotare provided for parameters Value.” | UpdateMerchantParams |
| 51067 | Invalid Parameter | Parametervalue: Invalid Parameter | “Ensurethat Parameter valuedoes notexceed 100 characters.” | UpdateMerchantParams |
| 51068 | Missing Parameter | Bill id: Required parameter missing | “Ensure that Billid parameter is not blank.” | UpdateInvoiceReferenceN umber, Updatemerchantreference numbe r |
| 51069 | Invalid Parameter | Bill id: Invalid Parameter | “Ensure that Billid parameter isa numeric value greater than zero.” | UpdateInvoiceReference Number, InvoiceLookUp, Updatemerchantreferenc enumbe r |
| 51070 | Invalid Parameter | Bill id: Invalid Parameter | “Ensure that Bill id parameter does not exceed 25 characters.” | UpdateInvoiceReferenceNu mber, InvoiceLookUp |
| 51071 | Missing Parameter | Merchant reference number: Required parameter missing | “Ensurethatmerchant Reference Number is not blank.” | UpdateInvoiceReferenceNu mber, |
| 51072 | Invalid Parameter | Merchant reference number: Invalid Parameter | “Ensure that only letters, numbers, hyphen and underscore are provided for merchant Reference number parameter.” | UpdateInvoiceReferenceNu mber, GenerateRecurringInvoic e, GenerateInvoice |
| 51073 | Invalid Parameter | Merchant reference number: Invalid Parameter | “Ensure that Merchant reference number parameter does not exceed 25 characters.” | UpdateInvoiceReferenceNu mber, GenerateRecurringInvoic e, GenerateInvoice |
| 51074 | Missing Parameter | SMS Content: Required parameter missing | “Ensurethat SMS Content parameter isnot blank.” | GenerateRecurringInvoice, GenerateInvoice |

<!-- Page 170 -->

| 51075 | Missing Parameter | SMS Content: Required parameter missing | “Ensurethat'Basicplace holders in SMS Content' parameter is not blank.” | GenerateRecurringInvoice, GenerateInvoice |
| --- | --- | --- | --- | --- |
| 51076 | Invalid Parameter | SMS Content: Invalid Parameter | “Ensurethat SMScontent parameter does not exceed 500 Characters.” | GenerateRecurringInvoice, GenerateInvoice |
| 51077 | Missing Parameter | Emailsubject:Required parameter missing | “Ensurethat EmailSubject parameter isnot blank.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51078 | Invalid Parameter | Email subject: Invalid Parameter | “Ensure that Email subject parameter contains only letters, numbers,hyphens, dot, spaceand underscores.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51079 | Invalid Parameter | Email subject: Invalid Parameter | “Ensure that Email subject parameter does notexceed 100 characters.” | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51080 | Invalid Parameter | Email Description: Invalid Parameter | “Ensure that Email Description parameter contains only letters, numbers,hyphen, dot,circular brackets, space, comma, underscore, hash and ampersand.” | GenerateRecurringInvoice, GenerateInvoice |
| 51081 | Invalid Parameter | Email Description: Invalid Parameter | "Ensure that Email Description parameter doesnot exceed 100 characters." | Generate QuickInvoice |
| 51082 | Invalid Parameter | File List: Invalid Parameter | “Ensure that only onefile isattached in quick invoice.” | GenerateQuickInvoice |
| 51083 | Invalid Parameter | File List: Invalid Parameter | “Ensurethat Attached File extension is(doc,jpg,jpeg, docx,pdf,png).” | GenerateQuickInvoice |
| 51084 | Invalid Parameter | File List: Invalid Parameter | “Ensurethat File size does not exceed 1MB.” | GenerateQuickInvoice |

<!-- Page 171 -->

| 51085 | Missing Parameter | Refund Reference Number: Required parameter missing | “Ensure that 'refund reference no' parameter is not blank.” | Refund |
| --- | --- | --- | --- | --- |
| 51086 | Invalid Parameter | Refund Reference Number: Invalid Parameter | “Ensure that Only letters and numbers are provided for refund Reference Number parameter.” | Refund |
| 51087 | Invalid Parameter | Refund reference number: Invalid Parameter | "Ensure that Refund reference number parameter does not exceed 100 characters." | Refund orders |
| 51088 | Missing Parameter | Frequency: Required parameter missing | “Ensurethat Frequency parameteris not blank.” | Generate Recurring Invoice |
| 51089 | Invalid Parameter | Frequency : Invalid Parameter | “Ensure that values for frequency parameter are only Daily/Monthly/Quarterly/ Yearly.” | Generate Recurring Invoice |
| 51118 | Missing Parameter | Occurrences: Required parameter missing | “EnsurethatOccurrences parameter is notblank.” | Generate Recurring Invoice |
| 51119 | Invalid Parameter | Occurrences: Invalid Parameter | “EnsurethatOccurrences parameter is Numeric.” | Generate Recurring Invoice |
| 51120 | Invalid Parameter | Occurrences: Invalid Parameter | “EnsurethatOccurrences parameter does not exceed 3 digits.” | Generate Recurring Invoice |
| 51121 | Invalid Parameter | Occurrences: Invalid Parameter | “Adding occurrences is only applicable for recurring invoice.” | Generate Recurring Invoice |
| 51122 | Missing Parameter | Task name: Required parameter missing | “Ensure that task name parameter is not blank.” | Generate Recurring Invoice GenerateInvoice |
| 51123 | Invalid Parameter | Task name: Invalid Parameter | “Ensurethatonly letters, space, underscore and hyphenare providedfortaskname parameter.” | Generate Recurring Invoice GenerateInvoice |
| 51124 | Invalid Parameter | Task name: Invalid Parameter | “Ensurethat Taskname parameter does not exceed 30Characters.” | Generate Recurring Invoice GenerateInvoice |

<!-- Page 172 -->

| 51125 | Missing Parameter | TaskNote:Required parameter missing | "Ensurethat Task Note parameteris not blank." | Generate Invoice |
| --- | --- | --- | --- | --- |
| 51126 | Invalid Parameter | Task note: Invalid Parameter | “Ensurethat Tasknote parameter contains only letters, numbers, hyphen, dot, circular brackets, space,comma, underscore,hash and ampersand.” | Generate Recurring Invoice GenerateInvoice |
| 51127 | Invalid Parameter | Task Note: Invalid Parameter | "Ensurethat Task Note parameter does not exceed60characters." | Generate Invoice |
| 51128 | Missing Parameter | Taskrate:Required parameter missing | “Ensure that task rate parameter is not blank.” | Generate Recurring Invoice GenerateInvoice |
| 51129 | Invalid Parameter | Task rate: Invalid Parameter | “Ensure that task rate parameter is decimal.” | Generate Recurring Invoice GenerateInvoice |
| 51130 | Missing Parameter | Taskhour:Required parameter missing | “Ensure that task hour parameter is not blank.” | Generate Recurring Invoice GenerateInvoice |
| 51131 | Invalid Parameter | Task hour: Invalid Parameter | “Ensure that task hour parameter is numeric.” | Generate Recurring Invoice GenerateInvoice |
| 51132 | Invalid Parameter | Task hour: Invalid Parameter | “Ensurethat task hour value does not exceed 4 digits.” | Generate Recurring Invoice GenerateInvoice |
| 51133 | Missing Parameter | Item name: Required parameter missing | “Ensure that item name parameter is not blank.” | Generate Recurring Invoice GenerateInvoice |
| 51134 | Invalid Parameter | Item name: Invalid Parameter | “Ensurethatonly letters, space, underscore and hyphen are providedforitemname parameter.” | Generate Recurring Invoice GenerateInvoice |
| 51135 | Invalid Parameter | Item name: Invalid Parameter | “Ensure that Item name parameter does not exceed 30 characters.” | Generate Recurring Invoice GenerateInvoice |
| 51136 | Missing Parameter | Item description: Required parameter missing | “Ensure that item description parameter is not blank.” | Generate Recurring Invoice GenerateInvoice |

<!-- Page 173 -->

| 51137 | Invalid Parameter | Item description: Invalid Parameter | “Ensure that Item description parameter contains only letters, numbers, hyphen,dot,circular brackets,space, comma, underscore, hash and ampersand.” | Generate Recurring Invoice GenerateInvoice |
| --- | --- | --- | --- | --- |
| 51138 | Invalid Parameter | Item description: Invalid Parameter | “Ensure that Item description parameter doesnot exceed 60 characters.” | Generate Recurring Invoice GenerateInvoice |
| 51139 | Missing Parameter | Item Quantity: Required parameter missing | “Ensure that the itemquantity parameter is not blank.” | Generate Recurring Invoice GenerateInvoice |
| 51140 | Invalid Parameter | Item Quantity: Invalid Parameter | “Ensure thatthe Item Quantity parameter is numeric.” | Generate Recurring Invoice GenerateInvoice |
| 51141 | Invalid Parameter | Item Quantity: Invalid Parameter | “Ensure that the Item Quantity parameter does not exceed 3 digits.” | Generate Recurring Invoice GenerateInvoice |
| 51142 | Missing Parameter | Unit cost: Required parameter missing | “Ensure thatunitcostof itemisnot blank.” | Generate Recurring Invoice GenerateInvoice |
| 51143 | Invalid Parameter | Unit cost: Invalid Parameter | “Ensurethatthe Unit costofitem parameter is a Decimal Number.” | Generate Recurring Invoice GenerateInvoice |
| 51144 | Invalid Parameter | Termsand Conditions:Invalid Parameter | “Ensure that Only letters, numbers, hyphen,dot, circularbracketsand ampersandare provided for Terms and Condition parameter.” | Generate Recurring Invoice GenerateInvoice |
| 51145 | Invalid Parameter | Termsand Conditions:Invalid Parameter | “EnsurethatTermsand Conditions parameter doesnotexceed500 characters.” | Generate Recurring Invoice GenerateInvoice |
| 51146 | Invalid Parameter | Due date: Invalid Parameter | “Ensure that Due date parameter is Numeric.” | Generate Recurring Invoice GenerateInvoice |
| 51147 | Invalid Parameter | Due date: Invalid Parameter | “Ensure that Due date parameter does not exceed 3 digits” | Generate Recurring Invoice GenerateInvoice |

<!-- Page 174 -->

| 51148 | Invalid Parameter | Due Date: Invalid Parameter | “Ensure that due date parameter is provided when late payment fees is present.” | Generate Recurring Invoice GenerateInvoice |
| --- | --- | --- | --- | --- |
| 51149 | Invalid Parameter | Latepayment fees:Invalid Parameter | “Ensure that late payment fees parameter is provided when due date is present.” | Generate Recurring Invoice GenerateInvoice |
| 51150 | Invalid Parameter | Discount_if_paid_within_du e_date: Invalid Parameter | “Ensure that value for discount_if_paid_within_ due_date parameteris notgreaterthandue date.” | Generate Recurring Invoice GenerateInvoice |
| 51151 | Missing Parameter | DiscountType:Required parameter missing | "Ensure that discount type parameter is provided when discount value is present." | Generate Recurring Invoice GenerateInvoice |
| 51152 | Missing Parameter | Discount value: Required parameter missing | "Ensure that discount value parameter is provided when discount type is present." | Generate Recurring Invoice GenerateInvoice |
| 51153 | Missing Parameter | Latepaymentfeestype: Required parameter missing | "Ensure that late payment fees type parameter is provided when late payment fees is present." | Generate Recurring Invoice GenerateInvoice |
| 51154 | Missing Parameter | Latepaymentfees: Required parameter missing | "Ensure that late payment fees parameter is provided when late payment fees type is present." | Generate Recurring Invoice GenerateInvoice |
| 51155 | Invalid Parameter | Discountvalue:Invalid Parameter | "Ensurethat Discount value parameter ranges are: For percentage (1.00 - 99.99) For flat (1.00-99999.99)" | Generate Recurring Invoice GenerateInvoice |
| 51156 | Invalid Parameter | Latepayment fees:Invalid Parameter | "Ensurethat Late paymentfees parameter ranges | Generate Recurring Invoice Generate Invoice |

<!-- Page 175 -->

|  |  |  | are: For percentage (1.00 -99.99) For flat (1.00- 99999.99)" |  |
| --- | --- | --- | --- | --- |
| 51157 | Invalid Parameter | Tax List:Invalid Parameter | “Ensure thatthere are not more thantwo taxes for onetask.” | Generate Recurring Invoice Generate Invoice |
| 51158 | Invalid Parameter | Item/Task List: Invalid Parameter | “Ensure thatatleastone task/item is added.” | Generate Recurring Invoice GenerateInvoice |
| 51159 | Invalid Parameter | Task List: Invalid Parameter | “Ensure thatthesame task is not added twice.” | Generate Recurring Invoice GenerateInvoice |
| 51160 | Invalid Parameter | Item List: Invalid Parameter | “Ensure that the same item isnot added twice.” | Generate Recurring Invoice GenerateInvoice |
| 51161 | Invalid Parameter | Discountvalue:Invalid Parameter | “Ensure that the Discount value parameter is Decimal.” | Generate Recurring Invoice GenerateInvoice |
| 51162 | Invalid Parameter | Latepayment fees:Invalid Parameter | “Ensurethat Late paymentfees parameter is Decimal.” | Generate Recurring Invoice GenerateInvoice |
| 51163 | Invalid Parameter | Discount type: Invalid Parameter | “Ensurethat values for Discount type parameterare Perc/Flat.” | Generate Recurring Invoice GenerateInvoice |
| 51164 | Invalid Parameter | Late paymentfees type: Invalid Parameter | “Ensure that values for Late payment fees type parameter are Perc/Flat.” | Generate Recurring Invoice GenerateInvoice |
| 51165 | Invalid Parameter | Discountifpaidwithin duedate: Invalid Parameter | “Ensure that Discount if paidwithin duedate parameterisNumeric.” | Generate Recurring Invoice GenerateInvoice |
| 51166 | Invalid Parameter | Discountifpaidwithin duedate: Invalid Parameter | “EnsurethatDiscountif paidwithin due date parameter doesnotexceed 3 digits.” | Generate Recurring Invoice GenerateInvoice |
| 51167 | Invalid Parameter | Tax List: Invalid Parameter | “Ensure that the same tax isnot addedtwice forthe same task/item.” | Generate Recurring Invoice GenerateInvoice |
| 51168 | Invalid Parameter | Tax List: Invalid Parameter | "Ensure that there are not more | Generate Invoice |

<!-- Page 176 -->

|  |  |  | than two taxes applicable for one item." |  |
| --- | --- | --- | --- | --- |
| 51169 | Invalid Parameter | Due Date: Invalid Parameter | "Ensure that Duedate cannot be greater than valid forparameter." | Generate Recurring Invoice |
| 51205 | Invalid Parameter | Order List: Invalid Parameter | “Please provide at least one order list.” | Confirm, Cancel, |
| 51206 | Invalid Parameter | Order List: Invalid Parameter | “EnsurethatReference Number parameter is notrepeated.” | Confirm, Cancel, |
| 51207 | Invalid Parameter | Start Date: Invalid Parameter | “Ensure that Start date is greater than or equal to current date.” | Generate Recurring Invoice |
| 51208 | Invalid Parameter | Start Date: Invalid Parameter | “Adding start date is only applicable for recurring invoice.” | Generate Recurring Invoice |
| 51209 | Invalid Parameter | Frequency: Invalid Parameter | “Addingfrequencyisonly applicable for recurring invoice.” | Generate Recurring Invoice |
| 51210 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensurethatthe Advance Settings option is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51211 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensure that SMS content is provided if the same is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51212 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensure that the Adding Task option is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51213 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensure that theAdding Item option is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51214 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensurethatthe ChangingInvoice Validityoptionis enabledunder Invoice Settings." | Generate Recurring Invoice |
| 51215 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensure that Changing pre- | Generate Recurring Invoice |

<!-- Page 177 -->

|  |  |  | populated values for item: {e.g. abc} withunitcost{e.g. 1.23}isenabled under InvoiceSettings." | GenerateInvoice |
| --- | --- | --- | --- | --- |
| 51216 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensure that Changing pre- populatedvalues for task {e.g. def} withunit rate{e.g.1.00}isenabled under InvoiceSettings." | Generate Recurring Invoice, GenerateInvoice |
| 51217 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensure that the number of hours/rateamountfor taskisvalid." | Generate Recurring Invoice, GenerateInvoice |
| 51218 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensure that unit cost amount/quantityforitem isvalid." | Generate Recurring Invoice, GenerateInvoice |
| 51219 | Invalid Parameters | InvoiceSetting:Invalid Parameter | "Ensure that Quick Invoice optionis enabled under InvoiceSettings." | Generate Recurring Invoice, GenerateInvoice |
| 51226 | Invalid Parameters | SMS_Content: Invalid Parameter | "Ensure that Basic placeholders should not repeated in SMS content." | Generate Recurring Invoice, GenerateInvoice |
| 51174 | Missing Parameter | Cardexpireddate: Required parameter missing | "Ensurethat Card expireddate parameter is not blank." | Add customer payment option |
| 51175 | Invalid Parameter | Cardexpired date:Invalid Parameter | "Ensure that Card expired date parameter isinMM/yyyyformat." | Add customer payment option |
| 51177 | Missing Parameter | CardNumber:Required parameter missing | "Ensurethat Card Number parameter isnot blank." | Add customer payment option |
| 51178 | Invalid Parameter | Card Number : Invalid Parameter | "Ensure that Card Number parameter is Numeric only." | Add customer payment option |
| 51179 | Invalid Parameter | Card Number: Invalid Parameter | "Ensurethat Card Number parameterisnot invalid." | Add customer payment option |
| 51180 | Missing Parameter | Card Name: Required parameter missing | "Ensurethat Card Name parameter is notblank." | Add customer payment option |

<!-- Page 178 -->

| 51181 | Invalid Parameter | Card Name: Invalid Parameter | "Ensurethat Card Name parameter is notinvalid." | Add customer payment option |
| --- | --- | --- | --- | --- |
| 51182 | Invalid Parameter | Name on card: Invalid Parameter | "Ensure that onlyletters andspace are provided for name on card parameter." | Add customer payment option |
| 51183 | Invalid Parameter | Name on card: Invalid Parameter | "Ensure that Name on card parameter does notexceed 30 characters." | Add customer payment option |
| 51227 | Missing Parameters | Issuer Bank: Required parameter missing | “Ensurethat Issuerbank nameis not blank.” | Add customer payment option |
| 51228 | Invalid Parameters | Issuer Bank: Invalid parameter | "Ensure that onlyletters andspace are provided for issuer bank parameter." | Add customer payment option |
| 51229 | Missing Parameters | PamentOptionType: Required parameter missing | "Ensure that payment option type is not blank." | Add customer payment option |
| 51230 | Invalid Parameters | PaymentOption Type:Invalid parameter | "Ensure that payment option type is OPTCRDC/OPTDBCRD." | Add customer payment option |
| 51231 | Missing Parameters | Nameoncard: Required parameter missing | "Ensure thatname on card is not blank" | Add customer payment option |
| 51232 | Missing Parameters | Cardtype:Required parameter missing | "Ensure thatname on cardtypeis not blank" | Add customer payment option |
| 51233 | Invalid Parameters | Card type: Invalid parameter | "Ensure that name on card type is CRDC/DBCRD" | Add customer payment option |
| 51301 | Invalid Parameter | Order List: Invalid Parameter | "Order is already confirmed” | Confirm |
| 51302 | Invalid Parameter | Order List: Invalid Parameter | "Order is already Cancelled:” | Cancel |
| 51303 | Invalid Parameter | Order List: Invalid Parameter | “Invalid order status:” | Confirm, Cancel, |

<!-- Page 179 -->

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 51304 | Invalid Parameter | Order List: Invalid Parameter | “Invalid order/tracking id :” | Confirm, Cancel, |
| 51305 | Invalid Parameter | Order List: Invalid Parameter | “Pending Risk Mitigation:” | Confirm, Cancel, |
| 51306 | Invalid Parameter | Order List: Invalid Parameter | “Order Amt Mismatch:” | Confirm, Cancel, |
| 51307 | Invalid Parameter | Order List: Invalid Parameter | “Pending risk mitigation.” | Confirm, Cancel |
| 51308 | Invalid Parameter | Order List: Invalid Parameter | “Norecord was foundfor thegiven criteria.” | Refund, Status, OrderLookUp, |
| 51309 | Invalid Parameter | Reference number: Invalid Parameter | “Ensure that merchant reference number parameter is not repeated.” | Refund |
| 51310 | Invalid Parameter | Reference number: Invalid Parameter | “Refund not allowed.” | Refund |
| 51311 | Invalid Parameter | Reference number: Invalid Parameter | “Multiplerefundsare notallowed for the gateway.” | Refund |
| 51312 | Invalid Parameter | Reference number: Invalid Parameter | "Cannot initiate refund request for the given order." | Refund |
| 51313 | Invalid Parameter | Order List: Invalid Parameter | “No records found.” | Order Status, OrderLookUp, |
| 51314 | Invalid Parameter | Reference number: Invalid Parameter | “Refund limit exceeds.” | Refund |
| 51315 | Invalid Parameter | Reference number: Invalid Parameter | “This is adisputedorder. You can refund only up to {Currency}{Refund amount limit}.” | Refund, |
| 51316 | Invalid Parameter | Reference number: Invalid Parameter | “Ensurethat Reg Idor Reference No parameters are notinvalid.” | UpdateBillingDetails, |
| 51317 | Invalid Parameter | Reference number: Invalid | “Recordalreadyupdatedor Invalid | UpdateBillingDetails |

<!-- Page 180 -->

|  |  | Parameter | Order Status.” |  |
| --- | --- | --- | --- | --- |
| 51318 | Invalid Parameter | Reference number: Invalid Parameter | “Ensurethat Order Status OR Order Type parametersarenot invalid.” | UpdateBillingDetails |
| 51319 | Invalid Parameter | bill_id: Invalid Parameter | “Ensure that bill_id parameter isnot invalid.” | UpdateInvoiceReference Number |
| 51320 | Invalid Parameter | Bill Merchant Reference No:Invalid Parameter | “Bill Merchant Reference No parameter already exists.” | UpdateInvoiceReference Number |
| 51321 | Invalid Parameter | Reg ID: Invalid Parameter | “Ensurethat Reg ID parameter is not invalid.” | UpdateMerchantParams |
| 51322 | Invalid Parameter | Reference number: Invalid Parameter | "Ensure that reference number parameter is not invalid." | UpdateMerchantParams |
| 51323 | Invalid Parameter | Tax List: Invalid Parameter | "Ensure that Taxis configured for the merchant." | GenerateInvoice ,GenerateRecurringI nvoice |
| 51324 | Invalid Parameter | Tax List: Invalid Parameter | “Ensurethat Taxvalue matches with the given Tax name.” | GenerateInvoice ,GenerateRecurringI nvoice |
| 51325 | Missing Parameter | Customerid:Required parameter missing | “Ensurethat Customer parameteris present.” | DeleteCustomer, |
| 51326 | Invalid Parameter | Currency: Invalid Parameter | "EnsurethatCurrencyis assignedto the merchant." | GenerateInvoice, GenerateRecurringInvoice, GenerateQuickInvoice |
| 51327 | Invalid Parameter | Customer id: Invalid Parameter | "Ensure that the merchant is not invalid." | OrderLookup, Delete Customer |
| 51328 | Invalid Parameter | Reference number: Invalid Parameter | "Multiple refunds not allowed." | RefundOrder |
| 51336 | Invalid Parameter | CustomerCard Id:Invalid Parameter | "Card Not Present." | DeleteCustomer paymentoption |
| 51337 | Invalid Parameters | Customer Id:Invalid parameters | “Card Alreday Exists” | Add Customer payment option |

“Card Alreday Exists”
Add Customer payment
option

