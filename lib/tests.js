export const generateRandomPassword = () => {
  const length = 12
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const numericChars = '0123456789'
  const specialChars = '!@#$%^&*_-+='

  let password = ''

  // Include at least one uppercase letter
  password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]

  // Include at least one number
  password += numericChars[Math.floor(Math.random() * numericChars.length)]

  // Include at least one special character
  password += specialChars[Math.floor(Math.random() * specialChars.length)]

  // Fill the remaining characters with a mix of lowercase letters, numbers, and special characters
  for (let i = 3; i < length; i++) {
    const randomCharset = Math.floor(Math.random() * 3)
    switch (randomCharset) {
    case 0:
      password +=
          lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]
      break
    case 1:
      password +=
          numericChars[Math.floor(Math.random() * numericChars.length)]
      break
    case 2:
      password +=
          specialChars[Math.floor(Math.random() * specialChars.length)]
      break
    }
  }

  // Shuffle the password to ensure the position of characters is random
  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')

  return password
}

export const validateCVC = cvc => {
  const cleanedCVC = cvc.replace(/\s/g, '') // Remove white spaces

  const cvcRegex = /^\d{3,4}$/ // Matches 3 or 4 digits

  return cvcRegex.test(cleanedCVC)
}

export function detectCardType(cardNumber) {
  // Remove non-numeric characters from input
  const numericValue = cardNumber.replace(/\D/g, '')

  if (/^4\d{12,15}$/.test(numericValue)) {
    return 'visa'
  } else if (/^5[1-5]\d{14}$/.test(numericValue)) {
    return 'mastercard'
  } else if (/^3[47]\d{13}$/.test(numericValue)) {
    return 'amex'
  } else {
    return 'unknown'
  }
}

export function formatCreditCardInput(inputValue) {
  // Detect card type
  const cardType = detectCardType(inputValue)
  // Remove non-numeric characters from input
  const numericValue = inputValue.replace(/\D/g, '')

  let formattedValue = ''

  if (cardType === 'visa' || cardType === 'mastercard') {
    // Format for Visa and Mastercard
    for (let i = 0; i < numericValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' '
      }
      formattedValue += numericValue[i]
    }
  } else if (cardType === 'amex') {
    // Format for Amex
    for (let i = 0; i < numericValue.length; i++) {
      if (i === 4 || i === 10) {
        formattedValue += ' '
      }
      formattedValue += numericValue[i]
    }
  } else {
    for (let i = 0; i < numericValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' '
      }
      formattedValue += numericValue[i]
    }
  }

  if (cardType === 'unknown') {
    return {
      success: false,
      data: formattedValue.trim(),
      message: 'Please enter a valid card number'
    }
  } else {
    return {
      success: true,
      data: formattedValue.trim()
    }
  }
}

export const stringReplace = inputValue => {
  const stringReplace = inputValue.replace(/\s/g, '')
  return stringReplace
}

export const testPassword = inputValue => {
  const isValid = /^[\w!@#$%^&*\-+=]{8,}$/.test(inputValue)
  return isValid
}
export const testEmail = inputValue => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)

  return isValid
}
