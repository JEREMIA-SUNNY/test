"use client";
import { TextGenerateEffect } from "../app/components/ui/text-generate-effect";

const words = `Our valued clientele belong to a wide spectrum of industries such as oil & gas, medical, industrial construction, HVAC, precision engineering, automotives, piping and valves, repair & overhaul, electronics & automation, marine, tool & die, etc. .
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
