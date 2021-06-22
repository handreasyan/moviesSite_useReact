import {LeftContent} from "./left-content/LeftContent";
import {RightContent} from "./right-content/RightContent";

export function BodySection() {
  return (
    <section>
      <div className={'container'}>
        <main className={'main'}>
          <LeftContent />
          <RightContent />
        </main>
      </div>
    </section>
  )
}