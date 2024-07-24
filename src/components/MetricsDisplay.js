"use client";

export default function MetricsDisplay({ metrics }) {
  return (
    metrics && (
      <div className="mt-4 p-4 border rounded">
        <p>
          <strong>Pages:</strong> {metrics.pages}
        </p>
        <p>
          <strong>Words:</strong> {metrics.words}
        </p>
        <p>
          <strong>Characters (with spaces):</strong>{" "}
          {metrics.charactersWithSpaces}
        </p>
        <p>
          <strong>Characters (without spaces):</strong>{" "}
          {metrics.charactersWithoutSpaces}
        </p>
        <p>
          <strong>Paragraphs:</strong> {metrics.paragraphs}
        </p>
        <p>
          <strong>Lines:</strong> {metrics.lines}
        </p>
      </div>
    )
  );
}
