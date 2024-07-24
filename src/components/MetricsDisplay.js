export default function MetricsDisplay({ metrics }) {
  return (
    metrics && (
      <div className="mt-4 p-4 border rounded">
        <p>Pages: {metrics.pages}</p>
        <p>Words: {metrics.words}</p>
        <p>Characters (with spaces): {metrics.charactersWithSpaces}</p>
        <p>Characters (without spaces): {metrics.charactersWithoutSpaces}</p>
        <p>Paragraphs: {metrics.paragraphs}</p>
        <p>Lines: {metrics.lines}</p>
      </div>
    )
  );
}
