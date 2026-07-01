import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const docsDir = join(root, 'docs')
const outFile = join(docsDir, 'public', 'llms-full.txt')

const pages = [
  'guide/authentication.md',
  'guide/encryption-decryption.md',
  'guide/error-codes.md',
  'api/confirm.md',
  'api/cancel.md',
  'api/refund.md',
  'api/status.md',
  'api/order-lookup.md',
  'api/pending-orders.md',
  'api/update-billing-details.md',
  'api/update-merchant-param.md',
  'api/delete-customer.md',
  'api/delete-customer-payment-option.md',
  'api/add-customer-payment-option.md',
  'api/get-customer-payment-option.md',
  'api/generate-invoice.md',
  'api/generate-recurring-invoice.md',
  'api/generate-quick-invoice.md',
  'api/get-item-list.md',
  'api/invoice-lookup.md',
  'api/update-merchant-invoice-reference-no.md',
  'api/bin-details.md',
  'api/payid-details.md',
  'api/payouts-summary.md',
  'api/get-refund-details.md',
  'api/get-settlement-details.md',
  'api/consolidate-payout-summary.md',
  'api/consolidate-settlement-details.md'
]

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n/, '')
}

const sections = pages.map((relPath) => {
  const content = readFileSync(join(docsDir, relPath), 'utf8')
  return stripFrontmatter(content).trim()
})

const header = `# CCAvenue API Docs — Full Content

> Merchant's API Implementation Guide for the CCAvenue payment gateway. This file contains the complete content of every page on this site concatenated for LLM consumption. See /llms.txt for a linked index instead.

`

writeFileSync(outFile, header + sections.join('\n\n---\n\n') + '\n')
console.log(`Wrote ${outFile} (${sections.length} pages)`)
