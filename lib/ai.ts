/**
 * Simple AI guard helpers.
 *
 * Behavior:
 * - Disabled unless both `USE_AI` is truthy and `OPENAI_API_KEY` is present.
 * - Expose helpers to check/require enablement and to run guarded code.
 * - No runtime dependency on the OpenAI SDK; you can wire it inside `withAI` usage.
 */

function truthyFlag(value: string | undefined): boolean {
  if (!value) return false;
  const v = value.trim().toLowerCase();
  return v === "1" || v === "true" || v === "yes" || v === "on";
}

export function isAIEnabled(): boolean {
  const hasKey = Boolean(process.env.OPENAI_API_KEY);
  const flag = truthyFlag(process.env.USE_AI);
  return hasKey && flag;
}

export function getAIDisabledReason(): string | null {
  const reasons: string[] = [];
  if (!truthyFlag(process.env.USE_AI)) reasons.push("Set USE_AI=true");
  if (!process.env.OPENAI_API_KEY) reasons.push("Missing OPENAI_API_KEY");
  if (reasons.length === 0) return null;
  return reasons.join(" and ");
}

export function assertAIEnabled(): void {
  if (!isAIEnabled()) {
    const msg = getAIDisabledReason() ?? "AI disabled";
    throw new Error(`AI is disabled: ${msg}`);
  }
}

export async function withAI<T>(fn: (ctx: { apiKey: string }) => Promise<T>): Promise<T> {
  assertAIEnabled();
  const apiKey = process.env.OPENAI_API_KEY as string;
  return fn({ apiKey });
}

export const AI = {
  enabled: isAIEnabled,
  reason: getAIDisabledReason,
  require: assertAIEnabled,
  with: withAI,
};

