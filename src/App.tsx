import { Suspense } from "react";
import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";
import { useAtom } from "jotai";
import { atomWithObservable } from "jotai/rxjs";

import "./styles.css";

const clickCountObservable = fromEvent(document, "click").pipe(
  scan((count) => count + 1, 0)
);

const clickCountAtom = atomWithObservable(() => clickCountObservable);

const ClickCounter = () => {
  const [clickCount] = useAtom(clickCountAtom);
  return <p>Click count: {clickCount}</p>;
};

export default function App() {
  return (
    <Suspense fallback="Waiting...">
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <ClickCounter />
      </div>
    </Suspense>
  );
}
