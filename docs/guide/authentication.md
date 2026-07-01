---
title: API Authentication
---

# API Authentication

## Merchant's API Implementation Guide

### Statement of Confidentiality

This document contains information that is proprietary and confidential to Avenues India Private Limited which shall not be disclosed, transmitted, or duplicated, used in whole or in part for any purpose other than its intended purpose. Any use or disclosure in whole or in part of this information without express written permission of Avenues India Private Ltd is prohibited. Any other company and product names mentioned are used for identification purposes only, and may be trademarks of their respective owners.

## CCAvenue API

The CCAvenue API is designed to enable you to interact securely with our API from your client-side web application. You can get XML, JSON or String responses from the API, including errors.

You need an active account to initiate an API call to the CCAvenue payment gateway.

## API Authentication

Merchant needs an active account to initiate an API call to the CCAvenue payment gateway. Merchants will have to log in to their CCAvenue M.A.R.S account and get the authentication credentials for initiating API calls.

Merchant must provide CCAvenue with the public IP address from where the API calls will be initiated. API calls will work only after CCAvenue registers the IP address provided.

Login to your CCAvenue M.A.R.S account, under Settings tab -> API Keys page; copy the following credentials:

- Merchant ID
- Access Code
- Encryption Key

## API Calls

CCAvenue API supports following API calls.

1. **Confirm** – The Confirm API call allows you to confirm a pending order. Only confirmed orders are settled into the merchant's account. An order older than 12 days is automatically cancelled. Once an order has been auto-cancelled by the system, it cannot be confirmed.
2. **Cancel** – The Cancel API call allows you to cancel a pending order. Funds will be refunded to the credit card or debit card or netbanking account that was originally charged. An order older than 12 days is automatically cancelled.
3. **Refund** – The Refund API call allows you to refund an order/transaction that has previously been executed but not yet refunded. Funds will be refunded to the credit card or debit card or net banking account that was originally charged.
4. **Status** (Kindly pass version as 1.2) – The Status API call can be used to ascertain the status of a transaction/order. You can use this call if you have not received status/information for a transaction request. It can also be used as an additional security measure to reconfirm the parameters posted back.
5. **Order Lookup** (Kindly pass version as 1.2) – The Order Lookup API call can be used to find transactions/orders based on given criteria.
6. **Pending Orders** – The Pending Orders API call can be used to list transactions which are yet to be confirmed or cancelled. Pending orders need to be confirmed for them to be settled, those older than 12 days are automatically cancelled.
7. **Delete Customer** - The Delete Customer API call is used to delete all saved payment options for the customer.
8. **Delete Customer Payment Option** - The Delete Customer Payment Option API call is used to delete a particular payment option saved for the customer.
9. **Add Customer Payment Option** (Kindly pass version as 1.2) – Add Customer payment option API call is used to add another payment option for registered customer of the merchant.
10. **Get Customer Payment Option** (Kindly pass version as 1.2) – The Customer payment option API call is used to list payment options saved for a customer. Payments options are saved for a customer in the vault for easy and convenient payment.
11. **Generate Invoice** (Kindly pass version as 1.2) - The Invoice API call is used to generate an invoice for a customer. Values can be passed as for generating invoice using the flexibility of Invoice Settings.
12. **Generate Recurring Invoice** - Recurring invoice call is used to generate recurring invoice for a customer of a merchant.
13. **Generate Quick Invoice** (Kindly pass version as 1.2) - This Quick Invoice API call is used to generate a quick invoice for a customer. This is a flavour of regular invoice but with limited options; hence an easy implementation.
14. **Get Item List** - The Item list API call is used to find the list of configured Items and task for merchant. The items and tasks are used to create a regular Invoice or a recurring invoice.
15. **Invoice Lookup** - Invoice Lookup API call is used to find list of invoice order lookup details of orders.
16. **Update Merchant Invoice Reference No** - Update Invoice reference Number API call is used to update Invoice reference number if the same was not provided at the time of invoice generation.
17. **Update Merchant Param** - Update Merchant params API is used to add some extra parameter against Merchant params if the same could not be done at the time of the transaction.
18. **Update Billing Details** - Update billing details API call is used to update customer billing information against an order.
19. **BinDetails** – This is used to fetch the card details for a bin number.
20. **PayId Details** (Kindly pass version as 1.4) - PayId Details API call is used to list transactions for a given PayId.
21. **Payouts Summary** (Kindly pass version as 1.2) - Payouts Summary API call is used to list payouts summary for a merchant for a given settlement date.
22. **getRefundDetails** – The getRefundDetails API call can be used to fetch refund information of the particular transaction.
23. **getSettlementDetails** – The getSettlementDetails call is use to get the Settlement details such as payid, UtrNo and settlement date.
24. **ConsolidatePayout Summary** - (Kindly pass version as DEF) ConsolidatePayout Summary API call is used to list payouts summary for a merchant for a given settlement date.
25. **ConsolidateSettlementDetails** - (Kindly pass version as DEF) ConsolidateSettlementDetails API call is used to list Settlement Details for a merchant for a given Order Number and Reference Number.

## API URLs

- **Production API URL:** `https://api.ccavenue.com/apis/servlet/DoWebTrans`
- **Staging API URL:** `https://apitest.ccavenue.com/apis/servlet/DoWebTrans`
