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
            // Log the error instead of throwing, to avoid breaking the app on a non-critical feature.
            console.error(`API request failed with status ${response.status}`);
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
            // If response is empty or not JSON, we can't parse it.
            // Log the issue and set count to null to avoid breaking the UI.
            console.error("Received an invalid response from visitor API. Expected JSON.", { response: responseText });
            setCount(null);
        }

      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        setCount(null); // Or some fallback
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
