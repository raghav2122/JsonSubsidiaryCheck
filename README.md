# JSON Subsidiary Checker

## Description

This TypeScript function checks if a given JSON file is a subsidiary of another JSON file based on the `lcLink` property. It compares two JSON files and determines if all objects in the subsidiary JSON are present in the primary JSON.

## Installation

No installation is required as this function is standalone and can be used in any TypeScript project.

## Usage

```typescript
import { checkSubsidiaryJSON } from './jsonSubsidiaryChecker';

const primaryJSON = /* Load primary JSON file */;
const subsidiaryJSON = /* Load subsidiary JSON file */;

const result = checkSubsidiaryJSON(primaryJSON, subsidiaryJSON);

if (result.subsidiary) {
  console.log('The subsidiary JSON is a subset of the primary JSON.');
} else {
  console.log('The subsidiary JSON is not a subset of the primary JSON.');
  console.log('Reason:', result.reason);
}
```

## Function Signature

```typescript
function checkSubsidiaryJSON(primaryJSON: any[], subsidiaryJSON: any[]): { subsidiary: boolean, reason?: string }
```

## Example

Primary JSON:

```json
[
  {
    "probName": "Reverse a Number",
    "lcLink": "https://leetcode.com/problems/reverse-integer/",
    "status": false
  },
  {
    "probName": "Check Palindrome",
    "lcLink": "https://leetcode.com/problems/palindrome-number/",
    "status": false
  }
]
```

Subsidiary JSON:

```json
[
  {
    "probName": "Check Palindrome",
    "lcLink": "https://leetcode.com/problems/palindrome-number/",
    "status": false
  }
]
```

In this example, the subsidiary JSON is a subset of the primary JSON.

---
