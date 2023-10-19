import RootLayout from "@/Layouts/RootLayout";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <main className="  ">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <RootLayout>
        <HomePage />
      </RootLayout>
      {/* </div> */}
    </main>
  );
}
