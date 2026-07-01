---
title: Custom Checkout Page
---

# Processing Orders Using a Custom Checkout Form

Merchants can build a custom checkout form to collect order and payment information and pass the same to CCAvenue directly for payment processing.

## Process Flow

1. Customer, after selecting the product/service and entering the shipping details, proceeds to make the payment on your billing page.
2. On your customized billing page the customer selects the payment option from the list provided by CCAvenue as a JSON object. The customer enters the payment information and submits the form.
3. On submission of the payment information, CCAvenue initiates the authorization process by connecting to the relevant bank/processing organization.
4. On receiving the authorization status from the bank, CCAvenue sends the response back to your website with the transaction status.

## Fetching Payment Options

Basic steps involved in fetching payment options to create your custom checkout form:

**Set Up**

Download the CCAvenue client library as instructed here. Refer to the sample page `dataFrom.htm` for making a call to the CCAvenue server for fetching payment options allocated to your account.

**Configure**

Every merchant receives a unique set of keys for transaction processing. These need to be configured in the transaction file used to initiate the payment process.

From your MARS account, under Settings tab > API Keys page, copy the merchant ID, access code and secret encryption key.

**Payment Processing**

Refer to the following code and make necessary changes in your payment page for fetching the payment options JSON object from the CCAvenue server. In the integration kit you will find this code in the `dataFrom.htm` file.

The JSON object will contain the following information:

1. **Payment Option Type** - Will contain payment options allocated to the merchant. Options may include Credit Card, Net Banking, Debit Card, Cash Cards or Mobile Payments.
2. **Card Type** - Will contain card type allocated to the merchant. Options may include Credit Card, Net Banking, Debit Card, Cash Cards or Mobile Payments.
3. **Card Name** - Will contain name of card. E.g. Visa, MasterCard, American Express, or a bank name in case of Net Banking.
4. **Payment Mode Status** - Will help in identifying the status of the payment mode. Options may include Active or Down.
5. **Error** - This parameter will enable you to troubleshoot any configuration related issues. It will provide an error description.

You will have to post the order information to the CCAvenue transaction file (e.g. `ccavRequestHandler.jsp`) to initiate the payment process. The CCAvenue transaction file, on receiving the order related data, will encrypt the data and forward the encrypted request to the CCAvenue server for processing.

```html
<script type="text/javascript">
$(function() {
    var jsonData;
    var access_code = ""; // Put access code here
    var amount = "10.00";
    var currency = "INR";

    $.ajax({
        url: "https://test.ccavenue.com/transaction/transaction.do?command=getJsonData&access_code="
            + access_code +
            "&currency=" + currency +
            "&amount=" + amount,
        dataType: "jsonp",
        jsonp: false,
        jsonpCallback: "processData",
        success: function(data) {
            jsonData = data;
        },
        error: function(xhr, textStatus, errorThrown) {
            alert(
                "An error occurred! " +
                (errorThrown ? errorThrown : xhr.status)
            );
        }
    });

    $(".payOption").click(function() {

        $("#card_name").children().remove(); // remove old card names from old one
        $("#card_name").append("<option value=''>Select</option>");

        var paymentOption = $(this).val();

        $("#card_type").val(paymentOption.replace("OPT", ""));

        $.each(jsonData, function(index, value) {

            if (value.payOpt == paymentOption) {

                var payOptJSONArray = $.parseJSON(value[paymentOption]);

                $.each(payOptJSONArray, function() {

                    $("#card_name")
                        .find("option:last")
                        .after(
                            "<option class='" +
                            this["dataAcceptedAt"] +
                            "' " +
                            this["status"] +
                            " value='" +
                            this["cardName"] +
                            "'>" +
                            this["cardName"] +
                            "</option>"
                        );

                });

            }

        });

    });

    $("#card_name").click(function() {

        if ($(this).find(":selected").hasClass("DOWN")) {
            alert(
                "Selected option is currently unavailable.\n" +
                "Select another payment option or try again later."
            );
        }

        if ($(this).find(":selected").hasClass("ccAvenue")) {
            $("#data_accept").val("Y");
        } else {
            $("#data_accept").val("N");
        }

    });

});
</script>
```

