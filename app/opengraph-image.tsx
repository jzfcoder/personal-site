import { ImageResponse } from "next/og";

export const alt = "Jeremy Flint";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontFamily: "Times New Roman, Times, serif",
            fontSize: 480,
            lineHeight: 1,
          }}
        >
          z
        </div>
      </div>
    ),
    size,
  );
}
