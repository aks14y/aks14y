import DefaultLayout from "@/layout/DefaultLayout";
import Image from "next/image";
import notFound from "../assets/not_found.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Custom404() {
  const [counter, setCounter] = useState(10);
  const router = useRouter();

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <DefaultLayout>
      <div className="p-8 flex flex-wrap">
        <div className="lg:w-2/4 md:px-36 md:py-32">
          <div className="text-secondary text-center">
            <h4 className="text-xl">
              Oops! Looks like you&apos;re lost. Back Home in {counter}
            </h4>
            <Button
              className="mt-4 p-6 text-lg text-black bg-primary"
              as={Link}
              href="/"
            >
              Take Me Home
            </Button>
          </div>
        </div>
        <Image
          src={notFound}
          alt="404"
          className="lg:w-2/4 mt-16 h-1/2 lg:mt-0 w-auto "
        />
      </div>
    </DefaultLayout>
  );
}
