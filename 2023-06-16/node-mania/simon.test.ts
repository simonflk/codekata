// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(searchKFromEnd, RUN_TESTS);

type Node = {
  data: number;
  next: Node;
} | null;

function searchKFromEnd(linkedList: Node, k: number) {
  let lead = linkedList;
  let follow: Node = null;
  for (let i = 0; i < k; i++) {
    if (lead === null) return null;
    lead = lead.next;
  }

  follow = linkedList;
  while (lead != null) {
    lead = lead.next;
    follow = follow!.next;
  }
  return follow!.data;
}
