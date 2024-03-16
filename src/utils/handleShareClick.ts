export const copyToClipboard = (text: string, onSuccess: () => void, onFailure: () => void) => {
  navigator.clipboard.writeText(text).then(onSuccess, onFailure);
}