## Request Parameters

Merchant must send the following parameters to the CCAvenue PG for processing an order.

### Required Parameters

| Name | Description | Type (length) |
|---|---|---|
| `merchant_id` | Merchant Id is a unique identifier generated by CCAvenue for each activated merchant. | Numeric |
| `order_id` | This ID is used by merchants to identify the order. Ensure that you send a unique id with each request. **CCAvenue will not check the uniqueness of this order id**, as it generates a unique payment reference number for each order which is sent by the merchant.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `-` (hyphen), `/` (slash), `_` (underscore) | Alphanumeric (40) |
| `currency` | Currency in which you want to process the transaction.<br>`INR` - Indian Rupee<br>`USD` - United States Dollar<br>`SGD` - Singapore Dollar<br>`GBP` - Pound Sterling<br>`EUR` - Euro, official currency of Eurozone | Alphabets (3) |
| `amount` | Order amount | Numeric (12, 2) |
| `redirect_url` | CCAvenue will post the status of the order along with the parameters to this URL. If you do not send this value, order status will be sent back to the URL configured in dynamic event notifications module in your MARS account. If there is no URL configured in the MARS account, PG will display the status of the order on the CCAvenue confirmation page.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `/` (slash), `_` (underscore) | Alphanumeric (100) |
| `cancel_url` | CCAvenue will redirect the customer to this URL if the customer cancels the transaction on the billing page.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `/` (slash), `_` (underscore) | Alphanumeric (100) |
| `payment_option` | Payment option selected by the customer<br>`OPTCRDC` - Credit Card<br>`OPTDBCRD` - Debit Card<br>`OPTNBK` - Net Banking<br>`OPTCASHC` - Cash Card<br>`OPTMOBP` - Mobile Payments<br>`OPTCHKOT` - Checkout<br>`OPTUPI` - Unified Payments | Alphabets (10) |
| `card_type` | Type of card used by the customer.<br>`CRDC` - Credit Card<br>`DBCRD` - Debit Card<br>`NBK` - Net Banking<br>`CASHC` - Cash Card<br>`MOBP` - Mobile Payments<br>`CHKOT` - Checkout<br>`UPI` - Unified Payments | Alphabets (10) |
| `card_name` | Name of the card used by the customer. This list will be provided by CCAvenue.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), and space between words. | Alphanumeric (100) |
| `data_accept` | Resend the parameter value received at the time of fetching the payment options.<br>**Expected values:** `Y` or `N` | Alphabets (1) |
| `card_number` | Card number entered by the customer. | Numeric |
| `expiry_month` | Card expiry month (Not applicable for 19 digit Maestro Debit Cards) | Numeric |
| `expiry_year` | Card expiry year (Not applicable for 19 digit Maestro Debit Cards) | Numeric |
| `cvv_number` | Card CVV number (Not applicable for 19 digit Maestro Debit Cards) | Numeric |
| `issuing_bank` | Card issuing bank name<br><br>**Characters allowed:** Alphabet (A-Z, a-z), and space between words. | Alphanumeric (100) |
| `mobile_no` | Mobile no (Only in case of Mobile payments.) | Numeric |
| `mm_id` | Mobile Money Identification Number (MMID) is a seven digit number for the bank offering IMPS. | Numeric (7) |
| `otp` | One Time Password to complete an IMPS transaction | Numeric (6) |
| `virtualAddress` | Virtual payment address (VPA) is a user-generated unique identifier for each bank account. All payment addresses are in the format `abc@bank`, where `abc` can be chosen by the customer. (Only in case of UPI)<br><br>**Characters allowed:** dot, comma and `-` (hyphen). `@` (at) is compulsory. | Alphanumeric (255) |

### Additional Parameters

Merchant can send any of the following parameters in addition to the required parameters.

