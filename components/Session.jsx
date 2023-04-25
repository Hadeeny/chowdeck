import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const getSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export const session = getSession();
