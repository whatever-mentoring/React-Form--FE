export const base64Converter = {
  encode: (value: string) => window.btoa(value),
  decode: (base64: string) => window.atob(base64),
}

