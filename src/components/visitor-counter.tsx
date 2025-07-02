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
          "https://api.visitorbadge.io/api/id?path=alifsakib-portfolio"
        );
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const responseText = await response.text();
        if (responseText) {
            const data = JSON.parse(responseText);
            setCount(data.value);
        } else {
            // If response is empty, we can't parse it.
            // Set count to null to avoid breaking the UI.
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
