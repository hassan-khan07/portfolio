import { CopyButton } from "@/components/copy-button";

export function CopyEmailButton({ email }: { email: string }) {
  return <CopyButton value={email} label="Copy email" tone="dark" />;
}
