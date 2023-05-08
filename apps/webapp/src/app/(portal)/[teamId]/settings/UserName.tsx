"use client";
import React, { useState } from "react";

import updateTeam from "@/app/fetch/teams/updateTeam";
import Header from "@/ui/Header";
import { Input } from "@/ui/Input/SimpleInput";
import CardFooter from "@/ui/CardFooter";
import Heading from "./Heading";
import { get } from "lodash";

const UserName = ({ teamSlug }: any) => {
  const parsedTeamData = JSON.parse(teamSlug);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState<any>(false);

  const parsedTeam = get(parsedTeamData, "0", "");
  const handleNameChange = () => {
    setLoading(true);
    const response: any = updateTeam({
      teamName: name,
      teamSlug: parsedTeam.slug,
      type: "updateName",
    });
    if (response) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-4 px-6 divide-y divide-gray-300 dark:divide-gray-700">
        <Header title={"General"} />
        <div className="pt-4">
          <Heading
            title={"Your Name"}
            description="This is the name that will be displayed for you on Formzillion."
          />
          <div className="flex items-center space-x-2 my-3">
            <Input
              type="text"
              className="border px-3 py-2 dark:bg-black dark:border-gray-800"
              defaultValue={parsedTeam.name}
              onChange={(e) => setName(e.target.value)}
              maxLength={40}
            />
          </div>
        </div>
      </div>
      <CardFooter
        title={"Please use 40 characters at maximum."}
        btnText={"Save"}
        onClick={handleNameChange}
        loading={loading}
      />
    </>
  );
};

export default UserName;