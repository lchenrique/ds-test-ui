import { QueryClient } from "@adopets/design-system";
import {} from "@adopets/tokens";

import { Navbar } from "@adopets/design-system";
import { Button } from "..";
import "./page.css";
const queryClient = new QueryClient();

export const Page = () => {
  return (
    <article className="bg-slate-100 ">
      <Navbar />
      <Button />
    </article>
  );
};
