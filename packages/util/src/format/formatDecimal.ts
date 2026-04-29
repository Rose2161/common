// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line prefer-regex-literals
const NUMBER_REGEX = new RegExp('(\\d+?)(?=(\\d{3})+(?!\\d)|$)', 'g');

/**
 * @name formatDecimal
 * @description Formats a number into string format with thousand separators
 */
  export function formatDecimal (value: string, separator = ','): string {
  // Handle empty or falsy input
  if (!value || value.length === 0) {
    return value;
  }

  const isNegative = value.startsWith('-');
  const numericValue = isNegative ? value.substring(1) : value;
  const matched = numericValue.match(NUMBER_REGEX);

  return matched
    ? `${isNegative ? '-' : ''}${matched.join(separator)}`
    : value;
  }
}
