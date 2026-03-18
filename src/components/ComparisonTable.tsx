interface ComparisonTableProps {
  headers: string[];
  rows: Record<string, string>[];
  highlightColumn?: number;
}

export function ComparisonTable({ headers, rows, highlightColumn }: ComparisonTableProps) {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-2xl border border-sage-100 md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-sage-50">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className={`px-6 py-4 text-left font-serif font-semibold text-sage-800 ${
                    i === highlightColumn ? "bg-gold-50 text-gold-600" : ""
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-t border-sage-100/50 transition-colors hover:bg-cream-dark/50">
                {headers.map((header, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-6 py-4 text-stone ${
                      colIdx === highlightColumn ? "bg-gold-50/30 font-medium text-sage-800" : ""
                    }`}
                  >
                    {row[header] || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-4 md:hidden">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="glass-card rounded-xl p-4">
            {headers.map((header, colIdx) => (
              <div key={colIdx} className={`flex justify-between py-2 ${colIdx > 0 ? "border-t border-sage-100/30" : ""}`}>
                <span className="text-xs font-semibold text-sage-600">{header}</span>
                <span className={`text-sm ${colIdx === highlightColumn ? "font-medium text-gold-600" : "text-stone"}`}>
                  {row[header] || "—"}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
