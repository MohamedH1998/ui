import ElementNav from "@/components/element-nav";
import Button from "@/components/tactile-button";

export default function Home() {
  const githubLink =
    "https://github.com/MohamedH1998/ui/blob/main/src/components/tactile-button/index.tsx";
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <ElementNav githubLink={githubLink} />
      <Button />
    </div>
  );
}
