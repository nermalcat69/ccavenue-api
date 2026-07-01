---
title: Error Codes
---

# Error Codes

Note: Error Message when API status is "1". The table below combines the general API status error messages with the per-API failure reason codes; rows without a specific "Applicable APIs" value in the source are left blank in that column.

| Error Code | Short Description | Long Description | Message | Applicable APIs |
| --- | --- | --- | --- | --- |
| 51401 | Missing Parameter | Request_type: Required Parameter is Missing | "Ensure that request_type parameter is not blank." |  |
| 51402 | Missing Parameter | Command: Required parameter missing | "Ensure that Command parameter is not blank." |  |
| 51403 | Missing Parameter | Access_code: Required Parameter is Missing | "Ensure that access_code parameter is not blank." |  |
| 51404 | Invalid Parameter | Request Type: Invalid Parameter | "Ensure that Request Type parameter value is only XML/ JSON/STRING." |  |
| 51405 | Invalid Parameter | Response Type: Invalid Parameter | "Ensure that Response Type parameter value is only XML/ JSON/STRING." |  |
| 51407 | Invalid Parameter | Access_code: Invalid Parameter | "You are not allowed to perform this operation." |  |
| 51408 | Missing Parameter | Enc_request: Required parameter missing | "Ensure that enc_request parameter is not blank." |  |
| 51410 | Invalid Parameter | Command: Invalid Parameter | "Ensure that the command name is not invalid. Please refer API document for valid command." |  |
| 51411 | Invalid Parameter | JSON request format: Invalid Parameter format | "Ensure that the JSON request format is not invalid. Please refer API document for the API call." |  |
| 51412 | Invalid Parameter | XML request format: Invalid Parameter format | "Ensure that XML request format is not invalid. Please refer API document for the API call." |  |
| 51413 | Invalid Parameter | STRING request format: Invalid Parameter format | "Ensure that STRING request format is not invalid. Please refer API document for the API call." |  |
| 51419 | Invalid Parameters | Enc_request: No record found for given criteria. | "No records were found for given search criteria." |  |
| 51420 | Invalid Parameters | Enc_request: Unable to process request | "Unable to process your request for the API call." |  |
| 51421 | Invalid Parameter | API version: Invalid Parameter | "Please use only supported version for the API call." |  |
| -1 | Invalid Parameter | Enc_request: Invalid Request | "Ensure that Request parameter is not invalid." |  |
| 51001 | Missing Parameter | Reference Number: Required parameter missing | "Ensure that the Reference Number parameter is not blank." | Confirm, Cancel, Refund, Status, UpdateBillingDetails, UpdateMerchantParams, InvoiceLookUp, |
| 51002 | Invalid Parameter | Reference Number: Invalid Parameter | "Ensure that the Reference Number parameter is numeric." | Confirm, Cancel, Refund, Status, OrderLookUp, UpdateBillingDetails, UpdateMerchantParams, InvoiceLookUp, GetPendingOrders |
| 51003 | Invalid Parameter | Reference Number: Invalid Parameter | "Ensure that the Reference Number parameter does not exceed 25 characters." | Confirm, Cancel, Refund, Status, OrderLookUp, UpdateBillingDetails, UpdateMerchantParams, InvoiceLookUp, GetPendingOrders |
| 51004 | Invalid Parameter | Reference number/Order number: Invalid Parameter | "Ensure that reference number/order number is provided." | Status |
| 51006 | Missing Parameter | Start/From Date: Required parameter missing | "Ensure that start/from date is provided." | OrderLookUp |
| 51007 | Invalid Parameter | Start/From Date: Invalid Parameter | "Ensure that Start/From date is in dd-mm-yyyy format." | OrderLookUp |
| 51008 | Invalid Parameter | End/To Date: Invalid Parameter | "Ensure that End/To date is in dd-mm-yyyy format." | OrderLookUp |
| 51009 | Missing Parameter | Mobile number: Required parameter missing | "Ensure that Mobile Number parameter is not blank." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice, Order Lookup |
| 51010 | Invalid Parameter | Mobile number: Invalid Parameter | "Ensure that Mobile number parameter contains 10 digits." | InvoiceLookUp, GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice, GetPendingOrders, OrderLookUp |
| 51011 | Missing Parameter | Email id: Required parameter missing | "Ensure that Email id is provided." | GenerateQuickInvoice, GenerateRecurringInvoice |
| 51012 | Invalid Parameter | Email id: Invalid Parameter | "Ensure that only letters, numbers, hyphen, dot, one @ and underscore are provided for Email id parameter." | InvoiceLookUp, GenerateQuickInvoice, GenerateRecurringInvoice, GetPendingOrders, Order Lookup |
| 51013 | Invalid Parameter | Email id: Invalid Parameter | "Ensure that Email id parameter does not exceed 70 characters." | InvoiceLookUp, GenerateQuickInvoice, GenerateRecurringInvoice, GetPendingOrders |
| 51014 | Missing Parameter | Amount: Required parameter missing | "Ensure that Amount parameter is not blank." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice, Refund Order |
| 51015 | Invalid Parameter | Amount: Invalid Parameter | "Ensure that the Amount parameter is in Decimal." | Confirm, Cancel, Refund, OrderLookUp, InvoiceLookUp, |
| 51017 | Invalid Parameter | Order Number: Invalid Parameter | "Ensure only letters, numbers, hyphen and underscore are provided for Order Number parameter." | Status, GetPendingOrders, OrderLookUp |
| 51018 | Invalid Parameter | Order Number: Invalid Parameter | "Ensure that Order Number parameter does not exceed 30 characters." | Status, GetPendingOrders, OrderLookUp |
| 51020 | Invalid Parameter | Minimum amount: Invalid Parameter | "Ensure that Minimum amount parameter has Decimal value." | Order Lookup |
| 51022 | Invalid Parameter | Maximum amount: Invalid Parameter. | "Ensure that Maximum amount parameter has decimal value." | Order Lookup |
| 51023 | Missing Parameters | Page Number: Required Parameter missing | "Ensure that Page Number parameter is not blank." | Order Lookup |
| 51024 | Invalid Parameter | Page Number: Invalid Parameter | "Ensure that Page Number parameter is greater than zero." | Order Lookup |
| 51026 | Invalid Parameter | Invoice id: Invalid Parameter | "Ensure that invoice id parameter is numeric." | Invoice Lookup |
| 51027 | Invalid Parameter | Invoice id: Invalid Parameter | "Ensure that invoice id parameter does not exceed 30 characters." | Invoice Lookup |
| 51028 | Invalid Parameter | Invoice Number: Invalid Parameter | "Ensure that only letters, number hyphen and underscore are provided for invoice Number parameter." | Order Lookup |
| 51029 | Invalid Parameter | Invoice Number: Invalid Parameter | "Ensure that Invoice number parameter does not exceed 30 characters." | Invoice Lookup |
| 51031 | Invalid Parameter | Invoice type: Invalid Parameter | "Ensure that values for invoice type parameter are TASK/ITEM." | InvoiceLookUp, |
| 51032 | Missing Parameter | Currency: Required parameter missing | "Ensure that Currency parameter is not blank." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51033 | Invalid Parameter | Currency: Invalid Parameter | "Ensure that Currency is assigned to the merchant." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51034 | Missing Parameter | Valid for: Required parameter missing | "Ensure that 'valid for' parameter is not blank." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51035 | Invalid Parameter | Valid for: Invalid Parameter | "Ensure that 'valid for' parameter is Numeric." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51036 | Invalid Parameter | Valid for: Invalid Parameter | "Ensure that 'valid for' parameter does not exceed 4 digits." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51037 | Missing Parameter | Valid type: Required parameter missing | "Ensure that valid type parameter value is not blank." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51038 | Invalid Parameter | Valid type: Invalid Parameter | "Ensure that values for valid type parameter are days/hours/minutes." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51039 | Missing Parameter | Bill delivery type: Required parameter missing | "Ensure that bill delivery Type parameter is not blank." | GenerateQuickInvoice |
| 51040 | Invalid Parameter | Bill delivery type: Invalid Parameter | "Ensure that value for bill delivery type parameter is SMS/EMAIL." | GenerateQuickInvoice |
| 51041 | Missing Parameter | Name: Required parameter missing | "Ensure that Name parameter is not blank." | UpdateBillingDetails, GenerateQuickInvoice, GenerateRecurringInvoice |
| 51042 | Invalid Parameter | Name: Invalid Parameter | "Ensure that only letters, space, dot, underscore, hyphen and single apostrophe are provided for Name parameter." | UpdateBillingDetails, GenerateQuickInvoice, GenerateRecurringInvoice, PendingOrder |
| 51043 | Invalid Parameter | Name: Invalid Parameter | "Ensure that Name parameter does not exceed 60 characters." | UpdateBillingDetails, GenerateQuickInvoice, GenerateRecurringInvoice, PendingOrder |
| 51044 | Missing Parameter | Address: Required parameter missing | "Ensure that Address parameter is not blank." | UpdateBillingDetails |
| 51045 | Invalid Parameter | Address: Invalid Parameter | "Ensure only letters, numbers, space, hyphen, comma, ampersand, hash, circular brackets and dot are provided for Address parameter." | UpdateBillingDetails |
| 51046 | Invalid Parameter | Address: Invalid Parameter | "Ensure that Address parameter does not exceed 315 characters." | UpdateBillingDetails |
| 51047 | Missing Parameter | City: Required parameter missing | "Ensure that City parameter is not blank." | Missing Mer_charge_reference_number, UpdateBillingDetails |
| 51048 | Invalid Parameter | City: Invalid Parameter | "Ensure that only numbers, letters, space, comma, hyphen and dot are provided for City parameter." | UpdateBillingDetails |
| 51049 | Invalid Parameter | City: Invalid Parameter | "Ensure that City parameter does not exceed 30 characters." | UpdateBillingDetails |
| 51050 | Missing Parameter | Zip/PIN code: Required parameter missing | "Ensure that Zip/PIN code parameter is not blank." | UpdateBillingDetails |
| 51051 | Invalid Parameter | Zip/PIN code: Invalid Parameter | "Ensure that only letters, numbers, hyphen and space are provided for Zip/PIN code parameter." | UpdateBillingDetails |
| 51052 | Invalid Parameter | Zip/PIN code: Invalid Parameter | "Ensure that Zip/PIN code parameter does not exceed 15 characters." | UpdateBillingDetails |
| 51053 | Missing Parameter | State: Required parameter missing | "Ensure that State parameter is not blank." | UpdateBillingDetails |
| 51054 | Invalid Parameter | State: Invalid Parameter | "Ensure that only letters, hyphen, dot and space are provided for State parameter." | UpdateBillingDetails |
| 51055 | Invalid Parameter | State: Invalid Parameter | "Ensure that State parameter does not exceed 30 characters." | UpdateBillingDetails |
| 51056 | Missing Parameter | Country: Required parameter missing | "Ensure that Country Code parameter is not blank." | UpdateBillingDetails |
| 51057 | Invalid Parameter | Country: Invalid Parameter | "Ensure that only letters and space are allowed for Country Code parameter." | UpdateBillingDetails |
| 51058 | Invalid Parameter | Country: Invalid Parameter | "Ensure that Country Code parameter does not exceed 30 characters." | UpdateBillingDetails |
| 51059 | Missing Parameter | Customer id: Required parameter missing | "Ensure that Customer id parameter is not blank." | GetCustomerPaymentOptions, DeleteCustomerPaymentOption, DeleteCustomer, Customer payment option, Add customer payment option |
| 51060 | Invalid Parameter | Customer id: Invalid Parameter | "Ensure that only letters and number are provided for Customer id parameter." | GetCustomerPaymentOptions, Add customer payment option, DeleteCustomerPaymentOption, DeleteCustomer |
| 51061 | Invalid Parameter | Customer id: Invalid Parameter | "Ensure that Customer id parameter does not exceed 25 digits." | GetCustomerPaymentOptions, DeleteCustomerPaymentOption, DeleteCustomer, Customer payment option, Add customer payment option |
| 51062 | Missing Parameter | Customer card id: Required parameter missing | "Ensure that Customer card id is not blank." | DeleteCustomerPaymentOption |
| 51063 | Invalid Parameter | Customer card id: Invalid Parameter | "Ensure that only numbers are provided for Customer card id parameter." | DeleteCustomerPaymentOption |
| 51064 | Invalid Parameter | Customer card id: Invalid Parameter | "Ensure that Customer card id parameter does not exceed 25 characters." | DeleteCustomerPaymentOption |
| 51065 | Missing Parameter | Parameter value: Required parameter missing | "Ensure that Merchant Params value is not blank." | UpdateMerchantParams |
| 51066 | Invalid Parameter | Parameter value: Invalid Parameter | "Ensure that Alphanumeric, comma, hyphen, backslash and dot are provided for parameters Value." | UpdateMerchantParams |
| 51067 | Invalid Parameter | Parameter value: Invalid Parameter | "Ensure that Parameter value does not exceed 100 characters." | UpdateMerchantParams |
| 51068 | Missing Parameter | Bill id: Required parameter missing | "Ensure that Bill id parameter is not blank." | UpdateInvoiceReferenceNumber, Update merchant reference number |
| 51069 | Invalid Parameter | Bill id: Invalid Parameter | "Ensure that Bill id parameter is a numeric value greater than zero." | UpdateInvoiceReferenceNumber, InvoiceLookUp, Update merchant reference number |
| 51070 | Invalid Parameter | Bill id: Invalid Parameter | "Ensure that Bill id parameter does not exceed 25 characters." | UpdateInvoiceReferenceNumber, InvoiceLookUp |
| 51071 | Missing Parameter | Merchant reference number: Required parameter missing | "Ensure that merchant Reference Number is not blank." | UpdateInvoiceReferenceNumber, |
| 51072 | Invalid Parameter | Merchant reference number: Invalid Parameter | "Ensure that only letters, numbers, hyphen and underscore are provided for merchant Reference number parameter." | UpdateInvoiceReferenceNumber, GenerateRecurringInvoice, GenerateInvoice |
| 51073 | Invalid Parameter | Merchant reference number: Invalid Parameter | "Ensure that Merchant reference number parameter does not exceed 25 characters." | UpdateInvoiceReferenceNumber, GenerateRecurringInvoice, GenerateInvoice |
| 51074 | Missing Parameter | SMS Content: Required parameter missing | "Ensure that SMS Content parameter is not blank." | GenerateRecurringInvoice, GenerateInvoice |
| 51075 | Missing Parameter | SMS Content: Required parameter missing | "Ensure that 'Basic place holders in SMS Content' parameter is not blank." | GenerateRecurringInvoice, GenerateInvoice |
| 51076 | Invalid Parameter | SMS Content: Invalid Parameter | "Ensure that SMS content parameter does not exceed 500 Characters." | GenerateRecurringInvoice, GenerateInvoice |
| 51077 | Missing Parameter | Email subject: Required parameter missing | "Ensure that Email Subject parameter is not blank." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51078 | Invalid Parameter | Email subject: Invalid Parameter | "Ensure that Email subject parameter contains only letters, numbers, hyphens, dot, space and underscores." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51079 | Invalid Parameter | Email subject: Invalid Parameter | "Ensure that Email subject parameter does not exceed 100 characters." | GenerateQuickInvoice, GenerateRecurringInvoice, GenerateInvoice |
| 51080 | Invalid Parameter | Email Description: Invalid Parameter | "Ensure that Email Description parameter contains only letters, numbers, hyphen, dot, circular brackets, space, comma, underscore, hash and ampersand." | GenerateRecurringInvoice, GenerateInvoice |
| 51081 | Invalid Parameter | Email Description: Invalid Parameter | "Ensure that Email Description parameter does not exceed 100 characters." | Generate QuickInvoice |
| 51082 | Invalid Parameter | File List: Invalid Parameter | "Ensure that only one file is attached in quick invoice." | GenerateQuickInvoice |
| 51083 | Invalid Parameter | File List: Invalid Parameter | "Ensure that Attached File extension is (doc, jpg, jpeg, docx, pdf, png)." | GenerateQuickInvoice |
| 51084 | Invalid Parameter | File List: Invalid Parameter | "Ensure that File size does not exceed 1MB." | GenerateQuickInvoice |
| 51085 | Missing Parameter | Refund Reference Number: Required parameter missing | "Ensure that 'refund reference no' parameter is not blank." | Refund |
| 51086 | Invalid Parameter | Refund Reference Number: Invalid Parameter | "Ensure that Only letters and numbers are provided for refund Reference Number parameter." | Refund |
| 51087 | Invalid Parameter | Refund reference number: Invalid Parameter | "Ensure that Refund reference number parameter does not exceed 100 characters." | Refund orders |
| 51088 | Missing Parameter | Frequency: Required parameter missing | "Ensure that Frequency parameter is not blank." | Generate Recurring Invoice |
| 51089 | Invalid Parameter | Frequency: Invalid Parameter | "Ensure that values for frequency parameter are only Daily/Monthly/Quarterly/Yearly." | Generate Recurring Invoice |
| 51118 | Missing Parameter | Occurrences: Required parameter missing | "Ensure that Occurrences parameter is not blank." | Generate Recurring Invoice |
| 51119 | Invalid Parameter | Occurrences: Invalid Parameter | "Ensure that Occurrences parameter is Numeric." | Generate Recurring Invoice |
| 51120 | Invalid Parameter | Occurrences: Invalid Parameter | "Ensure that Occurrences parameter does not exceed 3 digits." | Generate Recurring Invoice |
| 51121 | Invalid Parameter | Occurrences: Invalid Parameter | "Adding occurrences is only applicable for recurring invoice." | Generate Recurring Invoice |
| 51122 | Missing Parameter | Task name: Required parameter missing | "Ensure that task name parameter is not blank." | Generate Recurring Invoice, GenerateInvoice |
| 51123 | Invalid Parameter | Task name: Invalid Parameter | "Ensure that only letters, space, underscore and hyphen are provided for task name parameter." | Generate Recurring Invoice, GenerateInvoice |
| 51124 | Invalid Parameter | Task name: Invalid Parameter | "Ensure that Task name parameter does not exceed 30 Characters." | Generate Recurring Invoice, GenerateInvoice |
| 51125 | Missing Parameter | Task Note: Required parameter missing | "Ensure that Task Note parameter is not blank." | Generate Invoice |
| 51126 | Invalid Parameter | Task note: Invalid Parameter | "Ensure that Task note parameter contains only letters, numbers, hyphen, dot, circular brackets, space, comma, underscore, hash and ampersand." | Generate Recurring Invoice, GenerateInvoice |
| 51127 | Invalid Parameter | Task Note: Invalid Parameter | "Ensure that Task Note parameter does not exceed 60 characters." | Generate Invoice |
| 51128 | Missing Parameter | Task rate: Required parameter missing | "Ensure that task rate parameter is not blank." | Generate Recurring Invoice, GenerateInvoice |
| 51129 | Invalid Parameter | Task rate: Invalid Parameter | "Ensure that task rate parameter is decimal." | Generate Recurring Invoice, GenerateInvoice |
| 51130 | Missing Parameter | Task hour: Required parameter missing | "Ensure that task hour parameter is not blank." | Generate Recurring Invoice, GenerateInvoice |
| 51131 | Invalid Parameter | Task hour: Invalid Parameter | "Ensure that task hour parameter is numeric." | Generate Recurring Invoice, GenerateInvoice |
| 51132 | Invalid Parameter | Task hour: Invalid Parameter | "Ensure that task hour value does not exceed 4 digits." | Generate Recurring Invoice, GenerateInvoice |
| 51133 | Missing Parameter | Item name: Required parameter missing | "Ensure that item name parameter is not blank." | Generate Recurring Invoice, GenerateInvoice |
| 51134 | Invalid Parameter | Item name: Invalid Parameter | "Ensure that only letters, space, underscore and hyphen are provided for item name parameter." | Generate Recurring Invoice, GenerateInvoice |
| 51135 | Invalid Parameter | Item name: Invalid Parameter | "Ensure that Item name parameter does not exceed 30 characters." | Generate Recurring Invoice, GenerateInvoice |
| 51136 | Missing Parameter | Item description: Required parameter missing | "Ensure that item description parameter is not blank." | Generate Recurring Invoice, GenerateInvoice |
| 51137 | Invalid Parameter | Item description: Invalid Parameter | "Ensure that Item description parameter contains only letters, numbers, hyphen, dot, circular brackets, space, comma, underscore, hash and ampersand." | Generate Recurring Invoice, GenerateInvoice |
| 51138 | Invalid Parameter | Item description: Invalid Parameter | "Ensure that Item description parameter does not exceed 60 characters." | Generate Recurring Invoice, GenerateInvoice |
| 51139 | Missing Parameter | Item Quantity: Required parameter missing | "Ensure that the item quantity parameter is not blank." | Generate Recurring Invoice, GenerateInvoice |
| 51140 | Invalid Parameter | Item Quantity: Invalid Parameter | "Ensure that the Item Quantity parameter is numeric." | Generate Recurring Invoice, GenerateInvoice |
| 51141 | Invalid Parameter | Item Quantity: Invalid Parameter | "Ensure that the Item Quantity parameter does not exceed 3 digits." | Generate Recurring Invoice, GenerateInvoice |
| 51142 | Missing Parameter | Unit cost: Required parameter missing | "Ensure that unit cost of item is not blank." | Generate Recurring Invoice, GenerateInvoice |
| 51143 | Invalid Parameter | Unit cost: Invalid Parameter | "Ensure that the Unit cost of item parameter is a Decimal Number." | Generate Recurring Invoice, GenerateInvoice |
| 51144 | Invalid Parameter | Terms and Conditions: Invalid Parameter | "Ensure that Only letters, numbers, hyphen, dot, circular brackets and ampersand are provided for Terms and Condition parameter." | Generate Recurring Invoice, GenerateInvoice |
| 51145 | Invalid Parameter | Terms and Conditions: Invalid Parameter | "Ensure that Terms and Conditions parameter does not exceed 500 characters." | Generate Recurring Invoice, GenerateInvoice |
| 51146 | Invalid Parameter | Due date: Invalid Parameter | "Ensure that Due date parameter is Numeric." | Generate Recurring Invoice, GenerateInvoice |
| 51147 | Invalid Parameter | Due date: Invalid Parameter | "Ensure that Due date parameter does not exceed 3 digits" | Generate Recurring Invoice, GenerateInvoice |
| 51148 | Invalid Parameter | Due Date: Invalid Parameter | "Ensure that due date parameter is provided when late payment fees is present." | Generate Recurring Invoice, GenerateInvoice |
| 51149 | Invalid Parameter | Late payment fees: Invalid Parameter | "Ensure that late payment fees parameter is provided when due date is present." | Generate Recurring Invoice, GenerateInvoice |
| 51150 | Invalid Parameter | Discount_if_paid_within_due_date: Invalid Parameter | "Ensure that value for discount_if_paid_within_due_date parameter is not greater than due date." | Generate Recurring Invoice, GenerateInvoice |
| 51151 | Missing Parameter | Discount Type: Required parameter missing | "Ensure that discount type parameter is provided when discount value is present." | Generate Recurring Invoice, GenerateInvoice |
| 51152 | Missing Parameter | Discount value: Required parameter missing | "Ensure that discount value parameter is provided when discount type is present." | Generate Recurring Invoice, GenerateInvoice |
| 51153 | Missing Parameter | Late payment fees type: Required parameter missing | "Ensure that late payment fees type parameter is provided when late payment fees is present." | Generate Recurring Invoice, GenerateInvoice |
| 51154 | Missing Parameter | Late payment fees: Required parameter missing | "Ensure that late payment fees parameter is provided when late payment fees type is present." | Generate Recurring Invoice, GenerateInvoice |
| 51155 | Invalid Parameter | Discount value: Invalid Parameter | "Ensure that Discount value parameter ranges are: For percentage (1.00 - 99.99) For flat (1.00-99999.99)" | Generate Recurring Invoice, GenerateInvoice |
| 51156 | Invalid Parameter | Late payment fees: Invalid Parameter | "Ensure that Late payment fees parameter ranges are: For percentage (1.00 -99.99) For flat (1.00-99999.99)" | Generate Recurring Invoice, Generate Invoice |
| 51157 | Invalid Parameter | Tax List: Invalid Parameter | "Ensure that there are not more than two taxes for one task." | Generate Recurring Invoice, Generate Invoice |
| 51158 | Invalid Parameter | Item/Task List: Invalid Parameter | "Ensure that at least one task/item is added." | Generate Recurring Invoice, GenerateInvoice |
| 51159 | Invalid Parameter | Task List: Invalid Parameter | "Ensure that the same task is not added twice." | Generate Recurring Invoice, GenerateInvoice |
| 51160 | Invalid Parameter | Item List: Invalid Parameter | "Ensure that the same item is not added twice." | Generate Recurring Invoice, GenerateInvoice |
| 51161 | Invalid Parameter | Discount value: Invalid Parameter | "Ensure that the Discount value parameter is Decimal." | Generate Recurring Invoice, GenerateInvoice |
| 51162 | Invalid Parameter | Late payment fees: Invalid Parameter | "Ensure that Late payment fees parameter is Decimal." | Generate Recurring Invoice, GenerateInvoice |
| 51163 | Invalid Parameter | Discount type: Invalid Parameter | "Ensure that values for Discount type parameter are Perc/Flat." | Generate Recurring Invoice, GenerateInvoice |
| 51164 | Invalid Parameter | Late payment fees type: Invalid Parameter | "Ensure that values for Late payment fees type parameter are Perc/Flat." | Generate Recurring Invoice, GenerateInvoice |
| 51165 | Invalid Parameter | Discount if paid within due date: Invalid Parameter | "Ensure that Discount if paid within due date parameter is Numeric." | Generate Recurring Invoice, GenerateInvoice |
| 51166 | Invalid Parameter | Discount if paid within due date: Invalid Parameter | "Ensure that Discount if paid within due date parameter does not exceed 3 digits." | Generate Recurring Invoice, GenerateInvoice |
| 51167 | Invalid Parameter | Tax List: Invalid Parameter | "Ensure that the same tax is not added twice for the same task/item." | Generate Recurring Invoice, GenerateInvoice |
| 51168 | Invalid Parameter | Tax List: Invalid Parameter | "Ensure that there are not more than two taxes applicable for one item." | Generate Invoice |
| 51169 | Invalid Parameter | Due Date: Invalid Parameter | "Ensure that Due date cannot be greater than valid for parameter." | Generate Recurring Invoice |
| 51205 | Invalid Parameter | Order List: Invalid Parameter | "Please provide at least one order list." | Confirm, Cancel, |
| 51206 | Invalid Parameter | Order List: Invalid Parameter | "Ensure that Reference Number parameter is not repeated." | Confirm, Cancel, |
| 51207 | Invalid Parameter | Start Date: Invalid Parameter | "Ensure that Start date is greater than or equal to current date." | Generate Recurring Invoice |
| 51208 | Invalid Parameter | Start Date: Invalid Parameter | "Adding start date is only applicable for recurring invoice." | Generate Recurring Invoice |
| 51209 | Invalid Parameter | Frequency: Invalid Parameter | "Adding frequency is only applicable for recurring invoice." | Generate Recurring Invoice |
| 51210 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that the Advance Settings option is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51211 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that SMS content is provided if the same is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51212 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that the Adding Task option is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51213 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that the Adding Item option is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51214 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that the Changing Invoice Validity option is enabled under Invoice Settings." | Generate Recurring Invoice |
| 51215 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that Changing pre-populated values for item: {e.g. abc} with unit cost {e.g. 1.23} is enabled under Invoice Settings." | Generate Recurring Invoice, GenerateInvoice |
| 51216 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that Changing pre-populated values for task {e.g. def} with unit rate {e.g. 1.00} is enabled under Invoice Settings." | Generate Recurring Invoice, GenerateInvoice |
| 51217 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that the number of hours/rate amount for task is valid." | Generate Recurring Invoice, GenerateInvoice |
| 51218 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that unit cost amount/quantity for item is valid." | Generate Recurring Invoice, GenerateInvoice |
| 51219 | Invalid Parameters | Invoice Setting: Invalid Parameter | "Ensure that Quick Invoice option is enabled under Invoice Settings." | Generate Recurring Invoice, GenerateInvoice |
| 51226 | Invalid Parameters | SMS_Content: Invalid Parameter | "Ensure that Basic placeholders should not repeated in SMS content." | Generate Recurring Invoice, GenerateInvoice |
| 51174 | Missing Parameter | Card expired date: Required parameter missing | "Ensure that Card expired date parameter is not blank." | Add customer payment option |
| 51175 | Invalid Parameter | Card expired date: Invalid Parameter | "Ensure that Card expired date parameter is in MM/yyyy format." | Add customer payment option |
| 51177 | Missing Parameter | Card Number: Required parameter missing | "Ensure that Card Number parameter is not blank." | Add customer payment option |
| 51178 | Invalid Parameter | Card Number: Invalid Parameter | "Ensure that Card Number parameter is Numeric only." | Add customer payment option |
| 51179 | Invalid Parameter | Card Number: Invalid Parameter | "Ensure that Card Number parameter is not invalid." | Add customer payment option |
| 51180 | Missing Parameter | Card Name: Required parameter missing | "Ensure that Card Name parameter is not blank." | Add customer payment option |
| 51181 | Invalid Parameter | Card Name: Invalid Parameter | "Ensure that Card Name parameter is not invalid." | Add customer payment option |
| 51182 | Invalid Parameter | Name on card: Invalid Parameter | "Ensure that only letters and space are provided for name on card parameter." | Add customer payment option |
| 51183 | Invalid Parameter | Name on card: Invalid Parameter | "Ensure that Name on card parameter does not exceed 30 characters." | Add customer payment option |
| 51227 | Missing Parameters | Issuer Bank: Required parameter missing | "Ensure that Issuer bank name is not blank." | Add customer payment option |
| 51228 | Invalid Parameters | Issuer Bank: Invalid parameter | "Ensure that only letters and space are provided for issuer bank parameter." | Add customer payment option |
| 51229 | Missing Parameters | Payment Option Type: Required parameter missing | "Ensure that payment option type is not blank." | Add customer payment option |
| 51230 | Invalid Parameters | Payment Option Type: Invalid parameter | "Ensure that payment option type is OPTCRDC/OPTDBCRD." | Add customer payment option |
| 51231 | Missing Parameters | Name on card: Required parameter missing | "Ensure that name on card is not blank" | Add customer payment option |
| 51232 | Missing Parameters | Card type: Required parameter missing | "Ensure that name on card type is not blank" | Add customer payment option |
| 51233 | Invalid Parameters | Card type: Invalid parameter | "Ensure that name on card type is CRDC/DBCRD" | Add customer payment option |
| 51301 | Invalid Parameter | Order List: Invalid Parameter | "Order is already confirmed" | Confirm |
| 51302 | Invalid Parameter | Order List: Invalid Parameter | "Order is already Cancelled:" | Cancel |
| 51303 | Invalid Parameter | Order List: Invalid Parameter | "Invalid order status:" | Confirm, Cancel, |
| 51304 | Invalid Parameter | Order List: Invalid Parameter | "Invalid order/tracking id :" | Confirm, Cancel, |
| 51305 | Invalid Parameter | Order List: Invalid Parameter | "Pending Risk Mitigation:" | Confirm, Cancel, |
| 51306 | Invalid Parameter | Order List: Invalid Parameter | "Order Amt Mismatch:" | Confirm, Cancel, |
| 51307 | Invalid Parameter | Order List: Invalid Parameter | "Pending risk mitigation." | Confirm, Cancel |
| 51308 | Invalid Parameter | Order List: Invalid Parameter | "No record was found for the given criteria." | Refund, Status, OrderLookUp, |
| 51309 | Invalid Parameter | Reference number: Invalid Parameter | "Ensure that merchant reference number parameter is not repeated." | Refund |
| 51310 | Invalid Parameter | Reference number: Invalid Parameter | "Refund not allowed." | Refund |
| 51311 | Invalid Parameter | Reference number: Invalid Parameter | "Multiple refunds are not allowed for the gateway." | Refund |
| 51312 | Invalid Parameter | Reference number: Invalid Parameter | "Cannot initiate refund request for the given order." | Refund |
| 51313 | Invalid Parameter | Order List: Invalid Parameter | "No records found." | Order Status, OrderLookUp, |
| 51314 | Invalid Parameter | Reference number: Invalid Parameter | "Refund limit exceeds." | Refund |
| 51315 | Invalid Parameter | Reference number: Invalid Parameter | "This is a disputed order. You can refund only up to {Currency}{Refund amount limit}." | Refund, |
| 51316 | Invalid Parameter | Reference number: Invalid Parameter | "Ensure that Reg Id or Reference No parameters are not invalid." | UpdateBillingDetails, |
| 51317 | Invalid Parameter | Reference number: Invalid Parameter | "Record already updated or Invalid Order Status." | UpdateBillingDetails |
| 51318 | Invalid Parameter | Reference number: Invalid Parameter | "Ensure that Order Status OR Order Type parameters are not invalid." | UpdateBillingDetails |
| 51319 | Invalid Parameter | bill_id: Invalid Parameter | "Ensure that bill_id parameter is not invalid." | UpdateInvoiceReferenceNumber |
| 51320 | Invalid Parameter | Bill Merchant Reference No: Invalid Parameter | "Bill Merchant Reference No parameter already exists." | UpdateInvoiceReferenceNumber |
| 51321 | Invalid Parameter | Reg ID: Invalid Parameter | "Ensure that Reg ID parameter is not invalid." | UpdateMerchantParams |
| 51322 | Invalid Parameter | Reference number: Invalid Parameter | "Ensure that reference number parameter is not invalid." | UpdateMerchantParams |
| 51323 | Invalid Parameter | Tax List: Invalid Parameter | "Ensure that Tax is configured for the merchant." | GenerateInvoice, GenerateRecurringInvoice |
| 51324 | Invalid Parameter | Tax List: Invalid Parameter | "Ensure that Tax value matches with the given Tax name." | GenerateInvoice, GenerateRecurringInvoice |
| 51325 | Missing Parameter | Customer id: Required parameter missing | "Ensure that Customer parameter is present." | DeleteCustomer, |
| 51326 | Invalid Parameter | Currency: Invalid Parameter | "Ensure that Currency is assigned to the merchant." | GenerateInvoice, GenerateRecurringInvoice, GenerateQuickInvoice |
| 51327 | Invalid Parameter | Customer id: Invalid Parameter | "Ensure that the merchant is not invalid." | OrderLookup, Delete Customer |
| 51328 | Invalid Parameter | Reference number: Invalid Parameter | "Multiple refunds not allowed." | RefundOrder |
| 51336 | Invalid Parameter | Customer Card Id: Invalid Parameter | "Card Not Present." | DeleteCustomer payment option |
| 51337 | Invalid Parameters | Customer Id: Invalid parameters | "Card Already Exists" | Add Customer payment option |
