"use client";
import { TextGenerateEffect } from "../app/components/ui/text-generate-effect";
import { TextGenerateEffectTwo } from "./components/ui/text-generate-effectTwo";

const words = ` We believe in the power of energy to transform lives, enhance communities, advance human progress, and sustain our planet.
`;

export function TextGenerateEffectDemoTwo() {
  return <TextGenerateEffectTwo words={words} />;
}
