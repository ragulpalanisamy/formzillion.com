import React from "react";
import Image from "next/image";
import { startCase } from "lodash";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import { popularUseCases } from "./content/popularUseCases";

export default function PopularUseCases({ slug }: any) {
  const pageContent = popularUseCases.find(
    (content: any) => content.slug === slug
  );

  return (
    <div className="mt-20 py-6">
      <p className="text-2xl sm:text-5xl font-normal text-center">
        Popular {startCase(pageContent?.slug)} {" "}
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          use cases
        </span>
      </p>
      <div className="grid grid-cols-2 space-x-4 mt-2 items-center">
        <div className="">
          <Image
            src="/integrations/useCase.svg"
            alt="use-case"
            height={200}
            width={300}
            className="w-full object-contain"
          />
        </div>
        <div className="space-y-3 bg-gray-400/10 rounded-lg p-5">
          {pageContent?.points.map((point: any, idx: number) => (
            <div key={idx} className="text-gray-400 p-2 flex items-center">
              <CheckCircleIcon className="w-6 h-6 text-orange-600 mr-2" />
              <p className="w-full">{point.list}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
