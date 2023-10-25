"use client";

import { Card, Text, Subtitle, Divider } from "@tremor/react";

export default function Home() {
  return (
    <main>
      <Card>
        <Text className="text-6xl font-bold text-center mb-10">
          Weather GPT
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, NextJS 13, TailwindCSS, Tremor 2.0 and More...
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394f68] to-[#183b7e]"></Card>
      </Card>
    </main>
  );
}
