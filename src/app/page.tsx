import Heading from "@/components/Heading/Heading";
import PageRoot from "@/components/PageRoot/PageRoot";

export default function Page() {
  return (
    <PageRoot>
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
