import Heading from "@/components/Heading/Heading";
import PageRoot from "@/components/PageRoot/PageRoot";
import SmoothScrollProvider from "@/components/SmoothScrollProvider/SmoothScrollProvider";

export default function Page() {
  return (
    <PageRoot>
      <SmoothScrollProvider />
      <Heading />
      <div
        style={{
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        Content
      </div>
    </PageRoot>
  );
}
