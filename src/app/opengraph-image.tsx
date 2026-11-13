import { ImageResponse } from "next/og";

export const alt = "Neil Nelson — Engineering Manager who still ships.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "65px 76px", background: "#09090b", color: "#f8fafc", fontFamily: "sans-serif" }}><div style={{ display: "flex", fontSize: 27, color: "#b0acf8", marginBottom: 55 }}>Neil Nelson / Calgary, Canada</div><div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -3, lineHeight: 1.12 }}>Engineering Manager</div><div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -3, lineHeight: 1.12, color: "#a2a1b2", marginTop: 12 }}>who still ships.</div><div style={{ display: "flex", marginTop: "auto", borderTop: "1px solid #30303b", paddingTop: 26, fontSize: 23, color: "#a2a1b2" }}>Six years leading a SaaS platform team · .NET and AWS · Builder of CrowHub</div></div>, size);
}
