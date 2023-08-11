export function targetAsNode(e: EventTarget | null): Node | null {
  if (!e || !('nodeType' in e)) {
    return null;
  }
  return e as Node;
}
