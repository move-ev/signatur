export function downloadSignature(signature: string) {
  const a = document.createElement("a");
  a.href = `data:text/html;charset=utf-8,${encodeURIComponent(signature)}`;
  a.download = "signature.html";
  a.click();
}
