"use client";

import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
interface Props {}

const GitHubButton: React.FC<Props> = ({}) => {
  const supabase = createClientComponentClient<any>();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="text-center">
      <h1>Login with GitHub</h1>
      <button className="bg-gray-800 rounded-xl p-8" onClick={handleSignIn}>
        <Image alt="github logo" height={100} src={"/github-mark-white.svg"} width={100} />
      </button>
    </div>
  );
};

export default GitHubButton;
