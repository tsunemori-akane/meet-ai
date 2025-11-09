import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { HomwView } from "@/modules/home/ui/views/home-view";
import { auth } from "@/lib/auth";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }
  return <HomwView></HomwView>;
};

export default Page;