| Name | Description | Type (length) |
|---|---|---|
| `billing_name` | Name of the customer<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphabets (60) |
| `billing_address` | Customer's billing address<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `#` (hash), comma, circular brackets, `/` (slash), dot, `-` (hyphen). Space in between words. | Alphanumeric (150) |
| `billing_city` | Customer's billing city<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphanumeric (30) |
| `billing_state` | Customer's billing state<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphanumeric (30) |
| `billing_zip` | Customer's billing zip code<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers | Alphanumeric (15) |
| `billing_country` | Customer's billing country<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphanumeric (50) |
| `billing_tel` | Customer's phone number | Alphanumeric (20) |
| `billing_email` | Customer's email address<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `@` (at), dot, `_` (underscore) | Alphanumeric (70) |
| `delivery_name` | Recipient's name<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphanumeric (50) |
| `delivery_address` | Shipping address<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `#` (hash), comma, circular brackets, `/` (slash), dot, `-` (hyphen). Space in between words. | Alphanumeric (150) |
| `delivery_city` | Shipping city<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphanumeric (30) |
| `delivery_state` | Shipping state<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphanumeric (30) |
| `delivery_zip` | Shipping zip code<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphanumeric (15) |
| `delivery_country` | Shipping country<br><br>**Characters allowed:** Alphabet (A-Z, a-z). Space in between words. | Alphanumeric (50) |
| `delivery_tel` | Shipping phone number | Alphanumeric (20) |
| `merchant_param1` | This parameter can be used for sending additional information about the transaction. PG will send this parameter in the reconciliation report.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `#` (hash), comma, circular brackets, `/` (slash), dot, `-` (hyphen) | Alphanumeric (100) |
| `merchant_param2` | This parameter can be used for sending additional information about the transaction. PG will send this parameter in the reconciliation report.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `#` (hash), comma, circular brackets, `/` (slash), dot, `-` (hyphen) | Alphanumeric (100) |
| `merchant_param3` | This parameter can be used for sending additional information about the transaction. PG will send this parameter in the reconciliation report.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `#` (hash), comma, circular brackets, `/` (slash), dot, `-` (hyphen) | Alphanumeric (100) |
| `merchant_param4` | This parameter can be used for sending additional information about the transaction. PG will send this parameter in the reconciliation report.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `#` (hash), comma, circular brackets, `/` (slash), dot, `-` (hyphen) | Alphanumeric (100) |
| `merchant_param5` | This parameter can be used for sending additional information about the transaction. PG will send this parameter in the reconciliation report.<br><br>**Characters allowed:** Alphabet (A-Z, a-z), Numbers, `#` (hash), comma, circular brackets, `/` (slash), dot, `-` (hyphen) | Alphanumeric (100) |
| `mer_ref_no` | Merchant's Reference Value<br><br>**Characters allowed:** dot and comma (consecutive characters are not allowed) | Alphanumeric (15) |
| `is_si_setup_amt` | **Expected values:** `Y` or `N`<br>**Y** - The amount sent on billing/shipping page will be treated as setup amount and merchant has to send `si_amount` to be charged.<br>**N** - Transaction will be used just for authentication of card and the amount will be refunded back upon successful transaction. | Alphabets (1) |
| `si_start_date` | This is the date from which SI billing will start for the customer. (Only in case of "Fixed" type standing instructions) | Date, `dd-MM-yyyy` |
| `si_frequency_type` | (Only in case of "Fixed" type standing instructions) | `DAYS\|WEEK\|MONTH\|YEAR` |
| `si_bill_cycle` | This parameter will enable you to set the value for total number of times you want to charge a customer. (Only in case of "Fixed" type standing instructions) | Numeric |
| `si_amount` | This SI amount will be charged to the customer on each billing cycle. | Numeric (12, 2) |
| `si_type` | This parameter is used to identify whether the standing instruction request is for the fixed amount or for variable amount. | `FIXED\|ONDEMAND` |
