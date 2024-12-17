function Copybar() {
  return (
    <div className="codebar bg" onClick={copyTextToUserClipboard} tabIndex={4}>
      <span>npm i alt-text-generator</span>
    </div>
  )
}

function copyTextToUserClipboard() {
  navigator.clipboard.writeText("npm i alt-text-generator")
}

export default Copybar