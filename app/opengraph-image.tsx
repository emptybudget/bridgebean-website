import { ImageResponse } from "next/og";
import company from "@/data/company.json";

export const runtime = "edge";
export const alt = `${company.name} — ${company.slogan.replace(/\n/g, " ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_LIGHT_URL =
  "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff";
const FONT_BOLD_URL =
  "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff";

export default async function OgImage() {
  const [lightFont, boldFont] = await Promise.all([
    fetch(FONT_LIGHT_URL).then((r) => r.arrayBuffer()),
    fetch(FONT_BOLD_URL).then((r) => r.arrayBuffer()),
  ]);

  const slogan = company.slogan.split("\n");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FAF6EE",
          padding: "60px 90px",
          fontFamily: "GangwonLight",
        }}
      >
        {/* Decorative brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 380,
            height: 380,
            marginRight: 70,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 320,
              height: 320,
              borderRadius: "50%",
              border: "10px solid #86B79A",
              boxShadow: "0 0 0 4px rgba(134,183,154,0.18)",
              fontSize: 130,
              fontFamily: "GangwonBold",
              color: "#558568",
            }}
          >
            Bb
          </div>
        </div>

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 84,
              color: "#558568",
              fontFamily: "GangwonBold",
              letterSpacing: -2,
              marginBottom: 28,
            }}
          >
            Bridgebean
          </div>
          {slogan.map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: 56,
                color: "#2A2A2A",
                lineHeight: 1.25,
                fontFamily: "GangwonLight",
              }}
            >
              {line}
            </div>
          ))}
          <div
            style={{
              fontSize: 26,
              color: "#7A7A7A",
              marginTop: 32,
              fontFamily: "GangwonLight",
            }}
          >
            {company.tagline_en}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "GangwonLight",
          data: lightFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "GangwonBold",
          data: boldFont,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
