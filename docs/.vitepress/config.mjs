import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CCAvenue API Docs',
  description: "Merchant's API Implementation Guide for the CCAvenue payment gateway",
  base: '/ccavenue.github.io/',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/authentication' },
      { text: 'API Reference', link: '/api/confirm' },
      { text: 'Error Codes', link: '/guide/error-codes' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'API Authentication', link: '/guide/authentication' },
          { text: 'Encryption & Decryption', link: '/guide/encryption-decryption' },
          { text: 'Error Codes', link: '/guide/error-codes' }
        ]
      },
      {
        text: 'Order Management',
        items: [
          { text: 'Confirm', link: '/api/confirm' },
          { text: 'Cancel', link: '/api/cancel' },
          { text: 'Refund', link: '/api/refund' },
          { text: 'Status', link: '/api/status' },
          { text: 'Order Lookup', link: '/api/order-lookup' },
          { text: 'Pending Orders', link: '/api/pending-orders' },
          { text: 'Update Billing Details', link: '/api/update-billing-details' },
          { text: 'Update Merchant Param', link: '/api/update-merchant-param' }
        ]
      },
      {
        text: 'Customer & Payment Options',
        items: [
          { text: 'Delete Customer', link: '/api/delete-customer' },
          { text: 'Delete Customer Payment Option', link: '/api/delete-customer-payment-option' },
          { text: 'Add Customer Payment Option', link: '/api/add-customer-payment-option' },
          { text: 'Get Customer Payment Option', link: '/api/get-customer-payment-option' }
        ]
      },
      {
        text: 'Invoicing',
        items: [
          { text: 'Generate Invoice', link: '/api/generate-invoice' },
          { text: 'Generate Recurring Invoice', link: '/api/generate-recurring-invoice' },
          { text: 'Generate Quick Invoice', link: '/api/generate-quick-invoice' },
          { text: 'Get Item List', link: '/api/get-item-list' },
          { text: 'Invoice Lookup', link: '/api/invoice-lookup' },
          { text: 'Update Merchant Invoice Reference No', link: '/api/update-merchant-invoice-reference-no' }
        ]
      },
      {
        text: 'Settlements & Payouts',
        items: [
          { text: 'Bin Details', link: '/api/bin-details' },
          { text: 'PayId Details', link: '/api/payid-details' },
          { text: 'Payouts Summary', link: '/api/payouts-summary' },
          { text: 'Get Refund Details', link: '/api/get-refund-details' },
          { text: 'Get Settlement Details', link: '/api/get-settlement-details' },
          { text: 'Consolidate Payout Summary', link: '/api/consolidate-payout-summary' },
          { text: 'Consolidate Settlement Details', link: '/api/consolidate-settlement-details' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nermalcat69/ccavenue.github.io' }
    ],

    search: {
      provider: 'local'
    }
  }
})
