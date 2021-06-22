import {GenresComponent} from "./genres-component";
import {AllFilmsComponent} from "./all-films-component";

export function RightContent() {
  return (
    <div className={'right-content'}>
      <div className="genres_content">
        <h3>Find Films By Genre</h3>
        <GenresComponent />
      </div>
      <AllFilmsComponent />
    </div>
  )
}