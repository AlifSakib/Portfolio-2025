"use client";

import { useEffect, useState } from "react";
import { Users, Loader2 } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(
          "https://api.visitorbadge.io/api/visitors?path=alifsakib-portfolio"
        );
        
        if (!response.ok) {
            // Silently fail if API is down
            setCount(null);
            return;
        }

        const responseText = await response.text();
        // The API sometimes returns an SVG instead of JSON.
        // We need to check if the response is valid JSON before parsing.
        if (responseText && responseText.trim().startsWith('{')) {
            const data = JSON.parse(responseText);
            setCount(data.total);
        } else {
            // Silently fail if response is not JSON
            setCount(null);
        }

      } catch (error) {
        // Silently fail on any other error, e.g. network issues
        setCount(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="flex items-center gap-2" title="Visitor Count">
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <Users className="h-4 w-4" />
          <span>{count !== null ? count.toLocaleString() : "N/A"}</span>
        </>
      )}
    </div>
  );
}
