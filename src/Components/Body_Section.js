import {LeftContent} from "./left-content/LeftContent";
import {RightContent} from "./right-content/RightContent";
import {FilmEdit} from "./film-edit-content/Film-edit";
import { Route} from "react-router-dom";

export function BodySection() {
  return (
    <section>
      <div className={'container'}>
        <main className={'main'}>
          <LeftContent />
          <Route  component={FilmEdit} path={'/film/'}/>
          <Route exact  component={RightContent} path={'/home'}  />
        </main>
      </div>
    </section>
  )
}