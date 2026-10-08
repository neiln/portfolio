import { ImageResponse } from "next/og";

export const alt = "Neil Nelson — Building better engineering teams. Delivering better software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "65px 76px", background: "#09090b", color: "#f8fafc", fontFamily: "sans-serif" }}><div style={{ display: "flex", fontSize: 27, color: "#b0acf8", marginBottom: 55 }}>Neil Nelson / Engineering Leadership</div><div style={{ display: "flex", fontSize: 66, fontWeight: 700, letterSpacing: -3, lineHeight: 1.12 }}>Building Better Engineering Teams.</div><div style={{ display: "flex", fontSize: 66, fontWeight: 700, letterSpacing: -3, lineHeight: 1.12, color: "#a2a1b2", marginTop: 12 }}>Delivering Better Software.</div><div style={{ display: "flex", marginTop: "auto", borderTop: "1px solid #30303b", paddingTop: 26, fontSize: 23, color: "#a2a1b2" }}>People development · Software architecture · AI-assisted product engineering</div></div>, size);
}
